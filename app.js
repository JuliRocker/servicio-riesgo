const express = require('express');
const app = express();

app.use(express.json());

app.post('/analizar-riesgo', (req, res) => {
    const { email } = req.body;

    res.json({
        email: email,
        expuesto: true,
        nivel_riesgo: "alto",
        recomendaciones: [
            "Cambiar contraseña",
            "Activar autenticación en dos pasos"
        ]
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});