const express = require('express')
const bodyParser  = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const rIndex =  require('./routers/index')
const  app = express()

// Setting ENgine

app.set('view engine'  , 'pug')
 app.set('views' ,  path.join(__dirname , 'views'))

 /// Setting Mongoose

 mongoose.connect('mongodb+srv://user:123asd123asdw@cluster0.p2hq4.mongodb.net/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

    const db = mongoose.connection

    db.on('open', () => {
        console.log('MongoDb Running')
    })

    db.on('error', (err) => {
        console.log('MongoDb ERROR Running', err)
    })

// Static folder

app.use(express.static(path.join(__dirname , 'public')))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use('/api/movies' , rIndex)

app.listen(3000, () => {
    console.log('server 3000 port running')
})


