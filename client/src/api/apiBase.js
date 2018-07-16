import http from 'axios';

export default class ApiBase() {
	constructor() {

	};

	get(url, config) {
		return http.get(url, config);
	};

	post() {

	};

	put() {

	};

	delete() {

	};
}