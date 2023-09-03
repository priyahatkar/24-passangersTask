import { Component, Input, OnInit } from '@angular/core';
import { PassengerService } from '../../service/passenger.service';
import { Ipassenger } from '../../model/passenger';

@Component({
  selector: 'app-pass-count',
  templateUrl: './pass-count.component.html',
  styleUrls: ['./pass-count.component.scss']
})
export class PassCountComponent implements OnInit {
@Input() allPassCount!: number;
@Input() getCountPass!: number;
public passArray!:Array<Ipassenger>
  constructor(private _passService :PassengerService) { }

  ngOnInit(): void {
    this.passArray = this._passService.getAllPassenger();
    this.allPassCount = this.passArray.length;
    this.getCountPass = this.passArray.filter((pass) => pass.checkedIn===true).length;
    console.log(this.getCountPass);
    
  }

}
