import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {BanDoc} from "../entities/bandoc";

@Injectable({
  providedIn:'root'
})
export class BanDocService{
  private apiServiceUrl='http://localhost:8080/admin/bandoc';
  constructor(
    private http:HttpClient
  ) {
  }
  public getAllBanDoc():Observable<BanDoc[]>{
    return this.http.get<BanDoc[]>(this.apiServiceUrl);
  }
  public findById(id:number):Observable<BanDoc>{
    return this.http.get<BanDoc>(`${this.apiServiceUrl}/${id}`);
  }
  public save(banDoc: FormGroup):Observable<BanDoc>{
    return this.http.post<BanDoc>(`${this.apiServiceUrl}/add`,JSON.stringify(banDoc));
  }
  public update(banDoc:FormGroup):Observable<BanDoc>{
    return this.http.put<BanDoc>(`${this.apiServiceUrl}/update`,JSON.stringify(banDoc));
  }
  public deleteById(id:number):Observable<Boolean>{
      console.log(`${this.apiServiceUrl}/delete/${id}`);
    return this.http.delete<Boolean>(`${this.apiServiceUrl}/delete/${id}`);
  }
}
