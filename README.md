# css-mixer
Minimal `226 bytes` CSS class & id joiner written in TypeScript.

Inspired by [clsx](https://github.com/lukeed/clsx) & [classnames](https://github.com/JedWatson/classnames).

## Installation
```bash
npm i css-mixer
```

## Usage
In JSX files:
```jsx
import mixer from 'css-mixer';

//...
const isCapibara = true;
const isPokemon = false;

return <div
    id={isCapibara && 'capibara', isPokemon && 'pokemon'}
    className={mixer('foo', {bar: true, pub: false}, ['fizz', 'buzz'])}
/>;
```
Outcome (html): 
```html
<div id="capibara" class="foo bar fizz buzz"></div>
```