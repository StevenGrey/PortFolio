<?php
if(isset($_POST['emailExp']) && isset($_POST['obj']) && isset($_POST['contenuMail']))
{
    $destinataire="stevengrey45@gmail.com";

    $expediteur = $_POST['emailExp'];
    $obj = $_POST['obj'];
    $msg = $_POST['contenuMail'];
    
    echo($expediteur, $obj, $msg);
    //mail($destinataire,$obj,$msg,$expediteur);
}
?>