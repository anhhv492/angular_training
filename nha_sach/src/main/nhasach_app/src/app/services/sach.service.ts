import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {Sach} from "../entities/sach";

@Injectable({
  providedIn:'root'
})
export class SachService{
  private apiServiceUrl='http://localhost:8080/admin/sach';
  constructor(
    private http:HttpClient
  ) {
  }
  public getAllSach():Observable<Sach[]>{
    return this.http.get<Sach[]>(this.apiServiceUrl);
  }
  public findById(id:number):Observable<Sach>{
    return this.http.get<Sach>(`${this.apiServiceUrl}/${id}`);
  }
  public save(sach: FormGroup):Observable<Sach>{
    return this.http.post<Sach>(`${this.apiServiceUrl}/add`,JSON.stringify(sach));
  }
  public update(sach:FormGroup):Observable<Sach>{
    return this.http.put<Sach>(`${this.apiServiceUrl}/update`,JSON.stringify(sach));
  }
  public deleteById(id:number):Observable<Boolean>{
      console.log(`${this.apiServiceUrl}/delete/${id}`);
    return this.http.delete<Boolean>(`${this.apiServiceUrl}/delete/${id}`);
  }
}
