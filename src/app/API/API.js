// Call for the API
// Create a function the call the API

// export async function getAPI() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     return data;
// }

// function paginationBlocks(data, pageLength) {
//     var blocks = [];
//     for (var i = 0; i < data.length; i += pageLength) {
//         blocks.push(data.slice(i, i + pageLength));
//     }
//     return blocks;
// }

// export async function getPagedData() {
//     const data = await getAPI();
//     return paginationBlocks(data, 10);
// }

// Call for the API
// Create a function to call the API

export async function getAPI() {
  const res = await fetch(
    "https://raw.githubusercontent.com/teijo/iba-cocktails/master/recipes.json"
  );
  const data = await res.json();
  return data;
}

function paginationBlocks(data, pageLength) {
  var blocks = [];
  for (var i = 0; i < data.length; i += pageLength) {
    blocks.push(data.slice(i, i + pageLength));
  }
  return blocks;
}

export async function getPagedData() {
  const dataCocktails = await getAPI();
  return paginationBlocks(dataCocktails, 10);
}

// Get image cocktail from unsplash

export function getCocktailImageURL(cocktailName) {
  var baseURL = "https://source.unsplash.com/featured/?";
  var query = encodeURIComponent(cocktailName);
  return baseURL + query;
}
