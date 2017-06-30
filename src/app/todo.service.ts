import { Injectable } from '@angular/core';
import {Init} from './init-todos';
@Injectable()

//ectending functionality from the init-todos.ts
export class TodoService extends Init{

  constructor() {
    super();
    console.log('tosoService init')
    // this will call the load function creating the file in localStorage
    this.load();
  }

  getTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }
  addTodo(newTodo){
    var todos = JSON.parse(localStorage.getItem('todos'));
    // add new Todo
    todos.push(newTodo);
    //set new todo
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  deleteTodo(todoText){
    //gets todos from localStorage
    var todos = JSON.parse(localStorage.getItem('todos'));

    for(var i =0; i < todos.length;i++){
      if(todos[i].text == todoText){
        todos.splice(i,1);
      }
    }

    //save todo
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  updateTodo(oldText, newText){
    //gets todos from localStorage
    var todos = JSON.parse(localStorage.getItem('todos'));

    for(var i =0; i < todos.length;i++){
      if(todos[i].text == oldText){
        todos[i].text = newText;
      }
    }

    //save todo
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}
