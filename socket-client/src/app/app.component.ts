import {Component, OnInit} from '@angular/core';
import {io} from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private socket: any;
  public data: any;

  constructor() {
    // Connect Socket with server URL
    this.socket = io('http://localhost:3001', {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    })
  }
  public ngOnInit(): void {
    this.socket.on('status', (data: any) => {
      console.log(data);
      this.data = data;
    });
  }
}
