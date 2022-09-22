package edu.poly.service.impl;

import edu.poly.entity.BanDoc;
import edu.poly.repository.BanDocRepository;
import edu.poly.service.BanDocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BanDocImpl implements BanDocService {
    @Autowired
    BanDocRepository banDocRepository;

    @Override
    public BanDoc save(BanDoc banDoc) {
        Date now = new Date();
        if(banDoc.getId()==null){
            banDoc.setNgayTao(now);
            return banDocRepository.save(banDoc);
        }
        return null;
    }

    @Override
    public BanDoc update(BanDoc banDoc) {
        Integer id = banDoc.getId();
        System.out.println("-- ID UPDATE: "+id);
        if(id!=null){
            Optional<BanDoc> nxb = findById(id);
            if(!nxb.isEmpty()){
                return banDocRepository.save(banDoc);
            }
        }
        return null;
    }
    @Override
    public Boolean deleteById(Integer id) {
        System.out.println("-- ID DELETE: "+id);
        if(id!=null){
            Optional<BanDoc> nxb = findById(id);
            if(!nxb.isEmpty()){
                banDocRepository.deleteById(id);
                return true;
            }
        }
        return false;
    }
    @Override
    public List<BanDoc> findAll(){
        return banDocRepository.findAll();
    }

    @Override
    public Optional<BanDoc> findById(Integer id) {
        return banDocRepository.findById(id);
    }
}
