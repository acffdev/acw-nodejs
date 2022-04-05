# acw-nodejs

  Just a minimalist framework for [node](http://nodejs.org) with no dependecies.

## Installation

Install using
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install acw-nodejs
```

## Usage

To run with default settings, just ...

```js
require('acw-nodejs').run();
```

Or run with others settings ...

```js
const app = require('acw-nodejs');

app.set('port', 3000);
app.set('controllers', 'src/controllers');
app.set('views', 'src/views');

app.run();
```
## Settings

Default

```
{
    protocol: 'http',
    port: 3000,
    static: 'public',
    controllers: 'src/controllers',
    views: 'src/views',
    viewEngine: '.html',
    ssl: {
        key:'',
        cert:''
    }
}
```

* **protocol**: creates server using http or https protocol.
* **port**: creates server using a port of your choice.
* **static**: folder that contains static assets such *img*, *js*, *css* files and etc ...
* **controllers**: folder that contains controllers files.
* **views**: folder that contains views files.
* **viewEngine**: sets template engine. **NOTE**: supports only html or ejs at the momment.
* **ssl**: object that contains key and certificate ssl information.

## Controller

Controller file must have the following scope 

```js
module.exports = (req, res) => {
   res.render('index');
};
```

## License

ISC