const keystone = require("keystone");

const { Types } = keystone.Field;

// First we gonna create a ourServices list
const ourServices = new keystone.List('NossosServiços', {
  map: { name: 'service.text' },
});

// Then we gonna add the fields
ourServices.add({
  service: {
    text: { type: Types.Text, required: true, initial: true, label: 'Serviço' },
    imageUrl: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem do serviço'},

    beforeService: {
      text: { type: Types.Text, required: true, initial: true, label: 'Legenda antes do serviço' },
      imageUrl: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem antes'},
    },
    
    afterService: {
      text: { type: Types.Text, required: true, initial: true, label: 'Legenda depois do serviço' },
      imageUrl: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem depois'},
    }
  },
})

ourServices.register();