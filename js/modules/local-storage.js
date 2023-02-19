// Crear clase en la que va tener varios Elementos

//Obtener el elemento (el LocalStorange es una clase de javaScrip por ende inicia con minuscula utiliza )
class LocalStorage {
    static getItem() {
      let items;
  
      /* */
      if(localStorage.getItem('items') === null) {
        items = []; /*items = areglo vacio */
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
  
      return items;
    }
  
// Guardar el Elemento
    static addItem(item) {
      const items = LocalStorage.getItem();
  
      items.push(item);
  
      localStorage.setItem('items', JSON.stringify(items));
    }
  
    static removeItem(content) {
      const items = LocalStorage.getItem();
  
      items.forEach((item, index) => {
        if(item.description === content) {
          items.splice(index, 1);
        }
      });
  
      localStorage.setItem('items', JSON.stringify(items));
    }
  }
  
  export default LocalStorage;