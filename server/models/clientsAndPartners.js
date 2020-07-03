const keystone = require('keystone');
const { Types } = keystone.Field;

/**
 * Clients and Partners Model
 * =============
 */

const ClientsAndPartners = new keystone.List('ClientsAndPartners', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ClientsAndPartners.add({
	text: {
		type: Types.Textarea, require: false, initial: true,
	},
	image: {
		type: Types.CloudinaryImages, require: true, initial: true, 
	}
});

ClientsAndPartners.register();