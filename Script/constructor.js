// 1. Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR
document.getElementById('heading').innerContent = 'Javascript';

// 2. Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself. I accomplished this because I believed in myself'
let paragraphs = document.getElementsByClassName('paragraph');
paragraphs[0].innerContent = 'This is a language I have mastered and I am proud of myself. I accomplished this because I believed in myself';

// 3. Use the h3 element and change the heading(Subheading) to 'Things I've accomplished so far'. Hint: use querySelector
document.querySelector('h3').innerContent = "Things I've accomplished so far";

// 4. Change the paragraph below Question3(above) to 'I have discovered that I can accomplish anything I put my mind to'Hint: Use querySelectorAll and index or use getElementByTagName and index
document.getElementsByTagName('p')[1].innerContent = 'I have discovered that I can accomplish anything I put my mind to';

// 5.1. Attach the first input to a variable
let firstInput = document.querySelector('input[data-firstMultiply]');

// 5.2. Attach the second input to a variable
let secondInput = document.querySelector('input[data-secondMultiply]');

// 5.3. Attach the FIRST button to a variable(going to add an eventListener to button)
let firstButton = document.querySelector('button[data-calculate1]');

// 5.4. Attach the FIRST span element to a variable(To display the information to)
let firstSpan = document.querySelector('span[data-first]');

// 5.5. Create a normal function that allows us to multiply the 2 inputs together and writes the information to the FIRST span element.
function multiplyInputs() {
  let result = parseInt(firstInput.value) * parseInt(secondInput.value);
  firstSpan.innerContent = result;
}

// 5.6. Add an event listener to the button that runs the function that you created
firstButton.addEventListener('click', multiplyInputs);

// 6. Now you will have to return the calculation of the 2 numbers from the modulus input for eg.......4....%....2....= 0
// 6.1 Set the first modulus input to a variable 
let firstModulusInput = document.querySelector('input[data-firstModulus]');

// 6.2 Set the send modulud input to a variable
let secondModulusInput = document.querySelector('input[data-secondModulus]');

// 6.3 Set the SECOND span to a varable(will display answer)
let secondSpan = document.querySelector('span[data-second]');

// 6.4 Set the SECOND button to a variable(to run event listener)
let secondButton = document.getElementById('calculate2');

// 6.5 Create a normal function to calculate the modulus of the inputs
function calculateModulus() {
  let result = parseInt(firstModulusInput.value) % parseInt(secondModulusInput.value);
  secondSpan.innerContent = result;
}

// 6.6 Add an event listener to the button which will run the function you created
secondButton.addEventListener('click', calculateModulus);

// 7.1 Change the text of 'Bubble Tea' to 'White Tea'
document.getElementById('bubbleTea').innerContent = 'White Tea';

// 7.2 Change the text of 'Green Tea' to 'Black tea'
document.querySelector('.greenTea').innerContent = 'Black Tea';

// 7.3 Change the text of 'Iced Tea' to 'Herbal Tea'
document.querySelector('[data-icedTea]').innerContent = 'Herbal Tea';

// 8. Declare a variable called lastName and add a value to it(value must be a string)
let lastName = 'Smith';

// 9. Declare a variable called parentsAge and give it a value of 20(value must be a number)
let parentsAge = 20;

// 10. Create an array with called coolCars and give it the following value: ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']
let coolCars = ['BMW', 'Bugati', 'Ferrari', 'McLaren', 'Mercedes'];

// 11. Write the code to change the 'McLaren' value to 'Lamborghini' in the array Hint: use indexing to access different values in arrays
coolCars[3] = 'Lamborghini';

// 12. Use a for loop to loop through the array, and console.log every value inside of the array.
for (let i = 0; i < coolCars.length; i++) {
  console.log(coolCars[i]);
}

// 13. Reverse the array and console.log the reversed array.
coolCars.reverse();
console.log(coolCars);

// 14. Write the code to remove the last item in the array(coolCars not the reversed array) and store it in a variable....which means your array of coolCars must look like : ['BMW','Bugati','Ferrari','Lamborghini]
let removedCar = coolCars.pop();

// 15. Now write the code to use the variable you made in no.14 and add it to the FRONT of the array. Your coolCars array should now look like: [ 'Mercedes', 'BMW', 'Bugati', 'Ferrari', 'Lamborghini']
coolCars.unshift(removedCar);

// 16. Write a simple conditional statement that will check if someone is younger than 18 or older than 18. The variable will be called age = 18 then a=17 to check
let age = 18;
let a = 17;
if (a < 18) {
  console.log('Younger than 18');
} else {
  console.log('18 or older');
}

// 17. Make use of a switch statement and create a possible solution for no.16
switch (true) {
  case (a < 18):
    console.log('Younger than 18');
    break;
  default:
    console.log('18 or older');
}

// 18. USE A SWITCH statement!!!!!
let mathsMark = 77;
let physicsMark = 70;
let englishMark = 50;
let averageMark = (mathsMark + physicsMark + englishMark) / 3;

switch (true) {
  case (averageMark >= 80 && averageMark <= 100):
    console.log(`You did well, your average was ${averageMark}`);
    break;
  case (averageMark >= 70 && averageMark <= 79):
    console.log(`Your average was good, it was ${averageMark}`);
    break;
  case (averageMark >= 50 && averageMark <= 69):
    console.log(`Your average was okay, it was ${averageMark}`);
    break;
  default:
    console.log('You must work harder next time');
}

// 19. USE the variable that you created in question 9 and use a while loop to print each iteration to the console and at that same instance, increase the variable used by 1
let i = 0;
while (i < parentsAge) {
  console.log(i);
  i++;
}

// 20. USE while or a do while loop to print out the array of Question15(coolCars).
let j = 0;
while (j < coolCars.length) {
  console.log(coolCars[j]);
  j++;
}

// 21. Create an object called chair and give it a 
//         property of legs and a value of 4,
//         a secondProperty of material with a value of plastic
let chair = {
  legs: 4,
  material: 'plastic'
};

// 22. Write the code that adds a property of 
//         'armRestBars' with a value of 'none' 
//         to the chair object.
chair.armRestBars = 'none';

// 23.1.   What code will I write to view the value of the armRestBars.
console.log(chair.armRestBars);

// 23.2    What code can I use to delete the property of legs with the value of 4.
delete chair.legs;

// 24. Create an factory function that can be used to return objects of electrical devices.
//         the factory function should include the properties of 
//         name,
//         type,
//         year,
//         description
function createElectricalDevice(name, type, year, description) {
  return {
    name: name,
    type: type,
    year: year,
    description: description
  };
}

// 24. Create 4 objects of your choice using a factory function and console.log() each of them
let device1 = createElectricalDevice('Laptop', 'Computer', 2022, 'Portable computer');
let device2 = createElectricalDevice('Refrigerator', 'Appliance', 2020, 'Keeps food cold');
let device3 = createElectricalDevice('Television', 'Appliance', 2021, 'Displays images');
let device4 = createElectricalDevice('Microwave', 'Appliance', 2019, 'Heats food quickly');
console.log(device1, device2, device3, device4);

// 25. Create a constructor function to make an object of different car, types the properties should include,
//         this.brand,
//         this.model,
//         this.year,
//         this.transmission,
//         this.drivetrains
function Car(brand, model, year, transmission, drivetrains) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.transmission = transmission;
  this.drivetrains = drivetrains;
}

