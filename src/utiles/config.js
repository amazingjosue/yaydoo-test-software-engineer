const {writeFile, deleteFile} = require('./writeFile');

/**
 * @description Function that create configs for the logs in the console
 */
const config = function () {
    deleteFile('yaydootest')
    const log = console.log;
    console.log = function () {
        var args = Array.from(arguments);
        args.unshift(` `);
        log.apply(console, args);
        writeFile(args,'yaydootest');
    }
}

config();