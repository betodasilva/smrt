import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  private _progress: BehaviorSubject<number> = new BehaviorSubject(0);

  public get progress() {
    return this._progress.getValue();
  }

  public set progress(value) {
    this._progress.next(value);
  }

  public progressObs(): Observable<any> {
    return this._progress;
  }

  constructor() { }
}
