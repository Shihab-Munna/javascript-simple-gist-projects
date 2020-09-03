function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
};


function combination(n, r) {
    return (n == r) ? 1 : factorial(n) / (factorial(r) * factorial(n - r));
};


function result() {
    var n = parseFloat(document.getElementById('n').value);
    var r = parseFloat(document.getElementById('r').value);

    if (n && r){
        document.getElementById('answer').innerHTML = combination(n,r);
    }
};

function resetCalculator() {
    document.getElementById("n").value= '';
    document.getElementById("r").value= '';
    document.getElementById("answer").innerHTML = '';
    
};

