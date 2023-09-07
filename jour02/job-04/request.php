<?php
function logDB() {
    $bdd = new PDO('mysql:host=localhost;dbname=lp_official', 'root', '');
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $bdd;
}
function my_insert_student(string $email, string $fullname, string $genre, int $grade_id, string $birthdate): bool {
    logDB();
    $query = logDB()->prepare('INSERT INTO student (email, fullname, gender, grade_id, birthdate) VALUES (:email, :fullname, :genre, :grade_id, :birthdate)');
    $query->execute(['email' => $email, 'fullname' => $fullname, 'genre' => $genre, 'grade_id' => $grade_id, 'birthdate' => $birthdate]);
    return true;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['student-mail'];
    $fullname = $_POST['student-fullname'];
    $birthdate = $_POST['student-birthdate'];
    $gender = $_POST['student-gender'];
    $grade = $_POST['student-grade'];
    if (!empty($email) || !empty($fullname) || !empty($birthdate) || !empty($gender) || !empty($grader)) {
        my_insert_student($email, $fullname, $gender, $grade, $birthdate);
        header('Content-Type: application/json');
        echo json_encode(['status' => true, 'message' => 'Etudiant ajouté']);
    } else {
        header('Content-Type: application/json');
        echo json_encode(['status' => false, 'message' => 'Erreur lors de l\'ajout de l\'étudiant']);
    }
}