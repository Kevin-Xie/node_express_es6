export default {
    NODE_ENV: 'development',
	db: {
		uri: 'mongodb://localhost:27017/mevn_local'
	},
	cookieSecret: process.env.cookieSecret || 'development',
}