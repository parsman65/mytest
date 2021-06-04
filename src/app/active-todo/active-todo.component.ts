import { Component } from '@angular/core';
import { IToDo } from '../create-todo/create-todo.component';


const ELEMENT_DATA: IToDo[] = [
    { position: 1, content: 'finish my angular todo project', registerDate: new Date(), targetDate: new Date() },
    { position: 2, content: 'finish the book ABC', registerDate: new Date(), targetDate: new Date() },
    { position: 3, content: 'finish 504 english', registerDate: new Date(), targetDate: new Date() },
];

@Component({
    selector: 'app-active-todo',
    templateUrl: './active-todo.component.html',
    styleUrls: ['./active-todo.component.css']
})
export class ActiveTodoComponent {

    displayedColumns: string[] = ['position', 'content', 'registerDate', 'targetDate'];
    dataSource = ELEMENT_DATA;
}
