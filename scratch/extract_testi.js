const fs = require('fs');
const data = JSON.parse(fs.readFileSync('tmp/1.json', 'utf8'));
const testimonials = data.testimonials.map((t, index) => ({
  name: t.name,
  location: t.location || '로컬',
  service: '산후조리 서비스',
  content: t.testimonial,
  avatar: t.image_url.includes('default.png') ? '/testimonials/avatar.png' : `/testimonials/scraped/avatar_${index}.jpg`
}));

fs.writeFileSync('scratch/testimonials_ko.json', JSON.stringify(testimonials, null, 2), 'utf8');
