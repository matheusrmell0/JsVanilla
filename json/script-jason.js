// fetch("./dados.json")
// .then(r => r.json())
// .then(rJson => {
//   console.log(rJson)
//   rJson.forEach((materia)=>{
//     console.log(materia.aula);
//   })
// })
// 
  
// fetch("./dados.json")
// .then(r => r.text())
// .then(rText => {
//   const jsonFinal = JSON.parse(rText)
//   console.log(jsonFinal)
// })

// fetch("./dados.json")
// .then(r => r.text())
// .then(rText => {
//   const jsonFinal = JSON.parse(rText)
// })

// const configuracoes = {
//   player: "Google",
//   tempo: 25.5,
//   aula: "2.1 JavaScript",
// }
// const stringConfiguracoes = JSON.stringify(configuracoes)

// localStorage.config = JSON.stringify(configuracoes);
// console.log(JSON.parse(localStorage.config))
// 

// fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(r => r.json())
// .then(pokemon => {
//   console.log(pokemon);
// });
// 

// const url = 'https://jsonplaceholder.typicode.com/posts/';
// const options = {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
//   body: '{"title": "criandoNovoDado"}'
// }

// fetch(url, options)
// .then(response => response.json())
// .then(json => {
//   console.log(json);
// });

// // 

// const url2 = 'https://jsonplaceholder.typicode.com/posts/2/';
// const options2 = {
//   method: 'PUT',
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
//   body: '{"title": "alterandoDado"}'
// }

// fetch(url2, options2)
// .then(response => response.json())
// .then(json => {
//   console.log(json);
// });

// // 

// const url3 = 'https://jsonplaceholder.typicode.com/posts/3/';
// const options3 = {
//   method: 'DELETE',
// }

// fetch(url3, options3)
// .then(response => response.json())
// .then(json => {
//   console.log(json);
// });

// 

// const url4 = 'https://jsonplaceholder.typicode.com/posts/4/';
// const options4 = {
//   method: 'HEAD',
// }

// fetch(url4, options4)
// .then(response => {
//   console.log(response.headers.get("Content-Type"))
//   response.headers.forEach(console.log)
// });

// const url = 'https://cors-anywhere.herokuapp.com/https://https://www.instagram.com';

// fetch(url)
// .then(response => response.text())
// .then(responseText => console.log(responseText))