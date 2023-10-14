const receiverPhoneNumber = "5561985951533"


const getWhatsappUrl = (message)=> `https://wa.me/${receiverPhoneNumber}?text=${encodeURIComponent(message)}`

let formatScheduleMessage = (data) => {
  const { fullName, phoneNumber, email } = data;

  if(!fullName){
    return "Olá, gostaria de agendar uma consulta."
  }

  let message = "Olá, me chamo: " + (fullName) + " e gostaria de agendar uma consulta."
  if(phoneNumber) {
    message = message + "\n Meu telefone é: " + (phoneNumber)
  }
  if(email){
    message = message + "\n Meu email é: " + (email);
  }
  return message;
}



export {formatScheduleMessage, getWhatsappUrl}