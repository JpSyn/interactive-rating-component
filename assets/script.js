var opcao;

function selecionar(valor) {
    opcao = valor;

    console.log(opcao);
}

function telaThankyou() {

    if(opcao == undefined){
        alert('Selecione uma opcão!');
    } else{
        document.querySelector('#resposta_select').innerHTML = 'You selected ' + opcao + ' out of 5';

        const displaySubmit = document.querySelector('.card_submit');
        const displayTY = document.querySelector('.card_thankyou');

        displaySubmit.style.display = 'none';
        displayTY.style.display = 'flex';
    }   
}