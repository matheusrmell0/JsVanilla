"use strict";

// var string = 'String';
// var idadeString = '24';
// var idade = 24;
// var nome = 'Matheus';
// var sobreNome = 'Mello';
// var time = "It's time"

// const nomeCompleto = `${nome} ${sobreNome}`;
// console.log(typeof nome);
//

// var total = 10 + 5 * 2 / 2 + 20;
// console.log(Boolean(35 === total))
//

// var nan = +'12 Ovos ' + 5;
// console.log(nan)
//

// var nan2 = '16 patos' - 15;
// console.log(nan2)
//

// var somar = +'200' + 50;
// console.log(somar)
//

// var incremento = 5;
// console.log(++incremento)
//

// var incremento2 = 5;
// var incrementoplus = ++incremento2;
// console.log(incrementoplus)
//

// var numero = '80';
// var unidade = 'kg';
// var peso = numero + unidade;
// var pesoPorDois = peso / 2;
// var pesoPorDoisCerto = `${+numero / 2} ${unidade}`;
// console.log(pesoPorDoisCerto);
//

// var initial = 0;
// let num = document.querySelector(".num");
// const button = document.getElementById("btn");

// function acress() {
//   initial++;
//   initial = initial++;
//   num.innerHTML = initial;
// }
// btn.addEventListener("click", acress);
//

// var minhaIdade = 24;
// var idadeIrmao = 29;
// if (minhaIdade > idadeIrmao) {
//   console.log("É maior");
// } else if (minhaIdade === idadeIrmao) {
//   console.log("É igual");
// } else {
//   console.log("É menor");
// }
//

// var idade = 24;
// switch (idade) {
//   case 24:
//     console.log("Eu");
//     break;
//   case 29:
//     console.log("Irmao");
//     break;
//   case 22:
//     console.log("Primo");
//     break;
//   default:
//     console.log("Pessoa desconhecida");
// }
//

// var expressao = 5 - 2 && 5 - " " && 5 - 2;
// console.log(expressao);
//

// var nome = "Andre";
// var Idade = 28;
// var possuiDoutorado = false;
// var empregoFuturo;
// var dinheiroNaConta = 0;
// console.log(!!nome, !!Idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)
//

// var brasil = 207;
// var china = 1340;
// var pais = 207;
// switch (pais) {
//   case 1340:
//     console.log("China");
//     break;
//   case 207:
//     console.log("Brasil");
//     break;
//   default:
//     console.log("Not found");
// }
//

// if ("Gato" === "gato" && 5 > 2) {
//   console.log("Verdadeiro");
// } else {
//   console.log("Falso");
// }
// Falso
//

// if ("Gato" === "gato" || 5 > 2) {
//   console.log("Gato" && "Cão");
// } else {
//   console.log("Falso");
// }
// "Cão"
//

//

// function imc(peso, altura) {
//   var imc = peso / altura ** 2;
//   return imc;
// }
// console.log(imc(80, 1.8));
// //

// function corFavorita(cor) {
//   if (cor === "azul") {
//     return "Eu  gosto do céu";
//   } else if (cor === "verde") {
//     return "Eu gosto de mato";
//   } else {
//     return "Cor não registrada";
//   }
// }
// console.log(corFavorita("verde"));
//

// addEventListener('click', function(){
// console.log('Clicou')
// });

// function clicou(){
//   console.log('Clicou especial')
// }
// addEventListener('click', clicou);

// addEventListener('click', () => {
//   console.log('Clicou super especial')
//   });
//

// function imc2(peso, altura) {
//   const imc = peso / altura ** 2;
//   console.log(+imc.toFixed());
// }
// imc2(84, 1.74)
//

// function terceiraIdade(idade) {
//   if (typeof idade !== "number") {
//     return "Preencha um número";
//   } else if (idade >= 60) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(terceiraIdade(60));
//

// function faltarVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Falta visitar ${totalPaises - paisesVisitados} países`;
// }
// console.log(faltarVisitar(50));
//

// var profissao = "Desingner";
// function dados() {
//   var nome = "André";
//   var idade = 28;
//   function outrosDados(){
//     var endereco = 'Rio de Janeiro';
//     var idade = 29;
//     return `${nome} ${idade} ${endereco} ${profissao}`;
//   }
//   return outrosDados();
// }
// console.log(dados());
//

// function verificarTruthy(valor) {
//   console.log(`${!!+valor}`);
//   // console.log(!!+valor);
// }
// verificarTruthy(1);

// function isTruthy(dado){
//   return !!dado;
// }
// console.log(isTruthy(0))
// //

// function perimetroQuadrado(perimetro) {
//   const perimetro4 = perimetro * 4;
//   return `${perimetro4} ${"cm"}`;
// }
// console.log(perimetroQuadrado(8));

// function perimetroQuadradoR(lado) {
//   return `${lado * 4} ${"cm"}`;
// }
// console.log(perimetroQuadradoR(3));

// //

// function nomeCompleto(nome, sobrenome) {
//   var nome = "Matheus";
//   var sobrenome = "Mello";
//   return `${nome} ${sobrenome}`;
// }
// console.log(nomeCompleto());

// function nomeCompletoR(nome, midname, sobrenome) {
//   return `${nome} ${midname} de ${sobrenome}`;
// }
// console.log(nomeCompletoR("Matheus", "Rodrigues", "Mello"));
// //

// function parNumber(number) {
//   var verificacao = (number / 2) % 1;
//   if (verificacao > 0) {
//     console.log("Impar");
//   } else {
//     console.log("Par");
//   }
// }
// parNumber(7);

// function isEven(numero) {
//   var modulo = numero % 2;
//   if (modulo !== 0) {
//     return console.log(false, numero, 'Não é par');
//   } else {
//     return console.log(true, numero, 'É par');
//   }
// }
// isEven(3928318);
// //

// function tipoArgumento(tipo) {
//   console.log(typeof tipo);
// }
// tipoArgumento("2");

// function tipoDeDado(dado){
//   return console.log(typeof dado);
// }
// tipoDeDado(+'99')
// //

