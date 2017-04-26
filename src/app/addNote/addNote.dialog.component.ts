import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'confirm',
  template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     
                     <button type="button" class="close" (click)="close()" >&times;</button>
                     <h4>{{title}}</h4>
                   </div>
                   <div class="modal-body">
                     <button type="button" class="btn btn-success" (click)="edit()">Edit</button>
                     <button type="button" class="btn btn-danger" (click)="delete()">Delete</button>
                     <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
                   </div>
                 </div>
                </div>`
})
export class NoteDialogComponent extends DialogComponent<ConfirmModel, String> implements ConfirmModel {
  title = "Patient Operation";
  message: string;
  constructor(dialogService: DialogService) {
    
    super(dialogService);
    
  }
  
  edit(){
    this.result = "edit";
    this.close();
  }
  delete(){
    this.result = "delete";
    this.close();
  }
  cancel() {
    this.result = "cancel";
    this.close();
  }
}