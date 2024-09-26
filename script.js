people=[]
function aggiungiPersona(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let birthdate = document.getElementById("birthday").value;
    let numberphone = document.getElementById("numberphone").value;
    let paese = document.getElementById("paese").value;
    let provincia = document.getElementById("provincia").value;
    


if (name=== ""|| email===""||birthdate===""){
    alert("Per favore compila tutti i campi")
return;
}


let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)){
    alert("Inserisci una email valida");
    return;
}

let numberphoneRegex =  /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
if (!numberphoneRegex.test(numberphone)){
    alert("Inserisci una numero di telefono valido [10 cifre] =)");
    return;
}
let person = {
    name:name,
    email:email,
    birthdate:birthdate,
    surname:surname,
    numberphone:numberphone,
    paese:paese,
    provincia:provincia
}

people.push(person); //inserisce gli eleemti di person nel vettore people



aggiornaTabella(person)
document.getElementById("name").value=""; // dove c'è nome metti "" = vuoto
document.getElementById("surname").value="";
document.getElementById("email").value="";
document.getElementById("birthday").value="";
document.getElementById("numberphone").value="";
document.getElementById("paese").value="";
document.getElementById("provincia").value="";

}

function aggiornaTabella (person) {
    
    let deleteButton = document.createElement("button");
    
    deleteButton.textContent="Rimuovi Persona";
    
    
    deleteButton.onclick = function(){
    
    let index = people.indexOf(person)
    
    if (index > -1){
    
    people.splice(index, 1) ;
    
    personRow.parentNode.removeChild(personRow);
    }
}
    
    let personRow = document.createElement("tr");
    
    personRow.innerHTML = `
        <td>${person.name}</td>
        <td>${person.surname}</td>
        <td>${person.email}</td>
        <td>${person.birthdate}</td>
        <td>${person.numberphone}</td>
        <td>${person.paese}</td>
        <td>${person.provincia}</td>
    `;


   
    personRow.appendChild(deleteButton)
    document.getElementById("tabella").appendChild(personRow)
}
    

    
    
    
