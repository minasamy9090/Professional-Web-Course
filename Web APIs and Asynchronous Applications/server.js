projectData = {};

const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyParser.urlencoded(({ extended: false })));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());
app.use(express.static('website'));

//////////////////////////////
const appdata = {};
app.get("/", function (req, res) {
    res.send("Hello World");
})

app.get("/all", function (req, res) {
    res.send(appdata);
})
//////////////////////////
const data = [];
app.post('/addData', function (req, res) {
    data.push(req.body);
    console.log(data);
})
fakeData = {
    "Fake 1": "Fake 1"
}
app.get("/fakeData", function (req, res) {
    res.send(fakeData);
});
app.post("/addAnimal", addAnimal);
const dataEndPoint = [];
function addAnimal(req, res) {
    const data = {
        animal: req.body.animal
    }
    dataEndPoint.push(data);
};

const port = 8080;
// const server = app.listen(port, () => { console.log(`Listening on ${port}`) });
const server = app.listen(port, listening);
function listening() {
    console.log("Running");
    console.log(`On Port ${port}`);
}