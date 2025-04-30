import express from 'express';
import mongoose from 'mongoose';
const app = express()
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {res.status(200).send("Hello Suhail")});
app.listen(PORT, () => console.log(`Listening on localhost: ${PORT}`))