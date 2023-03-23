// import { Component, EventEmitter, Output } from '@angular/core';
// import { Report, ReportRequest } from 'src/app/shared/interfaces/interface';
// import { BlogService } from 'src/app/shared/services/blog.service';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.scss'],
// })
// export class FormComponent {
//   @Output() articlesArr = new EventEmitter<ReportRequest[]>();
//   text = '';
//   title = '';
//   author = '';


//   constructor(private dataService: BlogService) {}

//   ngOnInit(): void {
//     this.getArticle()
//   }

//   getArticle():void{
//     this.dataService.gatAllArticle().subscribe((data) =>{
//       this.articlesArr.emit(data);
//     })
//   }

 
//   addArticle() {
//     const article: Report = {
//       title: this.title,
//       text: this.text,
//       author: this.author,
//     };
//     this.dataService.setArticle(article).subscribe((data) => {
//       this.getArticle();
//     });
//     this.reset();
//   }

//   reset() {
//     this.text = this.title = this.author = '';
//   }
// }


import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Report, ReportRequest } from 'src/app/shared/interfaces/interface';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() newArticle = new EventEmitter<Report>();
  @Output() exchangeArticle = new EventEmitter<ReportRequest>();
  @Input() emitArticleForChange?:ReportRequest;

  text = '';
  title = '';
  author = '';
  changeBtn = true;
  idChangesArticle!:number;
  message = false;


  
 
  ngOnChanges(): void {
    if(this.emitArticleForChange){
      this.title = this.emitArticleForChange.title;
      this.text = this.emitArticleForChange.text;
      this.author = this.emitArticleForChange.author;
      this.idChangesArticle = this.emitArticleForChange.id;
      this.changeBtn = false;
    }
  }
 
  addArticle() {
    if (this.text !== '' && this.author !== '' && this.title !== ''){
      const article: Report = {
        title: this.title,
        text: this.text,
        author: this.author,
      };
      this.newArticle.emit(article);
      this.reset();
    }else{ 
      this.message = true;
    }
  }

  editArticle(){
    const modifiedArticle: ReportRequest = {
      title: this.title,
      text: this.text,
      author: this.author,
      id: this.idChangesArticle,
    }
    this.exchangeArticle.emit(modifiedArticle);
    this.changeBtn = true;
    this.reset();
  }
  reset() {
    this.text = this.title = this.author = '';
  }
}
