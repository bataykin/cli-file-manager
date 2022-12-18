import process, {argv} from 'node:process'
import {fileURLToPath} from "node:url";
import path from "node:path";
import {cpus} from "../handlers/cpuInfo.js";
import {eol} from "../handlers/eol.js";
import {homedir} from "../handlers/homedir.js";
import {user} from "../handlers/username.js";
import {architecture} from "../handlers/arch.js";

const userName = argv[2].split('=')[1].trim(" ")
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const main = async () => {
    console.log(`Welcome to the File Manager, ${userName}`)
    console.log(`You are currently in ${__dirname}`)

    process.stdin.setEncoding('utf-8');
    process.stdin.resume();


    process.stdin.on('data', (chunk) => {
        // console.log(`Received ${chunk.length} bytes of data.`);
        // process.stdout.write(chunk)
        if (chunk.toString().match('.exit')) {
            console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
            process.exit()
        } else if (chunk.toString().match('os --cpus')) {
            cpus()
        } else if (chunk.toString().match('os --EOL')) {
            eol()
        } else if (chunk.toString().match('os --homedir')) {
            homedir()
        } else if (chunk.toString().match('os --username')) {
            user()
        }else if (chunk.toString().match('os --architecture')) {
            architecture()
        }

        else {
            console.log(`Invalid input`)
        }

    });

    process.on('SIGINT', () => {
        console.log('Thank you for using File Manager, ' + userName + ', goodbye!');
        process.exit()
    });

    // function stdinLineByLine() {
    //     const stdin = new EventEmitter();
    //     let buff = '';
    //
    //     process.stdin
    //         .on('data', data => {
    //             buff += data;
    //             console.log('buff is ', buff)
    //             let lines = buff.split(/\r\n|\n/);
    //             buff = lines.pop();
    //             console.log('buff is ', buff)
    //             lines.forEach(line => stdin.emit('line', line));
    //         })
    //         .on('end', () => {
    //             if (buff.length > 0) stdin.emit('line', buff);
    //         });
    //
    //     return stdin;
    // }
    //
    // const stdin = stdinLineByLine();
    // stdin.on('line', console.log);

    // const rl = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // });
    // const answer = await rl.question('What do you think of Node.js? ');
    // rl.on("line", (ch)=>{
    //     console.log(ch)
    //     if (ch === '.exit') {
    //         console.log('Thank you for using File Manager, ' + userName + ', goodbye!');
    //         process.exit()
    //     }
    // })
    // console.log(`Thank you for your valuable feedback: ${answer}`);


    // process.stdin.on('readable', data => {
    //     let chunk;
    //     // Use a loop to make sure we read all available data.
    //     while ((chunk = process.stdin.read()) !== null) {
    //         console.log(typeof chunk, chunk.toString())
    //         process.stdout.write(`data: ${chunk}`);
    //         if (chunk.toString() === '.exit') {
    //             console.log('Thank you for using File Manager, ' + userName + ', goodbye!');
    //             process.exit()
    //         }
    //         // process.stdout.write(chunk)
    //         // switch (chunk.toString()){
    //         //     case ".exit":
    //         //         console.log('Thank you for using File Manager, ' + userName + ', goodbye!');
    //         //         process.exit()
    //         //         break
    //         //
    //         //     case 'haha':
    //         //         console.log(data.toString())
    //         //         break
    //         //
    //         //     default:
    //         //         console.log(`Sorry, we are out of ${data}.`)
    //         //         break
    //         // }
    //     }
    //     // console.log(data)
    //     // let command = data
    //
    // });


    // process.stdin.on('.exit', () => {
    //     console.log('Thank you for using File Manager, ' + userName + ', goodbye!');
    //     process.exit()
    // });


}
main()
// npm run start -- --username=your_username