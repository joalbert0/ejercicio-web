const express = require('express');
const app = express();
app.use(express.static(__dirname + '/'));

app.listen('3000', function() {
    console.log('Servidor web escuchando en el puerto 3000');


});

function cargar1() {
    document.getElementById("pty").style.display = "block";
    document.getElementById("cuadrad").style.display = "block";
    document.getElementById("new3").style.display = "none";
    document.getElementById("new2").style.display = "none";
    document.getElementById("btn1").style.backgroundColor = "rgb(33, 174, 199)";
    document.getElementById("btn2").style.backgroundColor = "rgb(58, 151, 238)";
    document.getElementById("btn3").style.backgroundColor = "rgb(58, 151, 238)";
    $("pty").remove;
};

function cargar2() {
    document.getElementById("cuadrad").style.display = "none";
    document.getElementById("new3").style.display = "inline-grid";
    document.getElementById("new2").style.display = "none";
    document.getElementById("btn2").style.backgroundColor = "rgb(33, 174, 199)";
    document.getElementById("btn1").style.backgroundColor = "rgb(58, 151, 238)";
    document.getElementById("btn3").style.backgroundColor = "rgb(58, 151, 238)";


}

function cargar3() {
    document.getElementById("cuadrad").style.display = "none";
    document.getElementById("new3").style.display = "none";
    document.getElementById("new2").style.display = "grid";
    document.getElementById("btn3").style.backgroundColor = "rgb(33, 174, 199)";
    document.getElementById("btn1").style.backgroundColor = "rgb(58, 151, 238)";
    document.getElementById("btn2").style.backgroundColor = "rgb(58, 151, 238)";
}