// function nomeCompleto2() {
//   var nome = "Matheus";
//   var sobrenome = "Mello";
//   console.log(nome + " " + sobrenome);
// }
// window.addEventListener("scroll", nomeCompleto2);
// window.addEventListener("click", ()=>{console.log('Mello Matheus')});
// //

// function precisoVisitar(paiseisVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paiseisVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados, totalPaises) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }

// console.log(precisoVisitar(1));
// console.log(jaVisitei(20, 193));

// //
// var totalPaises2 = 193;
// function precisoVisitar2(paiseisVisitados2) {
//   return `Ainda faltam ${totalPaises2 - paiseisVisitados2} países para visitar`;
// }
// function jaVisitei2(paisesVisitados2) {
//   return `Já visitei ${paisesVisitados2} do total de ${totalPaises2} países`;
// }

// console.log(precisoVisitar2(10));
// console.log(jaVisitei2(203));
// //

// OBJETOOOOOOOOOOOOOOOOOO

// var quadrado = {
//   lados: 4,
//   area: function (lado) {
//     return lado * lado;
//   },
//   perimetro: function(lado){
//     return this.lados * lado;
//   }
// };
// console.log(quadrado.area(5));
// console.log(quadrado.perimetro(5));
//

// var quadrado = {
//   lados: 4,
//   area(lado) {
//     return lado * lado;
//   },
//   perimetro(lado){
//     return this.lados * lado;
//   }
// };
// console.log(quadrado.area(5));
// console.log(quadrado.perimetro(5));
// //

// var tabela = {
//   nome: "Mello",
//   idade: 23,
//   cor: "Branco",
//   dotagem: `${20} cm`,
//   circunferencia(){
//     return this.dotagem * Math.PI;
//   },
// };
// console.table(tabela);
// //

// var pessoal = {
//   idade: 24,
//   nome: "Matheus",
//   sobrenome: "Mello",
//   cor: "Branco",
//   formacao: "Engineer",
// };

// pessoal.nomeCompleto = function () {
//   return `${this.nome} ${this.sobrenome}`;
// };
// console.log(pessoal.nomeCompleto());
// //

// var carro = {
//   preco: 1000,
//   portas: 4,
//   marca: "Audi",
// };
// carro.preco = 3000;
// console.log(carro.preco);
// //

// var labrador = {
//   raca: "Labrador",
//   cor: "Preto",
//   idade: 10,
//   latir(pessoa) {
//     if (pessoa === "homem") {
//       return "Latir";
//     } else {
//       return "Nada";
//     }
//   },
// };
// console.log(labrador);
// //

// var string = 'String'
// console.log(string.length);
// console.log(string.repeat(2));
// console.log(string.search());
//

// LOOP
// var videoGames = ['Switch', 'PS5', 'XBOX'];
// var ultimoItem = videoGames.pop();
// console.log(ultimoItem);
// //

// for (let numero = 1; numero <= 10; numero++){
//   console.log(numero);
// }

// var i = 0;
// while(i < 100){
//   console.log(i);
//   i = i + 5;
// }

// var videoGames = ['Switch', 'PS5', 'XBOX', '3DS'];
// for(var i = 0; i < videoGames.length; i++){
//   console.log(videoGames[i]);
//   if(videoGames[i] === 'PS5'){
//     break;
//   }
// }
//

// let numero = 0;
// let maximo = 50;
// for (; numero < maximo; ) {
//   console.log(numero);
//   numero++;
// }
//

// var brasilCopa = [1959, 1962, 1970, 1994, 2002];
// for (var i = 0; i < brasilCopa.length; i++) {
//   console.log(`O Brasil ganhou a copa de ${brasilCopa[i]}`);
// }

// var frutas = ["Banana", "Maçã", "Pera", "Uva", 'Melancia'];
// for (var i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
//   if (frutas[i] === "Pera") {
//     break;
//   }
// }
// console.log(frutas[frutas.length - 1]);
//

// var numero = 20;
// numero += 5;
// console.log(numero);
// //

// var idade = 20;
// var naoPossuiDiabetes = true;

// var podeBeber;
// podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'sim' : 'nao';
// console.log(podeBeber);

// if (podeBeber === 'sim') {
//   console.log("Pode beber sim!");
// } else {
//   console.log("Não pode beber!");
// }
// //

// var idade = 15;
// var naoPossuiDiabetes = true;
// var podeBeber;
// podeBeber = (idade >= 18 && naoPossuiDiabetes) ? console.log('Pode beber sim') : console.log('Não pode beber!');
//

// var possuiFaculdade = true;
// if (possuiFaculdade) console.log("Possui faculdade");
// else console.log("Não possui faculdade");
//

// var scroll = 1000;
// scroll += 500;
// console.log(scroll);
// //

// var possuiCarro = true;
// var possuiCasa = true;
// var darCredito = (possuiCarro && possuiCasa);
// console.log(darCredito);
//

// // DOM
// const href = location.href;
// console.log(href);

// const url = document.baseURI;
// console.log(url);

// const ativo = document.querySelector(".ativo");
// console.log(ativo);

// const linguagem = navigator.language;
// console.log(linguagem);

// const altura = innerHeight;
// console.log(altura);

// const largura = innerWidth;
// console.log(largura);
//

// Constructor Functionnnnn

//
// function Carro(marcaAtribuida, precoAtribuido){
//   this.marca = marcaAtribuida;
//   this.preco = precoAtribuido;
// }

// class Carro {
//   constructor(marcaAtribuida, precoAtribuido, anoAtribuido) {
//     this.marca = marcaAtribuida;
//     this.preco = precoAtribuido;
//     this.ano = anoAtribuido;
//   }
// }
// const honda = new Carro('Honda', 2000, 2005);
// const fiat = new Carro('Fiat', 3000, 2007);

// console.log(honda, fiat)
// //

// class Carro {
//   constructor(marca, precoInicial, ano) {
//     const taxa = 1.2;
//     this.marcar = marca;
//     this.preco = precoInicial * taxa;
//     this.ano = ano;
//   }
// }
// const mazda = new Carro('Mazda', 10000, 2015);
// console.log(mazda.preco)
// //

// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     // document.querySelector(this.seletor).classList.add("ativar");
//     // const elementoSelecionado = this.element();
//     // elementoSelecionado.classList.add("ativo");
//     this.element().classList.add('ativo');
//     if (this.element().getElementsByClassName('ativo')) {
//       return "Classe adicionada com sucesso";
//     }
//   },
// };

// Dom.ativar()
// Dom.seletor = 'ul';
// Dom.ativar()
// //

// class Dom {
//   constructor(seletor, classeName) {
//     (this.seletor = seletor),
//       (this.class = classeName),
//       (this.element = function () {
//         return document.querySelector(seletor);
//       });
//     this.addClass = function () {
//       this.element().classList.add(classeName);
//       if (this.element().getElementsByClassName(classeName)) {
//         return `Classe ${classeName} adicionada com sucesso`;
//       }
//     };
//   }
// }

// const li = new Dom("li", "color-red");
// li.addClass();
// //

//
// const pessoa = {
//   nome: "Nome pessoa",
//   idade: 0,
//   andar() {
//     console.log(this.nome + " andou");
//   },
// };

// class Pessoa {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = +idade;
//     this.andar = function () {
//       return `${this.nome} de ${this.idade} anos ${"andou"}`;
//     };
//   }
// }
// const matheus = new Pessoa("Matheus", 23);
// const joao = new Pessoa("João", 20);
// const maria = new Pessoa("Maria", 25);
// const bruno = new Pessoa("Bruno", 15);
// //

//
//
// class Dom {
//   constructor(seletor, classe) {
//     this.nodeList = seletor;
//     this.classe = classe;
//     this.list = function () {
//       return document.querySelectorAll(seletor);
//     };
//     this.addClass = function () {
//       const lista = this.list();
//       lista.forEach((lista) => {
//         lista.classList.add(classe);
//       });
//     };
//     this.removeClass = function () {
//       const listaRemove = this.list();
//       listaRemove.forEach((item) => {
//         item.classList.remove(classe);
//       });
//     };
//   }
// }

// const a = new Dom("a", "nomeDaClasse");
// console.log(a.list(), a.addClass()), a.removeClass();
// //

// function logLivro(nome, ano, autor){
//   return {
//     nome: nome.toUpperCase(),
//     totalAnos: 2050 - ano,
//     frase: nome + ' ' + ano + ', por ' + autor,
//   };
// }
// const livroRetorno = logLivro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
// console.log(livroRetorno.frase);

/////////////////////////////////////////////////////

// const div = document.querySelector("#circ");
// if (10 > 8) {
//   function mudar(event) {
//     div.style.top = event.y + "px";
//     div.style.left = event.x + "px";
//     div.style.background = "#" + event.x;
//     div.style.background = "#" + event.y;
//   }
//   console.log(div);
// }
// window.addEventListener("mousemove", mudar);

// const imagens = Array.from(document.querySelectorAll("#galeria li img"));
// const principal = document.querySelector("#principal");
// imagens.forEach(galeriaClick);

// function galeriaClick(imagem) {
//   imagem.addEventListener("click", galeriaTrocar);
// }

// function galeriaTrocar(event) {
//   const target = event.currentTarget;
//   principal.src = target.src;
//   principal.setAttribute('alt', target.getAttribute('alt'));
// }

// // // // // // //

// const lista = ['Item', 'Algo', 'Stuff']
// for(let index = 0; index < imagens.length; index++){
//   // console.log(lista[index]);
// }

// lista.forEach(logar);

// function logar(item, index, array){
//   // console.log(array, index, item)
// }

// const links = document.querySelectorAll('nav a');

// function evento (item, link, array){
//   console.log(item.innerHTML)
// }
// links.forEach(evento)
// //

// const soma = document.querySelector("#addbutton");
// const zero = document.querySelector("#zero");
// const estoque = 10;

// if (soma) {
//   function handleClick() {
//     const total = Number(zero.innerText) + 1;
//     if (total < estoque) {
//       zero.innerText = total;
//     } else {
//       console.log("Não foi possível adicionar mais");
//       soma.innerText = "Is Over!";
//       soma.style.color = "red";
//       zero.style.color = "red";
//     }
//   }
// }
// if (soma) {
//   soma.addEventListener("click", handleClick);
// }

// //

// const button = document.querySelector(".button");
// const texto = document.querySelector(".texto");

// if (button) {
//   function toggle() {
//     texto.classList.toggle("ativar");
//   }
// }

// if (button) {
//   button.addEventListener("click", toggle);
// }

//

// const lista = ["JavaScript", "HTML", "CSS", "Pyton"];
// const body = document.querySelector("body");

// function adicionarBody(item) {
//   body.innerHTML += "<li>" + item + "</li>";
// }

// lista.forEach(adicionarBody);

// for (let i = 0; i < lista.length; i++){
//   body.innerHTML += '<li>' + lista[i] + '</li>';
// }

//

// const links = Array.from(document.querySelectorAll("nav a"));

//   function ativarLink(link) {
//     const href = link.href;
//     const url = document.location.href;
//     if (href === url) {
//       link.style.backgroundColor = 'black';
//       link.style.color = 'white';
//       link.style.padding = 3 + 'px';
//     }
//   }

// links.forEach(ativarLink);
//

// class Dom {
//   constructor(seletor, classe) {
//     const elementList = document.querySelectorAll(seletor);
//     this.nodeList = seletor;
//     this.classe = classe;

//     this.addClass = function () {
//       const lista = elementList;
//       lista.forEach((lista) => {
//         lista.classList.add(classe);
//       });
//       return `Classe: ${classe} adicionada`;
//     };
//     this.removeClass = function () {
//       const listaRemove = elementList;
//       listaRemove.forEach((item) => {
//         item.classList.remove(classe);
//       });
//       return `Classe: ${classe} removida`;
//     };
//   }
// }
// const listaItens = new Dom("a", "nomeDaClasse");
// //

