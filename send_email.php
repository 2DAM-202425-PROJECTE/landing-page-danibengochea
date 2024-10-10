<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $comentari = htmlspecialchars($_POST['comentari']);

    $to = "danibengochea@iesebre.com";
    $subject = "Comentari de $nom";
    $message = "Nom: $nom\nCorreu: $email\nComentari:\n$comentari";
    $headers = "From: $email";

    if (empty($nom) || empty($email) || empty($comentari)) {
        echo "Tots els camps són obligatorios.";
        exit;
    }

    if (mail($to, $subject, $message, $headers)) {
        echo "Comentari enviat amb èxit!";
    } else {
        echo "Error enviant el comentari.";
    }
}
?>
