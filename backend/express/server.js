const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send('Mensagem enviada pela API!')
})

app.listen(3000, () => console.log('Listening on port 3000'))