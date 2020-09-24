import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/shared/articles.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { StateService } from 'src/app/shared/state.service';
import { Issue } from '../models';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  issues$: Observable<Partial<Issue>[]>;

  constructor(
    private nav: NavController,
    public articles: ArticlesService,
    private state: StateService
  ) { }

  ngOnInit() {
    this.issues$ = this.articles.getArchive();
  }


  openIssue(issueId: number) {
    this.nav.navigateForward(`tabs/home/previous/${issueId}`);
  }


  handleBack() {
    this.state.activeTab.next('all');
  }
}
