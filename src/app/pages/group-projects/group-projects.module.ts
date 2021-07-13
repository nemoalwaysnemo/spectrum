import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';
import { GroupProjectsComponent } from './group-projects.component';
import { ThemeModule } from '../../@theme/theme.module';
import { ProjectListComponent } from './projects-list/projects-list.component';
import { GroupProjectsRoutingModule } from './group-projects-routing.module';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    GroupProjectsRoutingModule
  ],
  declarations: [
    GroupProjectsComponent,
    ProjectListComponent,
  ],
  providers: [
  ],
})
export class GroupProjectsModule { }
