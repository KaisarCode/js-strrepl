# STRRepl
[js] Replace all in string.

### Install
```
npm install kc-strrepl
```

### Use
```js
var strrepl = require('kc-strrepl');
var srch = 'A'; // Search
var repl = 'B'; // Replace
var orig = 'A hello AA world A'; // Original string
var flag = 'gim'; // Regex flags (default: gim)
var str = strrepl(srch, repl, orig, flag);
console.log(str);
```
