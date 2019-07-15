function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomNote() {
    var keys = "abcdefg";
    var firstKeys = [ 3, 5 ];
    var pentagram = parseInt(Math.random() * 2);
    var firstKey = firstKeys[pentagram];

    var value = parseInt(Math.random() * 11);
    var key = keys[(firstKey + value) % keys.length];
    
    var top = 26 - 13 * value;
    var element = document.createElement("span");
    element.classList.add("note");
    element.classList.add("semibreve");
    element.style.top = top + "px";

    return { pentagram, key, element };
}