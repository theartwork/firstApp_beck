// function addNumbers(){
//     var firstNumber = parseInt((document.getElementById("txtFirstNumber").value),10);
//     var secondNumber = parseInt((document.getElementById("txtSecondNumber").value),10);
//     document.getElementById("txtResult").value = firstNumber + secondNumber;
// }


//CONVERT
// function addNumbers(){
//     var firstNumber = parseInt((document.getElementById("txtFirstNumber").value),2);
//     var secondNumber = parseInt((document.getElementById("txtSecondNumber").value),16);
//     document.getElementById("txtResult").value =  parseInt(secondNumber,10);}// !!! UND?

function addNumbers(){
    
    var firstNumber = document.getElementById("txtFirstNumber").value;
    var secondNumber = document.getElementById("txtSecondNumber").value;

    if (firstNumber == ""){
        alert("first number?");
        return;
    }

    if (secondNumber == ""){
        alert("second number?");
        return;
    }

    firstNumber=parseFloat(firstNumber)
    secondNumber=parseFloat(secondNumber)

    

    if(isNaN(parsed)){
        alert("bla");
        return;
    }
    if(isNaN(secondNumber)){
        alert("bla")
        return;
    }

    document.getElementById("txtResult").value = firstNumber + secondNumber;
    
}








