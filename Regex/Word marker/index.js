'use strict';

class WordMarkerclass {
    constructor(text, rootOfTheWord) {
        this.text = text;
        this.word = rootOfTheWord;
    }

    mark(tag = 'mark') {
        const regex = new RegExp(`^${this.word[0]}${this.word.slice(1,this.word.length)}`, 'ig');
        let result = '';
        this.text.split(' ').forEach(e => {
            if (regex.test(e)) {
                e = `<${tag}>${e}</${tag}>`;
            }

            result += `${e} `;
        });
        return result;
    }
}

function test() {
    let text ='It is a pity that the best people in the world are also the best in mistakes, but this is their fault, not ours.<br> Everyone decides for himself how to live, and each of us can change it at any moment of life<br>But won\'t it be too late to change something?';
    let WordMarker = new WordMarkerclass(text, 'it');
    document.querySelector('#testable-text').innerHTML = WordMarker.mark();
}

test();