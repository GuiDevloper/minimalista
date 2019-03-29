# Minimalista

A old-school based library acting minimalist

### Uso 1: Com empacotador estilo Webpack

Em seu terminal com [Node](https://nodejs.org/pt-br/) rode o comando [```npm```](https://www.npmjs.com/get-npm):

```
npm i minimalista --save-dev
```

ou [```yarn```](https://yarnpkg.com/pt-BR/):

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
var url_pro_modulo_uso2 = "https://cdn.jsdelivr.net/npm/minimalista@1.0.0/index.min.js";
import {
  getByTag,
  getByClass,
  getById,
  setStyle,
  Ajax,
  widthBody
} from "url-pro-modulo-aqui"; // necessita string pura, var não aceitável

```

### Exemplo de Uso Real

```javascript

// seu_codigo.js

// uso do Ajax
var ajaxProfile = Ajax.send("./user/data.json", "POST"); // .send(url, "GET" || "POST")
ajaxProfile.onreadystatechange = function() {
  if (Ajax.isReady(this)) {
    var userData = Object.values(JSON.parse(ajaxProfile.responseText));
    // o elemento #user-data de dentro do .profile
    var userProfile = getById("user-data", getByClass("profile")[0]); // getById() + getByClass()
    // todos os elementos <p> do userProfile
    var paragraphs = getByTag("p", userProfile); // uso do getByTag()
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
window.addEventListener('resize', function() {
  // armazena a largura em pixels
  var screenWidth = widthBody(); // uso do widthBody()
  // 33% ou 50% da tela
  var gridNewWidth = screenWidth > 769 ? screenWidth / 3 : screenWidth / 2;
  // todos os .grid-item ganham novo tamanho
  setStyle(getByClass("grid-item"), `width: ${gridNewWidth};`);
  // útil quando há conteúdo adicionado dinamicamente
  // e seus tamanhos envolvem reposicionamento
});

```
