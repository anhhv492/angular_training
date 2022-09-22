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
@Table(name = "havietanh_tacgia")
public class TacGia {
    @Id
    @Column(name = "IDTG")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "maTG")
    private String maTG;

    @Column(name = "ten")
    private String ten;

    @Column(name = "sdt")
    private String sdt;

    @Column(name = "diaChi")
    private String diaChi;

    @Column(name = "moTa")
    private String moTa;

    @JsonIgnore
    @OneToMany(mappedBy = "nhaXuatBan")
    private List<Sach> sachList;
}
