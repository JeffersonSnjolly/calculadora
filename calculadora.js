function calculadora() {
    const operacao = Number(prompt('Digite o numero correspondente da operação\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão(/)\n 5 - Resto da Divisão(%)'));
    let n1 = Number(prompt("Digite o primeiro numero:"));
    let n2 = Number(prompt("Digite o segundo numero:"));
    let resultado;
    function soma() {
        resultado = n1+n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
    }
    function sub() {
        resultado = n1-n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
    }
    function mult(){
        resultado = n1*n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
    }
    function divisao(){
        resultado = n1/n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
    }
    function restoDa(){
        resultado = n1%n2;
        alert(`${n1} % ${n2} = ${resultado}`);
        novaOperacao();
    }
    function novaOperacao() {
        let novaOperacao = Number(prompt("Dejesa fazer uma nova operação 1- [sim] ou 2 -[nao]"));
        if(novaOperacao == 1){
        calculadora();
    }else if(novaOperacao == 2){
        alert('Obrigado, até mais');
    }else{
        novaOperacao();
    }
    }
    if(operacao == 1){
        soma();
    }else if(operacao == 2){
        sub();
    }else if(operacao == 3){
        mult();
    }else if(operacao == 4){
        divisao();
    }else if(operacao == 5){
        restoDa();
    }else{
        alert("Operação invalida!")
    }  
}

calculadora();