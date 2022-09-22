import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {TacGia} from "../../entities/tacgia";
import {TacGiaService} from "../../services/tacgia.service";

@Component({
  selector: 'app-tacgia',
  templateUrl: './tacgia.component.html',
  styleUrls: ['./tacgia.component.scss']
})
export class TacgiaComponent implements OnInit {
    title={insert:"Insert TacGia",update:"Update TacGia"};
    formGroup: FormGroup = this.fb.group({
        id:null,
        maTG:[null,[Validators.required]],
        ten:[null,[Validators.required]],
        sdt:[null,[Validators.required]],
        diaChi:[null,[Validators.required]],
        moTa:[null,[Validators.required]],
    })
    public tacGiaList: TacGia[] =[];
    public checkSubmit=false;
    refresh():void{
        this.formGroup.reset();
        this.checkSubmit=false;
    }
    constructor(
        private fb: FormBuilder,
        private tacGiaService:TacGiaService,
        private toastrService: ToastrService
    ) {}
    ngOnInit(): void {
        this.getTacGia();
    }
    getTacGia():void{
        this.tacGiaService.getAllTacGia().subscribe(
            (response:TacGia[])=>{
                this.tacGiaList=response;
            },error => {
                console.log("error getAll",error);
            }
        )
    }
    findById(id:number):TacGia{
        let idx = this.tacGiaList.findIndex(item=>item.id==id);
        return this.tacGiaList[idx];
    }
    edit(id: number):void{
        this.checkSubmit = true;
        let form=this.findById(id);
        this.formGroup.patchValue({
            id:id,
            maTG:form.maTG,
            ten:form.ten,
            sdt:form.sdt,
            diaChi:form.diaChi,
            moTa:form.moTa
        })
    }
    onSave():void{
        this.formGroup.patchValue({id:null})
        this.tacGiaService.save(this.formGroup.getRawValue()).subscribe(
            (response:TacGia)=>{
                this.tacGiaList.push(response);
                this.toastrService.success("Insert success!")
                console.log("insert success",response);
            },error => {
                this.toastrService.error("Insert error!")
                console.log("error insert",error);
            }
        )
    }
    onUpdate():void{
        this.tacGiaService.update(this.formGroup.getRawValue()).subscribe(
            (response:TacGia)=>{
                this.getTacGia();
                this.checkSubmit=false;
                this.toastrService.success("Update success!")
                console.log("update success",response);
            },error => {
                this.toastrService.error("Update error!")
                console.log("error insert",error);
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
        this.tacGiaService.deleteById(id).subscribe(
            (response=>{
                console.log(response)
                this.toastrService.success("Delete success!")
                this.getTacGia();
            }),
            error => {
                this.toastrService.error("Delete error!")
                console.log(error)
            });
    }

}
