"use strict"

class EventEmitter {
  constructor (){
    this.events = {};
  }

  on (eventName, callbackFn){
    if(this.events[eventName]){
      this.events[eventName].push(callbackFn);
    }else{
      this.events[eventName] = [callbackFn]
    }
  }

  trigger (eventName, ...rest){
    if(this.events[eventName]){
      this.events[eventName].forEach(cb =>{
        cb.apply(null, rest);
      })
    }
  }
}

const ee = new EventEmitter();

ee.on('change',()=>{console.log("Hello World!")});

ee.trigger('change');
