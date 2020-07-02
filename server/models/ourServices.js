const keystone = require("keystone");

const { Types } = keystone.Field;

// First we gonna create a ourServices list
const ourServices = new keystone.List('NossosServiços', {
  map: { name: 'serviceName' },
});

// Then we gonna add the fields
ourServices.add({
    serviceName: { type: Types.Text, required: true, initial: true, label: 'Serviço' },
    serviceDescription: { type: Types.Textarea, required: true, initial: true, label: 'Descrição'},
    serviceImage: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem do serviço'},

    beforeService: {
      text: { type: Types.Text, required: true, initial: true, label: 'Legenda antes do serviço' },
      description: { type: Types.Textarea, required: true, initial: true, label: 'Descrição'},
      imageUrl: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem antes'},
    },
    
    afterService: {
      text: { type: Types.Text, required: true, initial: true, label: 'Legenda depois do serviço' },
      description: { type: Types.Textarea, required: true, initial: true, label: 'Descrição'},
      imageUrl: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem depois'},
  },
})

ourServices.register();