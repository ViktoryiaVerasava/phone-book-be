import * as PhoneBookRecordController from '../controllers/phone-book-record.controller';

const apiVersion = 'api1';
const routePrefix = 'phone-book-records';

module.exports = api => {
	api.route(`/${apiVersion}/${routePrefix}`).get(PhoneBookRecordController.getAll);
	api.route(`/${apiVersion}/${routePrefix}/:id`).get(PhoneBookRecordController.get);
	api.route(`/${apiVersion}/${routePrefix}/:id`).put(PhoneBookRecordController.put);
	api.route(`/${apiVersion}/${routePrefix}`).post(PhoneBookRecordController.post);
	api.route(`/${apiVersion}/${routePrefix}/:id`).delete(PhoneBookRecordController.delete);
};
