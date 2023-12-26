function firstNonRepeatedChar(str) {
  // Create an object to store the frequency of each character
  const charFrequency = {};

  // Iterate through the string to count the frequency of each character
  for (const char of str) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeated character
  for (const char of str) {
    if (charFrequency[char] === 1) {
      return char; // Found the first non-repeated character
    }
  }

  // No non-repeated character found
  return null;
}

// Test cases
console.log(firstNonRepeatedChar('aabbcdd')); // 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // null

// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
