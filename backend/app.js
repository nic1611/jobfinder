const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Job = require("./models/Job")

const PORT = 3000;

app.listen(PORT, function () {
    console.log(`O express está rodando na porta ${PORT}`)
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// db connection
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco");
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar", err);
    });


// routes
app.get('/', (req, res) => {

    let search = req.query.job;
    let query = '%' + search + '%';

    if (!search) {
        Job.findAll({ order: [['createdAt', 'DESC']] })
            .then(jobs => { res.json(jobs) })
            .catch(err => console.log(err));
    } else {
        Job.findAll({ where: { title: { [Op.like]: query } }, order: [['createdAt', 'DESC']] })
            .then(jobs => { res.json(jobs) })
            .catch(err => console.log(err));

    }
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));
