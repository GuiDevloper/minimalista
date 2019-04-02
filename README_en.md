<h1 align="center">Minimalista</h1>

<p align="center">
  <img alt="npm version" src="https://img.shields.io/npm/v/minimalista.svg">
  <img alt="npm downloads" src="https://img.shields.io/npm/dm/minimalista.svg?label=npm%20downloads">
  <img alt="license" src="https://img.shields.io/npm/l/minimalista.svg">
  <img alt="GitHub file size in bytes" src="https://img.shields.io/github/size/guidevloper/minimalista/index.js.svg?label=github%20module%20size"><br>
  <img width="540px" alt="Minimalista in extension to chrome" src="https://i.pinimg.com/originals/f6/05/74/f60574b4fb1393db4f6843303759af73.gif">
  <br><em align="center">Use of contrasted colors generation in Chrome extension</em>
</p>

A old-school based library acting minimalist

**Para ler a versão em português deste documento [clique aqui](https://github.com/GuiDevloper/minimalista/blob/master/README.md).**

### Use 1: With bundler like Webpack

In your terminal with [Node](https://nodejs.org) run the [`npm`](https://www.npmjs.com/get-npm) command:

```
npm i minimalista --save-dev
```

or [`yarn`](https://yarnpkg.com):

```
yarn add minimalista --dev
```

The flag `--save-dev` or `--dev` is optional, good in case of use this library only in pre-build.

### Use 2: ```type="module"``` in _script_ tag

```html
<script src="your_code.js" type="module" charset="utf-8"></script>
```

This mode avoid need to configure others tools, and brings the module straight in your code with this HTML feature.<br>
But, using this needs attention to [current compatibility of feature in browsers](https://caniuse.com/#search=JavaScript%20modules%20script%20tag) and ever serve the page in some host, like localhost.

### Importing to your code

```javascript
// your_code.js

// using bundler
var url_to_module_use1 = "minimalista";
// using type="module"
var url_to_module_use2 =
  "https://cdn.jsdelivr.net/npm/minimalista@1.0.0/index.min.js";
import {
  getByTag,
  getByClass,
  getById,
  setStyle,
  Ajax,
  widthBody
} from "url-to-module-here";
// needs pure string, var not allowed

```
### Real World Example

```javascript
// your_code.js

// Ajax use
var ajaxProfile = Ajax.send("./user/data.json", "POST");
ajaxProfile.onreadystatechange = function() {
  if (Ajax.isReady(this)) {
    var userData = Object.values(
      JSON.parse(ajaxProfile.responseText)
    );
    // getById() + getByClass()
    // the #user-data element inside of .profile
    var userProfile = getById("user-data", getByClass("profile")[0]);
    // getByTag() use
    // all <p> elements inside userProfile
    var paragraphs = getByTag("p", userProfile);
    // iterating <p> elements
    for (var [p, i] of paragraphs) {
      // setting data in each
      p.innerText = userData[i][0];
      // changing <p> style dynamically
      setStyle(p, userData[i][1]); // setStyle() use
    }
  }
};

// In window size change
window.addEventListener("resize", function() {
  // store the width in pixels
  var screenWidth = widthBody(); // widthBody() use
  // 33% or 50% of screen
  var qtdParts = screenWidth > 769 ? 3 : 2;
  // every .grid-item receive new width
  setStyle(
    getByClass("grid-item"),
    `width: ${screenWidth / qtdParts};`
  );
  // good utility when have content added dynamically
  // and their size involves repositioning
});
```
### Real Example using Vue

In this example the module is used in a [extension to Chrome and Firefox](https://github.com/guidevloper/what-have-you-made-today), that changes the main page, generating a new text color contrasted with the background choiced by user.

```javascript
import { contrast, getRgb, genColor, minCon } from 'minimalista';

export default {
  ...
  data: function() {
    return {
      min: { contrast, getRgb, genColor, minCon }
    };
  },
  methods: {
    getContrasted: function(bg, color = '191c4c') {
      const mini = this.min;
      // stores contrast of 2 RGB
      const contrast = mini.contrast(
        mini.getRgb(bg),
        mini.getRgb(color));
      // If contrast is enough according to WCAG20
      if (contrast > mini.minCon.aa) {
        return color;
      } else {
        // generates new color based on current
        const newColor = mini.genColor(
          mini.getRgb(bg),
          mini.getRgb(color));
        // re-test from start
        return this.getContrasted(bg, newColor);
      }
    }
  }
};
```

## Functions List

All the available functions, as their parameters and returns, [are explained here](https://github.com/GuiDevloper/minimalista/blob/master/functions_list_en.md).

## License
[MIT](https://github.com/GuiDevloper/minimalista/blob/master/LICENSE)

Copyright (c) 2019, Guilherme Correia
