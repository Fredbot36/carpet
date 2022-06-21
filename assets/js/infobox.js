var infoLevel = infoLevel || false;
var infoMessage = infoMessage || false;

(function() {
    if (infoLevel && infoMessage) {
        infobox(infoLevel, infoMessage)
    }
} ());

function infobox(level, message) {
    let infobox_html = document.createElement("div");
    infobox_html.innerHTML = message;
    infobox_html.classList.add("infobox", "infobox_" + level);
    document.body.appendChild(infobox_html);
    setTimeout(function () {
        document.body.removeChild(infobox_html);
    }, 3000 )
}