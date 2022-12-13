document.getElementById('exemplo').innerHTML = "Pedro <button> oi </button>";
// id é singular pois so podemos ter um elemento com o mesmo id, já a class é no plural pois podemos ter mais de uma.

document.getElementsByClassName('lista')[0].innerHTML = "Item alterado!";

//para alterar apenas o primeiro item utilizamos o [0], o segundo [1]

document.getElementById //elemento único, pelo id
document.getElementsByClassName // podem ser vários, pela class
document.getElementsByTagName // pelo nome da própia tag
document.getElementsByName // pelo atributo name

// -------------------------------------------------------------------------------------------


document.querySelector  // podemos selecionar por id, class, elemento,etc ]
// usamos ('# ') para ID e ('.')
// ele vai ter retorno no primeiro elemento que encontrar
document.querySelectorAll // o all retornarar todos elementos que encontrar 