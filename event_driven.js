var events=require('events'); 
var eventEmitter=new events.EventEmitter(); 
var connectHandler=function connected(s){ 
    console.log('its',s); 
} 
eventEmitter.on('data_received',function(name){ 
      console.log(name,"understood event driven"); 
}); 
eventEmitter.emit('data_received',"NOde"); 
eventEmitter.on('connection',connectHandler); 
eventEmitter.emit('connection',"simple solution"); 
console.log("program ended");