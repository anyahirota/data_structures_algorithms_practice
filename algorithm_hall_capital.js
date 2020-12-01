// Exercise 1:

// 1. write a function or method that gets the first non-repeating character 
//(case insensitive) in a string and outputs it, for example, given the string:
// "cccaABLKKb", it should output "L".

// 2. use the function above to write a little program that outputs the character 
//from a string variable, and assign the variable a some sample strings to test with.


//original solution

//input: "cccaABLKKb"
//output: "L"; 

//input: "ctHsChat"
//output: "s"; 

//input: "hhttsdf"
//output: "s"; 

function nonrepeatedCharacter(string) {
    let chars = {}; 
    for (let i = 0; i < string.length; i++) {
        let char = string[i].toLowerCase(); 
        if (chars[char]) {
            chars[char] += 1; 
        } else {
            chars[char] = 1; 
        }
    }

    let singleChar; 
    const keys = Object.keys(chars); 
    for (let j = 0; j < keys.length; j++) {
        if (chars[keys[j]] === 1)  {
            singleChar = keys[j]; 
            break; 
        }; 
    }

    for (let x = 0; x < string.length; x++) {
        let char2 = string[x].toLowerCase();
        if (char2 === singleChar) {
            return string[x]; 
        } 
    }
}

console.log(nonrepeatedCharacter("cccaABLKKb")); 
console.log(nonrepeatedCharacter("ctHsChat")); 
console.log(nonrepeatedCharacter("hhttsdf")); 




//optomized version of my own algorithm (skips middle step)

function nonrepeatedCharacter1(string) {
    let chars = {}; 
    for (let i = 0; i < string.length; i++) {
        let char = string[i].toLowerCase(); 
        if (chars[char]) {
            chars[char] += 1; 
        } else {
            chars[char] = 1; 
        }
    }

    for (let j = 0; j < string.length; j++) {
        let char2 = string[j].toLowerCase(); 
        if ( chars[char2] === 1)  {
            return string[j]; 
        }; 
    }
}

console.log(nonrepeatedCharacter1("cccaABLKKb")); 
console.log(nonrepeatedCharacter1("ctHsChat")); 
console.log(nonrepeatedCharacter1("hhttsdf")); 



//elegant solution - doesn't improve spacetime complexity 

function nonrepeatedCharacter2(string) {
    let lowerCaseString = string.slice().toLowerCase(); 
    for (let i = 0; i < string.length; i++) {
        const char = lowerCaseString.charAt(i);
        if (lowerCaseString.indexOf(char) == i && lowerCaseString.indexOf(char, i + 1) == -1) {
            return string[i];
        }
  }
  return null;
}

console.log(nonrepeatedCharacter2("cccaABLKKb")); 
console.log(nonrepeatedCharacter2("ctHsChat")); 
console.log(nonrepeatedCharacter2("hhttsdf")); 
