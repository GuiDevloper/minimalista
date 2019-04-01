/**
*   MIT License
*   Copyright (c) 2019 Guilherme Correia
**/

  // get element by Id
  export function getById(id, root) {
    return (root || document).getElementById(id);
  }

  // get element by class
  export function getByClass(clas, root)  {
    return (root || document).getElementsByClassName(clas);
  }

  // get element by tag
  export function getByTag(tag, root) {
    return (root || document).getElementsByTagName(tag);
  }

  // Set ou update css de elementos
  export function setStyle(els, value) {
    for (var el of Array.from(els)) {
      el.style.cssText += ";" + value;
    }
  }

  // Get length de svg
  export function getLength(els) {
    var len = 0;
    for (var el of Array.from(els).values()) {
      len += el.tagName == "path" ? el.getTotalLength() :
        (2 * Math.PI) * el.getAttribute('r');
    }
    return len;
  }

  // Ajax object construído
  Ajax = {
    'send': function(url, type) {
      var xhr = new XMLHttpRequest();
      xhr.open(type, url, true);
      xhr.send(null);
      return xhr;
    },
    'isReady': function($this) {
      return $this.readyState == 4 && $this.status == 200;
    }
  };
  export var Ajax;

  // width of screen
  export function widthBody() {
    return window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  }

  export var minCon = {
    aa: 4.5,
    aaLarge: 3,
    aaa: 7,
    aaaLarge: 4.5
  };

  export function genColor(bg, rgb) {
    let newColor = "";
    // Percorre R G B
    for (let i = 0; i < 3; i++) {
      let newR = rgb[i];
      let actualCon = 0,
        maxCont = 0,
        bstColor = 0;
      // busca melhor contraste
      for (let j = 0; j < 255; j++) {
        newR = newR < 255 ? ++newR : 0;
        let nRgb = Array.from(rgb);
        nRgb.splice(i, 1, newR);
        actualCon = contrast(bg, nRgb);
        const isBetter = actualCon > maxCont;
        bstColor = isBetter ? newR : bstColor;
        maxCont = isBetter ? actualCon : maxCont;
        if (actualCon > minCon.aa) {
          break;
        }
      }
      rgb[i] = bstColor;
      bstColor = (+bstColor).toString(16);
      newColor += bstColor.length < 2 ? '0' + bstColor : bstColor;
    }
    // retorna hex constrastado
    return newColor;
  }

  export function getRgb(hex) {
    const h = hex.replace('#', '').split('');
    function pI(s) {
      return parseInt(s, 16);
    }
    return [
      pI(h[0] + h[1]),
      pI(h[2] + h[3]),
      pI(h[4] + h[5])
    ];
  }

  export function luminos(rgb) {
    // http://www.w3.org/TR/WCAG20/#relativeluminancedef
    var lum = [];
    for (var i = 0; i < rgb.length; i++) {
      var chan = rgb[i] / 255;
      lum[i] = chan <= 0.03928 ?
        chan / 12.92 :
          Math.pow((chan + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * lum[0] +
      0.7152 * lum[1] +
      0.0722 * lum[2];
  }

  export function contrast(bg, color2) {
    // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
    var lum1 = luminos(bg);
    var lum2 = luminos(color2);
    if (lum1 > lum2) {
      return (lum1 + 0.05) / (lum2 + 0.05);
    }
    return (lum2 + 0.05) / (lum1 + 0.05);
  }
