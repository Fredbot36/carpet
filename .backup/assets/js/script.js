/* COPY LINK */
function copyToClipboard(copyText) {
    navigator.clipboard.writeText(copyText);
    document.getElementById('ip-copy').style.backgroundColor = "rgba(60, 186, 135, 0.2)"
    
}

/* back to main page when pressing ESC */
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        location.href = '#'
    }
})