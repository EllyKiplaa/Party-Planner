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
    if (document.getElementById("venue").checked){
        myArray.push(30000)
        document.getElementById("venu").innerHTML = ("Venue Ksh. 30000")
    };
};

function basic(){
    alert("You have chosen the Basic package at ksh 35000")
    document.getElementById("base").disabled = true;
    document.getElementById("intermediate").disabled = true;
    document.getElementById("premium").disabled = true;
};
function inter(){
    alert("You have chosen the intermidiate package at ksh 65000")
    document.getElementById("base").disabled = true;
    document.getElementById("intermediate").disabled = true;
    document.getElementById("premium").disabled = true;
};
function prem(){
    alert("You have chosen the Premium package at ksh 85000")
    /*document.getElementById("base").disabled = true;
    document.getElementById("intermediate").disabled = true;
    document.getElementById("premium").disabled = true;*/
};