jQuery-toHTML
=============
By: Maxime Gibeau [https://github.com/mgibeau/](https://github.com/mgibeau/)    
Version: 0.1.1    
Requires: jQuery 1.4.4+    
License: [MIT](https://raw.github.com/mgibeau/jQuery-toHTML/master/MIT-LICENSE.txt)


Description
---------------------
Plugin to convert a jQuery object into an HTML string.


Usage
---------------------
`$( {selector} ).toHTML( [options] );`

**N.B.** If the selector matches multiple elements, the result will be a list of strings.  See [flat](https://github.com/mgibeau/jQuery-toHTML/edit/master/README.md#flat).


Example
---------------------
HTML
```html
<div>
  <p>Some sample text</p>
</div>
```
JavaScript
```js
$('div').toHTML();
```
Output
```js
"<div>
  <p>Some sample text</p>
</div>"
```


Options
---------------------
#### flat ####
Merge multiple objects into a string    
*type: Boolean*    
*default: false*
```js
$('div').toHTML(true);
```


<br /><br />
Copyright (c) 2013, Maxime Gibeau [https://github.com/mgibeau/](https://github.com/mgibeau/)   
