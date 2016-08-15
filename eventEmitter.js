"use strict"

//Steps
  //build constructor with object for every eventName
  // 'on' method: creates property that merely holds array of functions associated w/that eventName
  // 'trigger' method:  iterates over array of FNs created with 'on' & invokes them.

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
        cb.apply(null, rest); //invokes cb with arguments from rest
        // cb();
      })
    }
  }
}

const ee = new EventEmitter();

ee.on('change',()=>{console.log("Hello World!")});

ee.trigger('change');
