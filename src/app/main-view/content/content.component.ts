import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

interface IAnswer {
  answer: string
  image: string
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  question = '';
  answer = 'Answer here...';
  timeoutHandle: any;
  loading = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  onInput() {
    clearTimeout(this.timeoutHandle);
    this.answer = 'Waiting for you to stop typing...';
    this.loading = true;
    this.timeoutHandle = setTimeout(() => this.getAnswer(), 1000);
  }

  getAnswer() {
    this.loading = false;

    if (!this.question.length) {
      this.answer = 'Answer here...'
      return
    }
    if (!this.question.includes('?')) {
      this.answer = 'Questions usually contain a question mark "?"'
      return
    }

    this.loading = true;
    this.answer = 'Thinking...';

    this.request()
      .subscribe(
        resp => (this.answer = resp.answer, this.loading = false),
        err => console.error(err)
      );
  }

  request() {
    return this.http.get<IAnswer>('https://yesno.wtf/api')
      .pipe(
        map(resp => ({
          answer: resp.answer,
          image: resp.image
        })),
        catchError(err => {
          throw `Something goes wrong: ${err}`;
        })
      );
  }
}
