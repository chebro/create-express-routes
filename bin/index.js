#!/usr/bin/env node

const yargs = require("yargs");
const fs = require("fs");
const pl = require('./plate');

const options = yargs
    .usage("Usage: -n <name> -e <endpoint>")
    .option("n", { alias: "name", describe: "Router name", type: "string", demandOption: true })
    .option("e", { alias: "endpoint", describe: "Router endpoint", type: "string", demandOption: true })
    .argv;

const plate = pl.createHead() + pl.createRoute(options.name) + pl.useRoute(options.endpoint, options.name) + pl.createFoot();

fs.writeFile('./app.js', plate, (err) => {
    if (err) throw err;
    console.log('An app.js file is created in your working directory.');
});