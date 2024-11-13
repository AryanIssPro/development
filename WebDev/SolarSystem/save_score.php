<?php
// save_score.php
$servername = "localhost"; // Replace with your server details
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Get data from POST request
$studentRoll = $_POST['student_roll'];
$studentName = $_POST['student_name'];
$score = $_POST['score'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert data into table (replace 'quiz_scores' with your actual table name)
$sql = "INSERT INTO quiz_scores (student_roll, student_name, score) VALUES ('$studentRoll', '$studentName', '$score')";

if ($conn->query($sql) === TRUE) {
    echo "Score saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
