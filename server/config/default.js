// module.exports = {
// 	db: 'test',
// 	host: 'localhost',
// 	port: 27017,
// }

export default {
	cookieSecret: process.env.cookieSecret || 'backend',
	db_url: 'mongodb://localhost:27017/test',
}