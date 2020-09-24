import { Component, OnInit, Input } from '@angular/core';
import { Donate } from '../../models';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent implements OnInit {

  @Input() data: Donate;

  constructor() { }

  ngOnInit() {}

}
