import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use('/', (req, res) => {
    res.send('Welcome, to node babel')
})

app.listen(5000, () => console.log('App is listening to port 5000'))