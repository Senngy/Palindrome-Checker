const checkBtn = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const result = document.getElementById('result')

// Function to check if the input is a palindrome


// pour les chaines paires on va vérifier si elles sont miroir
// chain.length = 4 baab
//                  0123
// if chain[2].value === chain[3].value and chain[0].value === chain[4].value
// chain.length/2 = 2
// chain[i] compare chain[chain.length - (i+1)]
// 0 | 3
// 1 | 2

// if chain[()]   inputChain.value === '' // 
function checkMirror() {
    const inputChain = input.value.toLowerCase().replace(/[-_,/\s?'".:)(\\]/g, '');
    if (inputChain === '') {
        
            return false;
    }
    for (let i = 0; i < inputChain.length / 2; i++) {
          if (inputChain[i] !== inputChain[inputChain.length - (i + 1)]){
            return false;
        }
    }
    return true;
}
// 0 compare 3 -> 1 compare 2 
// 0 compare 8 -> 1 compare 7 
// pour les chaines impaires on va vérifier si elles sont miroires sans prendre en compte le caractère du milieu 
// chain.length = 7 bababab
//                  0123456
// check valid value in the input
function checkValidValue() {
  
}

// Give result 
let typed1;

function giveResult() {
    const inputChain = input.value;
    let resultText;
    if (checkMirror()) {
        resultText = '"' + inputChain + '"' + " est un palindrome";
    } else if (inputChain === '') {
        resultText = "Le vide ne peut être un palindrome n'est ce pas ?";
    } else {
        resultText = '"' + inputChain + '"' + " n'est pas un palindrome";
    }
    if (typed1) { // Vérifie si l'objet `typed1` existe et le détruit s'il est défini
        typed1.destroy();
    }
    typed1 = new Typed('.typed-test', {
        strings: [resultText],
        typeSpeed: 60,
        backSpeed: 0,
        smartBackspace: true, // this is a default
        loop: false
    });
}

checkBtn.addEventListener('click', function() {
    const inputChain = input.value;
    if (inputChain === '') {
        alert('Please input a value');
    }
    giveResult();
})

// TYPED
var typed = new Typed('.typed', {
    strings: ["Welcome", "Do you want to try this", "Palindrome Checker ?","Palindrome Checker" ],
    typeSpeed: 80,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: false
  });