import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {}

}
