import express from 'express';
import mongodb from 'mongodb';

const app = express();
const mongodbUrl = 'mongodb://localhost/crud';

mongodb.MongoClient.connect(mongodbUrl, function (err, db) {
    app.get('/api/games', (req, res) => {
        db.collection('games').find({}).toArray((err, games) => {
            res.json({games});
        });
    });

    app.use((req, res) => {
        res.status(404).json({
            errors:{
                global: "busy, show me the money..."
            }
        })
    });

    app.listen(8080, () => console.log('Server is running on port:8080'));
});
