// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e){
    // Load UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // FORMULA AND COMPUTING START
    // The parseFloat() method parses a value as a string and returns the first number.
    const principle = parseFloat(amount.value);
    // calculate interest as per 12 months
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    // calculate years as per 12 months
    const calculatedPayments = parseFloat(years.value) * 12;
    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principle*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2);
    }else{
        showError('Please check the numbers!');
    }
    // FORMULA AND COMPUTING END

    e.preventDefault();
}

function showError(error){
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Create element
    const errorDiv = document.createElement('div');
    // Add class
    errorDiv.className = 'alert alert-danger';
    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(error)); 
    // insert error before heading
    card.insertBefore(errorDiv, heading);

    // remove error after 3 seconds
    setTimeout(removeError, 3000);
}

// Remove error
function removeError(){
    document.querySelector('.alert').remove();
}