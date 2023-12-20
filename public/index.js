const PolakadotInput = document.getElementById("Polakadot");
const UsernamelInput = document.getElementById("username");
const MessageInput =document.getElementById("Message")
const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const Polakadot = PolakadotInput.value;
  const username = UsernamelInput.value;
  const Message = MessageInput.value;


  axios.post("/submitform", {
    Polakadot: Polakadot,  
    username: username,
    Message :Message,
      
    })
    .then((response) => {
      console.log(response);
    }).catch((error)=>{
        console.error(error)
    })

    document.getElementById('Polakadot').value = '';
    document.getElementById('username').value = '';
    document.getElementById('Message').value = '';
  

});