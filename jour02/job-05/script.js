const btnSubmit = document.getElementById("btnSubmit");
const Form = document.getElementById("form-search-student");
const resultStudent = document.getElementById("result-search-student");

const mySearchStudent = async () => {
    try {
        const response = await fetch("request.php", {
            method: "POST",
            body: new FormData(Form),
        });
        const data = await response.json();
        if (data.status === true) {
            const student = data.student[0]; // Notez que student est un tableau, donc nous prenons le premier élément ici
                resultStudent.innerHTML = `
            <p>Mail: ${student.email}</p>
            <p>Fullname: ${student.fullname}</p>
            <p>Birthdate: ${student.birthdate}</p>
            <p>Gender: ${student.gender}</p>
            <p>Grade: ${student.grade_id}</p>`; // Notez que nous utilisons grade_id pour accéder à l'ID du grade
        } else {
            alert("Error: " + data.message);
        }

    } catch (err) {
        console.error(err);
    }
}

btnSubmit.addEventListener("click", (ev) => {
    ev.preventDefault();
    mySearchStudent();
});