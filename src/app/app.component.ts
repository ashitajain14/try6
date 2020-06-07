import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'try6';

    columnDefs = [
        {headerName: 'Make', field: 'make', filter: true},
        {headerName: 'Price', field: 'price', sortable: true},
        {headerName: 'Make2', field: 'make', filter: true},
        {headerName: 'Model', field: 'model', filter: true},
    ];

    rowData: any;

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.rowData = this.http.get('https://raw.githubusercontent.com/ashitajain14/Data/master/test2.json');
    }
}
