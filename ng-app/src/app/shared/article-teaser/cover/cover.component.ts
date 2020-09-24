import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../../models';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent implements OnInit {

  @Input() data: Issue;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
