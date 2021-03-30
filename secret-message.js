// Using array methods, you will transform an array of strings into a secret message!
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// 1.  Use an array method to remove the last string of the array secretMessage.
secretMessage.pop()
// 2. Great! You can check your work by logging the .length of the array.
console.log(secretMessage.length)
// 3. Use an array method to add the words 'to' and 'Program' as separate strings to the end of the 'secretMessage' array.
secretMessage.push('to', 'Program')