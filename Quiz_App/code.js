const minutes_get=document.getElementById('minutes');
const seconds_get=document.getElementById('seconds');

function setTime(){
const a= new Date();
const c=Math.round(a.getMinutes()/2);
const y=(c < 10) ? '0' + c : c;
const d=a.getSeconds()
const e=(d < 10) ? '0' + d : d;
minutes_get.innerHTML=y + ":";
seconds_get.innerHTML=e;
}
setInterval(setTime, 1000)



// const pass_ans=document.getElementById("listen_question");

// const question=["Which is Chennai’s oldest college?","Which is Chennai’s oldest college?","Which is Chennai’s oldest college?","In which country is there a natural gas pit nicknamed the ‘Door to Hell’ that has been on fire since 1971?","In 2013 which two airlines merged to become the world’s largest airline?"
//                  ,"Jaktogos went on sale in 2013. What are they?","Which celebrity was carried by their minders along the Great Wall of China?",
//                 "In 1976, Saigon changed its name to …?","Which country has more lakes than the rest of the world combined?","Which country has the world's highest waterfall?"];

// const question_sam=document.getElementById("ques_sam");
// pass_ans.addEventListener("click",()=>{
//    for(var i=0; i<question.length; i++){
//     question_sam.innerHTML=question[i];
//    }
// })





const pass_ans=document.getElementById("listen_question");

const question=["Which is Chennai’s oldest college?","Which is Chennai’s oldest college?","Which is Chennai’s oldest college?","In which country is there a natural gas pit nicknamed the ‘Door to Hell’ that has been on fire since 1971?","In 2013 which two airlines merged to become the world’s largest airline?"
                 ,"Jaktogos went on sale in 2013. What are they?","Which celebrity was carried by their minders along the Great Wall of China?",
                "In 1976, Saigon changed its name to …?","Which country has more lakes than the rest of the world combined?","Which country has the world's highest waterfall?"];

const question_sam=document.getElementById("ques_sam");
pass_ans.addEventListener("click",()=>{
   for(var i=0; i<question.length; i++){
    question_sam.innerHTML=question[i];
   }
})