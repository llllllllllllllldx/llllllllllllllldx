<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Propuesta de Matrimonio</title>
    <link rel="stylesheet" href="styles.css">
    <script>
        function moverNo() {
            // Hacer que el mensaje "No" se mueva aleatoriamente por la pantalla
            const noButton = document.getElementById('noButton');
            const randomX = Math.random() * 90; // Porcentaje de la pantalla
            const randomY = Math.random() * 90;

            noButton.style.position = 'absolute';
            noButton.style.left = randomX + '%';
            noButton.style.top = randomY + '%';
        }

        function aceptarPropuesta() {
            document.getElementById('mensaje').innerHTML = "¡Sí! Te amo mucho, ¡siempre contigo! ❤️";
            document.getElementById('mensaje').style.color = "#e74c3c";
            document.getElementById('mensaje').style.fontSize = "2em";
            document.getElementById('mensaje').style.fontWeight = "bold";
            document.getElementById('siButton').style.display = 'none';
            document.getElementById('noButton').style.display = 'none';
        }
    </script>
</head>
<body>
    <div class="container">
        <h1>¿Quieres casarte conmigo?</h1>
        <p id="mensaje">Haz tu elección...</p>
        <button id="siButton" class="btn" onclick="aceptarPropuesta()">Sí</button>
        <button id="noButton" class="btn" onclick="moverNo()">No</button>
    </div>
</body>
</html>
