import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {NXB} from "../entities/nxb";

@Injectable({
  providedIn:'root'
})
export class  NxbService{
  private apiServiceUrl='http://localhost:8080/admin/nxb';
  constructor(
    private http:HttpClient
  ) {
  }
  public getAllNxb():Observable<NXB[]>{
    return this.http.get<NXB[]>(this.apiServiceUrl);
  }
  public findById(id:number):Observable<NXB>{
    return this.http.get<NXB>(`${this.apiServiceUrl}/${id}`);
  }
  public save(nxb: FormGroup):Observable<NXB>{
    return this.http.post<NXB>(`${this.apiServiceUrl}/add`,JSON.stringify(nxb));
  }
  public update(nxb:FormGroup):Observable<NXB>{
    return this.http.put<NXB>(`${this.apiServiceUrl}/update`,JSON.stringify(nxb));
  }
  public deleteById(id:number):Observable<Boolean>{
      console.log(`${this.apiServiceUrl}/delete/${id}`);
    return this.http.delete<Boolean>(`${this.apiServiceUrl}/delete/${id}`);
  }
}
