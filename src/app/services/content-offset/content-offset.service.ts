import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentOffsetService {

  private _offsetX: BehaviorSubject<number> = new BehaviorSubject(0);

  public get offsetX(){
    return this._offsetX.getValue();
  }

  public set offsetX(value){
    this._offsetX.next(value);
  }

  public offsetObs(): Observable<any> {
    return this._offsetX;
  }

  constructor() { }
}
