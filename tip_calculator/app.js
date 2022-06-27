document.getElementById('tip-form').onchange = function() {
	let bill = Number(document.getElementById('billTotal').value);
	let tip = document.getElementById('tipInput').value;
	document.getElementById('tipOutput').innerHTML = `${tip}%`;

	tipValue = bill * (tip / 100);
	finalBill = bill + tipValue;

	tipAmount = document.getElementById('tipAmount');
	totalBillWithTip = document.getElementById('totalBillWithTip');

	tipAmount.value = tipValue.toFixed(2);
	totalBillWithTip.value = finalBill.toFixed(2);

	// show result
	document.getElementById('result').style.display = 'block';
};

