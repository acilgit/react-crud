const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

// import mongodb from 'mongodb';
// import bodyParser from 'body-parser';


const mongodbUrl = 'mongodb://localhost/crud';
const app = express();
app.use(bodyParser.json());

function validate(data, res) {
    //let errors = {global:"make a thing to show"};
    let errors = {};
    if (false) {
        res.status(400).json({errors});
        return false;
    } else {
        return true;
    }
}

mongodb.MongoClient.connect(mongodbUrl, function (err, db) {
    app.get('/api/games', (req, res) => {
        db.collection('games').find({}).toArray((err, games) => {
            res.json({games});
        });
    });

    app.post('/api/games', (req, res) => {
        if (validate(req.body, res)) {
            let {title, cover} = req.body;
            console.log(req.body);
            setTimeout(()=> {
                db.collection('games').insert({title, cover}, (err, doc) => {
                    if (err) {
                        res.status(500).json({errors: {global: 'something went wrong '}});
                    } else {
                        console.log(doc);
                        res.json(doc.ops[0]);
                    }
                })
            }, 5000)
        } else {
            console.log('error');
        }
    });

    app.use((req, res) => {
        res.status(404).json({
            errors: {
                global: "busy, show me the money..."
            }
        })
    });

    app.listen(8080, () => console.log('Server is running on port:8080'));
});
