const fsPromises = require("fs/promises");

const readArticleDirectory = async (dirname: string) => {
    try {
      const files = await fsPromises.readdir(dirname);
      for (const file of files) {
        if ((file as string).includes('types') || (file as string).includes('.d.ts')) continue;
        const fileContent = await fsPromises.readFile(`./src/articles/${file}`, 'utf-8');
        console.log({ file: JSON.stringify(fileContent) });
      }
    } catch (e) {
      console.log(e);
    }
  };
  
readArticleDirectory("./src/articles");