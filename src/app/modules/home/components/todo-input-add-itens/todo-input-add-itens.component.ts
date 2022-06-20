import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter()

  public addItemTaskList: string = ''

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    //removendo espaços para evitar que usuário envie uma task com apenas espaços
    this.addItemTaskList = this.addItemTaskList.trim()
    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList)
      this.addItemTaskList = ''
    }
    
  }


}
