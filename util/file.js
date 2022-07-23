const fs = require('fs');

const deleteFile = filePatch => {
    fs.unlink(filePatch, (err) => {
        if (err) {
            console.log(err);
        }
    });
};

exports.deleteFile = deleteFile;