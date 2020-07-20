const keystone = require('keystone');
const { Types } = keystone.Field;

/**
 * Banner Model
 * =============
 */

const Banner = new keystone.List('Banner', {
	map: { name: 'bannerName' },
	label: 'Banners'
  });

Banner.add({
	text: {
		type: Types.Textarea, require: true, initial: true,
	},
	imageUrl: {
		type: Types.CloudinaryImages, require: true, initial: true,
	}
});

Banner.register();
