let index=0;
function changeColors(){
    let colors=["green","yellow","red","blue","magenta","brown"];
    if(index===5){
        index=0;
    }
   document.getElementsByTagName("body")[0].style.background=colors[index++];
}

