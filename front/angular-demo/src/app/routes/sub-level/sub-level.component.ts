import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, take, throwError } from 'rxjs';
import { GenericViewModel } from 'src/app/models/view/generic.model';
import { HttpGenericService } from 'src/app/services/generic/http-generic.service';

@Component({
  selector: 'app-sub-level',
  templateUrl: './sub-level.component.html',
  styleUrls: ['./sub-level.component.css']
})
export class SubLevelComponent implements OnInit {

  list: GenericViewModel[] = [];
  generics$!: Observable<GenericViewModel[]>;
  recordsCount!: number;
  totalRecords!: number;
  totalPages!: number;


  constructor(
    private service: HttpGenericService
  ) { }

  ngOnInit(): void {

  }

  fetchData(): void {
    this.generics$ = this.service.getFromServer()
    .pipe(
      map((items) => {
        this.recordsCount = items.pagination.count;
        this.totalRecords = items.pagination.total;
        this.totalPages = items.pagination.pages;

        return items.data.map((item) => {
          return <GenericViewModel> {
            texto: item.prop1,
            subTexto: item.prop2
          };
        });
      }),
      catchError((er) => {
        console.log('handle error');
        return throwError(() => new Error(er))
      })
    );
  }

  crash(): void {
    this.generics$ = this.service
      .crashAtServer()
      .pipe(
        map((items) => {
          return items.map((item) => {
            return <GenericViewModel> {
              texto: item['prop1'],
              subTexto: item['prop2']
            };
          });
        }),
      );
  }

}
