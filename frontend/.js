const objecty = [];
function handleFormSubmission(event) {
   
  event.preventDefault();//prevent from auto-submission

//creating object and storing form data
const object={

Exercise:document.getElementById('Exercise').value,
Sets:document.getElementById('Sets').value  ,
Reps:document.getElementById('Reps').value
}
objecty.push(object);
document.querySelector('form').reset();
console.warn('added',{objecty});//for display
const form =document.querySelector('form');
form.textContent='\n'+ JSON.stringify(objecty,'\t',2);
displayLoggedExercises();
}

 
function displayLoggedExercises() {
  
  const exerciseListContainer = document.getElementById('Exercise-Form');

  //clearing list
  exerciseListContainer.innerHTML = '';

  // Iterate over the a objecty(arr) to create and append object elements
  objecty.forEach((object, index) => {
    // Create a new list item element for each exercise
    const exerciseItem = document.createElement('li');

    // Set the text content of the list item to display the exercise details
    exerciseItem.textContent = `Exercise: ${object.Exercise} | Sets: ${object.Sets} | Reps: ${object.Reps}`;

    // Append the list item to the exercise list container
    exerciseListContainer.appendChild(exerciseItem);
  });
}