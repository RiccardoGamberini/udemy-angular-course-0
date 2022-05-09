import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SettingsComponent } from "./settings/settings.component";
import { SettingsListComponent } from "./settings/settings-list/settings-list.component";
import { SettingItemComponent } from "./settings/settings-list/setting-item/setting-item.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'settings', component: SettingsComponent,
    children: [
      { path: 'list', component: SettingsListComponent },
      { path: 'setting', component: SettingItemComponent }
    ]
  },
];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
