import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypescriptComponent } from './common/typescript/typescript.component';
import { BindingComponent } from './binding/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    BindingComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
