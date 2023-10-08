//display to the screen
let display=document.getElementById("display");
function  press(numValue){
    if(display.value==0){
        display.value='';
    }
    display.value+=numValue;
    
}
//clear screen
function clearScreen(val){
    display.value=val
}
function backspace(){
    const space=display;
    display.value=space.value.substring(0,space.value.length-1);
}
//calculate function
function calculate(){
    if(display.value!=''){
    try{
        clearScreen(eval(display.value));
    }
    catch(err){
        clearScreen("Bad expression");
      
    }
}
}
//function for sin,cos,tan
function sine(){
    display.value=Math.sin(display.value*Math.PI /180);
}
function cos(){
    display.value=Math.cos(display.value*Math.PI /180);
}
function tan(){
    display.value=Math.tan(display.value*Math.PI /180);
}
function invsine(){
    display.value=Math.asin(display.value*(180/Math.PI) );
}
function invcos(){
    display.value=Math.acos(display.value*(180/Math.PI));
}
function invtan(){
    display.value=Math.atan(display.value*(180/Math.PI));
}
function ln(){
    display.value=Math.log(display.value);
}
function log(){
    display.value=Math.log10(display.value);
}
function percent(){
    display.value=(display.value/100);
}
function square(){
    display.value=Math.pow(display.value,2);
}
function cube(){
    display.value=Math.pow(display.value,3);
}
function sqrt(){
    display.value=Math.sqrt(display.value);
}
function plusminus(){
    var x=display;
     var y=x.value;
     y=y*-1;
     x.value=y;
}
function Exp(){
    display.value=Math.pow(10,display.value);
}
