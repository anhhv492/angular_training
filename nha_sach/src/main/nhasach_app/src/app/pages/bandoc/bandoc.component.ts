import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {BanDoc} from "../../entities/bandoc";
import {BanDocService} from "../../services/bandoc.service";

@Component({
  selector: 'app-bandoc',
  templateUrl: './bandoc.component.html',
  styleUrls: ['./bandoc.component.scss']
})
export class BandocComponent implements OnInit {
    title={insert:"Insert BanDoc",update:"Update BanDoc"};
    rank=['Nhựa','Gạch','Bê tông','Bạch kim','Kim cương','Thách Đấu'];
    formGroup: FormGroup = this.fb.group({
        id:null,
        maBD:[null,[Validators.required]],
        ten:[null,[Validators.required]],
        sdt:[null,[Validators.required]],
        diaChi:[null,[Validators.required]],
        hang:[null,[Validators.required]],
        ngaySinh:[null,[Validators.required]],
        ngayTao:null
    })
    public banDocList: BanDoc[] =[];
    public checkSubmit=false;
    refresh():void{
        this.formGroup.reset();
        this.checkSubmit=false;
    }
    constructor(
        private fb: FormBuilder,
        private banDocService:BanDocService,
        private toastrService: ToastrService
    ) {}
    ngOnInit(): void {
        this.getBanDoc();
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
    findById(id:number):BanDoc{
        let idx = this.banDocList.findIndex(item=>item.id==id);
        return this.banDocList[idx];
    }
    edit(id: number):void{
        this.checkSubmit = true;
        let form=this.findById(id);
        this.formGroup.patchValue({
            id:id,
            maBD:form.maBD,
            ten:form.ten,
            sdt:form.sdt,
            diaChi:form.diaChi,
            hang:form.hang,
            ngaySinh:form.ngaySinh,
            ngayTao:form.ngayTao
        })
    }
    onSave():void{
        this.formGroup.patchValue({id:null})
        this.banDocService.save(this.formGroup.getRawValue()).subscribe(
            (response:BanDoc)=>{
                this.banDocList.push(response);
                this.toastrService.success("Insert success!")
                console.log("insert success",response);
            },error => {
                this.toastrService.error("Insert error!")
                console.log("error insert",error);
            }
        )
    }
    onUpdate():void{
        this.banDocService.update(this.formGroup.getRawValue()).subscribe(
            (response:BanDoc)=>{
                this.getBanDoc();
                this.checkSubmit=false;
                this.toastrService.success("Update success!")
                console.log("update success",response);
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
    }
    delete(id:number):void{
        this.banDocService.deleteById(id).subscribe(
            (response=>{
                console.log(response)
                this.toastrService.success("Delete success!")
                this.getBanDoc();
            }),
            error => {
                this.toastrService.error("Delete error!")
                console.log(error)
            });
    }

}
