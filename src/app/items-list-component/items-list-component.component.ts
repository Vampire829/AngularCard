import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list-component.component.html',
  styleUrls: ['./items-list-component.component.scss']
})
export class ItemsListComponentComponent {
@Input() todoList: any
}
