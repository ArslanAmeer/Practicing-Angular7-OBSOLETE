import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { PlaygroundComponent } from './playground/playground.component';
import { BasicHighlightDirective } from './playground/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './playground/better-hightlight/better-highlight.directive';
import { UnlessDirective } from './playground/unless.directive';
import { AccountComponent } from './playground/account/account.component';
import { NewAccountComponent } from './playground/new-account/new-account.component';
import { AccountsService } from './playground/accounts.service';
import { LoggingService } from './playground/logging.service';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'servers', component: ServersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    PlaygroundComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
