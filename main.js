//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const emailList = document.getElementById('email-list'); ////collego js all'elemento html in cui vorrei salvare la lista di email

function generateEmails() { ////creo una funzione per ottenere 10 email


    for (let i = 0; i < 10; i++) {  ////creo un ciclo per eseguire le 10 richieste HTTPS
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {

                const email = response.data.response; //// creo una variabile in cui salvare l'email dalla risposta dell'API 
                //che cambia ad ogni iterazione

