import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from './series';
import { SeriesService } from './series.service';

@Component({
    selector: 'app-series-list',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="container mt-4">
            <h1 class="mb-4">TV Series</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Channel</th>
                        <th>Seasons</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let serie of series">
                        <td>{{serie.id}}</td>
                        <td>{{serie.name}}</td>
                        <td>{{serie.channel}}</td>
                        <td>{{serie.seasons}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="mt-3">
                <p>Seasons average: {{averageSeasons | number:'1.0-2'}}</p>
            </div>
        </div>
    `,
    styles: []
})
export class SeriesListComponent implements OnInit {
    series: Serie[] = [];
    averageSeasons: number = 0;

    constructor(private seriesService: SeriesService) { }

    ngOnInit(): void {
        this.seriesService.getSeries().subscribe(series => {
            this.series = series;
            this.calculateAverageSeasons();
        });
    }

    calculateAverageSeasons(): void {
        const total = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
        this.averageSeasons = total / this.series.length;
    }
}
