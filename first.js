let gameseq = [];
let userseq = [];

let btns = ["yellow","red", "purple","green"]
let h2 = document.querySelector("h2");

let started = false;
let level = 0;
document.addEventListener("keypress" ,()=>{
    if(started == false)
      console.log("game started");
      started = true;


      levelup();
});

function btnflash(btn){
  btn.classList.add("flash");
  setTimeout(()=>{
    btn.classList.remove("flash")
  },150);
}

function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(()=>{
    btn.classList.remove("userflash")
  },150);
}
function levelup(){
    userseq = [];
    level++;
    h2.innerText = ` Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let ranbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
   btnflash(ranbtn);
}

 function checkAns(idx){
     if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
    setTimeout(levelup,1000);
}
     }else{
        h2.innerHTML = `<b> Ooops Sorry You Press Wrong Button <b>  <br/> <b> Your Score Was ${level} </b> <br/> Game Over Press any key to Start .`;
          document.querySelector("h2").style.color= "red";
         setTimeout(()=>{
             document.querySelector("h2").style.color = "white";
         },infinity);
  
          
          reset();
     }
 }
 function btnpress(){
    console.log(this);
    let btn  = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor)

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
    for(btn of allbtns){
        btn.addEventListener("click",btnpress)
}

function reset(){
  started = false;
  gameseq = [];   
  userseq = [];
  level = 0;
}























