export default {
    NODE_ENV: 'local',
	db: {
		uri: 'mongodb://localhost:27017/mevn_local'
	},
	cookieSecret: process.env.cookieSecret || 'local',
}