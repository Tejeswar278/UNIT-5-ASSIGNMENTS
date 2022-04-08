import  myimage from "./image.jpg";

import ("./index.css")


// image1.appendChild(myimage);
// 
// document.querySelector("#root1").append(image1);


document.querySelector("form").addEventListener("submit",fn1);

function fn1(event){
    event.preventDefault();
    var note  = document.querySelector("#root").value;
    console.log(note);
    document.querySelector("#root1").append(note);
    
    
}


function component(){
    const element = document.createElement("div");
    const myIcon = new Image();
    myIcon.src = myimage;
    element.appendChild(myIcon);
    return element;
}
document.body.appendChild(component());




