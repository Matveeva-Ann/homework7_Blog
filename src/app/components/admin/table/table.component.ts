import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Report, ReportRequest } from 'src/app/shared/interfaces/interface';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() articlesArr!: ReportRequest[];
  @Output() idElementDeleted = new EventEmitter<number>();
  @Output() changesArticle = new EventEmitter<ReportRequest>();



  constructor(private articleService: BlogService){}

  deleteArticle(article:ReportRequest):void{
    const id = Number(article.id);
    this.idElementDeleted.emit(id);
  }

  editArticle(article:ReportRequest):void{
    this.changesArticle.emit(article);
  }


  
}
