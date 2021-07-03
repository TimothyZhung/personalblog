<?php
// echo "hello,world";
// // print_r($_POST);
// echo "<br>";
if($_POST){
    $type = $_POST["type"];
    $des =  $_POST["description"];
    echo 'yes!';
    echo $type;
    $json_str = file_get_contents('photos.json');
    // print_r($json_str);
    $data = json_decode($json_str, true);

    $data["all"][] = array(
        'type' => $type,
        'description' => $des
    );

    $json = json_encode($data);
    file_put_contents('photos.json', $json);
}


if($_FILES){
    $fileInfo = $_FILES["upFile"];
    $fileName = $fileInfo["name"];
    $filePath = $fileInfo["tmp_name"];
    echo "photosWall/".$fileName;
    // echo "<br>";
    // echo $filePath;
    move_uploaded_file($filePath, "photosWall/".$fileName);

    $json_str = file_get_contents('photos.json');
    // print_r($json_str);
    $data = json_decode($json_str, true);

    $len = count($data["all"]);
    // echo $len;
    $data["all"][$len-1]['path'] = "photosWall/".$fileName;
    $json = json_encode($data);
    file_put_contents('photos.json', $json);
}
?>