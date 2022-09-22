package edu.poly.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "havietanh_muon_sach")
public class MuonSach {
    @Id
    @Column(name = "IDMS")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "soLuong")
    private Integer soLuong;
    @Column(name = "ngayMuon")
    private Date ngayMuon;
    @Column(name = "ngayTra")
    private Date ngayTra;
    @Column(name = "trangThai")
    private Integer trangThai;
    @Column(name = "ghiChu")
    private String ghiChu;
    @ManyToOne
    @JoinColumn(name = "IDBD")
    private BanDoc banDoc;
    @ManyToOne
    @JoinColumn(name = "IDSach")
    private Sach sach;

}
