/* STEP 3: Store the URL of a JSON file in a variable */
let catsSection = document.getElementById('cats');
let background = document.getElementById('body');
let button = document.getElementById('simpleButton');
let requestURL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';

/* STEP 4: Create a new XHR object */
let request = new XMLHttpRequest();

/* STEP 5: Open a new request using the request() method */
request.open('GET', requestURL);

/* STEP 6: Set JavaScript to accept JSON from the server */
request.responseType = 'json';

/* STEP 7: Send the request with the send() method */

request.send();
/* STEP 8: Add an event handler that listens for a button click to unload all of the JSON information */

button.onclick = request.reponse = function () {
    let cats = request.response;
    console.log(cats);
    catInfo(cats);

    //random editing to the button/background
    background.style.backgroundColor = '#BADA55';
    button.innerHTML = '<strong> <h2> <img src="images/catPicture.jpg" alt="kittyCat" width="300" height="200"> Click me again for MORE cats! (who doesnt want MORE CATS!!) </h2> </strong>';
};
/* STEP 10a: Assemble the show catInfo function */
function catInfo(jsonObj) {
    // STEP 10b: Bind the JSON catInfo object to a var
    let catInfo = jsonObj['cats'];
    // STEP 10c: Loop through the catsInfo object
    for (let i = 0; i < catInfo.length; i++) {
        // STEP 10d: build HTML elements for the content
        let div = document.createElement('div');
        div.setAttribute('class', 'col-md-3');
        let name = document.createElement('h3');
        let species = document.createElement('p');
        let favFoods = document.createElement('p');
        let age = document.createElement('p');

        // STEP 10e: Set the textContent property for each of the above elements, based on the JSON content
        name.textContent = catInfo[i].name;
        species.textContent = catInfo[i].species;
        favFoods.innerHTML = catInfo[i].favFoods;
        age.textContent = catInfo[i].age;

        div.appendChild(name);
        div.appendChild(species);
        div.appendChild(favFoods);
        div.appendChild(age);
        catsSection.appendChild(div);
    }
}