var hora = 8;

// igual em uma condição usamos dois == com um = estamos se referindo a variavel*/

if ( hora < 12 ) {
    console.log("Bom dia");
} else if (hora < 18 ) {
    console.log("Boa tarde");
} else if (hora <= 23 ) {
    console.log("Boa noite")
}

//if = se, else = se não

// usamos else if pois se deixarmos apenas o if serão condições separadas e por exemplo quando estiver com 8 horas na var iriam aparecer os 3 

//          para dar apenas boa tarde
//          if ( hora <= 12 && < 18 ) {
//          console.log ("Boa tarde"); 
//          }                               duas condicionais especificas

//         para adicionar um ou usamos ||  por exemplo
//          if (hora == 12 || ==18 ) {
//          console.log ("você está na hora do rush"); }

