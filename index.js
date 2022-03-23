import { throws } from 'assert';
import chalk from 'chalk';
import fs from 'fs';


function patternErr(err){
    throw new Error(chalk.red(err.code));
}
/* function takeFile(wayFile){
    const encoding = 'utf-8'
    fs.readFile(wayFile, encoding, (err, text)=>{
        if(err){
            patternErr(err);
        }
           console.log(chalk.green(text))
    })
} */
function takeFile(wayFile){
    const encoding = 'utf-8';
    fs.promises
    .readFile(wayFile, encoding)
    .then((text)=> chalk.green(console.log(text)))
    . catch((err)=> patternErr(err)); 
}

takeFile('./text.md')

