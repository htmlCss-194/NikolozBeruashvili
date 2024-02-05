
var greetingParagraph = document.getElementById("greeting");


var userName = prompt("Enter your name:");


if (userName !== null && userName !== "") {
    greetingParagraph.innerHTML = "Hello, " + userName + "!";
} else {
    greetingParagraph.innerHTML = "Hello";
}
