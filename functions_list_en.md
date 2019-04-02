## Function List

root: NodeElement = where searchs the element in DOM
* **getById(name, root?)**
  * params:
  * name: string = element id
  * return NodeElement
* **getByClass(name, root?)**
  * params:
  * name: string = element class
  * return HTMLCollection
* **getByTag(name, root?)**
  * params:
  * name: string = element tag
  * return HTMLCollection
* **setStyle(els, style)**
  * params:
  * els: Array | HTMLCollection = elements
  * style: css to be set to elements
* **getLength(els)**
  * params:
  * els: NodeElement = a SVG with paths
  * return number = size of SVG in pixels
* **Ajax.send(url, type)**
  * params:
  * url: string = url to file or API
  * type: string = sending type (e.g 'GET', 'POST')
  * return XMLHttpRequest already sent
* **Ajax.isReady($this)**
  * params:
  * $this: this of changestate event
  * return boolean = realized with success or not
* **widthBody()**
  * return number = width of screen in pixels
* **object minCon**
  * props:
  * aa: 4.5, aaLarge: 3,  aaa: 7, aaaLarge: 4.5
  * minContrast values based on WCAG20
* **genColor(bg, rgb)**
  * params:
  * bg: background choiced by user in rgb
  * rgb: old color to search new in
  * return string = new contrasted color in hex
* **getRgb(hex)**
  * params:
  * hex: color in hex
  * return Array = color divided in R G B
* **luminos(rgb)**
  * params:
  * rgb: color in rgb
  * return number = luminosity of color
* **contrast(bg, color2)**
  * params:
  * bg: background color
  * color2: second color to test before bg
  * return number = contrast between colors