// class Dom {
//   constructor(seletor) {
//     const elementList = document.querySelectorAll(seletor);
//     this.nodeList = seletor;

//     this.addClass = function (classe) {
//       const lista = elementList;
//       lista.forEach((lista) => {
//         lista.classList.add(classe);
//       });
//       return `Classe: ${classe} adicionada`;
//     };
//     this.removeClass = function (classe) {
//       const listaRemove = elementList;
//       listaRemove.forEach((item) => {
//         item.classList.remove(classe);
//       });
//       return `Classe: ${classe} removida`;
//     };
//   }
// }
// const listaItens = new Dom("a");
// //

// {
// class classAtribute {
//   constructor() {
//     this.Toogleclass = function (selector, addclass, delclass) {
//       const id = document.querySelectorAll(selector);
//       id.forEach((item) => {
//         item.classList.add(addclass);
//         item.classList.remove(delclass);
//         if (item.hasAttribute("class", addclass))
//           console.log(`Seletor: "${selector}" | Classe: "${addclass}" adicionada | Classe: "${delclass}" removida`);
//         else {console.log(`Erro: Seletor: "${selector}" | Classe a ser adicionada: "${addclass}" | Classe a ser removida: "${delclass}"`);}
//       });
//     };}}
// const classEdit = new classAtribute();
// }

// class AtribuirClasse {
//   constructor(nome) {
//     this.nome = nome;
//     const form = document.getElementById("formulario");
//     const campo = document.getElementById("campo");

//     form.addEventListener('submit', function(e) {
//       nome = campo.value;
//       e.preventDefault();
//   });
//     this.nomeClass = function () {
//       return document.querySelector(nome);
//     };
//     this.addClass = function () {
//       this.nomeClass().classList.add('CERTOO');
//     }
//   }
// }
// const test = new AtribuirClasse();

// class Dom {
//   constructor(seletor, classeName) {
//     const form = document.getElementById("formulario");
//     const campo = document.getElementById("campo");
//     form.addEventListener('submit', function(e) {
//       classeName = campo.value;
//       e.preventDefault();
//     });

//     (this.seletor = 'li'),
//       (this.class = classeName),
//       (this.element = function () {
//         return document.querySelector('li');
//       });
//     this.addClass = function () {
//       this.element().classList.add(classeName);
//       if (this.element().getElementsByClassName(classeName)) {
//         return `Classe ${classeName} adicionada com sucesso`;
//       }
//     };
//   }
// }
// const li = new Dom("li", "color-red");
// li.addClass();
// //

// SCRIPT PARA MUDAR CLASSES
// class ClassAtribute {
//   constructor() {
//     this.Toogleclass = function (selector, addclass, delclass) {
//       const id = document.querySelectorAll(selector);
//       id.forEach((item) => {
//         item.classList.add(addclass);
//         item.classList.remove(delclass);
//         if (item.hasAttribute("class", addclass))
//           console.log(`Seletor: "${selector}" | Classe: "${addclass}" adicionada | Classe: "${delclass}" removida`);
//         else console.log(`Erro: Seletor: "${selector}" | Classe a ser adicionada: "${addclass}" | Classe a ser removida: "${delclass}"`);
//       });
//     };
//   }
// }
// const plugginClass = new ClassAtribute();

// const form = document.getElementById("formulario");
// const selector = document.getElementById("selector");
// const className = document.getElementById("className");
// const classDelete = document.getElementById("classDelete");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const tag = selector.value;
//   const classe = className.value;
//   const delClasse = classDelete.value;
//   plugginClass.Toogleclass(tag, classe, delClasse)
//   return (`Seletor: "${tag}" | Classe: "${classe}" adicionada | Classe: "${delClasse}" removida`);
// });

// Prototypeeeeee
//

// function Construtor(numero1, numero2) {
//   this.numero = numero1;
//   this.numero2 = numero2;
//   this.somar = ()=>{return numero1 + numero2};
// }

// Construtor.prototype.andar = ()=>{return ' Andou'}

// const contrutorConst = new Construtor(1,2);
// //

// function Pessoa(nome, idade){
// this.nome = nome;
// this.idade = idade;
// }

// Pessoa.prototype.walk = function() {
//   return `${this.nome} de ${this.idade} anos caminhou`;
// }

// const mello = new Pessoa('Mello', 22)
//

// const pais = 'Brasil';
// const cidade = new String('Gv');
// pais.charAt(0);
// cidade.charAt(0);
// console.log(pais.toUpperCase());
// console.log(cidade.toUpperCase());
// //

// const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']
// console.log(listaAnimais)
// const arrayLi = document.querySelectorAll('li');
// console.log(arrayLi)
// console.log(Array.prototype.slice.call(arrayLi));

// console.log([1,2,3].slice()); //existe
// console.log([1,2,3].from()); //nao existe
// //Apenas os métodos do protótipo são herdados

// const Carro = {
//   marca: 'Ford',
//   preco: 2000,
//   andar(){
//     return true;
//   }
// }
// console.log(Carro); //Object.prototype()
// console.log(Carro.marca.toLocaleUpperCase()); //String.prototype()
// console.log(Carro.preco.toExponential()); //Number.prototype()
// console.log(Carro.andar()); //Boolean.prototype()
// console.log(Carro.andar); //Function.prototype()

// console.log(Carro.constructor.name);
// console.log(Carro.marca.constructor.name);
// console.log(Carro.preco.constructor.name);
// console.log(Carro.andar.constructor.name);
// console.log(Carro.andar().constructor.name);
// console.log(Carro.andar().constructor.name.constructor.name);
//

// function Pessoa(nome, sobrenome, idade){
//   this.nome = nome;
//   this.sobrenome = sobrenome;
//   this.idade = idade;
// }
// Pessoa.prototype.fullName = function (){
//   return this.nome + ' ' + this.sobrenome + ' ' + this.idade;
// }
// const mello = new Pessoa('Matheus', 'Mello', 24);
// console.log(mello.fullName())

