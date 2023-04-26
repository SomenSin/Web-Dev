var h = document.getElementsByName("head");
let person = {
    name : "Somendra",
    age : 20
}
function f() {
    console.log("Good Morning");
}
function ad() {
    person.city = "Dehradun";
    alert(person.name + " " + person.age + " " + person.city);
}