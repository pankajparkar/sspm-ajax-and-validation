// Shortcut for Comment - Ctrl + K + C
// Shortcut for UnComment - Ctrl + K + U
// Data Types
// String
// Integer -Number
// Bool - Boolean
// Array - 
// Object - 
// undefined -
// null -

console.log('My File Loaded');

var myString = 'Pankaj';
var myNumber = 40;
var myBoolean = true;
var myArray = [1];
var student = {
    name: 'Pankaj',
    age: 30,
    address: 'Mumbai',
    isActive: false,
};

console.log(myString, myNumber, myBoolean, myArray, student);

// Fucntion based object creation
function Student1(studentId, name) {
    this.studentId = studentId;
    this.name = name;
}
var student = new Student1(1, 'Pankaj');

console.log(student);

// Class based object creation
class Student {
    constructor(studentId, name) {
        this.studentId = studentId;
        this.name = name;
    }
}

var studentClassBasedObject = new Student(2, 'Parkar');
console.log(studentClassBasedObject);

// // JAVA / C#
// public Class A {
//     int StudentId {get; Set;}
//     string Name {get; Set;}
//     constructor(int studentId, string name) {
//         this.studentId = studentId
//         this.Name = name;
//     }
// }

// A a = new A(1, 'Test')


// Document Object Model

// Button 1
// Read DOM
var addToBagButtons = document.querySelectorAll('[id*="add-to-bag-"]');

for(let i = 0; i < addToBagButtons.length; i++) {
    let addToBagButton = addToBagButtons[i];
    addToBagButton.addEventListener('click', function (event) {
        console.log('Event Fired '+ i, event);
        // Modify DOM
        // Change the text of button
        // addToBagButton.innerText = 'Go to Bag <i class="bi bi-bag"></i>';
        addToBagButton.innerHTML = 'Go to Bag <i class="bi bi-arrow-right"></i>';
        addToBagButton.classList.add('btn-danger');
        addToBagButton.classList.remove('btn-primary');

        let myBagCount = document.getElementById('my-bag-count');
        let count = myBagCount.innerText;
        console.log(count);
        myBagCount.innerText = Number(count) + 1;
        myBagCount.classList.remove('hide');
    })

    addToBagButton.addEventListener('click', function (event) {
        console.log('2nd Event Fired '+ i, event);
    })
    
    addToBagButton.addEventListener('click', function (event) {
        console.log('3rd Event Fired '+ i, event);
    })
}

// console.dir(addToBagButton1);

// addToBagButton1.onclick = function (event) {
//     console.log('Event Fired', event)
// }

// var array = [1,2,3];
// console.log(array instanceof Array);

// var obj = {name: 'Pankaj'};
// console.log(obj  instanceof Array);


// // Button 2
// var addToBagButton2 = document.querySelector('#add-to-bag-2');
// console.dir(addToBagButton2);

// addToBagButton2.onclick = function (event) {
//     console.log('Event Fired', event)
// }

// // Button 3
// var addToBagButton3 = document.querySelector('#add-to-bag-3');
// console.dir(addToBagButton3);

// addToBagButton3.onclick = function (event) {
//     console.log('Event Fired', event)
// }

// // Button 2
// var addToBagButton4 = document.querySelector('#add-to-bag-4');
// console.dir(addToBagButton4);

// addToBagButton4.onclick = function (event) {
//     console.log('Event Fired 4', event)
// }

// var input = document.querySelector('#search-navbar');

// input.onfocus = function(event) {
//     console.log('On Focus Fired ', event);
// }

// input.onblur = function(event) {
//     console.log('On onblur Fired ', event);
// }

// input.onkeyup = function(event) {
//     console.log('On keyup Fired ', event);
// }

// input.onkeydown = function(event) {
//     console.log('On keydown Fired ', event);
// }

// input.onmouseenter = function(event) {
//     console.log('On mouseenter Fired ', event);
// }

// input.onmouseleave = function(event) {
//     console.log('On mouseleave Fired ', event);
// }

// var addToBagButton1 = document.querySelector('#add-to-bag-1');

// addToBagButton1.onfocus = function(event) {
//     console.log('On Focus Fired ', event);
// }

// addToBagButton1.onblur = function(event) {
//     console.log('On onblur Fired ', event);
// }

// addToBagButton1.onkeyup = function(event) {
//     console.log('On keyup Fired ', event);
// }

// addToBagButton1.onkeydown = function(event) {
//     console.log('On keydown Fired ', event);
// }

// addToBagButton1.onmouseenter = function(event) {
//     console.log('On mouseenter Fired ', event);
// }

// addToBagButton1.onmouseleave = function(event) {
//     console.log('On mouseleave Fired ', event);
// }



