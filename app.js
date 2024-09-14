
function calculateAge() {

    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    if (!day | !month | !year) {
        document.getElementById('result').innerHTM = "Please fill in all fields"
        return

    }
const today = new Date();
const birthDate =new Date(year,month -1 ,day);

let age = today.getFullYear() - birthDate.getFullYear()
const monthDifference = today.getMonth() - birthDate.getMonth();

if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate())){
age--;
}

document.getElementById('result').innerHTML = `your age ${age} years old`
}



// function calculateAge() {
//   const day = document.getElementById('day').value;
//   const month = document.getElementById('month').value;
//   const year = document.getElementById('year').value;

//   // Check if the input fields are empty
//   if (!day || !month || !year) {
//     document.getElementById('result').innerHTML = "Please fill in all fields.";
//     return;
//   }

//   // Create the current date and birth date objects
//   const today = new Date();
//   const birthDate = new Date(year, month - 1, day); // Month is 0-based in JavaScript

//   // Calculate the age
//   let age = today.getFullYear() - birthDate.getFullYear();
//   const monthDifference = today.getMonth() - birthDate.getMonth();

//   // Adjust the age if the birthday hasn't occurred yet this year
//   if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//     age--;
//   }

//   // Display the result
//   document.getElementById('result').innerHTML = `You are ${age} years old.`;
// }
