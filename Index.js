function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomNote() {
    var keys = "defgabc";
    var value = parseInt(Math.random() * 11);
    var key = keys[value % keys.length];
    
    var top = 26 - 13 * value;
    var element = document.createElement("span");
    element.classList.add("note");
    element.classList.add("semibreve");
    element.style.top = top + "px";

    return { key, element };
}