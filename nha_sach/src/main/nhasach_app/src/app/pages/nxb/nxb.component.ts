import {Component, Input, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NXB} from "../../entities/nxb";
import {ToastrService} from "ngx-toastr";
import {NxbService} from "../../services/nxb.service";

@Component({
  selector: 'app-nxb',
  templateUrl: './nxb.component.html',
  styleUrls: ['./nxb.component.scss']
})
export class NxbComponent implements OnInit {
    public static nxbs:NXB[]=[];
    title={insert:"Insert NXB",update:"Update NXB"};
    formGroup: FormGroup = this.fb.group({
        id:null,
        maNXB:[null,[Validators.required]],
        ten:[null,[Validators.required]],
        trangThai:[0,[Validators.required]],
        diaChi:[null,[Validators.required]],
        moTa:[null,[Validators.required]],
    })
    public nxbList: NXB[] =[];
    public checkSubmit=false;
    refresh():void{
        this.formGroup.reset();
        this.checkSubmit=false;
    }
    constructor(
        private fb: FormBuilder,
        private nxbService:NxbService,
        private toastrService: ToastrService
    ) {}
    ngOnInit(): void {
        this.getNXB();
    }
    getNXB():void{
        this.nxbService.getAllNxb().subscribe(
            (response:NXB[])=>{
                this.nxbList=response;
                NxbComponent.nxbs=response;
            },error => {
                console.log("error getAll",error);
            }
        )
    }
    findById(id:number):NXB{
        let idx = this.nxbList.findIndex(item=>item.id==id);
        return this.nxbList[idx];
    }
    edit(id: number):void{
        this.checkSubmit = true;
        let form=this.findById(id);
        this.formGroup.patchValue({
            id:id,
            maNXB:form.maNXB,
            ten:form.ten,
            trangThai:form.trangThai,
            diaChi:form.diaChi,
            moTa:form.moTa
        })
    }
    onSave():void{
        this.formGroup.patchValue({id:null})
        this.nxbService.save(this.formGroup.getRawValue()).subscribe(
            (response:NXB)=>{
                this.nxbList.push(response);
                this.toastrService.success("Insert success!")
                console.log("insert success",response);
            },error => {
                this.toastrService.error("Insert error!")
                console.log("error insert",error);
            }
        )
    }
    onUpdate():void{
        this.nxbService.update(this.formGroup.getRawValue()).subscribe(
            (response:NXB)=>{
                this.getNXB();
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
        this.nxbService.deleteById(id).subscribe(
            (response=>{
                if(response){
                    this.toastrService.success("Delete success!")
                }else{
                    this.toastrService.error("Can't delete NXB!")
                }
                console.log(response)
                this.getNXB();
            }),
                error => {
                    this.toastrService.error("Delete error!")
                console.log(error)
            });
    }
}
