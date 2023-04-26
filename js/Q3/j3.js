alert("World art!!");
confirm("Are you above 18");

function funk() {
    let text;
    if (confirm("Press a button!") == true) {
    text = "You pressed OK!";
    } else {
    text = "You canceled!";
    }
    document.getElementById("h2k").innerHTML = text;
}