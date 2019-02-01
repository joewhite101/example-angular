import { StreamServe } from './../domain/streamserve';
import { StreamServeService } from './../services/stream-serve.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stream-serve',
  templateUrl: './stream-serve.component.html',
  styleUrls: ['./stream-serve.component.css']
})
export class StreamServeComponent implements OnInit, OnDestroy {

  streamServe: StreamServe;
  isAlive = true;
  constructor(private streamServeService: StreamServeService) { }

  ngOnInit() {
    this.streamServe = new StreamServe();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Check value');
      return;
    }
      this.streamServeService.add(this.streamServe)
      .pipe(takeWhile(x => this.isAlive))
      .subscribe(results => {

      });
  }

  downloadFile(data: string) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

}
