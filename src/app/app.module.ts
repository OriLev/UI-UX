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
import { DisplayComponent } from './display/display.component';
import { GreetingComponent } from './greeting/greeting.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { DataHeaderComponent } from './data-header/data-header.component';
import { DataComponent } from './data/data.component';
import { PeriodButtonComponent } from './period-button/period-button.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TasksDisplayComponent } from './tasks-display/tasks-display.component';
import { MessagesDisplayComponent } from './messages-display/messages-display.component';
import { ActivityDisplayComponent } from './activity-display/activity-display.component';
import { TasksService } from './tasks.service';
import { FeedHeaderComponent } from './feed-header/feed-header.component';
import { TaskComponentComponent } from './task-component/task-component.component';
import { ActivityService } from './activity.service';
import { ActivityComponentComponent } from './activity-component/activity-component.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideMenuComponent,
    MenuItemComponent,
    MenuUserProfileComponent,
    ProfileNotificationsComponent,
    UserActionsComponent,
    DisplayComponent,
    GreetingComponent,
    DataDisplayComponent,
    DataHeaderComponent,
    DataComponent,
    PeriodButtonComponent,
    UserDashboardComponent,
    TasksDisplayComponent,
    MessagesDisplayComponent,
    ActivityDisplayComponent,
    FeedHeaderComponent,
    TaskComponentComponent,
    ActivityComponentComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [TasksService, ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
