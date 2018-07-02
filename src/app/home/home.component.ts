import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersSubscription: Subscription;
  customSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const numbers = interval(1000).pipe(
      map((number: Number) => { return `This is number -> ${number}` }));
    this.numbersSubscription = numbers.subscribe((value: string) => { console.log(value) });

    const testObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => { observer.next('first package') }, 2000);
      setTimeout(() => { observer.next('second package') }, 4000);
      setTimeout(() => { observer.error('This is doesnt work') }, 5000);
    });
    this.customSubscription = testObservable.subscribe(
      (data: string) => { console.log(data) },
      (error: string) => { console.log(error) },
      () => { console.log('Completed!!!') }
    )
  }

  ngOnDestroy() {
    this.numbersSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}
