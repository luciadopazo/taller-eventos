function mostrarAlerta() {
    alert("Hola!");
    event.stopImmediatePropagation();
}

document.getElementById("miDiv").addEventListener("click", function(event) {
    
    alert("Hola! Soy el div");
   
    
});
