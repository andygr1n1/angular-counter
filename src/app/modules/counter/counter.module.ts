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
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NewUserComponent } from './components/new-user/new-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CounterComponent, UsersSelectComponent, NewUserComponent],
  imports: [
    MatProgressSpinnerModule,
    FormsModule,
    MatDialogModule,
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
