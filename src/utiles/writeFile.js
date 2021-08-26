const fs = require('fs');

const writeFile = async function (messages, msName) {
    messages.shift();
    const message = messages.map(msg => JSON.stringify(msg)).join("").replace(/"/g, "");
    try {
        await fs.writeFileSync(msName + ".log", message + "\n", {
            flag: 'a'
        });
    } catch (error) {
        console.warn("Writing log error", error);
    }
}

const deleteFile = async function (route) {
    try {
        fs.unlinkSync(route + ".log")
    } catch (error) {
        console.error("Theres no file to delete")
    }
    
}

module.exports = {writeFile, deleteFile};