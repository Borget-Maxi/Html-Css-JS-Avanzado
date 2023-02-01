//Funcionalidad Video 

let video = document.querySelector("#video");
let botPlay = document.querySelector(".play");
let botPausa= document.querySelector(".pausa");
let duracionVid=document.querySelector(".duracion");
let barProgre= document.querySelector(".progreso");
let barraRepro=document.querySelector(".barra");


botPlay.addEventListener("click", ()=>{
    
    duracionVid.innerHTML = `${video.duration.toFixed(2)}`
    video.play()
});

botPausa.addEventListener("click", ()=>{
    console.dir(botPausa)
    video.pause()
});



video.addEventListener('timeupdate', (updateProgreso)=>{
    
    const {duration, currentTime}=updateProgreso.srcElement
    const porcentaje = (currentTime / duration) * 100
    barProgre.style.width = porcentaje + "%"
})

barraRepro.addEventListener("click", (setProgreso)=>{
    let totalWidth = setProgreso.offsetWidth
    let progresoWidth = setProgreso.offsetX
    let cortar=(progresoWidth / totalWidth) * video.duration
    video.currentTime=cortar

})

//Fin funcionalidad del video

//Funcionalidad del juego

/*let depo1=document.querySelector(".depo1");
let depo2=document.querySelector(".depo2");
let depo3=document.querySelector(".depo3");
let img=document.querySelectorAll(".imagenes");
let reinicio=document.querySelector(".botReinicio");
let banderaArriba=false;*/

/*let i=0;*/



/*
for (let i = 0; i < img.length; i++) {
    
    img[i].addEventListener("dragstart", (evento)=>{
        console.dir(evento.target.src)
        let srcImg = evento.target.src
        evento.dataTransfer.setData("text", srcImg);
     })
     
     
}
    

    
    


depo1.addEventListener('dragover', (evento)=>{
    evento.preventDefault()
})


depo1.addEventListener("drop", (evento)=>{
    let infoSrc=evento.dataTransfer.getData("text");
    
    
    
    if (banderaArriba==false) {
        depo1.innerHTML=`<img src='${infoSrc}' width="276.608px" height="400px"/>`;
        
        img[0].classList.add("ocultar");
        evento.dataTransfer.clearData("text");
        banderaArriba != banderaArriba;
        
    }
}) 


depo2.addEventListener("dragover", (evento)=>{
    evento.preventDefault()
})




depo2.addEventListener("drop", (evento)=>{
    let infoSrc=evento.dataTransfer.getData("text");
        
        
        
    if (banderaArriba==false) {
        depo2.innerHTML=`<img src='${infoSrc}' width="276.608px" height="400px"/>`;
            
        img[1].classList.add("ocultar");
        evento.dataTransfer.clearData("text");
        banderaArriba != banderaArriba;
            
    }
}) 





depo3.addEventListener("dragover", (evento)=>{
    evento.preventDefault()
})


depo3.addEventListener("drop", (evento)=>{
    let infoSrc=evento.dataTransfer.getData("text");
        
        
        
    if (banderaArriba==false) {
        
        depo3.innerHTML=`<img src='${infoSrc}' width="276.608px" height="400px"/>`;
            
        img[2].classList.add("ocultar");
        evento.dataTransfer.clearData("text");
        banderaArriba != banderaArriba;
            
    }
}) 

reinicio.addEventListener("click", ()=>{
    window.location.reload()
})*/
    

    
    


