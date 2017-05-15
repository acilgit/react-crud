import express from 'express';
import mongodb from 'mongodb';

const app = express();
const mongodbUrl = 'mongodb://localhost/crud';

mongodb.MongoClient.connect(mongodbUrl, function(err, db){

    app.get('/api/games', (req, res) => {
        db.collection('games').find({}).toArray((err, games) => {
            res.json({games});
        });
    });
    app.listen(8080, () => console.log('Server is running on port:8080'));
});
