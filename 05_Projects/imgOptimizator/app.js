import fse from "fs-extra";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";
import imagenminGifsicle from "imagemin-gifsicle";
import sharp from "sharp";
//folder con las imágenes sin optimizar
let inputFolder = './src';
//folder donde enviaremos las imágenes optimizadas
let outputFolder = './opt';
//ancho predeterminado para computadores en HD
let targetWidth = 1920;

const processImg = async () => {
    try {
        const files = await fse.readdir(inputFolder);

        for (const file of files) {
            let inputPath = `${inputFolder}/${file}`;
            let outputPath = `${outputFolder}/${file}`;

            await sharp(inputPath).resize(targetWidth).toFile(outputPath);

            await imagemin([outputPath], {
                destination : outputFolder,
                plugins : [
                    imageminJpegtran({quality: 80}), //comprimir imagen JPG con calidad del 80%
                    imageminPngquant(), //comprimir imagen PNG
                    imageminSvgo(), //comprimir imagen SVG
                    imageminWebp({quality: 80}), //comprimir img Webp con calidad del 80%
                    imagenminGifsicle(), //comprimir img GIF
                ]
            });

            console.log("The proccess finished successfully!!");
        }
    } catch (err) {
        console.error(err);
    }
}

processImg();