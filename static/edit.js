function copyText(text) {
    /* Get the text field */
    var input = document.createElement("textarea");
    input.appendChild(document.createTextNode(text));
    document.getElementById("output-container").appendChild(input);

    /* Select the text field */
    input.select();

    /* Copy the text inside the text field */
    var result = document.execCommand("copy");

    document.getElementById("output-container").removeChild(input);
    
    /* Alert the copied text */
    alert("Copied the text: " + text);
}

function addPathSelectors() {
    const allStringElements = document.querySelectorAll("[data-schematype=string]");
    allStringElements.forEach(el => {
        fileInput = document.createElement("input");
        fileInput.setAttribute("type", "file");
        fileInput.onchange = e => console.log(fileInput);
        el.appendChild(fileInput);
    })
}