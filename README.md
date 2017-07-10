# stringtoms [![npm version](https://img.shields.io/npm/v/stringtoms.svg?style=flat)](https://www.npmjs.com/package/stringtoms) [![Build Status](https://img.shields.io/travis/ranapat/stringtoms/master.svg?style=flat)](https://travis-ci.org/ranapat/stringtoms) [![Coverage Status](https://coveralls.io/repos/ranapat/stringtoms/badge.svg?branch=master)](https://coveralls.io/r/ranapat/stringtoms?branch=master) [![devDependencies Status](https://david-dm.org/ranapat/stringtoms/dev-status.svg)](https://david-dm.org/ranapat/stringtoms?type=dev)

Convert string to milliseconds

## Use human readable ms expressions

Supports single expressions like "1s" and complex ones "1m 1s"

### Install:

#### Install with npm
```bash
npm install stringtoms
```

#### Use standalone
```html
<script src="https://cdn.jsdelivr.net/npm/stringtoms/standalone/stringtoms.js"></script>
or
<script src="https://cdn.jsdelivr.net/npm/stringtoms/standalone/stringtoms.min.js"></script>
```

### Access the library:

#### Import
```javascript
import { stringtoms } from 'stringtoms';
```

#### Require
```javascript
const stringtoms = require('stringtoms');
```

#### Standalone
```html
<script src="https://cdn.jsdelivr.net/npm/stringtoms/standalone/stringtoms.min.js"></script>
<script>
// global stringtoms variable exists
</script>
```

### Basics:

#### Supported units

- milliseconds as 'ms', 'mil', 'milli', 'millisecond', 'milliseconds'
- seconds as 's', 'se', 'sec', 'second', 'seconds'
- minutes as 'm', 'mi', 'min', 'minute', 'minutes'
- hours as 'h', 'ho', 'hour', 'hours'

#### Single expressions

1h, 1m, 1s and so on...

```javascript
import { stringtoms } from 'stringtoms';
stringtoms('1ms');
stringtoms('1s');
stringtoms('1m');
stringtoms('1h');
```

#### Complex expressions

1h 1m, 1m 1s and so on...

```javascript
import { stringtoms } from 'stringtoms';
stringtoms('1s 1ms'); // means 1 second and 1 millisecond
stringtoms('1m 1s'); // means 1 minute and 1 second
stringtoms('1m 1m'); // means 1 minute and 1 minute
stringtoms('1h 1ms'); // means 1 hour and 1 millisecond
```

#### Auto correction

1h is equal to 1 h is equal to 1 hour

Any \W symbols are removed. Spaces are not needed.

```javascript
import { stringtoms } from 'stringtoms';
stringtoms('1h') === stringtoms('1 h') === stringtoms('1  hour') === stringtoms('1#hour');
stringtoms('1m1s') === stringtoms('1 m 1 s') === stringtoms('1 m1 s') === stringtoms('1m 1s');
```

#### Auto complete

1h 1 is 1h 1m, 1 1m is 1h 1m.

Tries to complete left and right for missing units.

```javascript
import { stringtoms } from 'stringtoms';
stringtoms('1h 1') === stringtoms('1 h 1m') === stringtoms('1 1m');
stringtoms('1 1s 1') === stringtoms('1 m 1 s 1 ms') === stringtoms('1m 1s 1ms');
```

### More examples

[Check the examples](http://github.com/ranapat/stringtoms/blob/master/examples/src)

### Documentation

[Check the documentation](http://github.com/ranapat/stringtoms/blob/master/docs/docs.md)

### What is next

[Check the todo](http://github.com/ranapat/stringtoms/blob/master/TODO.md)

### What have changed

[Check the changelog](http://github.com/ranapat/stringtoms/blob/master/CHANGELOG.md)
