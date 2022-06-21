/* COPY LINK */
function copyToClipboard(copyText) {
    navigator.clipboard.writeText(copyText);
    infobox('success', 'Link wurde kopiert!')
}