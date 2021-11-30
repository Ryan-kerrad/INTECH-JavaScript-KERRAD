document.querySelector("#everyupper").addEventListener("click", setEverythingUpper);

function setEverythingUpper() {
    var everything = document.body.getElementsByTagName("*");
    for (var j = 0; j < everything.length; j++) {
        everything[j].innerText = everything[j].innerText.toUpperCase();
    }
}