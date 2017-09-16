var fs = require('fs');
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

// Autoprefix css
fs.readFile('./dist/temp/_temp.css', (err, css) => {
  postcss([autoprefixer])
    .process(css, {
      from: './dist/temp/_temp.css',
      to: './dist/designkit-tabs.css'
    })
    .then(result => {
      fs.writeFileSync('./dist/designkit-tabs.css', result.css);
      console.log('Success!');
    });
});
