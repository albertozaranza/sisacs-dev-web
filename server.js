const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/mensagem', (req, res) => {
    res.send({
        express: 'Mensagem enviada pela API'
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));