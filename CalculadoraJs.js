window.onload = function(){
    let label = document.querySelector('.digitar');
    let um = document.querySelector('.um');
    let dois = document.querySelector('.dois');
    let tres = document.querySelector('.tres');
    let quatro = document.querySelector('.quatro');
    let cinco = document.querySelector('.cinco');
    let seis = document.querySelector('.seis');
    let sete = document.querySelector('.sete');
    let oito = document.querySelector('.oito');
    let nove = document.querySelector('.nove');
    let zero = document.querySelector('.zero');
    let soma = document.querySelector('.soma');
    let subtracao = document.querySelector('.subtracao');
    let vezes = document.querySelector('.vezes');
    let divisao = document.querySelector('.divisao');
    let apagar = document.querySelector('.apagar');
    let igual = document.querySelector('.igual');
    let conta;

    um.addEventListener('click', function(){
        label.textContent+="1";
    })
    dois.addEventListener('click', function(){
        label.textContent+="2";
    })
    tres.addEventListener('click', function(){
        label.textContent+="3";
    })
    quatro.addEventListener('click', function(){
        label.textContent+="4";
    })
    cinco.addEventListener('click', function(){
        label.textContent+="5";
    })
    seis.addEventListener('click', function(){
        label.textContent+="6";
    })
    sete.addEventListener('click', function(){
        label.textContent+="7";
    })
    oito.addEventListener('click', function(){
        label.textContent+="8";
    })
    nove.addEventListener('click', function(){
        label.textContent+="9";
    })
    zero.addEventListener('click', function(){
        label.textContent+="0";
    })
    soma.addEventListener('click', function(){
        isOperador(label, "+")
    })
    subtracao.addEventListener('click', function(){
        isOperador(label, "-")
    })
    vezes.addEventListener('click', function(){
        isOperador(label, "*")
    })
    divisao.addEventListener('click', function(){
        isOperador(label, "/")
    })
    apagar.addEventListener('click', function(){
        label.textContent="0";
    })
    igual.addEventListener('click', function(){
        calcular(label);
    })
    console.log(label);
}
function isOperador(label, operador) {
    let cur = label.textContent.slice(-1);
    if(cur==" "){
        label.textContent = label.textContent.slice(0, label.textContent.length-2)
        label.textContent.slice(-1);
        label.textContent+=(operador+" ");
    } else {
        label.textContent+=(" "+operador+" ");
    }
}
function calcular(label){
    let cur = label.textContent.slice(-1);
    if(!cur==" "){
        label.textContent = eval(label.textContent)
    }
}
