const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const encodedLettersArr = []
    let exprArr = expr.split('');
          while (exprArr.length) {
             encodedLettersArr.push(exprArr.slice(0,10).join(''));
             exprArr.splice(0,10);
           }
           const dotDashLetter = []
   encodedLettersArr.forEach(function decodeInDotDash(elem) {
 let dotDash = '';
       for (let i = 0; i <= elem.length+1; i += 2) {
          if (elem.slice(i, i+2) === '11') {
             dotDash += '-'
          }
          else if (elem.slice(i, i+2) === '10') {
             dotDash += '.'
          }
          else if (elem.slice(i, i+2) === '**') {
             dotDash += ' '
             break
          }
          }
          dotDashLetter.push(dotDash)
    })
    console.log(dotDashLetter)
    resArr = []
    dotDashLetter.forEach(elem => {
       if (elem === ' ') {
          resArr.push(elem)
       }
       else {
          for (key in MORSE_TABLE) {
             if (elem === key) {
                resArr.push(MORSE_TABLE[key])
             }
          }
       }
    })
    return resArr.join('')
 }
  module.exports = {
    decode
}