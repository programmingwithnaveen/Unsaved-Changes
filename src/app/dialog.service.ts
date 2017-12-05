import {Confirmation} from './confirmation.component';

import {Injectable} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Injectable()
export class DialogService {
  constructor(private ngbModal: NgbModal) {
  }

  /**
   * Ask user to confirm an action. `message` explains the action and choices.
   * Returns promise resolving to `true`=confirm or `false`=cancel
   */
  confirm(message?: string) {
    const m = this.ngbModal.open(Confirmation);
    m.componentInstance.confMessage = message || 'Is it OK?';
    return m.result;
  };
}
