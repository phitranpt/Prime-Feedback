const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET all data from database
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM feedback ORDER BY date;`;
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

//POST new feedback to database
router.post('/', (req, res) => {
    const feedback = req.body;
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ('$1, $2, $3, $4')`;
    pool.query(sqlText, [feedback.feedling, feedback.understanding, feedback.support, feedback.comments])
        .then((response) => {
            console.log('added feedback to the database', feedback);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;