// O(n) time
// O(n) space

function caesarCipherEncryptor(string, key) {
  // Write your code here.
  const alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(
    ","
  );

  const newString = [];

  for (let i = 0; i < string.length; i++) {
    let currIdx = alphabet.indexOf(string[i]); //would be o(m) if this alphabet was longer, but o(26) with this lower case alphabet
    let newIdx = (currIdx + key) % alphabet.length;
    newString.push(alphabet[newIdx]);
  }

  return newString.join("");
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
