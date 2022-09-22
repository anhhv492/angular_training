package edu.poly.service.impl;

import edu.poly.entity.Sach;
import edu.poly.repository.SachRepository;
import edu.poly.service.SachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SachImpl implements SachService {
    @Autowired
    SachRepository sachRepository;

    @Override
    public Sach save(Sach sach) {
        sach.setSoLuongConLai(sach.getTongSoSach()-sach.getSoLuongDangMuon());
        if(sach.getId()==null){
            return sachRepository.save(sach);
        }
        return null;
    }

    @Override
    public Sach update(Sach sach) {
        sach.setSoLuongConLai(sach.getTongSoSach()-sach.getSoLuongDangMuon());
        Integer id = sach.getId();
        System.out.println("-- ID UPDATE: "+id);
        if(id!=null){
            Optional<Sach> nxb = findById(id);
            if(!nxb.isEmpty()){
                return sachRepository.save(sach);
            }
        }
        return null;
    }
    @Override
    public Boolean deleteById(Integer id) {
        System.out.println("-- ID DELETE: "+id);
        if(id!=null){
            Optional<Sach> nxb = findById(id);
            if(!nxb.isEmpty()){
                sachRepository.deleteById(id);
                return true;
            }
        }
        return false;
    }
    @Override
    public List<Sach> findAll(){
        return sachRepository.findAll();
    }

    @Override
    public Optional<Sach> findById(Integer id) {
        return sachRepository.findById(id);
    }
}
