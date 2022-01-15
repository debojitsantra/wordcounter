
const input = document.getElementById('input');
const characters = document.getElementById('characters');
const word = document.getElementById('word');

function counter() {
    var char = input.value;
    var chartrim = char.replace(/\s/g, '');
    var chartrimmed = chartrim.length;
    characters.innerHTML = chartrimmed;

    var words = input.value.split(' ').filter((item) => {
        return item != '';
    });
    word.innerHTML = words.length;
    }
