
const compress_images = require('compress-images');

const IMAGE_INPUT_PATH = 'imagePath/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
const IMAGE_OUTPUT_PATH = 'imageOutputPath/compressed-';

compress_images(
    IMAGE_INPUT_PATH,
    IMAGE_OUTPUT_PATH, 
    {
        compress_force: false, 
        statistic: true, 
        autoupdate: true
    }, 
    false,
    {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
    {png: {engine: 'pngquant', command: ['--quality=20-50']}},
    {svg: {engine: 'svgo', command: '--multipass'}},
    {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}},
    function(error, completed, statistic) {
        console.log('-------------');
        if (error) console.log(error);
        if (completed) console.log(completed);
        if (statistic) console.log(statistic);
        console.log('-------------');                        
    }
);