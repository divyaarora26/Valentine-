const heartStage=document.getElementById("heartStage");
const question=document.getElementById("question");
const please=document.getElementById("please");
const letter=document.getElementById("letter");
const music=document.getElementById("music");

heartStage.onclick=()=>{
  heartStage.classList.add("fade-out");
  music.play();
  setTimeout(()=>{
    heartStage.classList.add("hidden");
    question.classList.remove("hidden");
  },900);
};

function yes(){
  question.classList.add("hidden");
  please.classList.add("hidden");
  letter.classList.remove("hidden");
  startRain();
}

function no(){
  question.classList.add("hidden");
  please.classList.remove("hidden");
}

function startRain(){
  setInterval(()=>{
    spawn("🌸","flowers");
    spawn("💕","hearts");
  },500);
}

function spawn(emoji,id){
  const el=document.createElement("div");
  el.className="fall";
  el.textContent=emoji;
  el.style.left=Math.random()*100+"vw";
  el.style.fontSize=16+Math.random()*20+"px";
  el.style.animationDuration=5+Math.random()*5+"s";
  document.getElementById(id).appendChild(el);
  setTimeout(()=>el.remove(),10000);
}
