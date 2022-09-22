import {NXB} from "./nxb";
import {TacGia} from "./tacgia";

export interface Sach{
    id:number,
    maSach:string,
    ten:string,
    nhaXuatBan:NXB,
    tacGia:TacGia,
    chuDe:string,
    moTa:string,
    namXuatBan:Date,
    soLuongConLai:number,
    soLuongDangMuon:number,
    tongSoSach:number
}
