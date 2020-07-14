const keystone = require('keystone');

const { Types } = keystone.Field;


// First we gonna create a aboutUs list
const aboutUs = new keystone.List('AboutUs', {
  map: { name: 'key' },
  label: 'Sobre nós'
});

// Then we gonna add the fields
aboutUs.add({
  key: { type: Types.Text, initial: false, default: 'Sobre nós' },
  vision: {
    text: { type: Types.Textarea, required: true, initial: true, label: 'Visão', note: 'Fale sobre a visão da empresa'},
    image: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem da visão'},
  },
  mission: {
    text: { type: Types.Textarea, required: true, initial: true, label: 'Missão', note: 'Conte sobre a missão da empresa' },
    image: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem da missão'},
  },
  values: {
    valueArray: { type: Types.TextArray, required: true, initial: true, label: 'Valores', note: 'Adicione os valores da empresa' },
    image: { type: Types.CloudinaryImage, required: true, initial: true, label: 'Imagem dos valores'},
  },
  companyHistory: { type: Types.Textarea, required: true, initial: true, label: 'História da empresa', note: 'Fale sobre a história da Empresa'}
});

aboutUs.register();