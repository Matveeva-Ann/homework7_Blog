import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportRequest } from 'src/app/shared/interfaces/interface';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog-info',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.scss'],
})
export class BlogInfoComponent {

  article?: ReportRequest;
  
  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getArticle();
  }
  getArticle(){
    const ARTICLE_ID = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.blogService.getOneArticle(ARTICLE_ID).subscribe((data)=>{
      this.article = data;
    })

  }


}
