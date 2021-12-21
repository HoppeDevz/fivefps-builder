const fs = require("fs");
const directories = require("./directories");
const obfuscator = require("javascript-obfuscator");

const baseDir = "C:\\Users\\gabri\\Desktop\\FIVEFPS-PROJECT\\FiveFPS\\app\\release-builds\\five-fps-win32-x64\\resources\\app";

directories.forEach((item) => {

    if (item.allFiles) {

        const dir = baseDir + item.directory;
        const files = fs.readdirSync(dir);

        for (let file of files) {

            const splits = file.split(".");
            const extension = splits[splits.length - 1];

            if (extension == "js") {

                const fileDir = dir + `\\${file}`;

                const data = fs.readFileSync(fileDir).toString("utf-8");

                const result = obfuscator.obfuscate(data, {
                    compact: true,
                    controlFlowFlattening: true,
                    controlFlowFlatteningThreshold: 1,
                    numbersToExpressions: true,
                    simplify: true,
                    stringArrayShuffle: true,
                    splitStrings: true,
                    stringArrayThreshold: 1
                });

                const obfuscateCode = result.getObfuscatedCode();

                fs.writeFileSync(fileDir, obfuscateCode);

                console.log(`[INFO] FILE ${file} OBFUSCATED!`);
            }
        }
    }

    if (!item.allFiles) {

        const dir = baseDir + item.directory;

        for (let file of item.files) {

            const splits = file.split(".");
            const extension = splits[splits.length - 1];

            if (extension == "js") {

                const fileDir = dir + `\\${file}`;

                const data = fs.readFileSync(fileDir).toString("utf-8");

                const result = obfuscator.obfuscate(data, {
                    compact: true,
                    controlFlowFlattening: true,
                    controlFlowFlatteningThreshold: 1,
                    numbersToExpressions: true,
                    simplify: true,
                    stringArrayShuffle: true,
                    splitStrings: true,
                    stringArrayThreshold: 1
                });

                const obfuscateCode = result.getObfuscatedCode();

                fs.writeFileSync(fileDir, obfuscateCode);

                console.log(`[INFO] FILE ${file} OBFUSCATED!`);
            }
        }
    }
});