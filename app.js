document.getElementById("processar").onclick = function(){
    var data = [];
    data[0] = document.getElementById('value1').value;
    data[1] = document.getElementById('value2').value;
    data[2] = document.getElementById('result');
    
    let multiply = data[0] * data[1];

    data[2].innerHTML =("o valor de sua conta de eletricidade será:", multiply);

}