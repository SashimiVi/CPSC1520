
const getQuoteButton = document.querySelector('#getQuote');
const getFirstName = document.querySelector('#input_first_name');
const getLastName = document.querySelector('#input_last_name');
const updateCardDisplay = document.querySelector('output');

getQuoteButton.addEventListener('click', onGetQuote);

function onGetQuote(e) {
    // Prevent the default form submission
    e.preventDefault()
    const firstName = getFirstName.value;
    const lastName = getLastName.value;
     // Combine the first name and last name to create the full nam
    const fullName =  `${firstName} ${lastName}`
    // Update the content of the element to display the full name
    updateCardDisplay.textContent = fullName
    
}

