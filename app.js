document.getElementById("loan-form").addEventListener("submit", function(e){

    // show loading
    document.getElementById('loading').style.display='block';

    //hide result
    document.getElementById('results').style.display='none';

    setTimeout(calculateResults,2000);




	e.preventDefault();
});

// calculate result create

function calculateResults(e){
	// ui var

	const amount=document.getElementById("amount");
	const interest=document.getElementById("interest");
	const years=document.getElementById("years");
	const monthlyPayment=document.getElementById("monthly-payment");
	const totalPayment=document.getElementById("total-payment");
	const totalInterest=document.getElementById("total-interest");

	// convert decimal
	const principal=parseFloat(amount.value);
	// interst calculate
	const calculatedInterest=parseFloat(interest.value)/100/12;
	// calculate payment
	const calculatedPayments=parseFloat(years.value)*12;
	//compute monthly payment
	const x=Math.pow(1+ calculatedInterest, calculatedPayments);
	//monthly payment
    const monthly=(principal*x*calculatedInterest)/(x-1);
     if(isFinite(monthly)){
     	monthlyPayment.value=monthly.toFixed(2); //2 gor pojonto
     	totalPayment.value=(monthly*calculatedPayments).toFixed(2);
     	totalInterest.value=((monthly*calculatedPayments)-principal).toFixed(2);

    // hide loading
        document.getElementById('loading').style.display='none';

    //show result
       document.getElementById('results').style.display='block';

     }else{
     	showError('Please check your number');

     }

	
}

function showError(error){
	// hide loading
        document.getElementById('loading').style.display='none';
        
 const errorDiv=document.createElement('div');
   errorDiv.className='alert alert-danger';
   errorDiv.appendChild(document.createTextNode(error));
   const card=document.querySelector('.card');
   const heading=document.querySelector('.heading');
   card.insertBefore(errorDiv,heading);
   setTimeout(clearError,3000);
}

function clearError(){
	document.querySelector('.alert').remove();
}