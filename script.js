const textInput = document.getElementById("textInput");
const count = document.getElementById("count");

textInput.addEventListener("input", function () {
    count.innerText = textInput.value.length;
});

/*

1️ Get textarea

document.getElementById("textInput")


2️ Listen for typing

addEventListener("input", ...)


input fires every time user types or deletes

3️Count characters

textInput.value.length


4️ Display result

count.innerText = number

 */