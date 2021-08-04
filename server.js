const express = require('express');
const path = require('path')
const mongoDB = require('./config/db')
const fileUpload = require('express-fileupload');


const app = express();

//PORT
const PORT = process.env.PORT || 5000

//connect db
mongoDB()

//initmiddleware
app.use(express.json({ extented: false }));

//define routes
app.use("/static", express.static("public"));

app.use(fileUpload());

//upload End point
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  file.mv(`${__dirname}/frontend/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

//routes
app.use('/api/profile', require('./routes/profile'))


app.listen(PORT, () => {
  console.log(`server is started at ${PORT}`)
})