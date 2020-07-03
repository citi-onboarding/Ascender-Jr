const keystone = require('keystone');

const { Types } = keystone.Field;


// First we gonna create a aboutUs list
const aboutUs = new keystone.List('SobreNós', {
  map: { name: 'key' },
});

// Then we gonna add the fields
aboutUs.add({
  key: { type: Types.Text, default: 'Sobre Nós', initial: false },
  vision: {
    text: { type: Types.Textarea, required: true, initial: true, label: 'Visão' },
    image_url: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem da visão'},
  },
  mission: {
    text: { type: Types.Textarea, required: true, initial: true, label: 'Missão' },
    imageUrl: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem da missão'},
  },
  values: {
    valueArray: { type: Types.TextArray, required: true, initial: true, label: 'Valores' },
    imageUrl: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem dos valores'},
  },
  companyHistory: { type: Types.Textarea, required: true, initial: true, label: 'História da empresa'}
});

aboutUs.register();