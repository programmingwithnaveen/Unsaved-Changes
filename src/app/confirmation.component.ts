import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'conf',
  template: `
        <div id="abx0819em1" class="modal-header">
            <h4 id="abx0819h41" class="modal-title">Confirmation</h4>
            <button type="button" id="abx0819bu1" class="close" aria-label="Close" (click)="this.activeModal.close(null)">
                <span aria-hidden="true" id="abx0819sp1">&times;</span>
            </button>
        </div>
        <div id="abx0819di1" class="modal-body">
           
            <p id="abx0819p1" class="text-muted" >{{confMessage}}</p>
        </div>
        <div id="abx0819di2" class="modal-footer">
            <button type="button" id="abx0819bu2" class="btn btn-primary" (click)="this.activeModal.close(true)" [disabled]="errorMsg">Confirm</button>
            <button type="button" id="abx0819bu3" class="btn btn-secondary" (click)="this.activeModal.close(null)">Cancel</button>
        </div>
    `,
  styles: [`
  `],
})
export class Confirmation {
  constructor(public activeModal: NgbActiveModal) {
  }
}
