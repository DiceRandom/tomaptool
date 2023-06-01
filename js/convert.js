//  allow the user to upload a url and convert it into a command



// get url from form
var url;
var x, y;
var command;
var commandElement = document.getElementById("result");

function testResults (form) {
    var inputValue = form.inputbox.value;
    
    if(!checkImage(inputValue)){
        alert("Please enter a valid image URL");
        return;
    }

    if (form.resize.checked == true) {
        x = form.width.value;
        y = form.height.value;
    }
    url = inputValue;

    buildCommand();

    commandElement.innerHTML = command;
}

// add listener to resize checkbox
var resizeCheckbox = document.getElementById("resizebox");
var resizeControls = document.getElementById("resizecontrols");
resizeControls.style.display = "none";
resizeCheckbox.addEventListener('change', function() {
    if (this.checked) {
        resizeControls.style.display = "flex";
    } else {
        resizeControls.style.display = "none";
    }
});

// build command
function buildCommand() {
    // /tomap URL resize X Y

    command = "/tomap " + url;
    if (resizeCheckbox.checked && x != "" && y != "") {
        command += " resize " + x + " " + y;
    }
}

// check if url is an image
function checkImage(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    // return true if url is an image
}

// Copy to Clipboard
function copyToClipboard() {
    navigator.clipboard.writeText(command);
    alert("Copied the text: " + command);
}