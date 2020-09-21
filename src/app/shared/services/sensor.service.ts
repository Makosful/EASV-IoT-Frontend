import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Sensor } from '../models/sensor';
import {take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(
    private socket: Socket,
    private http: HttpClient,
  ) { }

  getData(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(environment.apiHost + '/sensor/badevaerelse1')
      .pipe(take(1));
  }

  listen(): Observable<Sensor> {
    return this.socket.fromEvent<Sensor>('sensor');
  }
}
