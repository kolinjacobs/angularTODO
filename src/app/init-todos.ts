export class Init{
  load(){
    // checks if a file in local storage named todos exist
    //if it does not then it creates an array filled with objects
    //and it saves that in local storage as a JSON string
    if(localStorage.getItem('todos') == null || localStorage.getItem('todos') == undefined){
        console.log("no todos found creating");
        var todos = [
          {text: 'kids'},
          {text: 'work'},
          {text: 'dinner'}
        ];

        localStorage.setItem('todos', JSON.stringify(todos));
        return
    }else{
      console.log('found Todos');

    }
  }

}
