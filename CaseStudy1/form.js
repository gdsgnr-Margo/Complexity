



function reset () {
    var forms = document.getElementsByTagName("form");

    for (var i=0; i < forms.length; i++) {
        forms[i].reset();
    }
}

function clearParagraph(paragraphId) {
    document.getElementById(paragraphId).innerHTML = " ";
}

function question() {
    var name = (document.getElementById("name").value);
    var email = (document.getElementById("email").value);
    var query = (document.getElementById("comment").value);

    document.getElementById("success").innerText = "Your query was succesfully submitted!";
}