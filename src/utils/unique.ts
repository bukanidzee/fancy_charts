import {DateTime} from 'luxon';

export class Unique {

  static takenNames: string[] = []
  private takenDates: number[] = []
  private takenColors: string[] = []

  private options = {
    date: {
      func: this.getUniqueDate,
      arr: this.takenDates
    },

    text: {
      func: this.getUniqueString,
      arr: Unique.takenNames
    },

    color: {
      func: this.getUniqueColor,
      arr: this.takenColors
    },
  }

  constructor(alreadyTakenDates?:number[]){
    if (alreadyTakenDates){
      this.takenDates=alreadyTakenDates
    }
  }

  private getUniqueString(n:number = 10, charset?:string){
    let res = '';
    let chars =
      charset || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charLen = chars.length;

    for (let i = 0; i < n; i++) {
      res += chars.charAt(Math.floor(Math.random() * charLen));
    }

    return res;
  }

  private getUniqueDate(){
    const start = DateTime.local(2000, 1, 1).toMillis()
    const end = DateTime.local(2022, 9, 30).toMillis()
    const date = DateTime.fromMillis(Math.floor(start + Math.random()*(end-start)))
    return DateTime.fromObject({year: date.year,
                                month: date.month,
                                day: date.day}).toISODate()
  }

  private getUniqueColor() {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getUnique(type:'date' | 'text' | 'color', n?:number){
    while (true) {
      const result = this.options[type].func(n)
      const array: (string|number)[] = this.options[type].arr
      if (!array.find((x) => +x === +result)){
        array.push(result)
        return result
      }
    }
  }
}
