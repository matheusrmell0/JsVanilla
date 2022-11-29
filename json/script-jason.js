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

// async function getDados() {
//   try {
//     const responseDados = await fetch("./dados.json");
//     const jsonDados = await responseDados.json();
//     document.body.innerText = jsonDados.aula;
//   } catch (erro) {
//     console.log(erro);
//     console.log('Teste')
//   }
// }
// getDados();

// async function getDados() {
//     const responseDados = fetch("./dados.json");
//     const responseClientes = fetch("./cliente.json");

//     const jsonDados = await (await responseDados).json();
//     const jsonClientes = await (await responseClientes).json();

//     console.log(jsonDados)
//     console.log(jsonClientes)
// }
// getDados();

// async function iniciarAsync() {
//   new Promise((r) => {
//     setTimeout(() => {
//       r(), 1000;
//     });
//   });
//   console.log('Depois de 1s')
// }
// iniciarAsync()

// async function asyncPromise(){
//   await new Promise(resolve =>{
//     setTimeout(()=>{
//       console.log('Depois de 1 segundo');
//       resolve();
//     }, 1000);
//   })
//   console.log('Acabou')
// }
// asyncPromise()

// window.history.pushState(null, null, 'sobre.html')

// const links = document.querySelectorAll("a");

// function handleClick(event) {
//   event.preventDefault();
//   fetchPage(event.target.href);
//   window.history.pushState(null, null, event.target.href)
// }

// async function fetchPage(target) {
//   document.querySelector('.content').innerHTML = 'Carregando...'
//   const pageResponse = await fetch(target);
//   const pageText = await pageResponse.text();
//   replaceContent(pageText);
// }

// function replaceContent(newText) {
//   const newHTML = document.createElement("div");
//   newHTML.innerHTML = newText;

//   const oldContent = document.querySelector(".content");
//   const newContent = newHTML.querySelector(".content");

//   oldContent.innerHTML = newContent.innerHTML;
//   document.title = newHTML.querySelector('title').innerText
// }

// window.addEventListener('popstate', ()=>{
//   fetchPage(window.location.pathname);
// })

// links.forEach((link) => {
//   link.addEventListener("click", handleClick);
// });

// window.history.pushState(obj, title, url)
// window.history.pushState(null, null, 'sobre.html')

//
// function fetchPageThen(url) {
//   fetch(url).then((r) => {
//     const pageResponse = r.text();
//     const pageText = pageResponse.then((r) => {
//       console.log(r);
//     });
//   });
// }
// fetchPageThen("https://pokeapi.co/api/v2/pokemon/ditto")

// async function fetchPageAwait(url) {
//   const pageResponse = await fetch(url);
//   const pageText = await pageResponse.text();
//   console.log(pageText);
// }
// fetchPageAwait("https://pokeapi.co/api/v2/pokemon/ditto")

// //

// window.history.pushState(null, null, "sobre.html");
// window.addEventListener("popstate", () => {
//   console.log("asdasd");
// });

//
// const events = ['click']
// const links = document.querySelectorAll(".links");
// links.forEach((link) => {
//   events.forEach((evento)=>{
//     link.addEventListener(evento, (event) => {
//       event.preventDefault()
//       fetchPageAwait(event.target.href)
//       window.history.pushState(null, null, event.target.href)
//     });
//   })
// });

// async function fetchPageAwait(url) {
//   document.querySelector('.content').innerHTML = 'Carregando...'
//   const pageResponse = await fetch(url);
//   const pageText = await pageResponse.text();
//   changeHTML(pageText)
// }

// function changeHTML(newHtml){
//   const div = document.createElement('div')
//   div.innerHTML = newHtml

//   const oldContent = document.querySelector('.content');
//   const newContent = div.querySelector('.content')
//   oldContent.innerHTML = newContent.innerHTML
//   document.title = div.querySelector('title').innerHTML
// }

// window.addEventListener('popstate', ()=>{
//   fetchPageAwait(window.location.pathname)
// })
// //