// console.log(NodeList.prototype);
// // console.log(Object.getOwnPropertyNames(NodeList.prototype));
// // console.log(NodeList.constructor.name);
// console.log(HTMLCollection.prototype);
// // console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
// // console.log(HTMLCollection.constructor.name);
// console.log(Document.prototype);
// // console.log(Object.getOwnPropertyNames(Document.prototype));
// // console.log(Document.constructor.name);

// const li = document.querySelector('li');

// console.log(li.constructor);
// console.log(li.click.constructor);
// console.log(li.innerText.constructor);
// console.log(li.value.constructor);
// console.log(li.hidden.constructor);
// console.log(li.click(''));

// console.log(li.hidden.constructor.name.constructor.name)
//

// APIIIII
// console.log(typeof Array.fromX !== 'undefined')
// if(typeof Array.from !== 'undefined')
//   console.log('Existe');
//   else
//     console.log('Não existe');
// //

// console.log(String);
// console.log(Number);
// console.log(Math);
// console.log(Array);
// console.log(Function);
// //
// console.log(Window);
// console.log(window.history);
// console.log(Document);
// console.log(HTMLCollection);
// console.log(NodeList);

// if(typeof document.webkitFullscreenEnabled !== 'undefined')
//   console.log('Existe');
//   else
//     console.log('Não existe');
// //

//
// const transacoes = [
//   {
//     descricao: "Taxa do Pão",
//     valor: "R$ 39",
//   },
//   {
//     descricao: "Taxa do Mercado",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento do Cliente",
//     valor: "R$ 99",
//   },
//   {
//     descricao: "Taxa do Banco",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento do Cliente",
//     valor: "R$ 49",
//   },
// ];

// let taxaTotal = 0;
// let recebimentoTotal = 0;
// transacoes.forEach((item) => {
//   const numeroLimpo = +item.valor.split("R$")[1].trim();
//   if (item.descricao.slice(0, 4) === "Taxa") {
//     taxaTotal += numeroLimpo;
//   } else if (item.descricao.slice(0, 11) === "Recebimento") {
//     recebimentoTotal += +item.valor.replace("R$ ", "");
//   }
// });
// console.log(taxaTotal);
// console.log(recebimentoTotal);
// //

// const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
// const transportesArray = transportes.split(";");
// console.log(transportesArray);
// //

// const html = `<ul>
//                 <li><span>Sobre</span></li>
//                 <li><span>Produtos</span></li>
//                 <li><span>Contato</span></li>
//               </ul>`;
// const htmlNovo = html.split("span").join("a");
// console.log(htmlNovo);
// //

// const frase = "Melhor do ano!";
// const fraseLastChar = frase.slice(-1);
// console.log(fraseLastChar);
// //

// const transacoes2 = [
//   "Taxa do Banco",
//   "   TAXA DO PÂO",
//   "  taxa do mercado",
//   "depósito Bancário",
//   "TARIFA especial",
// ];
// let taxasTotais = 0;
// transacoes2.forEach((item) => {
//   if (item.toLowerCase().trim().slice(0, 4) === "taxa") {
//     ++taxasTotais;
//     console.log(taxasTotais);
//   }
// });
// //

// let valor = 48.53
// let valor2 = 44.53
// valor = valor.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
// valor2 = valor2.toLocaleString('en-US', {style:'currency', currency: 'USD'});
// console.log(valor)
// console.log(valor2)
// //

// let max = 2000;
// let min = 1050;
// const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNumber);
// //

// const numeros = "4, 5, 20, 8, 9";
// const arrayNumbers = numeros.split(", ");
// const numerMax = Math.max(...arrayNumbers);
// console.log(numerMax);
// //

//
// const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$ 200"];

// function limparPreco(preco) {
//   preco = +preco
//     .trim()
//     .toLocaleUpperCase()
//     .replace("R$ ", "")
//     .replace(",", ".");
//   preco = +preco.toFixed(2);
//   return preco;
// }

// let somaTotal = 0;
// listaPrecos.forEach((preco) => {
//   somaTotal += limparPreco(preco);
// });
// somaTotal = somaTotal.toLocaleString("pt-BR", {
//   style: "currency",
//   currency: "BRL",
// });
// console.log(somaTotal);
// //

//
// const obj ={
//   0: 'Mello',
//   1: 'Matheus',
//   2: 'Teste',
//   length: 3,
// }
// console.log(Array.from(obj))
//

// const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrao'];
// const comidasFirstIndex = comidas.shift();
// const comidasLastIndex = comidas.pop();

// comidas.unshift('Peixe', 'Batata');
// // comidas.splice(0, 0, 'Peixe', 'Batata');
// comidas.push('Arroz')
// // comidas.splice(comidas.length, 0, 'Arroz');

// console.log(comidasFirstIndex, comidasLastIndex)
// console.log(comidas)
// //

// const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// estudantes.sort()
// estudantes.reverse()
// console.log(estudantes);
// console.log(estudantes.includes('Joana'));
// console.log(estudantes.includes('Juliana'));
// //

// let html = `<section>
// <div>Sobre</div>
// <div>Produtos</div>
// <div>Contato</div>
// </section>`

// html = html.split("section").join("ul").split('div').join('li');
// console.log(html);
// //

// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// const carrosClone = carros.slice();
// carros.pop();
// console.log(carrosClone, carros)
//

// //
// const aulas = [
//   {
//     nome: 'HTML',
//     min: 15,
//   },
//   {
//     nome: 'CSS',
//     min: 25,
//   },
//   {
//     nome: 'JavaScript',
//     min: 55,
//   },
//   {
//     nome: 'Ruby',
//     min: 45,
//   },
//   {
//     nome: 'Python',
//     min: 40,
//   },
// ]

// const nameItem = object => object.nome;
// const arrayNomeAulas = aulas.map(nameItem);
// console.log(arrayNomeAulas);
// //

//
// const numbers = [10, 25, 30];
// const reduceNumbers = numbers.reduce((acumulador, item, index, array) => {
//   console.log(acumulador, item, index);
//   return acumulador + item;
// }, 100)
// console.log(reduceNumbers);
// //

