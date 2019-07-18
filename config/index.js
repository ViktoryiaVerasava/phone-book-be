require('dotenv').config({ path: './.env' });

export default {
	env: process.env.NODE_ENV || 'development',
	logger: {
		host: process.env.LOGGER_HOST || 'localhost://127.0.0.1',
		port: process.env.LOGGER_PORT || '9000',
	},
    server: {
        port: process.env.SERVER_PORT || 3000
    },
    database: {
        uri: 'mongodb://localhost:27017/phone-book'
    }
};
