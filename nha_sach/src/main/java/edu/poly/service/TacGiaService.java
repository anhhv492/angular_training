package edu.poly.service;

import edu.poly.entity.TacGia;

import java.util.List;
import java.util.Optional;

public interface TacGiaService {
    public TacGia save(TacGia tacGia);
    public TacGia update(TacGia tacGia);
    public Boolean deleteById(Integer id);
    public List<TacGia> findAll();
    public Optional<TacGia> findById(Integer id);
}
