import fs from 'fs';
import path from 'path';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

import config from './config';
import logger from './utils/logger';

const api = express();

api.use(cors());
api.use(compression());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.listen(config.server.port, err => {
	if (err) {
		logger.error(err);
		process.exit(1);
	}

	require('./utils/db');
    fs.readdirSync(path.join(__dirname, 'routes'))
        .map(file => {
            require('./routes/' + file)(api);
        });

	logger.info(`API is now running on port ${config.server.port} in ${config.env} mode`);
});

module.exports = api;
