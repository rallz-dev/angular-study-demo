import { Component, Input, OnInit } from '@angular/core';
import { GenericViewModel } from 'src/app/models/view/generic.model';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss'],
})
export class GenericListComponent implements OnInit {

  @Input('list')
  listData!: GenericViewModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
