// Import necessary dependencies
"use client";
import Image from "next/image";
import { IoMdDownload } from "react-icons/io";
import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { RestoredImage } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

// Define the props interface for the UserAppImage component
interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  image: RestoredImage;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  publicUrl?: string;
  metadata?: string;
}

// Define the UserAppImage component
export function UserAppImage({
  image,
  aspectRatio = "portrait",
  width,
  height,
  publicUrl,
  metadata,
  className,
  ...props
}: AlbumArtworkProps) {
  // Define the downloadImage function
  const downloadImage = async (image: string) => {
    // Create a Supabase client
    const supabase = createClientComponentClient();

    // Download the image from the Supabase storage
    const { data, error } = await supabase.storage
      .from(process.env.NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_FOLDER)
      .download(
        `${process.env.NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_FOLDER_RESTORED}/${image}`
      );

    // If the download is successful, create a download link and trigger the download
    if (data) {
      var a = document.createElement("a");
      document.body.appendChild(a);
      let url = window.URL.createObjectURL(data);
      a.href = url;
      a.download = image;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  // Render the UserAppImage component
  return (
    <div className={cn("space-y-3", className)} {...props}>
      {/* Add a context menu */}
      <ContextMenu>
        {/* Add a trigger for the context menu */}
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md flex flex-row flex-wrap">
            {/* Render the image if publicUrl is available */}
            {publicUrl ? (
              <div className="relative">
                <Image
                  src={publicUrl + "/" + image.name}
                  alt={image.name}
                  width={width}
                  height={height}
                  className={cn(
                    "h-auto w-auto object-cover transition-all hover:scale-105",
                    aspectRatio === "portrait"
                      ? "aspect-[3/4]"
                      : "aspect-square"
                  )}
                />
                {/* Add a button to download the image */}
                <button onClick={() => downloadImage(image.name)} className="absolute top-1 right-1 text-gray-600 border border-white rounded bg-slate-50"><IoMdDownload /></button>
              </div>
            ) : null}
          </div>
        </ContextMenuTrigger>
        {/* Add content for the context menu */}
        <ContextMenuContent className="w-40">
          {/* Add context menu items */}
          {/* <ContextMenuItem>Add to Collection</ContextMenuItem> */}
          {/* <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Photos</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircleIcon className="mr-2 h-4 w-4" />
                New Collection
              </ContextMenuItem>
              <ContextMenuSeparator />
            </ContextMenuSubContent>
          </ContextMenuSub> */}
          {/* <ContextMenuSeparator /> */}
          {/* <ContextMenuItem>Delete</ContextMenuItem>
          <ContextMenuItem>Duplicate</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem> */}
          {/* <ContextMenuSeparator /> */}
          {/* Add a context menu item to download the image */}
          <ContextMenuItem onClick={() => downloadImage(image.name)}>
            Download
          </ContextMenuItem>
          {/* <ContextMenuSeparator /> */}
          {/* <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem> */}
        </ContextMenuContent>
      </ContextMenu>
      {/* <div className="space-y-1 text-sm">
        <p className="text-xs text-muted-foreground">{image.name}</p>
      </div> */}
    </div>
  );
}
