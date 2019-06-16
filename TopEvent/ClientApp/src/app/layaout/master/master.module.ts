import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { MessagesCardComponent } from './messages-card/messages-card.component';
import { NotificationsCardComponent } from './notifications-card/notifications-card.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { SidenavProfileComponent } from './sidenav-profile/sidenav-profile.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MessageItemComponent } from './messages-card/message-item/message-item.component';
import { NotificationItemComponent } from './notifications-card/notification-item/notification-item.component';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatBadgeModule,
  MatCardModule,
} from '../../barels/materil.barel';

@NgModule({
  imports: [
    CommonModule,
    MasterRoutingModule,

    /*materil modules*/
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
  ],
  declarations: [
    MasterComponent,
    MessagesCardComponent,
    NotificationsCardComponent,
    SidenavListComponent,
    SidenavProfileComponent,
    UserCardComponent,
    MessageItemComponent,
    NotificationItemComponent
  ]
})
export class MasterModule { }
