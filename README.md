## Starter theme

My starter WordPress theme. Using Webpack for JS & Sass and Yarn for dependencies.

### Yarn commands

`yarn`
`yarn watch`
`yarn eslint`
`yarn sasslint`

### Favicons

The favicon sizes you need are in the root directory (inspired by [https://github.com/audreyr/favicon-cheat-sheet](https://github.com/audreyr/favicon-cheat-sheet)), however you'll need to generate the `favicon.ico` in a special way. Make sure you have ImageMagick installed and then save a 16x16 PNG and 32x32 file in the same directory somewhere. Then run:

`convert favicon-16.png favicon-32.png favicon.ico`

Copy that outputted `favicon.ico` into your theme directory and you're set!
