package edu.poly.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "havietanh_sach")
public class Sach {
    @Id
    @Column(name = "IDSach")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "maSach")
    private String maSach;
    @Column(name = "ten")
    private String ten;
    @Column(name = "chuDe")
    private String chuDe;
    @Column(name = "namXuatBan")
    private Date namXuatBan;
    @Column(name = "moTa")
    private String moTa;
    @Column(name = "soLuongConLai")
    private Integer soLuongConLai;
    @Column(name = "soLuongDangMuon")
    private Integer soLuongDangMuon;
    @Column(name = "tongSoSach")
    private Integer tongSoSach;
    @ManyToOne
    @JoinColumn(name = "IDNXB")
    private NhaXuatBan nhaXuatBan;
    @ManyToOne
    @JoinColumn(name = "IDTG")
    private TacGia tacGia;
    @JsonIgnore
    @OneToMany(mappedBy = "sach")
    private List<MuonSach> muonSachList;
}
