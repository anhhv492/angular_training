package edu.poly.service;

import edu.poly.entity.NhaXuatBan;
import edu.poly.entity.Sach;

import java.util.List;
import java.util.Optional;

public interface SachService {
    public Sach save(Sach sach);
    public Sach update(Sach sach);
    public Boolean deleteById(Integer id);
    public List<Sach> findAll();
    public Optional<Sach> findById(Integer id);
}
