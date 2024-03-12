import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
// Extend the default NextRequest to include the image
interface NextRequestWithImage extends NextRequest {
  image: string;
}

export async function POST(req: NextRequestWithImage, res: NextResponse) {

  const { imageUrl } = await req.json();

  const supabase = createRouteHandlerClient({ cookies });

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (!session || error) new NextResponse("Unauthorized", { status: 500 });

  const startRestoreProcess = await fetch(
    "https://api.replicate.com/v1/predictions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
      },
      body: JSON.stringify({
        version:
          "9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3",
        input: {
          img: imageUrl,
          version: "v1.4",
          scale: 2,
        },
      }),
    }
  );

  const data = await startRestoreProcess.json();
  // console.log("Data", data);

  let endpointUrl = data.urls.get;
  // console.log("endpointUrl", endpointUrl);

  let restoredImage: string | null = null;
  while (!restoredImage) {
    console.log("Pooling...");
    let finalResponse = await fetch(endpointUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
      },
    });
    let jsonFinalResponse = await finalResponse.json();
    if (jsonFinalResponse.status === "succeeded") {
      restoredImage = jsonFinalResponse.output;
    } else if (jsonFinalResponse.status === "failed") {
      break;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    // console.log('Restored Image', restoredImage)
  }

  return NextResponse.json(
    { endpointUrl: endpointUrl ? endpointUrl : "Failed to restore Image." },
    { status: 200 }
  );
}

//   let jsonStartProcessResponse = await startRestoreProcess.json();
//   console.log('Start Restore Process', jsonStartProcessResponse)

//   let endpointUrl = jsonStartProcessResponse.urls.get;

//   let restoredImage: string | null = null;
//   while (!restoredImage) {
//     console.log('Pooling...')
//     let finalResponse = await fetch(endpointUrl, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Token " + process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
//       },
//     });
//     let jsonFinalResponse = await finalResponse.json();
//     if (jsonFinalResponse.status === "succeeded") {
//       restoredImage = jsonFinalResponse.output;
//     } else if (jsonFinalResponse.status === "failed") {
//       break;
//     } else {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//     }
//     // console.log('Restored Image', restoredImage)
//   }

//   return NextResponse.json({ data: restoredImage ? restoredImage : 'Failed to restore Image.' }, { status: 200 });
// }

//! API Super Resolution

// import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// import { NextRequest, NextResponse } from "next/server";
// import { cookies } from "next/headers";
// // Extend the default NextRequest to include the image
// interface NextRequestWithImage extends NextRequest {
//   image: string;
// }

// export async function POST(req: NextRequestWithImage, res: NextResponse) {

//   const { imageUrl } = await req.json();

//   const supabase = createRouteHandlerClient({ cookies });

//   const {
//     data: { session },
//     error,
//   } = await supabase.auth.getSession();

//   if (!session || error) new NextResponse("Unauthorized", { status: 500 });

//   const resp = await fetch('https://api.deepai.org/api/torch-srgan', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'api-key': process.env.NEXT_PUBLIC_SUPERRESOLUTION_API,
//     },
//     body: JSON.stringify({
//         image: imageUrl,
//     })
//   });

//   const data = await resp.json();
//   console.log(data);

//   return NextResponse.json({ data: data ? data : 'Failed to restore Image.' }, { status: 200 });
// }
