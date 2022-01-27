import { Component } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { map, reduce } from 'rxjs';
import { clear, counterState, decrease, increase } from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-practic-task';

  count = 0;
  count$ = this.store.select(countSelector)
  cannotDecrease$ = this.count$.pipe(
    map(count => count <= 0)
  )

  constructor(
    private store: Store
  ) {}

  
  increase(): void{
    this.count += 1
    this.store.dispatch(increase())
  }

  decrease(): void{
    this.count -= 1
    this.store.dispatch(decrease())
  }

  clear(): void{
    this.count = 0
    this.store.dispatch(clear())
  }
}


export const featureSelector = createFeatureSelector<counterState>('counter')

export const countSelector = createSelector(
  featureSelector,
  state => state.count
)