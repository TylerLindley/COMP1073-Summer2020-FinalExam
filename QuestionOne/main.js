/* When the button displayed in the browser is clicked, the following should happen:

1.) the background colour of the page changes to  #BADA55
2.) an H1 is created and added to the page that contains the text ‘Thanks for a fun semester!”
3.) The button text changes to clicked 
4.) Good luck on your final exam is removed from the page. 

*/

//Creating variables
let button = document.querySelector('button');
let background = document.getElementById('body');

//Adding event listener to the button to invoke these functions
button.addEventListener('click', changeBackgroundColour);
button.addEventListener('click', addH1);
button.addEventListener('click', deleteP);

//changing the background colour to #BADA55 When button is clicked
function changeBackgroundColour() {
    background.style.backgroundColor = "#BADA55";
}

//Creating an h1 when the button is clicked that displays a message
//and changes the butotns text content to clicked
function addH1() {
    let h1 = document.createElement('h1');
    h1.textContent = 'Thanks for a fun semester';
    background.appendChild(h1);
    button.textContent = 'Clicked';
}

//deleting the paragraph node when the button is clicked.
function deleteP() {
    let p = document.querySelector('p');
    background = p.parentElement;
    background.removeChild(p);
}