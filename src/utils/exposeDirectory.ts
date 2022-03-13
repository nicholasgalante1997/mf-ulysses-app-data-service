const fs = require("fs/promises");

// const exposeDirectory = (dirName) =>
//   fs.readdirSync(dirName).reduce((exposes, file) => {
//     exposes[`./${file.replace(/[.].*$/, "")}`] = `${dirName}/${file}`;
//     return exposes;
// }, {});

const exposeDirectory = async (dirname: string) => {
  try {
    const files = await fs.readdir(dirname);
    for (const file of files) {
      console.log(file);
    }
  } catch (e) {
    console.log(e);
  }
};

exposeDirectory("./src/articles");

// export { exposeDirectory };
