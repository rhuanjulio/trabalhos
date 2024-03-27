alert('Bem vindo ao jogo!!');
let numeroSecreto=12;
let chute;
while(chute!=numeroSecreto){
    chute= prompt('Escreva um número de 1 a 20')
if(numeroSecreto==chute){
      alert(`Parabéns!! O número era ${numeroSecreto}!!!`)
    } else {
        if(numeroSecreto>chute){alert (`O número é maior que ${chute}`)}
        else {
            alert(`O número é menor que ${chute} `)
             }
    }
}