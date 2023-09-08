const mail = document.getElementById("student-mail");
const fullName = document.getElementById("student-fullname");
const birthDate = document.getElementById("student-birthdate");
const gender = document.getElementById("student-gender");
const grade = document.getElementById("student-grade");
const btnSubmit = document.getElementById("btnSubmit");
const FormRequest = document.getElementById("form-add-student");
const resultStudent = document.getElementById("result-add-student");

async function myRegisterStudent() {
    try {
        const response = await fetch("request.php", {
            method: "POST",
            body: new FormData(FormRequest),})
        const data = await response.json();
        if (data.status === true) {
            resultStudent.innerHTML = `<h3>Student added</h3>`;
            resultStudent.style.color = "green";
        } else {
            resultStudent.innerHTML = `<h3>Error: ${data.message}</h3>`;
            resultStudent.style.color = "red";
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