const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET all data from database
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM feedback ORDER BY date;`;
    pool.query(sqlText)
        .then((result) => {
            console.log('Got stuff back from the database', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;