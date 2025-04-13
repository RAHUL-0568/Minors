let BOXES = document.querySelectorAll(".box");
let rest=document.querySelector("#BUTTON");

turn0=true;

const winpattern =[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],

];

BOXES.forEach((BOXES) =>{
BOXES.addEventListener("click", ()=>{

console.log("button is clicked");
if(turn0===true){
    BOXES.innerText="0";
    turn0=false;

}else{
    BOXES.innerText="x";
    turn0=true;

}
BOXES.disabled=true;

} );


});
