### Lista de funções

root: NodeElement = onde procurar o elemento
* **getById(name, root?)**
  * params:
  * name: string = id do elemento
  * return NodeElement
* **getByClass(name, root?)**
  * params:
  * name: string = class do elemento
  * return HTMLCollection
* **getByTag(name, root?)**
  * params:
  * name: string = tag do elemento
  * return HTMLCollection
* **setStyle(els, style)**
  * params:
  * els: Array | HTMLCollection = elementos
  * style: css que será dado aos elementos
* **getLength(els)**
  * params:
  * els: NodeElement = um SVG com paths
  * return number = tamanho do SVG em pixels
* **Ajax.send(url, type)**
  * params:
  * url: string = url para arquivo ou API
  * type: string = tipo do envio (e.g 'GET', 'POST')
  * return XMLHttpRequest já enviado
* **Ajax.isReady($this)**
  * params:
  * $this: this do evento de mudança de estado
  * return boolean = realizado com sucesso ou não
* **widthBody()**
  * return number = largura da tela em pixels
