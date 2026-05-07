const fs = require('fs');
const current = JSON.parse(fs.readFileSync('messages/ko/testimonials.json', 'utf8'));
const newItems = JSON.parse(fs.readFileSync('scratch/testimonials_ko.json', 'utf8'));

current.items = newItems;

fs.writeFileSync('messages/ko/testimonials.json', JSON.stringify(current, null, 2), 'utf8');
