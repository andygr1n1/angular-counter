import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CounterModule } from './modules/counter/counter.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule.forRoot({}), CounterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
