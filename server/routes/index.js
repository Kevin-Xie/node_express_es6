import home from './home'
import user from './user'

export default app => {
	app.use('/', home);
	app.use('/users', user);
}