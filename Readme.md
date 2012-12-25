
# cmu-soc

  Parse the Carnegie Mellon University schedule of classes. For use with the Microsoft Excel-formatted `.dat` files available on [here](https://enr-apps.as.cmu.edu/open/SOC/web/images/documents.htm). When used as a Node.js module, outputs a JavaScript object. When used from the command line, outputs JSON to a file and optionally to the console.

## Usage

### Command Line
```bash
$ npm install -g cmu-soc
$ cmu-soc <input file>
```

### Node.js Module
```bash
$ npm install cmu-soc
```

```javascript
var soc = require('cmu-soc'),
    courses = soc.parse(data);
```

## License 

(The MIT License)

Copyright (c) 2012 Chris Lee &lt;chris@chrsl.net&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.