const firstName = document.getElementById("name")
const greetingCard = document.getElementById("greeting")

function save(){
    
    const save = localStorage.setItem( "name", firstName.value )

}

function getCard(){

    const name = localStorage.getItem("name")
    let message = "Hello " + name + " , welcome to a fresh episode of today's activities"
    greetingCard.innerHTML = message;

    if(name == null){
        greetingCard.innerHTML = "Please enter your name and save to get your card"
    }

}

function clearData(){
    const card = localStorage.clear()
    firstName.value = ""
    greetingCard.innerHTML = ""
}