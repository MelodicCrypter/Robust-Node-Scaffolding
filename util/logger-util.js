const expressWinston = require('express-winston');
const winston = require('winston');

const logger = name => expressWinston.logger({
    transports: [
        new winston.transports.File({
            name: name,
            filename: name,
            level: 'info',
            maxsize: 5242880,
            maxFiles: 10,
            json: true,
            colorize: true,
        }),
        new winston.transports.File({
            name: name,
            filename: name,
            level: 'debug',
            maxsize: 5242880,
            maxFiles: 10,
            json: true,
            colorize: true,
        }),
        // Dynamic Status of Level
        // If you go this route, comment out the two transports above
        // new winston.transports.File({
        //     name: name,
        //     filename: name,
        //     statusLevels: false,
        //     level: function (req, res) {
        //         let level = "";
        //         if (res.statusCode >= 100) { level = "info"; }
        //         if (res.statusCode >= 400) { level = "warn"; }
        //         if (res.statusCode >= 500) { level = "error"; }
        //         if (res.statusCode == 401 || res.statusCode == 403) { level = "critical"; }
        //         if (req.path === "/v1" && level === "info") { level = "warn"; }
        //         return level;
        //     },
        //     maxsize: 5242880,
        //     maxFiles: 10,
        //     json: true,
        //     colorize: true
        // })
    ],
});

export default logger;
