package edu.poly.service;

import edu.poly.entity.BanDoc;

import java.util.List;
import java.util.Optional;

public interface BanDocService {
    public BanDoc save(BanDoc banDoc);
    public BanDoc update(BanDoc banDoc);
    public Boolean deleteById(Integer id);
    public List<BanDoc> findAll();
    public Optional<BanDoc> findById(Integer id);
}
