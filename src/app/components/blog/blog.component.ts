import { Component } from '@angular/core';
import { Report, ReportRequest } from 'src/app/shared/interfaces/interface';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogsArticle: ReportRequest[] = [];
  constructor(private dataService: BlogService) {}

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle() {
    this.dataService.gatAllArticle().subscribe((data) => {
      this.blogsArticle = data;
    });
  }
}
