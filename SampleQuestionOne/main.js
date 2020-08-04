/* 

Using the image displayed in index.html, create the following using JavaScript. 

When the user hovers over the image displayed, the image changes to a img2.jpg 

When the user hovers over the image displayed, a new div is added to the page. Inside the div, there is an H1 that says “Good Luck On Your Final Exam!”.

When the user hovers away from the image, the background colour changes to #C0DE25 and the H1 disappears. 


*/

//Selecting the img that we are going to be manipulating
let image = document.querySelector('img');
let background = document.getElementById('body');
let div = document.querySelector('div');
let mySrc = image.getAttribute('src');

image.addEventListener('mouseenter', changeImageAndBackgroundColour);
image.addEventListener('mouseenter', addH1);
image.addEventListener('mouseleave', changeBackgroundColourAndPicture);
image.addEventListener('mouseout', deleteH1);

//Changing the image to img2 and background to white (original) when the user 
//hovers over the picture.
function changeImageAndBackgroundColour() {
    let mySrc = image.getAttribute('src');
    if (mySrc === 'images/img1.jpg') {
      image.setAttribute('src', 'images/img2.jpg');
    } 
    background.style.backgroundColor = "#FFFFFF";
};

//adding an div and h1 with a message
function addH1() {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.textContent = 'Good Luck On Your Final Exam!';
    div.appendChild(h1);
    background.appendChild(div);
};

//Part Two
//Sets the background colour to green and picture to the img1
//when the users is done hovering the picture 
function changeBackgroundColourAndPicture() {
    let mySrc = image.getAttribute('src');
    background.style.backgroundColor = "#C0DE25";
    if (mySrc === 'images/img2.jpg') {
        image.setAttribute('src', 'images/img1.jpg');
      } 
};

//Part Three
//Selects the H1 (just created) and uses the div to delete it.
function deleteH1() {
    let deleteh1 = document.querySelector('h1');
    let div = deleteh1.parentElement;
    div.removeChild(deleteh1);
};