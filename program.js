'use strict';
const bytenode = require('bytenode');
const fs = require('fs');
const v8 = require('v8');
const path = require('path');

v8.setFlagsFromString('--no-lazy');

if (!fs.existsSync(path.join(__dirname, './index.jsc'))) {
    bytenode.compileFile(path.join(__dirname, './index.js'),path.join(__dirname,  './index.jsc'));
}

require(path.join(__dirname,'./index.jsc'));