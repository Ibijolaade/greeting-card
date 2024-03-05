const firstName = document.getElementById("name")
const greetingCard = document.getElementById("greeting")
const inputField = document.getElementById("inputField")

function submit(){

    const save = localStorage.setItem( "name", firstName.value)

    const name = localStorage.getItem("name");
     
     
    let message = "Hello " + name + " !. Welcome aboard. It's good to have you here" 
    
    greetingCard.innerHTML = message;

}
console.log(submit)

function clearData(){
    const card = localStorage.clear()
    firstName.value = ""
    greetingCard.innerHTML = ""
    inputField.style.display = "block"
    document.getElementById("submit").style.display = "block"

}