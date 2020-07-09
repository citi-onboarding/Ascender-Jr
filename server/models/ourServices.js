const keystone = require("keystone");

const { Types } = keystone.Field;

// First we gonna create a ourServices list
const ourServices = new keystone.List('OurServices', {
  map: { name: 'serviceName' },
  label: 'Nossos serviços'
});

// Then we gonna add the fields
ourServices.add({
    serviceName: { type: Types.Text, required: true, initial: true, label: 'Serviço', note: 'Digite o nome do serviço' },
    serviceDescription: { type: Types.Textarea, required: true, initial: true, label: 'Descrição', note: 'Fale sobre este serviço'},
    serviceImage: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem do serviço'},

    beforeService: {
      text: { type: Types.Text, required: true, initial: true, label: 'Legenda antes do serviço' },
      image: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem antes'},
    },
    
    afterService: {
      text: { type: Types.Text, required: true, initial: true, label: 'Legenda depois do serviço' },
      image: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem depois'},
  },
})

ourServices.register();