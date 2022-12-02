import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('24 December 2022 23:59:59 GMT-0300', '[data-time]')
const tempoParaOAnoNovo = new Countdown('31 December 2022 23:59:59 GMT-0300')


// setInterval(()=>{
//   const obj = tempoParaOAnoNovo.total
//   console.log(obj)
// }, 1000)

console.log(tempoParaOAnoNovo.total)
// const data = document.querySelectorAll('[data-time]')
// let obj = tempoParaOAnoNovo.total

//  class natalTimer{
//   constructor(dates, obj){
//     this.dates = dates
//     this.obj = obj
//   }
//   loopDates(){
//     for(const key in this.obj){
//       this.natalDate(key, this.obj[key])
//      }
//   }
//   natalDate(dataset, objTime){
//     this.dates.forEach(e => {
//       if(e.dataset.time === dataset){
//         e.textContent = +objTime
//       }
//   });
//   }
//   init(){
//     this.loopDates()
//     this.natalDate()
//   }
// }

// const natal2022 = new natalTimer(data, obj)
// natal2022.init()