package edu.poly.service;

import edu.poly.entity.MuonSach;

import java.util.List;
import java.util.Optional;

public interface MuonSachService {
    public MuonSach save(MuonSach muonSach);
    public MuonSach update(MuonSach muonSach);
    public Boolean deleteById(Integer id);
    public List<MuonSach> findAll();
    public Optional<MuonSach> findById(Integer id);
}
