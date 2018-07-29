module.exports = {
	db: {
		uri: 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost:27017') + '/mevn_prod'
	},
	cookieSecret: process.env.COOKIE_SECRET || 'production',
}
