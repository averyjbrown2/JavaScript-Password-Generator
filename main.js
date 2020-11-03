<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
    //DOM elements
    const resultEl = document.getElementById('result');
    const lengthEl = document.getElementById('length');
    const uppercasetEl = document.getElementById('uppercase');
    const lowercaseEl = document.getElementById('lowercase');
    const rumbersEl = document.getElementById('numbers');
    const symbolsEl = document.getElementById('symbols');
    const generateEl = document.getElementById('generate');
    const clipboardEl = document.getElementById('clipboard');

    const randomFunc = {
        lower: getRandomLower,
        upper: getRandomUpper,
        number: getRandomNumber,
        symbol: getRandomSymbol
    };

    //Generate event listen
    generateEl.addEventListener('click', () => {
        const length = +lengthEl.value;
        const hasLower = lowercaseEl.checked;
        const hasUpper = uppercaseEl.checked;
        const hasNumber = numbersEl.checked;
        const hasSymbol = symbolsEl.checked;
        
        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, lengt);
    });

    //Copy password to clipboard
    clipboardEl.addEventListener('click', () => {
        const textarea = document.createElement('textarea');
        const password = resultEl.innerText;
        
        if(!password) {
           return; 
        }
        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('password copied to clipboard');
    })

    //Generate password function
    function generatePassword(lower, upper, number, symbol, length) {
        //1. initialize password variable
        //2. filter out unchecked types
        //3. loop over length call generator function for each type
        //4. add final pw tto the pw variable and return

        let generatedPassword = '';
        const typesCount = lower + upper +number + symbol;

        console.log('typesCount: ', typesCount);
        const typesArr = [{ lower }, { upper }, { number }, { symbol }]).filter
        (item => Object.values(item)[0]
        );

        //console.log('typesArr: ', typesArr);

        if(typesCount === 0) {
            return '';
        }
for(let i=0; i < length; i += typesCount){
    typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        //console.log('funcName: ', funcName);

        generatedPassword += randomFunc[funcName]();

        });
    }

    const finalPassword = console.log(generatedPassword.slice(0, length));
    return finalPassword;
}

    //Generator functions
        function getRandomLower() {
            return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
        }
        
        console.log(getRandomLower());

      function getRandomUpper() {
            return String.fromCharCode(Math.floor(Math.random() * 26)+ 65);
        }

        function getRandomNumber() {
            return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);

        }

        function getRandomSymbol() {
            const symbols = "!@#$%^&*()[]{}<>/,.?"
            return symbols[Math.floor(Math.random)*symbols.length];

        }
        console.log(getRandomNumber());



    </script>
</body>
</html>