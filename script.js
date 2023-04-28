const inp = document.getElementById("sec5");
const correctNumber = document.getElementById("sec2");
const correctText = document.getElementById("sec7");
// const score = document.querySelector(".box1");
// const highScore= document.querySelector(".box2");

const score=document.getElementById("sec4");
const highScore = document.getElementById("sec6")

const checkBtn = document.getElementById("but-check");
const newBtn =document.querySelector(".secb1");

const number = Math.trunc(Math.random()*20)+1;
let s=20;
let h=0;


checkBtn.addEventListener('click',function(){
    //console.log(inp.value)
    console.log(number)
    let num= Number(inp.value);
    if(num==number){
        correctText.textContent="You are correct";
        score.textContent=s;
        if(highScore.value==null){
            highScore.textContent=h;
        }
        else if(h<s){
            h=s;
            highScore.textContent=h;
        }
        correctNumber.textContent=number;


    }
    else if(num<number){
        correctText.textContent="Too low";
        s--;
        score.textContent=s;
        
    }
    else{
        correctText.textContent="Too high";
        s--;
        score.textContent=s;
    }
});