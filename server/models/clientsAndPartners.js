const keystone = require('keystone');
const { Types } = keystone.Field;

/**
 * Clients and Partners Model
 * =============
 */

const ClientsAndPartners = new keystone.List('ClientsAndPartners', {
	map: { name: 'name' },
  label: 'Clientes e Parceiros',
});

ClientsAndPartners.add({
	name: {
		type: Types.Text, required: true, initial: true, label: 'Nome', note: 'Nome do cliente ou parceiro'
	},
	description: {
		type: Types.Textarea, required: true, initial: true,label: 'Descrição', note: 'Descrição sobre o cliente ou parceiro'
	},
	image: {
		type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem' 
	}
});

ClientsAndPartners.register();