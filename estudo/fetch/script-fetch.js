// const cep = document.querySelector('.conteudo')

// const doc = fetch('https://viacep.com.br/ws/01001000/json/')
// doc.then(docReturn => docReturn.json())
// .then((docReturnBody) =>{
//   console.log(docReturnBody)
// })
// console.log(doc)

// const style = fetch("./style.css");
// style
//   .then((itemStyle) => itemStyle.text())
//   .then((styleText) => {
//     const style = document.createElement('style')
//     style.innerHTML = styleText
//     document.querySelector('body').appendChild(style)
//   });
//

// const sobreHTML = fetch("./sobre.html");
// console.log(sobreHTML);

// sobreHTML
//   .then((response) => response.text())
//   .then((responseText) => {
//     console.log(responseText);
//   });

// function fetchResponseBodyText(address){
//   fetch(address)
//   .then((response) => response.text())
//   .then((responseText) => {
//     document.documentElement.innerHTML = responseText;
//   })
// }
// fetchResponseBodyText('./sobre.html')
//

// function fetchResponseBodyText(address){
//   fetch(address)
//     .then((r) => r.blob())
//     .then((rfinal) => {
//      const blobUrl = URL.createObjectURL(rfinal)
//      const imgDom = document.querySelector('img')
//      imgDom.src = blobUrl;
//     });
// }
// fetchResponseBodyText("./imagem.png");

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(r => {
//   const r2 = r.clone();
//   r2.json().then(rJason => console.log(rJason))
//   r.text().then(rText => console.log(rText))
// })
//

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(r => {
//   r.headers.forEach(console.log);
// })

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(r => {
//   console.log(r.type)
// })

// const input = document.getElementById("cep");
// const btn = document.querySelector(".button");
// const div = document.querySelector(".endereco");

// function cepShow(event) {
//   event.preventDefault();
//   const valor = input.value;
//   valor.split('-').join('')
//   function cepFound(cep) {
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//       .then((r) => r.text())
//       .then((r) => {
//         const newR = r
//           .split("{")
//           .join("")
//           .split('"')
//           .join("")
//           .split(",")
//           .join("<br>")
//           .split("}")
//           .join("");
//         div.innerHTML = newR;
//       });
//   }
//   cepFound(valor);
// }
// btn.addEventListener("click", cepShow);
// //

// const bitcoinDom = document.querySelector(".bitcoin");
// const realDom = document.querySelector(".bitcoinReal");

// function bitcoinPerDay() {
//   fetch("https://blockchain.info/ticker")
//     .then((r) => r.json())
//     .then((r) => {
//       bitcoinDom.innerHTML = `${r.BRL.buy}`;
//       realDom.innerHTML = `${Math.floor(r.BRL.buy)
//         .toLocaleString("pt-BR", {
//         style: "currency",
//         currency: "BRL",
//       })}`;
//     });
// }
// setInterval(bitcoinPerDay, 8.64e+7)
// bitcoinPerDay()

// //
// const jokeDom = document.querySelector(".joke");
// const btn2 = document.querySelector(".button2");

// btn2.addEventListener("click", (event) => {
//   event.preventDefault();
//   fetch("https://api.chucknorris.io/jokes/random")
//     .then((r) => r.json())
//     .then((r) => (jokeDom.innerHTML = r.value));
// });




