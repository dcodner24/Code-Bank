
console.log("account")

const  transactionForm =async (e)=>{
e.preventDefault()

const notes = document.querySelector('#t-notes').value.trim();
const destination = document.querySelector('#t-destination').value.trim();
const amount = document.querySelector('#t-amount').value.trim();

if (notes && destination && amount) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/transaction', {
      method: 'POST',
      body: JSON.stringify({ notes, destination, amount }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)

  }

  if (response.ok) {
    // If successful, redirect the browser to the account page
    document.location.replace('/checking');
  } else {
    alert(response.statusText);
  }
}


// document.querySelector(".transaction-form").addEventListener("submit", transactionForm )

function test(){
  document.querySelector('.logoutb').style.display="block";
 
   };
 
addEventListener('load', test);


const checking = async () => {
    document.location.replace('/checking');
};

const savings = async () => {
    document.location.replace('/savings');
};

if(document.querySelector('#checking')){
    document.querySelector('#checking').addEventListener('click', checking)
};

if(document.querySelector('#savings')){
    document.querySelector('#savings').addEventListener('click', savings)
};
