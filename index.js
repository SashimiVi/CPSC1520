const getQuoteButton = document.querySelector('#getQuote');
const getFirstName = document.querySelector('#input_first_name');
const getLastName = document.querySelector('#input_last_name');
const updateCardDisplay = document.querySelector('output');

getQuoteButton.addEventListener('click', onGetQuote);

function onGetQuote(e) {
    e.preventDefault()
    const firstName = getFirstName.value;
    const lastName = getLastName.value;
    const fullName =  `${firstName} ${lastName}`
    updateCardDisplay.textContent = fullName
    
}

