import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {TacGia} from "../entities/tacgia";

@Injectable({
  providedIn:'root'
})
export class TacGiaService{
  private apiServiceUrl='http://localhost:8080/admin/tacgia';
  constructor(
    private http:HttpClient
  ) {
  }
  public getAllTacGia():Observable<TacGia[]>{
    return this.http.get<TacGia[]>(this.apiServiceUrl);
  }
  public findById(id:number):Observable<TacGia>{
    return this.http.get<TacGia>(`${this.apiServiceUrl}/${id}`);
  }
  public save(tacGia: FormGroup):Observable<TacGia>{
    return this.http.post<TacGia>(`${this.apiServiceUrl}/add`,JSON.stringify(tacGia));
  }
  public update(tacGia:FormGroup):Observable<TacGia>{
    return this.http.put<TacGia>(`${this.apiServiceUrl}/update`,JSON.stringify(tacGia));
  }
  public deleteById(id:number):Observable<boolean>{
      console.log(`${this.apiServiceUrl}/delete/${id}`);
    return this.http.delete<boolean>(`${this.apiServiceUrl}/delete/${id}`);
  }
}
