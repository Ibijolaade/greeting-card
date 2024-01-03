const firstName = document.getElementById("name")
const greetingCard = document.getElementById("greeting")
const inputField = document.getElementById("inputField")

function submit(){

    const save = localStorage.setItem( "name", firstName.value )

    const name = localStorage.getItem("name")
    
    let message = "Hello " + name + " !. Welcome aboard. It's good to have you here"

    greetingCard.innerHTML = message;
    
    inputField.style.display = "none";
    document.getElementById("submit").style.display = "none"

}

// function getCard(){

//     const name = localStorage.getItem("name")
//     let message = "Hello " + name + " , welcome to a fresh episode of today's activities"
//     greetingCard.innerHTML = message;

//     if(name == null){
//         greetingCard.innerHTML = "Please enter your name and save to get your card"
//     }

// }

function clearData(){
    const card = localStorage.clear()
    firstName.value = ""
    greetingCard.innerHTML = ""
    inputField.style.display = "block"
    document.getElementById("submit").style.display = "block"

}