document.querySelector("#length").addEventListener("click", setLength, {
    once : true
});

function setLength() {
    let list = document.body.querySelectorAll("p");
    for (var j = 0; j < list.length; j++) {
        list[j].insertAdjacentHTML('afterbegin', list[j].innerText.length);
    }    
}