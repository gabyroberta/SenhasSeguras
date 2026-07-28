const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;


const botoes = document.querySelectorAll('.parametro-senha__botao');


botoes[0].onclick = diminuiTamanho;
botoes[1].onclick= aumentaTamanho;


function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numeroSenha.TextCont =tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha > 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorll('.checlbox');


 for (i=0; i <checkbpx.length;i++){
    checkbox [i].onclick = geraSenha;
}
const letrasMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMaiuscula = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolo = '!@%*?';
 

geraSenha();
function geraSenha(){
    let alfabeto ='';
    if (checkbox [0].checked){
      alfabeto = 
      alfabeto + letrasMaiuscula;
    }
    if (checkbox [1].checked){
      alfabeto = alfabeto + letraMinusculas;
    }
    if (checkbox [2].checked){
      alfabeto = alfabeto + numeros;
    }
    if (checkbox [3].checked){
      alfabeto = alfabeto + simbolos;
    }
    console.log(alfabeto);
    let senha = '';
    for(let i=0; i < tamanhoSenha;i++){
    let numeroAleatorio = Math.random()*letrasMaiuscula.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiuscula[numeroAleatorio];
}
campoSenha.value = senha;
}