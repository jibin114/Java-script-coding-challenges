//set intial count
let count = 0;

// select value and button
const value = document.querySelector('#value');
const btns=document.querySelectorAll(".btn");


btns.forEach((btn)=>{

btn.addEventListener("click",function(e)
    {
    const pointer=e.currentTarget.classList;
   if(pointer.contains("decrease"))
    {
       count--;
       console.log(count);

    }
   
    else if(pointer.contains("increase"))
    {
        count++;
        console.log(count);
    }
    else{
        count = 0;
    }
    if(count>0){
        value.style.color ="green";
    }
    if(count<0){
        value.style.color = "red";
    }
    if(count==0){
        value.style.color = "magenta";  
    }

    value.textContent=count;
    })
});