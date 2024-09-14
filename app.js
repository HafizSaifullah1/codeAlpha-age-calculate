
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



