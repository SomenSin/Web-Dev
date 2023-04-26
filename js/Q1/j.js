var h = document.getElementsByClassName("Heading")[0];
var ss = document.getElementById("1");
var h3 = document.getElementsByTagName("h3")[1];
var t = document.getElementsByName("b");

function demo() {
    console.log(h,ss);
    h.innerHTML = "Hi i am a Web developer";
    ss.innerHTML = "I have 2 years of experience";
    h3.innerHTML = "and I am a freelancer";
}
function save1() {
    var ele = document.getElementsByName('b');
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            console.log(ele[i].value)
        }
}