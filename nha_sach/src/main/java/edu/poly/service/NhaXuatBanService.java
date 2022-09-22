package edu.poly.service;

import edu.poly.entity.NhaXuatBan;
import edu.poly.repository.NhaXuatBanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface NhaXuatBanService {
    public NhaXuatBan save(NhaXuatBan nhaXuatBan);
    public NhaXuatBan update(NhaXuatBan nhaXuatBan);
    public Boolean deleteById(Integer id);
    public List<NhaXuatBan> findAll();
    public Optional<NhaXuatBan> findById(Integer id);
}
