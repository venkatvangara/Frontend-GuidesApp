import { Routes } from '@angular/router';
import { GuideslistComponent } from './guideslist/guideslist.component';
import { GuidesdetailleComponent } from './guidesdetaille/guidesdetaille.component';

import { GuideFormComponent } from './guide-form/guide-form.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';


export const routes: Routes = [
  { path: 'guides/create', component: GuideFormComponent },
  { path: 'guides/edit/:id', component: GuideFormComponent },

  { path: 'guides/:id', component: GuidesdetailleComponent },
  { path: 'guides', component: GuideslistComponent },
  { path: '', redirectTo: 'guides', pathMatch: 'full' },

  { path: 'activities/create/:guideId', component: ActivityFormComponent },
  { path: 'activities/edit/:id', component: ActivityFormComponent },
];


