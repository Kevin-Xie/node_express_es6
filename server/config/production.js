export default {
    NODE_ENV: 'production',
	db: {
		uri: 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost') + '/mevn'
	},
	cookieSecret: process.env.cookieSecret || 'backend',
}