

function calculate() {
    var a = parseInt(document.getElementById("boxone").value);  
    var b = parseInt(document.getElementById("boxtwo").value);
    var op = document.getElementById("choices").value;

    console.log(op)

    var answer = 0

    if (op == "add") {
        answer = a + b
    }
    else if (op == "minus") {
        answer = a - b
    }
    else if (op == "divide") {
        answer = a / b
    }
    else if (op == "times") {
        answer = a * b
    }

    document.getElementById("answer").value = answer; 

    console.log(answer);
} 
