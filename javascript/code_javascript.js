(function () {
    var app = document.getElementById('app');
    var number_characters = document.getElementById('number_characters');
    var setting = {
        characters: parseInt(number_characters.value),
        symbols: true,
        numbers: true,
        capital_letters: true,
        lowercase: true
    }

    var characters = {
        numbers: '0 1 2 3 4 5 6 7 8 9',
        symbols: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
        capital_letters: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
        lowercase: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    }

    app.addEventListener('submit', function (e) {
        e.preventDefault();
    });

    app.elements.namedItem('button_plus_one').addEventListener('click', function () {
        setting.characters++;
        number_characters.value = setting.characters;
    });

    app.elements.namedItem('button_minus_one').addEventListener('click', function () {
        if (setting.characters > 1) {
            setting.characters--;
            number_characters.value = setting.characters;
        }
    });

    app.elements.namedItem('button_symbols').addEventListener('click', function(){
        buttonToggle(this);
        setting.symbols = !setting.symbols;
    });

    app.elements.namedItem('button_numbers').addEventListener('click', function(){
        buttonToggle(this);
        setting.numbers = !setting.numbers;
    });

    app.elements.namedItem('button_capital_letters').addEventListener('click', function(){
        buttonToggle(this);
        setting.capital_letters = !setting.capital_letters;
    });

    app.elements.namedItem('button_generate').addEventListener('click', function(){
        generate_password();
    });

    app.elements.namedItem('input_password').addEventListener('click', function(){
        copyPassword();
    });

    function buttonToggle(element){
        element.classList.toggle('false');
        element.childNodes[0].classList.toggle('fa-check');
        element.childNodes[0].classList.toggle('fa-times');
    }

    function generate_password(){
        var final_characters = '';
        var password = '';

        for (property in setting){
            if(setting[property] == true){
                final_characters += characters[property] + ' ';
            }
        }
        final_characters = final_characters.trim();
        final_characters = final_characters.split(' ');

        for(var a = 0; a < setting.characters; a++){
            password = password + final_characters[Math.floor(Math.random() * final_characters.length)];
        }
        app.elements.namedItem('input_password').value = password;
    }

    function copyPassword(){
        app.elements.namedItem('input_password').select();
        document.execCommand('copy');
        document.getElementById('alert_copied').classList.add('active');
        setTimeout(function(){
            document.getElementById('alert_copied').classList.remove('active');
        }, 2000);
    }
}())