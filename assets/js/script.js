/* COPY LINK */
function copyToClipboard(copyText, successMessage) {
    navigator.clipboard.writeText(copyText);
    infobox('success', successMessage)
}