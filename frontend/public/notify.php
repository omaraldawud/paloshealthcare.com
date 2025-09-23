<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST['email'];

    if (!$email) {
        http_response_code(400);
        echo json_encode(["error" => "Email is required"]);
        exit;
    }

    $to = "info@paloshealthcare.com"; // where you want to receive notifications
    $subject = "New Notify Request";
    $message = "New subscriber: " . $email;
    $headers = "From: info@paloshealthcare.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to send email"]);
    }
}
?>
