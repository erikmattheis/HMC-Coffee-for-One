import express frokm "express";
import cors = "cors";
import  httpStatus "http-status";
import fs from "fs";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  origin: 'http://localhost:5173',
};

// enable cors
app.use(cors(corsOptions));

app.options("*", cors());

const router = express.Router();

router.post(
  "/gallery/edit",
  editImage
);

app.use(routes);


function editImage(req, res) {
  const images = fs.readFileSync('./gallery.json');
  const imagesJSON = JSON.parse(images);
  const image = imagesJSON.find(image => image.id === req.body.id);
  image.title = req.body.title;
  image.description = req.body.description;
  const json = JSON.stringify(imagesJSON);
  fs.writeFileSync(path.join(__dirname, '../gallery/gallery.json'), json);
}



module.exports = app;
