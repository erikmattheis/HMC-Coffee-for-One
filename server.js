import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.use(express.static('./public'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  origin: 'http://localhost:5173',
};

// enable cors
app.use(cors(corsOptions));

app.options("*", cors());

const router = express.Router();

router.post('/edit', function (req, res, next) {
  editImage(req, res);
  res.end();
});

app.use(router);

function editImage(req, res) {
  const images = fs.readFileSync('./public/gallery/gallery.json');
  const imagesJSON = JSON.parse(images);
  console.log(req.body);
  const image = imagesJSON.find(image => image.name === req.body.name);
  image.title = req.body.title;
  image.description = req.body.description;
  const json = JSON.stringify(imagesJSON);
  fs.writeFileSync(path.join(__dirname, './public/gallery/gallery.json'), json);
}

app.listen(3000, () => {
  console.log("Server running on port 3000");
});