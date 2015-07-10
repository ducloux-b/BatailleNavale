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
    SELECT 
        `nom_partie`, 
        j1.`nom_joueur` as j1_nom_joueur, 
        j2.`nom_joueur` as j2_nom_joueur,
        j1.`email_joueur` as j1_email, 
        j2.`email_joueur` as j2_email, 
        g1.`nb_bateaux` as j1_nb_bateaux, 
        g2.`nb_bateaux` as j2_nb_bateaux,
        g1.`positions_bateaux` as j1_positions_bateaux, 
        g2.`positions_bateaux` as j2_positions_bateaux
    FROM 
        `bataille` b 
        JOIN `joueur` j1 ON b.`id_joueur_1` = j1.`id_joueur` 
        JOIN `joueur` j2 ON b.`id_joueur_2` = j2.`id_joueur`
        JOIN `grille` g1 ON b.`id_grille_joueur_1` = g1.`id_grille`
        JOIN `grille` g2 ON b.`id_grille_joueur_2` = g2.`id_grille`
    ");

//echo "<p>result:</p>";
//var_dump($result);
//echo "<p>aaaaaaaaaaaaa</p>";
$data = array();
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
  $data[] = $row;
  //var_dump($row);
}

mysqli_close($connect);
    echo json_encode($data);
/////////////////////////////////
/*
        // connect to the database
        $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);

        // a query get all the records from the users table
        $sql = 'SELECT id, name, email FROM users';

        // use prepared statements, even if not strictly required is good practice
        $stmt = $dbh->prepare( $sql );

        // execute the query
        $stmt->execute();

        // fetch the results into an array
        $result = $stmt->fetchAll( PDO::FETCH_ASSOC );

        // convert to json
        $json = json_encode( $result );

        // echo the json string
        echo $json;
*/
?>