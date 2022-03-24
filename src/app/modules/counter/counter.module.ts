import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { CounterComponent } from "./counter.component";
import { counterFeatureKey, counterReducer } from "./store/reducers/counter.reducer";

@NgModule({
  declarations: [CounterComponent],
  imports: [StoreModule.forFeature(counterFeatureKey, counterReducer)],
  providers: [],
  bootstrap: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterModule {}
