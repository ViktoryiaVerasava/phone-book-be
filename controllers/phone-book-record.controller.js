import validator from 'validator';
import logger from '../utils/logger';
import PhoneBookRecord from '../models/phone-book-record.model';

exports.getAll = (req, res) => {
	PhoneBookRecord.find()
		.then(records => {
			res.json(records);
		})
		.catch(err => {
            logger.error(err.errmsg);
			res.status(422).send(err.errmsg);
		});
};

exports.get = (req, res) => {
	PhoneBookRecord.findById(req.params.id)
		.then(record => {
            if (!record) {
				return res.sendStatus(404);
            }
            
			res.json(record);
		})
		.catch(err => {
            logger.error(err.errmsg);
			res.status(422).send(err.errmsg);
		});
};

exports.put = (req, res) => {
    const data = req.body || {};

	PhoneBookRecord.findByIdAndUpdate({ _id: req.params.id }, data, { new: true })
		.then(record => {
			if (!record) {
				return res.sendStatus(404);
			}

			res.json(record);
		})
		.catch(err => {
            logger.error(err.errmsg);
			res.status(422).send(err.errmsg);
		});
};

exports.post = (req, res) => {
	const data = Object.assign({}, req.body) || {};

	PhoneBookRecord.create(data)
		.then(record => {
			res.json(record);
		})
		.catch(err => {
            logger.error(err.errmsg);
			res.status(500).send(err.errmsg);
		});
};

exports.delete = (req, res) => {
	PhoneBookRecord.findOneAndRemove({ _id: req.params.id })
    .then(record => {
        if (!record) {
            return res.sendStatus(404);
        }

        res.sendStatus(204);
    })
    .catch(err => {
        logger.error(err.errmsg);
        res.status(422).send(err.errmsg);
    });
};
