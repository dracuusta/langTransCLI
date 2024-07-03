#!/usr/bin/env node
const yargs=require("yargs")
const tunnel=require('tunnel')
const chalk=require('chalk')
var fs=require('fs')
const { hideBin }=require('yargs/helpers')
const {translate}=require('@vitalets/google-translate-api')

const usage="$0 -l <language> -s <sentence>";
const options=yargs
                .usage(usage)
                .option("l",{alias:"language",demandOption:false,describe:'language to be converted into',type:'string'})
                .option("s",{alias:"sentence",demandOption:false,describe:'write the sentence you want to be converted',type:'string'})
                .help('h')
                .argv;
const argv=yargs(hideBin(process.argv)).argv;
const language=argv.l;
const sentence=argv.s;
const translator=async ()=>{
    let res;
    try{
     res= await translate(sentence,{to:language,})
    }
    catch(error){
        console.log(`Invalid api response \nCheck language shorthand \n${error}`);
        return null;
    }
    if(res && res.text){
    console.log(chalk.keyword('blue')(res.text))
    try{
    fs.appendFile('translateFile.txt','converted',(err)=>{
        if(err) throw err;
    })}
    catch(err){
        console.log(`error in writing file ${err}`)
    }
    console.log(chalk.keyword('green')(`Language: ${argv.l}`))
    console.log(chalk.keyword('green')(`Sentence: ${argv.s}`))
}else{
    console.log('No translation result')
}
    return res;

}

translator();