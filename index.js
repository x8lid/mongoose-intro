const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.use(express.json());
app.use(require('./routes/students.route'));

async function resolve() {
    try {
        await mongoose.connect("mongodb+srv://xalidd999:xalidd999@cluster0.8qhgouy.mongodb.net/students")
        console.log('Успешно соединились с сервером MongoDB')
    }   catch (error) {
        console.log('Ошибка при соединении с сервером MongoDB')
    }

} resolve()

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
});

