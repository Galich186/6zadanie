var node = document.getElementById("convert");

var name = node.id;
node.innerHTML = "В F";

var button = document.getElementById("convert");
var count = 0;

function print() {
    count = count + 1;
    console.log("Кол-во нажатий кнопки: " + count);
}

button.addEventListener("click", print);

var input = document.getElementById("firld");
x = Number(input.value);
x + 1;
