function selectWord(e) {
    // Untoggles words that have already been highlighted
    // Solution taken from: https://stackoverflow.com/a/22270709
    existsHighlighted = document.getElementsByClassName('highlighted');
    defParagraph = document.getElementById('definition').getElementsByTagName('p')[0];
    if (e.target.classList.contains('word')) {
        [].forEach.call(existsHighlighted, function(el) {
            el.classList.remove("highlighted");
        });
        e.target.classList.toggle('highlighted');
        let selectedWord = e.target.innerHTML;
        
        // Select definition from json file
        fetch('../words.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            // Solution taken from: https://stackoverflow.com/a/1946247
            defParagraph.textContent = "";
            let wordSpan = document.createElement("span");
            wordSpan.classList.add("defined_word");
            wordSpan.textContent = selectedWord + ": ";
            let defSpan = document.createElement("span");
            defSpan.classList.add("def");
            // ADD GRAMMAR AT A LATER TIME
            try {
                let definition = json[selectedWord.toLowerCase()].definition;
                let grammar = json[selectedWord.toLowerCase()].grammar;
                defSpan.textContent = definition;
            }
            catch {
                console.log("Error, undefined word!");
                defSpan.textContent = "undefined"
            }
            defParagraph.appendChild(wordSpan);
            defParagraph.appendChild(defSpan);
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
        lessons[i].innerHTML = lessons[i].innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s,.\?\!:<]+)/g, '$1<span class="word">$2</span>');
        // Fix bug where you can click on paragraph.
        lessons[i].addEventListener('click', function(e) {selectWord(e);}, true);
    }
    return;
}

addSpanTagsToLatinWords();