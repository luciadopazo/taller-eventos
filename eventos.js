function mostrarAlerta() {
    alert("Hola!");
}

document.getElementById("miDiv").addEventListener("click", function(event) {
    event.stopPropagation();
    alert("Hola! Soy el div");
    
});
