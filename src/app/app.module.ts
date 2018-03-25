import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SharedModule } from './shared/shared.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuUserProfileComponent } from './menu-user-profile/menu-user-profile.component';
import { ProfileNotificationsComponent } from './profile-notifications/profile-notifications.component';
import { UserActionsComponent } from './user-actions/user-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideMenuComponent,
    MenuItemComponent,
    MenuUserProfileComponent,
    ProfileNotificationsComponent,
    UserActionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
