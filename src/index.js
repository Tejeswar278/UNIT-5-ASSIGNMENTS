document.querySelector("form").addEventListener("submit",fn1);

function fn1(event){
    event.preventDefault();
    var note  = document.querySelector("#root").value;
    console.log(note);
    document.querySelector("#root1").append(note);
}


