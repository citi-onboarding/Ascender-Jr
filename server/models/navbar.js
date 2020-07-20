const keystone = require('keystone');

const { Types } = keystone.Field;

// First we gonna create a navbar list
const navbar = new keystone.List('navbar', {
  map: { name: 'title' },
  label: 'Navbar'
});

// Then we gonna add the fields
navbar.add({
  title: {
    type: Types.Text, initial: true, label: 'Título da seção'
  },
  url: { type: Types.Url, initial: true, required: true, label:'Url', index: true}
});

navbar.register();
