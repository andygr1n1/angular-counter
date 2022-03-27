import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CounterComponent } from './counter.component';
import {
  counterFeatureKey,
  counterReducer,
} from './store/reducers/counter.reducer';
import { CommonModule } from '@angular/common';
import { GraphQLModule } from 'src/graphql/graphql.module';
import { CounterEffects } from './store/effects/counter.effects';
import { UsersSelectComponent } from './components/users-select/users-select.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [CounterComponent, UsersSelectComponent],
  imports: [
    MatSelectModule,
    CommonModule,
    GraphQLModule,
    StoreModule.forFeature(counterFeatureKey, counterReducer),
    EffectsModule.forFeature([CounterEffects]),
  ],
  providers: [],
  bootstrap: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterModule {}
