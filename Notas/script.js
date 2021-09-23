/* Crie uyma função que transforme as notas informadas por numeros, em letras */

function calculaNota(number){
    if (number >= 90 && number <= 100){
        return nota = 'A' 
    }

    else if (number >= 80 && number < 90){
        return nota = 'B'
    }

    else if (number >= 70 && number < 80){
        return nota = 'C'
    }

    else if (number >= 60 && number < 70){
        return nota = 'D'
    }

    else if (number >= 0 && number < 60){
        return nota = 'F'
    }

    else{
        return console.log('Nota inválida!')
    }
}

console.log(calculaNota(100))