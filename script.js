const title=document.getElementById("title");
title.innerText=" CALCULATOR TASK ";

const description=document.getElementById("description");
description.innerText="Create Calculator using DOM";

const one=document.getElementById("1").innerText="1";
const two=document.getElementById("2").innerText="2";
const three=document.getElementById("3").innerText="3";
const four=document.getElementById("4").innerText="4";
const five=document.getElementById("5").innerText="5";
const six=document.getElementById("6").innerText="6";
const seven=document.getElementById("7").innerText="7";
const eight=document.getElementById("8").innerText="8";
const nine=document.getElementById("9").innerText="9";
const zero=document.getElementById("0").innerText="0";
const doubleZero=document.getElementById("00").innerText="00";

//result function:
let result=document.getElementById("result");
function Number(value){
  result.value +=value; 
}
// clear button function:
function ClearResult(){
  result.value="";
}

// equal function:
function Equal(){
   try{
      result.value=eval(result.value); 
   }
   catch (error){
      result.value="error";
   }
}

//erase function:
function Erase(){
  result.value=result.value.slice(0,-1) ;
}
