package edu.poly.service.impl;

import edu.poly.entity.MuonSach;
import edu.poly.entity.Sach;
import edu.poly.repository.MuonSachRepository;
import edu.poly.repository.SachRepository;
import edu.poly.service.MuonSachService;
import edu.poly.service.SachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MuonSachImpl implements MuonSachService {
    @Autowired
    MuonSachRepository muonSachRepository;
    @Autowired
    SachService sachService;

    @Override
    public MuonSach save(MuonSach muonSach) {
        if(muonSach.getId()==null){
            Sach sach = sachService.findById(muonSach.getSach().getId()).get();
            sach.setSoLuongDangMuon(sach.getSoLuongDangMuon()+muonSach.getSoLuong());
            if(sach.getTongSoSach()-sach.getSoLuongDangMuon()<0){
                return null;
            }
            sachService.save(sach);
            return muonSachRepository.save(muonSach);
        }
        return null;
    }

    @Override
    public MuonSach update(MuonSach muonSach) {
        Integer id = muonSach.getId();
        System.out.println("-- ID UPDATE: "+id);
        if(id!=null){
            Optional<MuonSach> nxb = findById(id);
            if(!nxb.isEmpty()){
                MuonSach muonSachOld = muonSachRepository.findById(muonSach.getId()).get();
                Sach sach = sachService.findById(muonSach.getSach().getId()).get();
                sach.setSoLuongDangMuon(sach.getSoLuongDangMuon()-muonSachOld.getSoLuong()+muonSach.getSoLuong());
                if(sach.getTongSoSach()-sach.getSoLuongDangMuon()<0){
                    muonSach.setId(null);
                    return muonSach;
                }
                sachService.update(sach);
                return muonSachRepository.save(muonSach);
            }
        }
        return null;
    }
    @Override
    public Boolean deleteById(Integer id) {
        System.out.println("-- ID DELETE: "+id);
        if(id!=null){
            Optional<MuonSach> nxb = findById(id);
            if(!nxb.isEmpty()){
                MuonSach muonSach = muonSachRepository.findById(id).get();
                Sach sach = sachService.findById(muonSach.getSach().getId()).get();
                sach.setSoLuongDangMuon(sach.getSoLuongDangMuon()-muonSach.getSoLuong());
                sach.setSoLuongConLai(sach.getTongSoSach()-sach.getSoLuongDangMuon());
                sachService.update(sach);
                muonSachRepository.deleteById(id);
                return true;
            }
        }
        return false;
    }
    @Override
    public List<MuonSach> findAll(){
        return muonSachRepository.findAll();
    }

    @Override
    public Optional<MuonSach> findById(Integer id) {
        return muonSachRepository.findById(id);
    }
}
