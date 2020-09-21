import { Component, OnInit } from '@angular/core';
import {SensorService} from '../shared/services/sensor.service';
import {Sensor} from '../shared/models/sensor';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  sensorData: Sensor[];

  constructor(
    private dataService: SensorService
  ) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(arr => { this.sensorData = arr; });

    this.dataService.listen().subscribe(x => {
      this.sensorData.push(x);
      // console.debug(x);
    });
  }

}
