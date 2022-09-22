package edu.poly.service.impl;

import edu.poly.entity.NhaXuatBan;
import edu.poly.repository.NhaXuatBanRepository;
import edu.poly.service.NhaXuatBanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NhaXuatBanImpl implements NhaXuatBanService {
    @Autowired
    NhaXuatBanRepository nhaXuatBanRepository;

    @Override
    public NhaXuatBan save(NhaXuatBan nhaXuatBan) {
        if(nhaXuatBan.getId()==null){
            return nhaXuatBanRepository.save(nhaXuatBan);
        }
        return null;
    }

    @Override
    public NhaXuatBan update(NhaXuatBan nhaXuatBan) {
        Integer id = nhaXuatBan.getId();
        System.out.println("-- ID UPDATE: "+id);
        if(id!=null){
            Optional<NhaXuatBan> nxb = findById(id);
            if(!nxb.isEmpty()){
                return nhaXuatBanRepository.save(nhaXuatBan);
            }
        }
        return null;
    }
    @Override
    public Boolean deleteById(Integer id) {
        System.out.println("-- ID DELETE: "+id);
        if(id!=null){
            Optional<NhaXuatBan> nxb = findById(id);
            if(!nxb.isEmpty()){
                nhaXuatBanRepository.deleteById(id);
                return true;
            }
        }
        return false;
    }
    @Override
    public List<NhaXuatBan> findAll(){
        return nhaXuatBanRepository.findAll();
    }

    @Override
    public Optional<NhaXuatBan> findById(Integer id) {
        return nhaXuatBanRepository.findById(id);
    }
}
