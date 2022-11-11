console.log("account")

function test(){
  document.querySelector('.logoutb').style.display="block";
 
   };
 
addEventListener('load', test);




const checking = async (e) => {
    e.preventDefault();
    document.location.replace('/checking');
};

const savings = async (e) => {
    e.preventDefault()
    document.location.replace('/savings');
};

const createAccount = async (e) =>{
  e.preventDefault();
  const acc_balance = document.querySelector('#deposit').value.trim();
  let is_checking = document.querySelector('#isChecking').checked;
  let is_savings = document.querySelector('#isSavings').checked;

  if (deposit) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/accounts', {
      method: 'POST',
      body: JSON.stringify({ acc_balance, is_checking, is_savings }),
      headers: { 'Content-Type': 'application/json' },
    });
console.log(response)
    if (response.ok) {
      // If successful, redirect the browser to the account page
      document.location.replace('/account');
    } else {
      alert(response.statusText);
    }
  }


}


document.querySelector('.create-account').addEventListener('submit',createAccount);
document.querySelector('#checking').addEventListener('click', checking);
document.querySelector('#savings').addEventListener('click', savings);