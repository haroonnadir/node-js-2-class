const express = require('express');
const app = express();

// Set EJS as the view engine
app.set("view engine", 'ejs');

// Home route - Now renders the 'user.ejs' template
app.get('/', (req, res) => {
    res.render('user'); 
});

app.listen(3000, () => {
    console.log('Successfully connected on port 3000');
});
