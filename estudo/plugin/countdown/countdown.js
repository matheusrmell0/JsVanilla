export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _actualDate() {
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate;
  }
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  }
  get total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}


// export default class Countdown {
//   constructor(futureDate, atribute) {
//     this.futureDate = futureDate;
//     this.atribute = atribute;
//   }
//   get _actualDate() {
//     return new Date();
//   }
//   get _futureDate() {
//     return new Date(this.futureDate);
//   }
//   get _timeStampDiff() {
//     return this._futureDate.getTime() - this._actualDate;
//   }
//   get days() {
//     return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
//   }
//   get hours() {
//     return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
//   }
//   get minutes() {
//     return Math.floor(this._timeStampDiff / (60 * 1000));
//   }
//   get seconds() {
//     return Math.floor(this._timeStampDiff / 1000);
//   }
//   get timerScreen(){
//     return document.querySelectorAll(this.atribute).forEach((e)=>{
//       for(const key in this.total){
//         if(e.dataset.time === key){
//           e.innerText = `${this.total[key]}`
//           if(+e.innerText < 10){
//             e.innerText = `0${this.total[key]}`
//           }
//         }
//       }
//     })
//   }
//   get InitTimerScreen(){
//     setInterval(this.timerScreen)
//   }
//   get total() {
//     const days = this.days;
//     const hours = this.hours % 24;
//     const minutes = this.minutes % 60;
//     const seconds = this.seconds % 60;
//     return {
//       days,
//       hours,
//       minutes,
//       seconds,
//     };
//   }
// }