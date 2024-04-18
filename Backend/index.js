const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config()
const pool = require('./database');

const routes= require('./routes/apiRoutes');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);





app.listen(port, async() => {

    // check if the database is connected
    try {
        await pool.query('SELECT 1 + 1 AS solution');
        console.log('Database is connected');
    } catch (error) {
        console.log('Database is not connected');
    }
    
    console.log('Server is running at port ' + port);
});