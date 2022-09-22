package edu.poly.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "havietanh_nhaxuatban")
public class NhaXuatBan {
    @Id
    @Column(name = "IDNXB")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "maNXB")
    private String maNXB;
    @Column(name = "ten")
    private String ten;
    @Column(name = "trangThai")
    private Integer trangThai;
    @Column(name = "diaChi")
    private String diaChi;
    @Column(name = "moTa")
    private String moTa;
    @JsonIgnore
    @OneToMany(mappedBy = "nhaXuatBan")
    private List<Sach> sachList;
}
