export default class ValidarCpf{
  constructor(element){
    this.element = element
  }
  limpar(cpf){
    return cpf.replace(/\D/g, '')
  }
  construir(cpf){
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
  }
  formatar(cpf){
    const cpfLimpo = this.limpar(cpf)
    return this.construir(cpfLimpo)
  }
  validar(cpf){
   const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
   return (matchCpf && matchCpf[0] === cpf);
  }
  validarNaMudanca(cpfElement){
    if(this.validar(cpfElement.value)){
      cpfElement.value = this.formatar(cpfElement.value)
      cpfElement.style.borderColor = 'green'
    }else{
      cpfElement.style.borderColor = 'red'
      const span = document.createElement('span')
      span.innerText = 'CPF Invalido'
      span.style.color = 'red'
      span.style.fontSize = '0.875rem'
      console.log(cpfElement)
      cpfElement.parentElement.insertBefore(span, cpfElement.nextElementSibling)
    }
  }
  adicionarEvento(){
    this.element.addEventListener('change', () => {
      this.validarNaMudanca(this.element);
    })
  }
  init(){
    this.adicionarEvento()
    return this;
  }
}

// export default class TrueCPF{
//   constructor(element){
//     this.element = element
//   }
//   formartCPF(){
//     this.element.value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
//     this.element.addEventListener('change', () => {
//       const errorMsg = document.createElement('span') 
//       errorMsg.style.display = 'none'
//       if((this.element.value.match(/(?:\d{3}[\s.-]?){3}\d{2}/g)) && (this.element.value.match(/(?:\d{3}[\s.-]?){3}\d{2}/g))[0] === this.element.value){
//         this.element.nextElementSibling.style.display = 'none'
//         this.element.value = this.element.value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
//         this.element.style.borderColor ='#090'
//       } else{
//         setTimeout(()=>{
//         this.element.checkValidity() === false
//         this.element.style.borderColor = '#f00'
//         this.element.style.color = '#f00'
//         errorMsg.innerText = 'Incorreto'
//         this.element.parentElement.insertBefore(errorMsg, this.element.nextElementSibling)
//         this.element.nextElementSibling.style.display = 'block'
//         }, 0)
//         setTimeout(()=>{this.element.nextElementSibling.style.display = 'none'}, 2000)
//       }
//     }) 
//   }
// }







