const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET all data from db
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM feedback ORDER BY date DESC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log('got stuff back from the database', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

//POST new feedback to db
router.post('/', (req, res) => {
    console.log('in post');
    const feedback = req.body;
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;
    const feeling = feedback[0].feeling
    const understand = feedback[1].understand
    const support = feedback[2].support
    const comment = feedback[3].comment
    pool.query( sqlText, [feeling, understand, support, comment] )
        .then((response) => {
            console.log('added feedback to the database', feedback);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`error making database query ${sqlText}`, error);
            res.sendStatus(error);
        })
})

//DELETE feedback from db
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let sqlText = 'DELETE FROM feedback WHERE id=$1;';
    pool.query(sqlText, [reqId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
})

module.exports = router;