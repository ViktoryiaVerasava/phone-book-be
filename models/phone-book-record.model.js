import Mongoose from "mongoose";
import timestamps from 'mongoose-timestamp';

const Schema = Mongoose.Schema;

export const PhoneBookRecordSchema = new Schema(
	{
		personName: {
			type: String,
			trim: true,
			index: true,
			unique: true,
			required: true
		},
		phoneNumber: {
			type: String,
            required: true,
            trim: true,
            index: true,
            unique: true
        }
	},
	{ collection: 'record' }
);

PhoneBookRecordSchema.pre('save', (next) => {
    next();
});

PhoneBookRecordSchema.plugin(timestamps);
PhoneBookRecordSchema.index({ personName: 1, phoneNumber: 1 });

module.exports = exports = Mongoose.model('PhoneBookRecord', PhoneBookRecordSchema);
