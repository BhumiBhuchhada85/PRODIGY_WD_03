let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#newbtn");
let msgcon=document.querySelector(".msgwin");
let msg=document.querySelector("#msg"); 

let turnO= true;
const win=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],
    [1,4,7],[2,5,8],[0,4,8],[2,4,6],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwin();
    });
});
const showwin=(winner)=>{
        msg.innerText=`Congrats winner is ${winner}`;
        msgcon.classList.remove("hide");
        diablebtn();
};
const diablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const checkwin=()=>{
    for(let patern of win){
        let posv1=boxes[patern[0]].innerText;
        let posv2=boxes[patern[1]].innerText;
        let posv3=boxes[patern[2]].innerText;
        if(posv1 !="" && posv2!="" && posv3!=""){
            if(posv1==posv2 && posv2==posv3){
                console.log("win",posv1);
                showwin(posv1);
            }
        }
    }
}
const resetgm=()=>{
    turnO=true;
    enablebtn(); 
    msgcon.classList.add("hide");  
}
newbtn.addEventListener("click",resetgm);
resetbtn.addEventListener("click",resetgm);