import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import { RulesComponent } from './rules/rules.component';
import { RulesModalComponent } from './rules-modal/rules-modal.component';
import { JoinComponent } from './join/join.component';
import { RulesTextComponent } from './rules-text/rules-text.component';

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    RulesModalComponent,
    JoinComponent,
    RulesTextComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
