const inp = document.getElementById("sec5");
const correctNumber = document.getElementById("sec2");
const correctText = document.getElementById("sec7");
// const score = document.querySelector(".box1");
// const highScore= document.querySelector(".box2");

const score=document.getElementById("sec4");
const highScore = document.getElementById("sec6")

const checkBtn = document.getElementById("but-check");
const newBtn =document.querySelector(".secb1");


let number = Math.trunc(Math.random()*20)+1;
let s=20;
let h=0;


checkBtn.addEventListener('click',function(){
    //console.log(inp.value)
    console.log(number)
    let num= Number(inp.value);
    if(num==number){
        correctText.textContent="You are correct";
        score.textContent=s;
    
        if(h<s){
            h=s;
            highScore.textContent=h;
        }
        correctNumber.textContent=number;
        document.querySelector("body").style.backgroundColor='#60B347';

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
newBtn.addEventListener('click',function(){
    number = Math.trunc(Math.random()*20)+1;
    console.log(number);
    s=20;
    score.textContent=s;
    correctText.textContent="Start Guessing...";
    correctNumber.textContent="?";
    document.querySelector("body").style.backgroundColor='aqua';
    inp.value='';
})