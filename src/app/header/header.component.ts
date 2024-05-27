import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { ReadingJsonServiceService } from '../services/reading-json-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title = 'my-header'
  data: any;

  constructor(private myReadingService: ReadingJsonServiceService) {}

  ngOnInit(): void {
      this.myReadingService.getData().subscribe(data => {
        this.data = data;
        console.log(this.data);
      })
  }

}
