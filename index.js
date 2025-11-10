// let donation_amount=document.getElementById("quta_amount")
// let donation_amount_number=parseFloat(donation_amount.innerText)
// let total_amount=document.getElementById("total_amount")
// let total_amount_number=parseFloat(total_amount.innerText)

// document.getElementById("quta_btn").addEventListener("click",function(){
//     let inputValue=getInputValue("quta_input")
//     let textValue=getTextValue("quta_amount")
//      donation_amount.innerText=textValue+inputValue;
//      total_amount.innerText=total_amount_number-inputValue;
    
// })
donationBtnClick("quta_btn","quta_input","quta_amount","quta_title")
donationBtnClick("feni_btn","feni_input","feni_amount","feni_title")
donationBtnClick("noakhali_btn","noakhali_input","noakhali_amount","noakhali_title")


// donation navbar 
let donation=document.getElementById("donation")
let history=document.getElementById("history")
let history_section=document.getElementById("history_section")
let main=document.getElementById("main")
donation.addEventListener("click",function(e){
    history.classList.remove("btn-accent")
   e.target.classList.add("btn-accent")
   history_section.classList.add("hidden")
        main.classList.remove("hidden")
    
})
history.addEventListener("click",function(e){
    donation.classList.remove("btn-accent")
     e.target.classList.add("btn-accent")
     main.classList.add("hidden")
     history_section.classList.remove("hidden")

    
})