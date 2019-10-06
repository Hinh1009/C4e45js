let input = document.getElementById("input");
let button = document.getElementById("button");
button.addEventListener("click", function() {
    document.getElementById("ul").innerHTML += `<li>${input.value}</li>`;
})