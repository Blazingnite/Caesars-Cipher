function rot13(str) {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // let filteredStr = str.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9+]/g, "")
  // console.log(filteredStr);
  let newStr = str.split("");

  let holdAnswer = []
  let capAlpha = alphabet.join("").toUpperCase().split("");
  let holder = [];
  for(let i = 0; i < newStr.length; i++){
holder.push(capAlpha.indexOf(newStr[i])-13)
  }
  //Proxy is about being able to iterate in both directions
  const proxy = new Proxy(capAlpha, {
    get(target, prop) {
        if (!isNaN(prop)) {
            prop = parseInt(prop, 10);
            if (prop < 0) {
                prop += target.length;
            }
        }
        return target[prop];
    }
});
  for(let j = 0; j < holder.length; j++) {
    holdAnswer.push(proxy[holder[j]]);
  }
  let theAnswer;
let special;
let regex = /[!@#$%^&*(),.?' ':{}|<>]/g;
let re = new RegExp(regex,'gi');
let results = new Array();//this is the results you want
while (re.exec(str)){
  results.push(re.lastIndex -1);
}
special = results;
  console.log(special);
  for(let y = 0; y < holdAnswer.length; y++){
    if(newStr[special[y]] != holdAnswer[special[y]]){
      holdAnswer[special[y]] = newStr[special[y]];
      theAnswer = holdAnswer;
    }
  }
  return theAnswer.join('');
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
