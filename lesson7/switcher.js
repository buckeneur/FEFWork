$(document).ready (){

};

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("header").innerHTML = this.responseText;
            document.getElementById("imageHolder").innerHTML = this.responseText;
            document.getElementById("footer").innerHTML = this.responseText;

        }
    }
}