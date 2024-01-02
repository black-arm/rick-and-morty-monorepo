const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const tailwindBase = require('../../tailwind.config')

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [ tailwindBase ],
    content: [
        join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {},
    },
};
