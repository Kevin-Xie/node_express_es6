import index from './index'
import users from './users'

export default app => {
	app.use('/', index);
	app.use('/users', users);
}