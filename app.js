const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Server statiske filer fra "public" katalogen
app.use(express.static(path.join(__dirname, 'public')));

// Rute for å serve HTML-filen
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start serveren
app.listen(PORT, () => {
    console.log(`Serveren kjører på http://10.12.15.150:${PORT}`);
});