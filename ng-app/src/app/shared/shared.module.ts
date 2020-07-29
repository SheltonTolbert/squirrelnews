import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { ArticleComponent } from './article-teaser/article/article.component';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslatePipe } from './translate.pipe';
import { ArticleTeaserComponent } from './article-teaser/article-teaser.component';
import { MoreComponent } from './article-teaser/more/more.component';
import { BackendInterceptor } from './backend.interceptor';
import { DonateComponent } from './article-teaser/donate/donate.component';
import { CoverComponent } from './article-teaser/cover/cover.component';


@NgModule({
  declarations: [
    SafePipe,
    TranslatePipe,
    ArticleTeaserComponent,
    ArticleComponent,
    MoreComponent,
    DonateComponent,
    CoverComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
  ],
  exports: [SafePipe, TranslatePipe, ArticleTeaserComponent, ArticleComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true }
  ]
})
export class SharedModule { }