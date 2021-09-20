import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SearchPageComponent } from './body/search-page.component';
import { YourLibraryComponent } from './body/your-library.component';
import { HistoryComponent } from './header/history.componen';
import { LibraryButtonsComponent } from './header/library-buttons.component';
import { TopBarComponent } from './header/topbar.component';
import { UserDropdownComponent } from './header/user-dropdown.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { SidebarButtonsComponent } from './sidebar/sidebar-buttons.component';
import { SidebarPlaylistButtonsComponent } from './sidebar/sidebar-playlist-buttons.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { PlaylistCardComponent } from './body/playlist-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HistoryComponent,
    LibraryButtonsComponent,
    UserDropdownComponent,
    SidebarComponent,
    SidebarButtonsComponent,
    SidebarPlaylistButtonsComponent,
    BodyComponent,
    LayoutMainComponent,
    SearchPageComponent,
    YourLibraryComponent,
    PlaylistCardComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
