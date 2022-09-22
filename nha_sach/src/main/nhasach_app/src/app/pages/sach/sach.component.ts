import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {NXB} from "../../entities/nxb";
import {Sach} from "../../entities/sach";
import {SachService} from "../../services/sach.service";
import {TacGia} from "../../entities/tacgia";
import {NxbService} from "../../services/nxb.service";
import {NxbComponent} from "../nxb/nxb.component";
import {TacGiaService} from "../../services/tacgia.service";

@Component({
  selector: 'app-sach',
  templateUrl: './sach.component.html',
  styleUrls: ['./sach.component.scss']
})
export class SachComponent implements OnInit {
    title={insert:"Insert Sach",update:"Update Sach"};

    formGroup: FormGroup = this.fb.group({
        id:null,
        maSach:[null,[Validators.required]],
        ten:[null,[Validators.required]],
        nhaXuatBan:[{id:null},[Validators.required]],
        tacGia:[{id:null},[Validators.required]],
        chuDe:[null,[Validators.required]],
        moTa:[null,[Validators.required]],
        namXuatBan:[null,[Validators.required]],
        soLuongDangMuon:[null,[Validators.required]],
        tongSoSach:[null,[Validators.required]]
    })
    public sachList: Sach[] =[];
    public checkSubmit=false;
    idNxb!: number;
    idTg!: number;
    refresh():void{
        this.formGroup.reset();
        this.checkSubmit=false;
    }
    constructor(
        private fb: FormBuilder,
        private sachService:SachService,
        private nxbService:NxbService,
        private tacGiaService:TacGiaService,
        private toastrService: ToastrService
    ) {}
    // nxbList:NXB[]=NxbComponent.nxbs;
    nxbList:NXB[]=[];
    tacGiaList:TacGia[]=[];
    ngOnInit(): void {
        this.getSach();
        this.getNxbs();
        this.getListTacGia();
        // this.getNxbs();
    }
    getNxbs():void{
        this.nxbService.getAllNxb().subscribe(
            (response:NXB[])=>{
                this.nxbList=response;
            },error => {
                console.log("error getAll",error);
            }
        )
    }
    getListTacGia():void{
        this.tacGiaService.getAllTacGia().subscribe(
            (response:TacGia[])=>{
                this.tacGiaList=response;
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
    findById(id:number):Sach{
        let idx = this.sachList.findIndex(item=>item.id==id);
        return this.sachList[idx];
    }
    edit(id: number):void{
        this.checkSubmit = true;
        let form=this.findById(id);
        this.formGroup.patchValue({
            id:id,
            maSach:form.maSach,
            ten:form.ten,
            nhaXuatBan:form.nhaXuatBan.id,
            tacGia:form.tacGia.id,
            chuDe:form.chuDe,
            moTa:form.moTa,
            namXuatBan:form.namXuatBan,
            soLuongConLai:form.soLuongConLai,
            soLuongDangMuon:form.soLuongDangMuon,
            tongSoSach:form.tongSoSach
        })
    }
    onSave():void{
        this.idNxb=this.formGroup.controls['nhaXuatBan'].value;
        this.idTg=this.formGroup.controls['tacGia'].value;
        this.formGroup.patchValue({
            id:null,
            nhaXuatBan: {id:this.idNxb},
            tacGia:{id:this.idTg}
        })
        this.sachService.save(this.formGroup.getRawValue()).subscribe(
            (response:Sach)=>{
                this.sachList.push(response);
                this.toastrService.success("Insert success!")
                console.log("insert success",response);
            },error => {
                this.toastrService.error("Insert error!")
                console.log("error insert",error);
            }
        )
    }
    onUpdate():void{
        this.idNxb=this.formGroup.controls['nhaXuatBan'].value;
        this.idTg=this.formGroup.controls['tacGia'].value;
        this.formGroup.patchValue({
            nhaXuatBan: {id:this.idNxb},
            tacGia:{id:this.idTg}
        })
        this.sachService.update(this.formGroup.getRawValue()).subscribe(
            (response:Sach)=>{
                this.getSach();
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
        this.sachService.deleteById(id).subscribe(
            (response=>{
                console.log(response)
                this.toastrService.success("Delete success!")
                this.getSach();
            }),
            error => {
                this.toastrService.error("Delete error!")
                console.log(error)
            });
    }
}
