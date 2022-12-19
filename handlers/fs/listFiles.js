import {readdir, lstat} from 'node:fs/promises';
import path from "node:path";

export const listFiles = async (workingPath) => {

    try {
        const files = await readdir(workingPath);
        console.log(files)
        const filesAndTypes = []
        for await (const file of files) {
            filesAndTypes.push({
                Name: file,
                Type:  ((await lstat(workingPath + path.sep + file)).isFile())? 'file' : 'directory'
            })
        }

        console.table(filesAndTypes.sort((a,b) =>(a.Type > b.Type) ?  1 : ((a.Type < b.Type) ? -1 : 0)))




    } catch (err) {
        console.error(err);
    }
}
