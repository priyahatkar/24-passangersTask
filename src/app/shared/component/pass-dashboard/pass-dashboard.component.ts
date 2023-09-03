import { Component, OnInit } from '@angular/core';
import { Ipassenger } from '../../model/passenger';
import { PassengerService } from '../../service/passenger.service';

@Component({
  selector: 'app-pass-dashboard',
  templateUrl: './pass-dashboard.component.html',
  styleUrls: ['./pass-dashboard.component.scss']
})
export class PassDashboardComponent implements OnInit {
  passengersArray : Array<Ipassenger> =[];
  checkInArray : Array<Ipassenger> =[];
  checkInCount!: number;
  
  constructor(private _passService :PassengerService) { }

  ngOnInit(): void {
    this.passengersArray= this._passService.getAllPassenger();
    this.getCheckInCount();
    
    console.log(this.checkInCount);
  }

  getCheckInCount(){
    this.checkInArray = this.passengersArray.filter((pass:Ipassenger) =>{
      return pass.checkedIn;
    })
    
    this.checkInCount=this.checkInArray.length;
  }
}
