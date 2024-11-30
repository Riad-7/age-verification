let age;

document.getElementById("myButton").onclick = function(){
    age = document.getElementById("myInput").value;
    if (age >= 18 & age <= 35) {
        let green = document.getElementById("mySpan").textContent = "Accepted";
    } else  {
        let red = document.getElementById("mySpan").textContent = "Not accepted";
    }
   
}