// const numbers = [10, 25, 30];
// const reduceNumbers = numbers.reduce((acumulador, item) => {
//   return acumulador + item;
// }, 0)
// console.log(reduceNumbers);
// //

// const numbers = [10, 25, 30, 3, 54, 33, 22];
// const highNumber = numbers.reduce(
//   (anterior, atual) => (anterior < atual ? atual : anterior),
//   0
// );
// console.log(highNumber);
// //

// const maiorNumero = numbers.reduce((anterior, atual) => {
//   if (anterior > atual) return anterior;
//   else return atual;
// }, 0);
// console.log(maiorNumero);

// const aulas = [
//   {
//     nome: 'HTML',
//     min: 15,
//   },
//   {
//     nome: 'CSS',
//     min: 25,
//   },
//   {
//     nome: 'JavaScript',
//     min: 55,
//   },
//   {
//     nome: 'Ruby',
//     min: 45,
//   },
//   {
//     nome: 'Python',
//     min: 40,
//   },
// ]

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.nome
//   return acumulador;
// }, {})
// console.log(listaAulas);

// const listaMin = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.min
//   return acumulador;
// }, {})
// console.log(listaMin);
//

// const frutas = ['Banana', 'Pêra', 0, 'Uva'];
// // const temUva = frutas.some((item)=>{
// //   return item === 'Uva';
// // });

// const every = frutas.every((item)=>{
//   console.log(item);
//   return item;
// });

// // console.log(temUva);
// console.log(every);
// //

// const numeros = [10, 223, 22, 65, 12, 55, 12, 76];
// const maiorQue = numeros.every(n => n >= 10);
// console.log(maiorQue)
// //
//
// const frutas = ['Banana', 'Pêra', 0, 'Uvas'];
// const indexUva = frutas.findIndex(item =>{
//   return item === 'Uvas'
// });
// console.log(indexUva)
//

// const frutas = ['Banana', undefined, null, 'Pêra', 0, 'Uva', NaN, 'Maçã', ''];
// const arrayFrutas = frutas.filter((item)=>{
//   return item;
// });
// console.log(arrayFrutas)
//

// const numeros = [6, 112, 4, 21, 2321, 102, 45 ,206, '46'];
// const buscarMaior45 = numeros.filter(x => x >= 45);
// console.log(buscarMaior45);
//

// const aulas = [
//   {
//     nome: 'HTML',
//     min: 15,
//   },
//   {
//     nome: 'CSS',
//     min: 25,
//   },
//   {
//     nome: 'JavaScript',
//     min: 55,
//   },
//   {
//     nome: 'Ruby',
//     min: 10,
//   },
//   {
//     nome: 'Python',
//     min: 40,
//   },
// ]

// const maiores15 = aulas.filter(aula => aula.min >= 15);
// console.log(maiores15);
// //

//
// const listaCursos = Array.from(document.querySelectorAll('.curso'));
// const cursoObjeto = listaCursos.map((curso)=>{
//   const titulo = curso.querySelector('.curso h1').innerText;
//   const descricao = curso.querySelector('.curso h1').nextElementSibling.innerText;
//   const aulas = +curso.querySelector('.curso .aulas').innerText;
//   const horas = +curso.querySelector('.curso .horas').innerText;
// return {
//   titulo,
//   descricao,
//   aulas,
//   horas,
// // titulo: curso.querySelector('.curso h1').innerText,
// // descricao: curso.querySelector('.curso h1').nextElementSibling.innerText,
// // aulas: +curso.querySelector('.curso .aulas').innerText,
// // horas: +curso.querySelector('.curso .horas').innerText,
// }
// });
// console.log(cursoObjeto);
// //

// const numeros = [3, 44, 333, 23, 122, 322, 33];
// const numerosMaior100 = numeros.filter((numero)=>{
//   return numero > 100;
// });
// console.log(numerosMaior100)
// //

// const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
// const incrementosVerificar = instrumentos.includes('Baixo');
// const possuiBaixo = instrumentos.some((item)=> item === 'Baixo');
// console.log(incrementosVerificar, possuiBaixo);
// //

//
// const produto = { nome: "Aveia", preco: "R$ 3,99" };
// const compras = [
//   {
//     item: "Banana",
//     preco: "R$ 4,99",
//   },
//   {
//     item: produto.nome,
//     preco: produto.preco,
//   },
//   {
//     item: "Ovo",
//     preco: "R$ 2,99",
//   },
//   {
//     item: "Carne",
//     preco: "R$ 25,49",
//   },
//   {
//     item: "Refrigerante",
//     preco: "R$ 5,35",
//   },
//   {
//     item: "Quejo",
//     preco: "R$ 10,60",
//   },
//   {
//     item: "Arroz",
//     preco: "R$ 5,50",
//   },
//   {
//     item: "Frango",
//     preco: "R$ 12,50",
//   },
// ];

// let precoTotal = 0;
// const valorTotal = compras.map((objeto) => {
//   const preco = +objeto.preco.replace("R$ ", "").replace(",", ".");
//   precoTotal += preco;
// });
// precoTotal = precoTotal.toLocaleString("pt-BR", {
//   style: "currency",
//   currency: "BRL",
// });
// console.log(precoTotal);

// //
// const comprasTotal = compras.reduce((zero, item) =>{
// const preco = +item.preco.replace("R$ ", "").replace(",", ".");
// return zero + preco;
// }, 0);
// const valorfinal = comprasTotal.toLocaleString('pt-BR', {style: "currency", currency: 'BRL'});
// console.log(valorfinal);
//

// const perimetro = new Function('lado', 'return lado * 4');
// console.log(perimetro(5));
// //

// function somar(n1 , n2){
//   return n1 + n2 + ' 2';
// }
// console.log(typeof(somar(3,3)));

// function somar(n1 , n2){
//   return n1 + n2;
// }
// console.log(somar.name)

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pêra'];

// carros.forEach.call(frutas, (item)=>{console.log(item)});
//

