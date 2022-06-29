const inputText = document.getElementById('inputValue');
const checkBtn = document.getElementById('checkBtn');
const showResult = document.getElementById('showResult');
const resultList = document.getElementById('resultList');

checkBtn.addEventListener('click', function() {
	let inputValue = inputText.value;

	if (inputValue.length === 0) {
		alert('Please write something');
		return;
	}

	function checkPalindrome(inputValue) {
		return inputValue == inputValue.split('').reverse().join('');
	}

	let resultElement = document.createElement('li');

	if (checkPalindrome(inputValue)) {
		let result = `"${inputValue}" is a Palindrome`;
		let resultValue = document.createTextNode(result);
		resultElement.appendChild(resultValue);
		resultList.appendChild(resultElement);
		inputText.value = '';
	} else {
		let result = `"${inputValue}" is not a Palindrome`;
		let resultValue = document.createTextNode(result);

		resultElement.appendChild(resultValue);
		resultElement.classList.add('negativeResult');
		resultList.appendChild(resultElement);
		inputText.value = '';
	}
});
