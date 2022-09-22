import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MuonSach} from "../../entities/muonsach";
import {MuonSachService} from "../../services/muonsach.service";
import {NxbService} from "../../services/nxb.service";
import {ToastrService} from "ngx-toastr";
import {BanDoc} from "../../entities/bandoc";
import {Sach} from "../../entities/sach";
import {SachService} from "../../services/sach.service";
import {BanDocService} from "../../services/bandoc.service";
import {VERSION} from "@angular/cdk";

@Component({
  selector: 'app-muonsach',
  templateUrl: './muonsach.component.html',
  styleUrls: ['./muonsach.component.scss']
})
export class MuonsachComponent implements OnInit {
  title={insert:"Insert MuonSach",update:"Update MuonSach"};
   idMuonSach!:number;
   namems(id:number):string{
       return this.findById(this.idMuonSach).banDoc.ten;
   }
  formGroup: FormGroup = this.fb.group({
    id:null,
    banDoc:[{id:null},[Validators.required]],
    sach:[{id:null},[Validators.required]],
    ghiChu:[null,[Validators.required]],
    ngayMuon:[null,[Validators.required]],
    ngayTra:[null,[Validators.required]],
    soLuong:[null,[Validators.required]],
    trangThai:[0,[Validators.required]]
  })
   muonSachList: MuonSach[] =[];
   checkSubmit=false;
   checkHidden=false;
  banDocList:BanDoc[]=[];
  sachList:Sach[]=[];
  refresh():void{
    this.formGroup.reset();
    this.checkSubmit=false;
  }
  constructor(
      private fb: FormBuilder,
      private muonSachService:MuonSachService,
      private sachService:SachService,
      private banDocService:BanDocService,
      private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getMuonSach();
    this.getBanDoc();
    this.getSach();
  }
  getMuonSach():void{
    this.muonSachService.getAllMuonSach().subscribe(
        (response:MuonSach[])=>{
          this.muonSachList=response;
        },error => {
          console.log("error getAll",error);
        }
    )
  }
  getSach():void{
    this.sachService.getAllSach().subscribe(
        (response:Sach[])=>{
          this.sachList=response;
        },error => {
          console.log("error getAll",error);
        }
    )
  }
  getBanDoc():void{
    this.banDocService.getAllBanDoc().subscribe(
        (response:BanDoc[])=>{
            this.banDocList=response;
        },error => {
            console.log("error getAll",error);
        }
    )
  }
  findById(id:number):MuonSach{
    let idx = this.muonSachList.findIndex(item=>item.id==id);
    return this.muonSachList[idx];
  }
  edit(id: number):void{
    this.checkSubmit = true;
    let form=this.findById(id);
    this.formGroup.patchValue({
        id:form.id,
        banDoc:form.banDoc.id,
        sach:form.sach.id,
        ghiChu:form.ghiChu,
        ngayMuon:form.ngayMuon,
        ngayTra:form.ngayTra,
        soLuong:form.soLuong,
        trangThai:form.trangThai
    })
  }
  idBD!:number;
  idSach!:number;
  onSave():void{
    this.idBD=this.formGroup.controls['banDoc'].value;
    this.idSach=this.formGroup.controls['sach'].value;
    this.formGroup.patchValue({
      id:null,
      banDoc:{id:this.idBD},
      sach:{id:this.idSach}
    })
    this.muonSachService.save(this.formGroup.getRawValue()).subscribe(
        (response:MuonSach)=>{
            if(response.id==null){
                this.toastrService.error("Số lượng sách không đủ!")
            }else {
                this.muonSachList.push(response);
                this.toastrService.success("Insert success!")
                console.log("insert success",response);
            }
          window.location.reload();
        },error => {
            this.toastrService.error("Số lượng sách không đủ!")
          console.log("error insert",error);
        }
    )
  }
  onUpdate():void{
      this.idBD=this.formGroup.controls['banDoc'].value;
      this.idSach=this.formGroup.controls['sach'].value;
      this.formGroup.patchValue({
          banDoc:{id:this.idBD},
          sach:{id:this.idSach}
      })
    this.muonSachService.update(this.formGroup.getRawValue()).subscribe(
        (response:MuonSach)=>{
          if(response.id==null){
              this.toastrService.error("Số lượng sách không đủ!")
          }else {
              this.getMuonSach();
              this.checkSubmit=false;
              this.toastrService.success("Update success!")
              console.log("update success",response);
          }
        },error => {
            this.toastrService.error("Update error!")
          console.log("error update",error);
        }
    )
  }
  doSubmit():void{
    if(this.formGroup.invalid){
      this.formGroup.markAllAsTouched();
      return;
    }
    if(!this.checkSubmit){
      this.onSave();
    }else{
      this.onUpdate();
    }
    this.refresh();
    this.getMuonSach();
  }
  delete(id:number):void{
    this.muonSachService.deleteById(id).subscribe(
        (response=>{
          console.log(response)
          this.toastrService.success("Delete success!")
          this.getMuonSach();
        }),
        error => {
          this.toastrService.error("Delete error!")
          console.log(error)
        });
  }

}
