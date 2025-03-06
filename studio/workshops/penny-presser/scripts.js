// get the press button
var pressButton = document.querySelector('button[name="press"]')
var pennySelect = document.querySelector('select[name="penny"]')
var studentSelect = document.querySelector('select[name="student"]')
var pennyImage = document.querySelector('.penny')

// log the elements
console.log(pressButton);

// add event listen to press button
pressButton.addEventListener('click', () => {

    // log the student value
    console.log(studentSelect.value);
   
    // log the penny value
    console.log(pennySelect.value);

    // set the penny image src
    // pennyImage.src = 'img/' + pennySelect.value;
    pennyImage.src = 'https://' + studentSelect.value + '.interactive.rodeo/studio/workshops/penny-presser/img/' + pennySelect.value;

    // log the penny image
    console.log(pennyImage);

})