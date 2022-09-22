package edu.poly.service.impl;

import edu.poly.entity.TacGia;
import edu.poly.repository.TacGiaRepository;
import edu.poly.service.TacGiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TacGiaImpl implements TacGiaService {
    @Autowired
    TacGiaRepository tacGiaRepository;

    @Override
    public TacGia save(TacGia tacGia) {
        if(tacGia.getId()==null){
            return tacGiaRepository.save(tacGia);
        }
        return null;
    }

    @Override
    public TacGia update(TacGia tacGia) {
        Integer id = tacGia.getId();
        System.out.println("-- ID UPDATE: "+id);
        if(id!=null){
            Optional<TacGia> nxb = findById(id);
            if(!nxb.isEmpty()){
                return tacGiaRepository.save(tacGia);
            }
        }
        return null;
    }

    @Override
    public Boolean deleteById(Integer id) {
        System.out.println("-- ID DELETE: "+id);
        if(id!=null){
            Optional<TacGia> nxb = findById(id);
            if(!nxb.isEmpty()){
                tacGiaRepository.deleteById(id);
                return true;
            }
        }
        return false;
    }

    @Override
    public List<TacGia> findAll() {
        return tacGiaRepository.findAll();
    }

    @Override
    public Optional<TacGia> findById(Integer id) {
        return tacGiaRepository.findById(id);
    }
}
