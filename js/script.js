/* JSnack 1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while */

const jSnack1 = document.querySelector('.first');

jSnack1.addEventListener('click', function(){
    
    let sum = 0;

    for(let i = 0; i < 5; i++){

        let numb = parseInt(prompt('Inserisci un numero'));
        while(isNaN(numb)){
            numb = parseInt(prompt('Devi inserire un numero'));
        }
        sum += numb;
    }
    alert(`La somma dei numeri inseriti è : ${sum}`)
});



/* JSnack 2
Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due. */
const jSnack2 = document.querySelector('.second');


jSnack2.addEventListener('click', function(){
    let firstWord = prompt('Inserisci la prima parola');
    let secondWord = prompt('Inserisci la seconda parola');

    if(firstWord.length == secondWord.length){
        alert(`Le parole "${firstWord}" e "${secondWord}" hanno lo stesso numero di caratteri`);
    } else if (firstWord.length > secondWord.length){
        alert(`La parola "${firstWord}" possiede più caratteri`)
    }else{
        alert(`La parola "${secondWord}" possiede più caratteri`)
    }
});

/* JSnack 3
Stampa le potenze di 2 fino a 1000. */
const jSnack3 = document.querySelector('.third');

jSnack3.addEventListener('click', function(){

    let numb = parseInt(prompt('Inserisci un numero maggiore di due'));
    
    while(isNaN(numb) || numb <= 2){
        numb = parseInt(prompt('Devi inserire un numero positivo maggiore di quattro'));
    }

    let myArray = [];
    let pow = 2;

    while(pow < numb){

        pow = pow * 2;

        if( pow < numb){
            myArray.push(pow);
        }
    }
    
    if (myArray.length < 1 ){
        alert(`Non ci sono potenze di due fino al numero ${numb}`)
    } else if (myArray.length < 2 ){
        alert(`La potenza di due fino a ${numb} è: [${myArray}]`)
    } else{
        alert(`Le potenza di due fino a ${numb} sono: [${myArray}]`)
    }
    
});

