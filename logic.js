document.addEventListener('input', () => {
    //grabbing value of textArea from DOM
    let input = document.querySelector('textArea').value;
    //Splitting value by spaces & counting number of filled indices
    let wordCount = input.split(" ").length
    //Verification
    console.log(wordCount)
    //Using DOM to adjust HTML content to display length through turnary to assure no range is above 500 words
    //Minus one inputted to default from split method from counter spaces
    wordCount > 500 ? document.querySelector('#counter').textContent = `Sorry! I can't count that high :(` : document.querySelector('#counter').textContent = `Total Words: ${wordCount - 1}`
})

