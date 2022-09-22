import {NXB} from "./nxb";
import {TacGia} from "./tacgia";
import {BanDoc} from "./bandoc";
import {Sach} from "./sach";

export interface MuonSach{
    id:number,
    banDoc:BanDoc,
    sach:Sach,
    ghiChu:string,
    ngayMuon:Date,
    ngayTra:Date,
    soLuong:number,
    trangThai:number
}
