function selectWord(e) {
    // Untoggles words that have already been highlighted
    // Solution taken from: https://stackoverflow.com/a/22270709
    existsHighlighted = document.getElementsByClassName('highlighted');
    defParagraph = document.getElementById('definition').getElementsByTagName('p')[0];
    /* Redundant variables
    wordSpan = document.getElementById('defined_word');
    defSpan = document.getElementById('def');
    grammarSpan = document.getElementById('grammar');
    */
    //console.log(definitionDiv);
    if (e.target.classList.contains('word')) {
        [].forEach.call(existsHighlighted, function(el) {
            el.classList.remove("highlighted");
        });
        e.target.classList.toggle('highlighted');
        // Figure out how to remove forbidden chars:
        // ' , . : ?
        let selectedWord = e.target.innerHTML;
        
        // Select definition from json file
        fetch('../words.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            // Solution taken from: https://stackoverflow.com/a/1946247
            try {
                defParagraph.textContent = "";
                let definition = json[selectedWord.toLowerCase()].definition;
                let grammar = json[selectedWord.toLowerCase()].grammar;
                let wordSpan = document.createElement("span");
                wordSpan.classList.add("defined_word");
                let defSpan = document.createElement("span");
                defSpan.classList.add("def");
                wordSpan.innerText = selectedWord + ": ";
                defSpan.innerText = definition;
                defParagraph.appendChild(wordSpan);
                defParagraph.appendChild(defSpan);
                
                // ADD GRAMMAR AT A LATER TIME
                //let grammarSpan = document.createElement("span");

            }
            catch {
                console.log("Error, undefined word!");
                defSpan.textContent = "undefined"
            }
        })
    }
    return;
}

function addSpanTagsToLatinWords() {
    // Solution adapted from: https://stackoverflow.com/a/50135988
    var lessons = document.getElementsByClassName('lesson');
    
    // For loop loops through all DIVs with lesson contents.
    // Regex matches all words, and adds a span tag with class 'word'.
    for(var i = 0, max=lessons.length; i < max; i++) {
        lessons[i].innerHTML = lessons[i].innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s,.\?:<]+)/g, '$1<span class="word">$2</span>');
        // Fix bug where you can click on paragraph.
        lessons[i].addEventListener('click', function(e) {selectWord(e);}, true);
    }
    return;
}

addSpanTagsToLatinWords();
/*
let defParagraph = document.getElementById('definition').getElementsByTagName('p')[0];
let word = document.createElement("span");
word.classList.add("defined_word");
word.innerText = "Woah, hey guys, welcome to EB Games!"
defParagraph.textContent = "";
defParagraph.appendChild(word);
console.log(defParagraph);
*/