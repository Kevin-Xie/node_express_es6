module.exports = {
	db: {
		uri: 'mongodb://localhost:27017/mevn_dev'
	},
	cookieSecret: process.env.COOKIE_SECRET || 'development',
}
