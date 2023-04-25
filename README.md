# css-mixer
Minimal `226 bytes` CSS class & id joiner written in TypeScript.

Inspired by [clsx](https://github.com/lukeed/clsx) & [classnames](https://github.com/JedWatson/classnames).

## Installation
```bash
npm i css-mixer
```

## Usage
### JSX 
Code:
```jsx
import mixer from 'css-mixer';

//...
const isCapibara = true;
const isPokemon = false;

return <div
    id={isCapibara && 'capibara', isPokemon && 'pokemon'}
    className={mixer('foo', {bar: true, pub: false}, ['fizz', 'buzz'])}
/>;
//...
```
Outcome (html): 
```html
<div id="capibara" class="foo bar fizz buzz"></div>
```

### JS
```js
const mixer = require('css-mixer');

console.log(
    mixer('a', true && 'b', false && 'c', ['d', 'e'], {f: true, g: false})
);
// output: 'a b d e f'
```
