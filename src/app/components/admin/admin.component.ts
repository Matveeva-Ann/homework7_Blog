import { Component } from '@angular/core';
import { Report, ReportRequest } from 'src/app/shared/interfaces/interface';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  articlesArr!:ReportRequest[];
  emitArticleForChange!:ReportRequest;
  idChangesArticle!: number;


  constructor(private dataService: BlogService) {}

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle():void{
    this.dataService.gatAllArticle().subscribe((data) =>{
      this.articlesArr = data;
    })
  }
  newArticle(article: Report): void {
    this.dataService.setArticle(article).subscribe((data) => {
      this.getArticle();
    });
  }
  idElementDeleted(id:number):void{
    this.dataService.deleteArticle(id).subscribe((data)=>{
      this.getArticle();
    })
  }
  changesArticle(article:ReportRequest):void{
    this.emitArticleForChange = article;
    this.idChangesArticle = article.id;
  }

  exchangeArticle(article:ReportRequest):void{
    this.dataService.editArticle(article, this.idChangesArticle).subscribe(()=>{
      this.getArticle();
    })
  }
  
  
}
