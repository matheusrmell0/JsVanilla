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
