import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter.component';
import {
  counterFeatureKey,
  counterReducer,
} from './store/reducers/counter.reducer';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(counterFeatureKey, counterReducer),
  ],
  providers: [],
  bootstrap: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterModule {}
