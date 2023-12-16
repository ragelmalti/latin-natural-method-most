function selectWord(e) {
    // Untoggles words that have already been highlighted
    // Solution taken from: https://stackoverflow.com/a/22270709
    existsHighlighted = document.getElementsByClassName('highlighted');
    if (e.target.classList.contains('word')) {
        [].forEach.call(existsHighlighted, function(el) {
            el.classList.remove("highlighted");
        });
        e.target.classList.toggle('highlighted');
        // Figure out how to remove forbidden chars:
        // ' , . : ?
        let selectedWord = e.target.innerHTML;
        console.log(selectedWord);
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

addSpanTagsToLatinWords()