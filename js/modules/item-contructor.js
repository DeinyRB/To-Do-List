// constructor en class 

    /*(en clases la primera letra es mayuscula), this se utiliza para hacer que los elemtos sean globale(mi variable tenga ecceso en todo el metodo)
    el constructor, nos permite crear objetos a partir de nuestra 
    forma predeterminada*/
    class ToDoItem {
        constructor(completed, description, 
          index) {
            this.completed = completed;
            this.description = description
            this.index = index;
          }
      }

      // lo exportamos
      export default ToDoItem;
      
      /*
      const item = new ToDoItem(false,
        'Primer todo', 0);
      
      const item2 = new ToDoItem(false,
        'Primer todo', 0);
      
      const item3 = new ToDoItem(false,
        'Primer todo', 0);
      
      const item4 = new ToDoItem(false,
        'Primer todo', 0);
        
      
      console.log(item);
      console.log(item2);
      console.log(item3);
      console.log(item4);
      */