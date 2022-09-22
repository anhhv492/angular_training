import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {MuonSach} from "../entities/muonsach";

@Injectable({
  providedIn:'root'
})
export class MuonSachService{
  private apiServiceUrl='http://localhost:8080/admin/muonsach';
  constructor(
    private http:HttpClient
  ) {
  }
  public getAllMuonSach():Observable<MuonSach[]>{
    return this.http.get<MuonSach[]>(this.apiServiceUrl);
  }
  public findById(id:number):Observable<MuonSach>{
    return this.http.get<MuonSach>(`${this.apiServiceUrl}/${id}`);
  }
  public save(muonSach: FormGroup):Observable<MuonSach>{
    return this.http.post<MuonSach>(`${this.apiServiceUrl}/add`,JSON.stringify(muonSach));
  }
  public update(muonSach:FormGroup):Observable<MuonSach>{
    return this.http.put<MuonSach>(`${this.apiServiceUrl}/update`,JSON.stringify(muonSach));
  }
  public deleteById(id:number):Observable<Boolean>{
      console.log(`${this.apiServiceUrl}/delete/${id}`);
    return this.http.delete<Boolean>(`${this.apiServiceUrl}/delete/${id}`);
  }
}
