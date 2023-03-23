# Service Device App

In this project is bulit service manual for factory's devices.

User can load the data to CSV file by Save button and it will apppear to loadings section right away.

The front-end is done by React and React Hooks and I have used following [https://www.digitalocean.com/community/tutorials/react-crud-context-hooks] (tuotrial).

The project folder needs to be loaded to computer adn one needs to have node.js installed on computer.
Needed node packages are: 
    npm install react-csv --save;
    npx tailwindcss-cli@0.1.2 build --output tailwind.css 
    npm install react-router-dom@5.2.0 
    npm install node-polyfill-webpack-plugin
    npm install crypto-browserify
     npm install stream-browserify
     
And if it still says something about polyfill problem do following:

go to your webpack.config.js and paste this:

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = {
// Other rules like entry, output, devserver....,
plugins: [
    new NodePolyfillPlugin()
]}
    
    
