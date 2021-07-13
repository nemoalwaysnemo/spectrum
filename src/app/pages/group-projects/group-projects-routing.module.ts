import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './projects-list/projects-list.component';
import { GroupProjectsComponent } from './group-projects.component';

const routes: Routes = [{
  path: '',
  component: GroupProjectsComponent,
  children: [
    {
      path: 'projectsList',
      component: ProjectListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupProjectsRoutingModule {
}
