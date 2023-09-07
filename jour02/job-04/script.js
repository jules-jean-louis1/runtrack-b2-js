const mail = document.getElementById("student-mail");
const fullName = document.getElementById("student-fullname");
const birthDate = document.getElementById("student-birthdate");
const gender = document.getElementById("student-gender");
const grade = document.getElementById("student-grade");
const btnSubmit = document.getElementById("btnSubmit");
const FormRequest = document.getElementById("form-add-student");

async function myRegisterStudent() {
    try {
        const response = await fetch("request.php", {
            method: "POST",
            body: new FormData(FormRequest),})
        const data = await response.json();
        if (data.status === true) {
            alert("Student added successfully");
        } else {
            alert("Error: " + data.message);
        }
    }
    catch (err) {
        console.error(err);
    }
}

btnSubmit.addEventListener("click", (ev) => {
    ev.preventDefault();
    myRegisterStudent();
})