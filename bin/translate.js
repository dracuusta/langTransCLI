#!/usr/bin/env node
const yargs=require("yargs")
// const chalk=require('chalk')
// const boxen=require('boxen')
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
    const res= await translate(sentence,{to:language})
    console.log(res.text)
    console.log(`Language: ${argv.l}`)
    console.log(`Sentence: ${argv.s}`)
    return res;
}

translator();