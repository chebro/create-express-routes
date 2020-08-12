exports.createHead = () => {
    return "const express = require('express');\nconst app = express();\n";
};

exports.createRoute = (name) => {
    return `\nconst ${name}Router = require('./routes/${name}Router');\n`;
};

exports.useRoute = (endpoint, name) => {
    return `\napp.use('${endpoint}', ${name}Router)\n`;
};

exports.createFoot = () => {
    return "\nmodule.exports = app;";
};