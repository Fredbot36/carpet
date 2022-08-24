/* COPY LINK */
function copyToClipboard(copyText, successMessage) {
    navigator.clipboard.writeText(copyText);
    infobox('success', successMessage)
}

/* back to main page when pressing ESC */
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        location.href = '#'
    }
})