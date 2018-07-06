import index from './index'
import user from './user'

export default app => {
	app.use('/', index);
	app.use('/users', user);
}