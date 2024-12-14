const cardDiv = document.getElementById("cardSection");
const input = document.getElementById("input");


// const API_KEY = https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-07&sortBy=publishedAt&apiKey=d0ab0d9c70444ce0a82b32ff8ef54bbe;
  

let search = () => {
 const apiKey =`https://newsapi.org/v2/top-headlines?sources=${input.value}&apiKey=5c85b2094c0b458cae3e2e396429b9a9`
 
    fetch(apiKey)
    .then((res) => res.json())
    .then((data) => {
      data.articles.map((e, i) => {
        console.log(e);
        cardDiv.innerHTML += `<div class="card" style="width: 18rem;">
            <img src=${e.urlToImage} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${e.title}</h5>
            <p class="card-text">${e.description}/p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};  











// const cardDiv = document.getElementById("cardSection");
// const input = document.getElementById("inputField");
  
// let search = () => {
//   const API_KEY = https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-07&sortBy=publishedAt&apiKey=d0ab0d9c70444ce0a82b32ff8ef54bbe;
//   fetch(API_KEY)
//     .then((res) => res.json())
//     .then((data) => {
//       data.articles.map((e, i) => {
//         console.log(e);
//         cardDiv.innerHTML += `<div class="card" style="width: 18rem;">
//             <img src=${e.urlToImage} class="card-img-top" alt="...">
//             <div class="card-body">
//             <h5 class="card-title">${e.title}</h5>
//             <p class="card-text">${e.description}/p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//             </div>`;
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };



