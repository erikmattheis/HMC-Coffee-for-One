import fs from 'fs';
import path from  'path';
import url from 'url';

/* get the current directory like one could in CJS */

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

/* full-size images making up the gallery should be in the same directory as this file */
function getDirectoryListing() {
  
  const directory = fs.readdirSync('./');

  const files = directory.filter(file => file.endsWith('.jpg'));

  return files;

}

/* expects format IMG_20200523_[xxxxx].jpg */

async function renameFiles() {

  const renamedFiles = [];

  const files = getDirectoryListing();

  files.forEach((file) => {
    
    let str = file.split('_')[1];

    if (str === undefined) {
      return;
    }

    if (!isDate(str)) {
      return;
    }

    let name = str;

    let n = 1;
    
    while (doesFileExist(renamedFiles, name)) {
      name = `${str}-${n}`;
      n = n + 1;
    }

    renamedFiles.push(name);

    fs.renameSync(
      path.join(__dirname, `../gallery/${file}`),
      path.join(__dirname, `../gallery/${name}.jpg`)
    );

  });
  console.log('renameFiles done');
}

function isDate(str) {
  if (str.length !== 8) {
    return false;
  }
  const formatted = formatDate(str);
  return !isNaN(Date.parse(formatted));
}

function formatDate(str) {
  return `${str.slice(0,4)}-${str.slice(4,6)}-${str.slice(6,8)}`;
}

function doesFileExist(renamedFiles, name) {
  return renamedFiles.includes(name);
}

function makeJSONFile() {

  const files = getDirectoryListing();

  const formattedGalleryFiles = formatGalleryFiles(files);

  const json = JSON.stringify(formattedGalleryFiles);

  fs.writeFileSync(path.join(__dirname, '../gallery/gallery.json'), json);

}

function formatGalleryFiles(files) {
  return files.map((file) => {
    const title = formatDate(file.split('.')[0]);
    return {
      name: file,
      title,
      description: '',
    }
  });
}

await renameFiles();

makeJSONFile();
