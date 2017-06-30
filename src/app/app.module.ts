import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';  ///import angular models here

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent  //Use this to add a component instead of  directive: [TodosComponent}
  ],                // inside of the app.component.ts file
  imports: [
    BrowserModule,
    FormsModule  ///import angulat models here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
