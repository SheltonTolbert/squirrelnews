import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/shared/articles.service';
import { Observable } from 'rxjs';
import { Article } from 'src/app/home/article';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  articles$: Map<number, { articles: Article[], expanded: boolean}>;
  issues = [];
  constructor(
    private nav: NavController,
    public articles: ArticlesService,
    private state: StateService
  ) { }

  ngOnInit() {
  }


  openIssue(issueId: number) {
    this.nav.navigateForward(`tabs/home/previous/${issueId}`);
  }


  handleBack() {
    this.state.activeTab.next('all');
  }
}
