<?php


class ConsultaUsuario{
    public function registrarUsuario($email,$contrasena){
        $objConexion = new Conexion();
        $conexion = $objConexion->	get_conexion();
    
        $insert = "INSERT INTO usuarios(id_usuario,email,contrasena) VALUES (:id_usuario,:email,:contrasena)";
    
        $result = $conexion -> 	prepare($insert);
        
        $result->bindParam(":id_usuario",$id_usuario);
        $result->bindParam(":email",$email);
        $result->bindParam(":contrasena",$contrasena);
    
        $result->execute();
        echo'<script>alert("Bienvenido soldado")</script>';
    
        echo "<script> location.href='index.html'</script>";
        
    
    }

    public function validarSesion($email, $contrasena){

        
        $objconexion = new Conexion();
        $conexion = $objconexion ->get_conexion();
        
        $select= "SELECT * FROM usuarios WHERE email=:email";
        $result = $conexion->prepare($select);
        
        $result ->bindParam(":email",$email);
        
        $result -> execute();
       
        
        
        if ($f = $result->fetch()) {
        
        
        if($contrasena == $f['contrasena']){
        echo '<script>alert("Inicio de sesión correcto")</script> '; 
        echo "<script> location.href='index.html'</script>";
        
        } else{
            echo '<script>alert("Contraseña incorrecta")</script> ';
            echo "<script> location.href='index.html'</script>";
        } 
        }
        
        
        
        }
        



}




?>