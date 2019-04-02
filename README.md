<h1 align="center">Minimalista</h1>

<p align="center">
  <img alt="npm version" src="https://img.shields.io/npm/v/minimalista.svg">
  <img alt="npm downloads" src="https://img.shields.io/npm/dm/minimalista.svg?label=npm%20downloads">
  <img alt="license" src="https://img.shields.io/npm/l/minimalista.svg">
  <img alt="GitHub file size in bytes" src="https://img.shields.io/github/size/guidevloper/minimalista/index.js.svg?label=github%20module%20size"><br>
  <img width="540px" alt="Minimalista em extensão do Chrome" src="https://i.pinimg.com/originals/f6/05/74/f60574b4fb1393db4f6843303759af73.gif">
  <br><em align="center">Uso da geração de cor contrastante em extensão para Chrome</em>
</p>

A old-school based library acting minimalist

**To read the english version of this document [click here](https://github.com/GuiDevloper/minimalista/blob/master/README_en.md).**

### Uso 1: Com empacotador estilo Webpack

Em seu terminal com [Node](https://nodejs.org/pt-br/) rode o comando [`npm`](https://www.npmjs.com/get-npm):

```
npm i minimalista --save-dev
```

ou [`yarn`](https://yarnpkg.com/pt-BR/):

```
yarn add minimalista --dev
```

A _flag_ `--save-dev` ou `--dev` é opcional, boa no caso de usar esta biblioteca somente em pré-_build_.

### Uso 2: ```type="module"``` na tag _script_

```html
<script src="seu_codigo.js" type="module" charset="utf-8"></script>
```

Este modo evita necessidade de configuração em outras ferramentas, e traz o módulo diretamente no seu código com essa _feature_ do HTML.<br>
Porém, ao usar este deve se atentar a [atual compatibilidade da _feature_ nos browsers](https://caniuse.com/#search=JavaScript%20modules%20script%20tag) e sempre servir a página em algum _host_, como _localhost_.

### Importando para o seu código

```javascript
// seu_codigo.js

// usando empacotador
var url_pro_modulo_uso1 = "minimalista";
// usando type="module"
var url_pro_modulo_uso2 =
  "https://cdn.jsdelivr.net/npm/minimalista@1.0.0/index.min.js";
import {
  getByTag,
  getByClass,
  getById,
  setStyle,
  Ajax,
  widthBody
} from "url-pro-modulo-aqui";
// necessita string pura, variável não aceitável

```

### Exemplo de Uso Real

```javascript
// seu_codigo.js

// uso do Ajax
var ajaxProfile = Ajax.send("./user/data.json", "POST");
ajaxProfile.onreadystatechange = function() {
  if (Ajax.isReady(this)) {
    var userData = Object.values(
      JSON.parse(ajaxProfile.responseText)
    );
    // getById() + getByClass()
    // o elemento #user-data de dentro do .profile
    var userProfile = getById("user-data", getByClass("profile")[0]);
    // uso do getByTag()
    // todos os elementos <p> do userProfile
    var paragraphs = getByTag("p", userProfile);
    // percorrendo os <p>
    for (var [p, i] of paragraphs) {
      // colocando dados em cada
      p.innerText = userData[i][0];
      // mudando estilo do <p> dinamicamente
      setStyle(p, userData[i][1]); // uso do setStyle()
    }
  }
};

// Ao alterar o tamanho da janela
window.addEventListener("resize", function() {
  // armazena a largura em pixels
  var screenWidth = widthBody(); // uso do widthBody()
  // 33% ou 50% da tela
  var qtdParts = screenWidth > 769 ? 3 : 2;
  // todos os .grid-item ganham novo tamanho
  setStyle(
    getByClass("grid-item"),
    `width: ${screenWidth / qtdParts};`
  );
  // útil quando há conteúdo adicionado dinamicamente
  // e seus tamanhos envolvem reposicionamento
});
```

### Exemplo Real Usando Vue

Neste exemplo o módulo é usado em uma [extensão para Chrome e Firefox](https://github.com/guidevloper/what-have-you-made-today), que muda a página inicial, gerando uma nova cor de texto contrastado com o fundo escolhido pelo usuário.

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
      // armazena contraste dos 2 RGB
      const contrast = mini.contrast(
        mini.getRgb(bg),
        mini.getRgb(color));
      // If contraste é suficiente de acordo com WCAG20
      if (contrast > mini.minCon.aa) {
        return color;
      } else {
        // gera nova cor baseada nas atuais
        const newColor = mini.genColor(
          mini.getRgb(bg),
          mini.getRgb(color));
        // testa do começo
        return this.getContrasted(bg, newColor);
      }
    }
  }
};
```

## Lista de funções

Todas as funções disponíveis, assim como seus parâmetros e retornos, [estão explicadas aqui](https://github.com/GuiDevloper/minimalista/blob/master/functions_list.md).

## Licença
[MIT](https://github.com/GuiDevloper/minimalista/blob/master/LICENSE)

Copyright (c) 2019, Guilherme Correia
