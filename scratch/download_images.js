const fs = require('fs');
const { execSync } = require('child_process');
const data = JSON.parse(fs.readFileSync('tmp/1.json', 'utf8'));

data.testimonials.forEach((t, index) => {
  if (!t.image_url.includes('default.png')) {
    const dest = `public/testimonials/scraped/avatar_${index}.jpg`;
    console.log(`Downloading ${t.image_url} to ${dest}`);
    try {
      execSync(`curl -o "${dest}" "${t.image_url}"`);
    } catch (e) {
      console.error(`Failed to download ${t.image_url}`);
    }
  }
});
