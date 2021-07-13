import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBALENV } from '@environment/environment';


@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(protected httpClient: HttpClient) {
  }

  @ViewChild('item', { static: true }) accordion;

  projectList: any;
  
  defaultInfo = {
    perpage: '100',
    page: 1,
    private_token: GLOBALENV.PRIVATE_TOKEN,
    groupId: 94,
  }

  ngOnInit(): void {
    this.getYearlyActiveProjects();
    // to do
    // this.getAllProjects();
  }

  //search for projects which have activities in the past year
  private getYearlyActiveProjects() {
    const timePoint = new Date();
    timePoint.setFullYear( timePoint.getFullYear() - 1 );
    const default_param = this.defaultInfo;
    const url = GLOBALENV.GROUP_API + default_param.groupId + '/projects';
    const params = new HttpParams().set("last_activity_after", timePoint.toLocaleDateString()).set("per_page", default_param.perpage)
    .set("order_by", "last_activity_at").set("private_token", default_param.private_token);
    this.httpClient.request('get', url, { params }).subscribe((res) => {
      this.projectList = res;
      console.info(res);
    })
  }
  
  toggle() {
    this.accordion.toggle();
  }
  
}
