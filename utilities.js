

function dontationValue(id){
    let donation_amont_text=document.getElementById(id)
    return donation_amont_text;
}
function getInputValue(id){
    
    let input=document.getElementById(id).value;
    let value=parseFloat(input)
    return value
}
function getDontationValue(id){
    let text=document.getElementById(id);
    let value=parseFloat(text.innerText)
    return value;
}

let historis=[]
let histoy_section=document.getElementById("history_section")
// donation button click
function donationBtnClick(btnid,inputId,textId,donationTitle){
document.getElementById(btnid).addEventListener("click",function(){
    // donation title
    let title=document.getElementById(donationTitle).innerText;
    let total_amount=document.getElementById("total_amount")
let total_amount_number=parseFloat(total_amount.innerText)
    let inputValue=getInputValue(inputId)
    // let textValue=getDontationValue(textId)
// set donation text amount
  let dontation_amount=dontationValue(textId)
  dontation_amount.innerText=parseFloat(dontation_amount.innerText)+inputValue;
  total_amount.innerText=total_amount_number-inputValue;
  historis.push({title,amount:inputValue,time:new Date()})
//   getting all history
for(const history of historis){
    histoy_section.innerHTML+=`
    <div class="border border-gray-300 mt-5 p-5 rounded-md">
        <h1 id="title" class="text-xl font-bold">${inputValue} taka is ${history.title}</h1>
        <p id="time" class="mt-3">${history.time}</p>
      </div>
    `
    
}
  
})
}



