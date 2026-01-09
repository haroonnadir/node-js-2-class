const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Successfully connected on port 3000');
});

// Home route
app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});