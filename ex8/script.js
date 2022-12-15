 var nome = "Bonieky"; //string- qualquer valor entre aspas simples ou aspas duplas
 var idade = 90;        // numérico
 var salvo = true;     //bolleano true or false 

 // usando o typeof podemos descobrir o tipo de uma variavel
//motrando no console o resultado
 console.log(nome);{}


 function alterar(){  // criou a função
    document.getElementById("titulo").innerHTML = 'Trocou o titulo!';
 } // criamos a função ma para unionar precisamos de:
 alterar ();  // fez funcionar

 // quando usamos () estamos criando uma função 
 // .inner significa mudar no html 

 alert("funcionou!!!")
//alert é uma função, dentro dela vários códigos estão sendo executados!!!

function alterar (titulo) { //o valor ue fo especificado no alterar, será enviado para cá
    document.getElementById("titulo") = 'titulo';
}
alterar ("Título de exemplo")


//------------------------------------------------------------------------
function somar (x,y) {
    let total= x + y;

    return total;
}

var resultado = somar (10,25);

console.log(resultado);



