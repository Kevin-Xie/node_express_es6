export default {
    NODE_ENV: 'development',
	db: {
		uri: 'mongodb://localhost:27017/mevn_dev'
	},
	cookieSecret: process.env.cookieSecret || 'development',
}