// class Dom {
//   constructor(seletor) {
//     this.element = document.querySelector(seletor);
//   }
// }
// Dom.prototype.ativo = function(classe){
//   this.element.classList.add(classe)
// }
// const h1 = {
//   element: document.querySelector('h1'),
// }
// const classeSelecionar = new Dom('section');
// classeSelecionar.ativo.call(h1, 'ativo');
// console.log(classeSelecionar.ativo('ativo'))
// console.log(classeSelecionar.element)
//

// const h1 = {
//   element: document.querySelector('h1'),
// }
// class Dom {
//   constructor(seletor) {
//     this.element = document.querySelector(seletor);
//   }
// }
// Dom.prototype.ativo = function(classe){
//   this.element.classList.add(classe)
// }
// Dom.prototype.ativo.call(h1, 'ativado!');
// //
// console.log(document.querySelector('h1'))
// //

// const frutas = ['Uva', 'Banana', 'Maçã'];
// console.log(frutas)

// Array.prototype.mostrarThis = function(){
//   console.log(this)
// }
// Array.prototype.pop.call(frutas);
//

// const span = document.querySelectorAll('span');
// const filtro = Array.prototype.filter.call(span, (item) =>{
//   return item.classList.contains('aulas');
// })

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pêra'];

// const arrayLike = {
//   0: "Item1",
//   1: "Item2",
//   2: "Item3",
//   3: "Item4",
//   4: "Item5",
//   length: 5,
// };
// // Object.prototype.mostrarThis = function (){
// //   console.log(this)
// // }
// // Array.prototype.pop.call(arrayLike);

// const filtro = Array.prototype.filter.call(arrayLike, (item) => {
//   return item === 'Item3';
// });

// const numeros = [33, 23, 131, 12545, 12, 29912, 22145];
// const mathCall = Math.max.call(null, 33, 23, 131, 12545, 12, 29912, 22145);
// const mathApply = Math.max.apply(null, numeros);
// console.log(mathCall, mathApply)

// const section = document.querySelectorAll('section');
// function itemPossuiAtivo(item){
//   return item.classList.contains('ativo');
// }

// const filtro1 = Array.prototype.filter.call(section, itemPossuiAtivo);
// const filtro2 = Array.prototype.filter.apply(section, [itemPossuiAtivo]);
// console.log(filtro1, filtro2)
// //

// const $ = document.querySelectorAll.bind(document);
// console.log($, $('section'));

// const carro ={
//   marca: 'Ford',
//   ano: 2018,
//   acelerar: function(aceleracao, tempo){
//     return `${this.marca} acelerou ${aceleracao}km em ${tempo}s`;
//   }
// };

// const honda = {
//   marca: 'Honda',
// };
// const tesla = {
//   marca: 'Tesla',
// };
// const fiat = {
//   marca: 'Fiat',
// };

// const acelerarHonda = carro.acelerar.bind(honda);
// const acelerarHondaCall = carro.acelerar.call(tesla, 130, 22);
// const acelerarHondaApply = carro.acelerar.apply(fiat,[20, 50]);
// console.log(acelerarHonda(200, 30));
// console.log(acelerarHondaCall);
// console.log(acelerarHondaApply)
// //

// function imc(altura, peso){
//   return peso / (altura * altura);
// };

// const imc180 = imc.bind(null, 1.80);
// const iMc = imc(1.80, 70);
// const iMc180 = imc180(70);

// console.log(iMc.toFixed(2), iMc180.toFixed(2));
// //

// const p = document.querySelectorAll("p");
// const totalCaracteres = Array.prototype.reduce.call(p, (zero, item) => {
//   const itemString = (this.item = item.innerText);
//   return itemString.length + zero;
// }, 0);

// console.log(totalCaracteres);
// //

// function getElement(tag, classe, conteudo){
//   const tagHTMML = document.createElement(tag);
//   classe ? tagHTMML.classList.add(classe) : null;
//   conteudo ? tagHTMML.innerHTML = conteudo : null;
//   return tagHTMML;
//  };

// console.log(getElement('p','font-xxl','Teste'));
// //

// const getElementObj = {
//   tag: 'div',
//   classe: 'titulo',
//   id: function getElement(tag, classe, conteudo){
//     const tagHTMML = document.createElement(tag);
//     classe ? tagHTMML.classList.add(classe) : null;
//     conteudo ? tagHTMML.innerHTML = conteudo : null;
//     return tagHTMML;
//    },
// }

// const getElementNewApply = getElementObj.id('div', 'container', 'Teste')
// console.log(getElementNewApply)

// const getElementNew = getElement.bind(null, 'h1', 'titulo');
// console.log(getElementNew('Teste de Bind'));
// //

// const carro = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this; // Retornando ao objeto inteiro (typeof = Object)
//   },
//   acelerar() {
//     return this.marca + " acelerou";
//   },
//   buzinar() {
//     return this.marca + " buzinou";
//   }
// };

// const honda = Object.create(carro).init('Honda');;
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');;
// console.log(ferrari.acelerar());

// // const honda = Object.create(carro);
// // honda.marca = "Honda";
// // console.log(honda.acelerar());
// // console.log(carro.acelerar());
//

// const funcaoAutomovel = {
//   acelerar(){
//     return this.marca + ' acelerou';
//   },
//   buzinar(){
//     return ' buzinou'
//   },
//   init(valor){
//     this.marca = valor;
//   }
// }

// const moto = {
//   marca: this.marca,
//   rodas: 2,
//   capacete: true,
// }

// Object.assign(moto, funcaoAutomovel).init('GPG');
// console.log(moto.acelerar());
// //

// const moto = {};
// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false,
//     writable: false,
//   },
//   capacete: {
//     value: true,
//     configurable: false,
//     writable: true,
//   },
// });
// moto.capacete = false;
// // delete moto.capacete;
// console.log(moto);

// const moto = {};

// Object.defineProperties(moto, {
//   rodas: {
//     get(){
// return this._rodas
//     },
//     set(valor){
// this._rodas = valor * 4 + ' total rodas';
//     }
//   }
// });

// console.log(moto.rodas = 4);
// console.log(moto.rodas);
// //

