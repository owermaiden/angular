import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypescriptComponent } from './common/typescript/typescript.component';

import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives/directives.component';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding/binding.component';

const routes: Routes = [ 

  {path: 'bindings', component: BindingComponent },
  {path: 'directives', component: DirectivesComponent},
  {path: '', pathMatch: 'full', component: BindingComponent}

]

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
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
