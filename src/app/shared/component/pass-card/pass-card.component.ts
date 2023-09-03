import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from '../../model/passenger';
import { PassengerService } from '../../service/passenger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
@Input() passInfo !: Ipassenger;
@Output() emitCardInfo : EventEmitter<number> = new EventEmitter<number>();
inEditMode !: boolean;
  constructor(public _passService :PassengerService) { }

  ngOnInit(): void {
  }

  onPassRemove(id:number) {
    this._passService.removePassenger(id)
    this.emitCardInfo.emit(id)
  }

  onUpdatePassName(updatedName : string){
    this._passService.UpdatedPassanger(this.passInfo.id, updatedName)
    return
  }
}
