export interface Report {
  title:string,
  text: string,
  author: string,
}

export interface ReportRequest extends Report{
  id: number;
}
