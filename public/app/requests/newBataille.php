<?php
// set up the connection variables
        $db_name  = 'bataille_navale';
        $hostname = 'localhost';
        $username = 'ben';
        $password = '';
/////////////////////////////////
//database settings
$connect = mysqli_connect($hostname, $username, $password, $db_name);

if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = mysqli_query($connect,
    "
    METTRE UNE REQUETE
    ");

//echo "<p>result:</p>";
//var_dump($result);
//echo "<p>aaaaaaaaaaaaa</p>";
$data = array();
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
  $data[] = $row;
}

mysqli_close($connect);
echo json_encode($data);
?>