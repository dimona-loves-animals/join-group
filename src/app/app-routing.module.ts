import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from "./join/join.component";
import { RulesComponent } from "./rules/rules.component";

const routes: Routes = [
  {path: '', component: JoinComponent},
  {path: 'rules', component: RulesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
