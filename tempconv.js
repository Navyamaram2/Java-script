const textbox=document.getElementById("textbox");

const tofahernhit=document.getElementById("tofahernhit");
const tocelsius=document.getElementById("tocelsius");
const myresult=document.getElementById("myresult");
let temp;
function Convert(){
    if(tofahernhit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        myresult.textContent = temp.toFixed(1)+"F";

     }
    else if(tocelsius.checked){
        temp = Number(textbox.value);
        temp  = (temp - 32)* (5/9);
        myresult.textContent = temp.toFixed(1)+"C";

    }
    else{
        myresult.textContent = "select a unit";
    }
}