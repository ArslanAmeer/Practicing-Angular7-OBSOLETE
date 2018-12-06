import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { PlaygroundComponent } from './playground/playground.component';
import { BasicHighlightDirective } from './playground/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './playground/better-hightlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    PlaygroundComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
