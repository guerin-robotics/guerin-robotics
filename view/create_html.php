<?php
if (isset($_POST['content'])) {
    $content = $_POST['content'];
    $fileName = "new_page.html"; // You can generate a unique name if needed

    // Create and write the content to a new HTML file
    file_put_contents($fileName, $content);

    echo "HTML page created successfully";
} else {
    echo "No content received";
}
?>