// console.log(Object.getOwnPropertyDescriptors(Array));
// console.log(Object.getOwnPropertyDescriptors(Array.prototype));
// console.log(Object.getOwnPropertyDescriptors(window));
//

// const moto = {};

// Object.defineProperties(moto, {
//   rodas: {
//     enumerable: true,
//     get(){
// return this._rodas
//     },
//     set(valor){
// this._rodas = valor * 4 + ' total rodas';
//     }
//   }
// });

// console.log(Object.keys(moto));
// console.log(Object.values(moto));
// console.log(Object.entries(moto));
// //

// console.log(Object.getOwnPropertyNames(Array)) //Puxa os enumerable: false
// console.log(Object.getOwnPropertyNames(Array.prototype)) //Puxa os enumerable: false

// const frutas = ['Banana']

// console.log(Object.getPrototypeOf(frutas));
// console.log(Object.getPrototypeOf('frutas'));

// const frutas1 = ['Banana', 'Melao'];
// const frutas2 = ['Banana', 'Melao'];
// const novasFrutas = frutas1;

// console.log(Object.is(frutas1, frutas2));
// console.log(Object.is(frutas1, novasFrutas));

// const carro ={
//   marca: 'Ford',
//   ano: 2022,
// }

// Object.freeze(carro);
// Object.seal(carro);
// Object.preventExtensions(carro);

// console.log(carro);
// console.log(Object.isFrozen(carro));
// console.log(Object.isSealed(carro));
// console.log(Object.isExtensible(carro));
//

// const frutas = ['Banana', 'Perâ'];
// console.log(frutas.hasOwnProperty('map'));
// console.log(Array.prototype.hasOwnProperty('map'));
// console.log(Array.prototype.isPrototypeOf(frutas));
// console.log(frutas.toString());
// console.log(Object.prototype.toString.call(frutas));
//

//
// function thisDadoIs(dado) {
//   return Object.prototype.toString.call(dado);
// }
// console.log(thisDadoIs(""));
// //

// const quadrado = {};
// Object.defineProperties(quadrado, {
//   lados: {
//     configurable: false, // Default
//     writable: false, // Default
//     enumerable: true, // Not default
//     value: 4,
//   },
//   ladosQuadrado: function (comp){
//     area = comp * lados.value;
//     return area;
//   }
// });
// console.log(quadrado);
// // console.log(Object.prototype.toString.call(quadrado.ladosQuadrado))

// const configuracao = {
//   width: 800,
//   height: 600,
//   background: '#333',
// }
// Object.freeze(configuracao);
// //

// console.log(Object.getOwnPropertyDescriptors(String));
// console.log(Object.getOwnPropertyDescriptors(Array));
// console.log(Object.getOwnPropertyNames(String.prototype));
// console.log(Object.getOwnPropertyNames(Array.prototype));
// //

// DOMMMM
// // Outside-Click
// export default function outsideClick(item, events, callBack) {
//   const outside = "data-outside";
//   const htmlPage = document.documentElement;

//   if (!item.hasAttribute(outside)) {
//     events.forEach(userEvent =>{
//       htmlPage.addEventListener(userEvent, closedMenu);
//     });
//     item.setAttribute(outside, "");
//   }

//   function closedMenu(event) {
//     if (!item.contains(event.target)) {
//       item.removeAttribute(outside);
//       events.forEach(userEvent =>{
//         htmlPage.removeEventListener(userEvent, closedMenu);
//       });
//       callBack();
//     }
//   }
// }
//

// settimeOuttttt
// function espera(texto) {
//   console.log(texto);
// }
// setTimeout(espera, 3000, "Texto depois de 3s");
// //
// setTimeout(() => {
//   console.log("Texto depois de 2s");
// }, 2000);

// for(let i = 0; i <= 10; i++){
//   setTimeout(()=>{
// console.log(i)
//   }, 1000 * i);
// }
// //

// const button = document.querySelector('button');
// function click(){
// setTimeout(()=>{
//   this.classList.add('ativo');
//   console.log(this);
// }, 1000)};
// button.addEventListener('click', click);
// //

// const button = document.querySelector('button');
// function click(){
// setInterval(()=>{
//   this.classList.add('ativo');
//   console.log(this);
// }, 1000)};
// button.addEventListener('click', click);
// //

// let s = 0;
// setInterval((time)=>{
//   console.log('Passou', s++,time);
// }, 1000, 'segundos');
//

// let i = 0;

// const segundos = setInterval((time)=>{
//   console.log('Passou', i++,time);
//   if(i > 10){
//     clearInterval(segundos)
//     }
// }, 1000, 'segundos');
// //

// let i = 0;
// const body = document.querySelector("body");
// function bodyColorChange(item) {
//   for(let i = 0; i <= 20; i++){setTimeout(() => {
//     if(i % 2 === 0){
//     item.style.background = "red";
//   } else{
//     item.style.background = "blue";
//   }
//   }, 2000 * i)};
// }
// bodyColorChange(body);
// // 

// const btn = document.querySelector('button');
// function eventsList(eventT){
//   ['click'].forEach((event)=>{
//     btn.addEventListener(event, eventT)
//   });
// }
// eventsList(timeOn);

// function timeOn(){
//   let i = 0;
//   const cronomet = setInterval((time)=>{
//     console.log('Passou', i++,time);
//   }, 1000, 'segundos');
//   function timeOut(){
//     setTimeout(cronomet);
//    };   
//    const button = document.querySelector('button');
//    button.addEventListener('dblclick', timeOut);
// };
// 

// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const text = document.querySelector('.tempo');

// iniciar.addEventListener('click', iniciarTempo);
// pausar.addEventListener('click', pausarTempo);
// pausar.addEventListener('dblclick', resetarTempo);

// let i = 0;
// let timer;

// function iniciarTempo(){
// timer = setInterval(()=>{
//   text.innerText = i++;
// }, 100);
// iniciar.setAttribute('disabled', '')
// }

// function pausarTempo(){
//   clearInterval(timer);
//   iniciar.removeAttribute('disabled')
// }

// function resetarTempo(){
//   text.innerText = 0;
//   i = 0;
// }
// // 