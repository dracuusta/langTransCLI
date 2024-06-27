#!/usr/bin/env node
const yargs=require("yargs")
const { hideBin }=require('yargs/helpers')
const {translate}=require('@vitalets/google-translate-api')


const usage="Usage -l <language> -s <sentence>";
const options=yargs
                .usage(usage)
                .option("l",{demandOption:false})
                .option("s",{demandOption:false})
                .help(true)
                .argv;
const argv=yargs(hideBin(process.argv)).argv;
const language=argv.l;
const sentence=argv.s;
const translator=async ()=>{
    const text= await translate(sentence,{to:'hi'})
    console.log(text);
    return text;
}
const main=async()=>{
    const text=await translator();
    console.log(text);
}
main();