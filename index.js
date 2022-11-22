// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"];
function writeCards(cards, surprise){
    let messages= []
    for (let i=0; i < cards.length; i++){
        messages.push(`Thank you, ` + cards[i] +`, for the wonderful ${surprise} gift!`);

    }
   return messages;
}
writeCards();


function countDown(startingNumber) {
  
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber = startingNumber - 1;
    }
  
  }
  
  countDown(10);
