import { numeroAleatorio } from "./quadrado.js";

function area(raio) {
  return Math.PI * raio * raio;
}

function circunferencia(raio) {
  return Math.PI * raio * 2;
}

function aleatorio(){
  return numeroAleatorio();
}

const circuloMetodos = {
  area,
  circunferencia,
  aleatorio
};

export default circuloMetodos;