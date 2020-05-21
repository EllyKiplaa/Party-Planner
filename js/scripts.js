let myArray = [];

function choose(){
    myArray.length = 0;

    if(document.getElementById("djay").checked){
        myArray.push(20000)
        document.getElementById("system").innerHTML = ("Dj and System Ksh. 20000")
    };
};