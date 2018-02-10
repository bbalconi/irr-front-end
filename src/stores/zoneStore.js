import { extendObservable } from 'mobx';
//var axios = require('axios');

export default class ZoneStore {
  constructor() {
    extendObservable(this, {
      shifts: ['fe'],
      success: null,
      get retrieveShift() { //this used to have just this.shift but it didn't render. Mobx wants the data filtered?
      return this.shifts.map((s)=> {
          return s
        })
      }
    })
  }
}