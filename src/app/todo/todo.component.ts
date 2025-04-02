import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask:string="";
  tasks:string[]=[];
 addTask(){
   if(this.newTask.trim()){
     this.tasks.push(this.newTask.trim());
     this.newTask='';
   }
 }
 deleteTask(index:number){
   this.tasks.splice(index,1);
 }
}
