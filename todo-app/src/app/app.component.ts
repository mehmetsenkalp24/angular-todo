import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  todos: Todo[] = [];
  newTodo: string;

  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.iscomplected = true;
      this.todos.push(todo);
      this.newTodo = "";
    } else {
      alert("Bir Metin Giriniz...");
    }
  }

  remove(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }



}
