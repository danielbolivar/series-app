import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series/series-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, SeriesListComponent],
    template: `
        <app-series-list></app-series-list>
    `,
    styles: []
})
export class AppComponent { }
