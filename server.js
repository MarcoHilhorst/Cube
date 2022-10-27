const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')




MongoClient.connect('mongodb+srv://Ajeki:TSj7h6egDmpzIfVX@cubecluster.f9frrqd.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }) 
.then (client => {
    console.log('Connected to database')
    const db = client.db('Cube')
    const cubeList = db.collection('cube-list')
    
    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(bodyParser.urlencoded({ extended: true}))
    app.use(bodyParser.json())

    app.listen(3000, function() {
        console.log('listening on 3000')
    })

    app.get("/", (req, res) => {
        res.render('index.ejs')
    })


    app.post('/cube-list', (req, res) => {
        cubeList.insertOne(req.body)
        .then(result => {
            console.log(result)
        })
        .catch(error => console.error(error))
        
    })


    app.put( (req, res) => {
        
    })


    app.delete( (req, res) => {})
    })
    
.catch(console.error)
