# React-boilerplate
React Boilerplate configured with babel, webpack, sass, and eslint.

## Usage

* `npm start` to run eslint on watch mode and dev-server at localhost:8080.
* `npm run watch` to only watch for/recompile on changes.
* `npm run build` to generate a minified, production-ready build.
* `npm run stats` to generate stats.json, profiles build bundle, 4 nice report, https://webpack.jakoblind.no/optimize/
* `npm run test:watch` watch mode for jest / enzyme tests
* 'eslint --fix file.js' to fix eslint errors in file *see environment


## Environment

* npm install -g eslint
* npm install -g eslint-plugin-react  
* npm install -g babel-eslint   
* sudo vi /etc/hosts 
  then add: 127.0.0.1 local.farrung.com

## Contents

* `.babelrc` configures babel, targets include what browsers to support in browserlist format
* `.eslintignore` directory or files eslint should ignore
* `.eslintrc` style rules eslint will apply to code
* `package.json` module details and dependencies, run *npm install* after cloning git
* `webpack.config.json` webpack configuration, various asset loaders

