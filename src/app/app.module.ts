import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AwiraMaterialModule } from './material-module';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtistPortalComponent } from './artist-portal/artist-portal.component';
import { HeaderArtistComponent } from './shared/header-artist/header-artist.component';
import { ArtistPostsComponent } from './artist-portal/artist-posts/artist-posts.component';
import { NewPostsComponent } from './artist-portal/artist-posts/new-posts/new-posts.component';
import { ArtistSettingsComponent } from './artist-portal/artist-settings/artist-settings.component';
import { ArtistEditComponent } from './artist-portal/artist-edit/artist-edit.component';
import { ArtistEditAboutComponent } from './artist-portal/artist-edit/artist-edit-about/artist-edit-about.component';
import { ArtistEditTiersComponent } from './artist-portal/artist-edit/artist-edit-tiers/artist-edit-tiers.component';
import { ArtistEditGoalComponent } from './artist-portal/artist-edit/artist-edit-goal/artist-edit-goal.component';
import { ArtistEditThanksComponent } from './artist-portal/artist-edit/artist-edit-thanks/artist-edit-thanks.component';
import { ArtistEditPaymentstabsComponent } from './artist-portal/artist-edit/artist-edit-paymentstabs/artist-edit-paymentstabs.component';
import { ArtistEditPoststabComponent } from './artist-portal/artist-edit/artist-edit-poststab/artist-edit-poststab.component';
import { ArtistEditOffersComponent } from './artist-portal/artist-edit/artist-edit-offers/artist-edit-offers.component';
import { TextComponent } from './artist-portal/artist-posts/new-posts/text/text.component';
import { LoginComponent } from "./home-page/login/login.component";
import { RegisterComponent } from "./home-page/register/register.component";
import { HeaderProfileBtnComponent } from './shared/header-artist/header-profile-btn/header-profile-btn.component';
import { ArtistMessageComponent } from './artist-portal/artist-message/artist-message.component';
import { ArtistMessageAllComponent } from './artist-portal/artist-message/artist-message-page/artist-message-all/artist-message-all.component';
import { ArtistMessageUnreadComponent } from './artist-portal/artist-message/artist-message-page/artist-message-unread/artist-message-unread.component';
import { ArtistMessageReadComponent } from './artist-portal/artist-message/artist-message-page/artist-message-read/artist-message-read.component';
import { ArtistMessageProfileComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile.component';
import { ArtistMessagePageComponent } from './artist-portal/artist-message/artist-message-page/artist-message-page.component';
import { ArtistMessageProfileReadComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile-read/artist-message-profile-read.component';
import { ArtistMessageProfileAllComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile-all/artist-message-profile-all.component';
import { ArtistMessageProfileUnreadComponent } from './artist-portal/artist-message/artist-message-profile/artist-message-profile-unread/artist-message-profile-unread.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    HomePageComponent,
    ArtistPortalComponent,
    HeaderArtistComponent,
    ArtistPostsComponent,
    NewPostsComponent,
    ArtistSettingsComponent,
    ArtistEditComponent,
    ArtistEditAboutComponent,
    ArtistEditTiersComponent,
    ArtistEditGoalComponent,
    ArtistEditThanksComponent,
    ArtistEditPaymentstabsComponent,
    ArtistEditPoststabComponent,
    ArtistEditOffersComponent,
    TextComponent,
    LoginComponent,
    RegisterComponent,
    HeaderProfileBtnComponent,
    ArtistMessageComponent,
    ArtistMessageAllComponent,
    ArtistMessageUnreadComponent,
    ArtistMessageReadComponent,
    ArtistMessageProfileComponent,
    ArtistMessagePageComponent,
    ArtistMessageProfileReadComponent,
    ArtistMessageProfileAllComponent,
    ArtistMessageProfileUnreadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AwiraMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Specify AvatarModule as an import
    AvatarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
