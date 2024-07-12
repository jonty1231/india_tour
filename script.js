const nav=document.querySelector(".header")
const bars=document.querySelector(".bars")

const checkboxx=()=>{
nav.classList.toggle("shownav")
bars.classList.toggle("fa-xmark")
bars.classList.toggle("bar1")
}

const imgs=document.querySelectorAll(".slide_img")

let tempval=0

imgs.forEach((img,index)=>{
img.style.left=`${(index-tempval)*100}%  `

})
let tempdata=false

const changvall=()=>{
tempdata?tempval--:tempval++;

    if(tempval>=imgs.length-1){
        tempdata=true
    }
    if(tempval <=0 ){
       tempdata=false
    }
    
    imgs.forEach((img,index)=>{
        img.style.left=`${(index-tempval)*100}%  `
        
        }) 
}

setInterval(()=>{ 
 changvall()
},4000)

const counter=document.querySelectorAll(".counter")

let duration=500;


let boll=true;

const countshow=()=>{
    // console.log(scrollY)
   if(scrollY>=1484 && boll){
  
    counter.forEach((count)=>{
        let start=0
        let end= parseInt( count.getAttribute("data-val"));
        // console.log(start,end)
        let intervelvar=setInterval(() => {
            
           count.innerHTML=start;
          start++
          if(start>end){
            clearInterval(intervelvar)
        }
        }, duration/end *2);
         })
        
   boll=false
   } 
}







