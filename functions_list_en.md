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
