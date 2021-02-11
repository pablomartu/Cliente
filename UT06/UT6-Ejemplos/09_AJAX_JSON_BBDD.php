<?php
header("Content-Type: application/json; charset=UTF-8");

//$objeto = json_decode($_GET["objeto"],false);
$objeto = json_decode($_POST["objeto"],false);
//$objeto = json_decode('{"tabla":"alumnos","valor":111}');

//Defino los parámetros de conexión de la base de datos
$servidor = "localhost";
$usuario = "root";
$password = "";
$bbdd = "ada";

//Crear la conexión
$conexion = new mysqli($servidor, $usuario, $password, $bbdd);

//Comprobamos la conexión
if ($conexion ->connect_error){
    die("Error en la conexion: ".$conexion->connect_error);
}else{
    //Conexión correcta
    
    //Creamos la consulta SQL
    $sql = "SELECT idAlumno, alumno, puntuacion FROM $objeto->tabla WHERE puntuacion >= $objeto->valor";
    
    //echo $sql;
    
    $resultado = $conexion ->query($sql);
    
    $salida = array();

    $salida = $resultado->fetch_all(MYSQLI_ASSOC);
    
    //print_r($salida);
    echo json_encode($salida);
}
$conexion->close();

?>