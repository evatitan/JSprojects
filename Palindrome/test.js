// function palindrome(str) {
//   return true;
// }
// palindrome("eye");

function checkPalindrome(str) {
	return str == str.split('').reverse().join('');
}

console.log(checkPalindrome('eye'));
