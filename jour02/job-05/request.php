<?php
function logDB() {
    $bdd = new PDO('mysql:host=localhost;dbname=lp_official', 'root', '');
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $bdd;
}
function my_search_student(string $email): array {
    logDB();
    $query = logDB()->prepare('SELECT * FROM student WHERE email = :email');
    $query->execute(['email' => $email]);
    return $query->fetchAll(PDO::FETCH_ASSOC);
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email-search-student'];
    if (!empty($email)) {
        $student = my_search_student($email);
        header('Content-Type: application/json');
        echo json_encode(['status' => true, 'message' => 'Etudiant trouvé', 'student' => $student]);
    } else {
        header('Content-Type: application/json');
        echo json_encode(['status' => false, 'message' => 'Erreur lors de la recherche de l\'étudiant']);
    }
}
?>