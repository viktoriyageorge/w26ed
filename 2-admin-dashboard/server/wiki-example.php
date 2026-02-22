<?php

$url = "https://en.wikipedia.org/w/index.php?search=HTML";

$response = file_get_contents($url);

echo $response;
?>