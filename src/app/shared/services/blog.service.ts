import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Report, ReportRequest  } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  
  private url = environment.BACKEND_URL;
  private api = {
    articles: `${this.url}/articles`,
  }

  constructor(
    private http:HttpClient
  ) { }

  gatAllArticle():Observable<ReportRequest[]>{
    return this.http.get<ReportRequest[]>(this.api.articles);
  }

  setArticle (article:Report):Observable<void>{
    return this.http.post<void>(this.api.articles, article);
  }
  deleteArticle(id:number):Observable<void>{
    return this.http.delete<void>(`${this.api.articles}/${id}`);
  }

  editArticle(newArticle:ReportRequest, id:number):Observable<ReportRequest>{
    return this.http.patch<ReportRequest>(`${this.api.articles}/${id}`, newArticle);
  }
  getOneArticle(id:number):Observable<ReportRequest>{
    return this.http.get<ReportRequest>(`${this.api.articles}/${id}`)

  }

}
