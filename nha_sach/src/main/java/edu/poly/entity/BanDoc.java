package edu.poly.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "havietanh_bandoc")
public class BanDoc{
    @Id
    @Column(name="IDBD")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name="maBD")
    private String maBD;
    @Column(name="ten")
    private String ten;
    @Column(name="SDT")
    private String sdt;
    @Column(name="diachi")
    private String diaChi;
    @Column(name="ngaySinh")
    private Date ngaySinh;
    @Column(name="ngayTao")
    private Date ngayTao;
    @Column(name="hang")
    private Integer hang;
    @JsonIgnore
    @OneToMany(mappedBy = "banDoc")
    private List<MuonSach> muonSachList;
}