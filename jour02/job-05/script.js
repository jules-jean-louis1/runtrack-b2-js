const btnSubmit = document.getElementById("btnSubmit");
const Form = document.getElementById("form-search-student");

const mySearchStudent = async () => {
    try {
        const response = await fetch("request.php", {
            method: "POST",
            body: new FormData(Form),
        });
        const data = await response.json();
        if (data.status === true) {
            alert("Student found successfully");
        } else {
            alert("Error: " + data.message);
        }
    } catch (err) {
        console.error(err);
    }
}