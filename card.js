const thankyouCard = document.querySelector(".thank-you-card");
const ratingCard = document.querySelector(".rating-card");
const btn = document.getElementById("submit-btn");
const rate = document.getElementsByName("rating");
const pMessage = document.querySelector(".radio-val")
const lengths = rate.length

btn.addEventListener("click",hideMesage);

function hideMesage(){
 
    for(i = 0; i < rate.length; i++){
        if(rate[i].checked){

            pMessage.textContent = 'You selected ' + rate[i].value + ' out of 5';
            
        }
        
        ratingCard.classList.add("hidden");
        thankyouCard.classList.remove("hidden");
    
    }
    
}