const fs = require('fs');

const exposeDirectory = (dirName) =>
  fs.readdirSync(dirName).reduce((exposes, file) => {
    exposes[`./${file.replace(/[.].*$/, "")}`] = `${dirName}/${file}`;
    return exposes;
}, {});

export { exposeDirectory };