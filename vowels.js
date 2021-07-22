let string = ('Алоха, меня зовут Лена');

string = string.toLowerCase(string);

const vowels = ['а', 'е', 'у', 'ы', 'о', 'я','ё', 'и', 'э', 'ю'];

var letter = '';

var result = '';

for(let i = 0; i < string.length; i++) {

    for(let j = 0; j < vowels.length; j++) {

        letter = string.charAt(i);

        if(letter === vowels[j]) {

            result += letter;
        }
    }
}

console.log(result);






