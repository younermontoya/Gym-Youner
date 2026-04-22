<?php
require_once "../../gym-youner/models/conexion_db.php";
require_once '../../gym-youner/models/consultasUsuario.php';


$email = $_POST['email'];
$contrasena = $_POST['contrasena'];
$objConsultas = new ConsultaUsuario();
    $result = $objConsultas->registrarUsuario($email,$contrasena);
    
echo "<script> location.href='../index.html'</script> ";

?>