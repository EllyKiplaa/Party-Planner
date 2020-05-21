let myArray = [];

function choose(){
    myArray.length = 0;

    if(document.getElementById("djay").checked){
        myArray.push(20000)
        document.getElementById("system").innerHTML = ("Dj and System Ksh. 20000")
    };
    if (document.getElementById("food").checked){
        myArray.push(30000)
        document.getElementById("fud").innerHTML = ("Food Ksh. 30000")
    };
    if (document.getElementById("venu").checked)
};