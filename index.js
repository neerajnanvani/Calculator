// input box selector
const inputBox = document.getElementById('inputBox');

// all buttons to trigger actions according values
const buttons = document.querySelectorAll('button');

// store value of input box
let inputVal = "";

// convert buttons array
let arr = Array.from(buttons);


// iterate on buttons and apply event listners
arr.forEach((button) => {
    button.addEventListener('click', (e)  => {

        // chek for answer action
        if(e.target.innerHTML == '=') {
            inputVal = eval(inputVal);
            inputBox.value = inputVal;
        }

        // check for del button action
        else if(e.target.innerHTML == 'DEL') {
            inputVal = inputVal.slice(0, -1);
            inputBox.value = inputVal;
        }

        // check for all clear action
        else if(e.target.innerHTML == 'AC') {
            inputVal = "";
            inputBox.value = "";
        }

        // otherwise do add the values to inputVal variable
        else {
            inputVal += e.target.innerHTML;
            inputBox.value = inputVal;
        }
    })
})