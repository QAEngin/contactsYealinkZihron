const fileUrl = "https://raw.githubusercontent.com/QAEngin/contactsYealinkZihron/main/Yealink_Zihron.html";

function openURL() {
    window.open(fileUrl, "_blank");
}

function copyToClipboard() {
    navigator.clipboard.writeText(fileUrl)
        .then(() => {
            alert("URL copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy:", err);
            alert("Failed to copy URL.");
        });
}
