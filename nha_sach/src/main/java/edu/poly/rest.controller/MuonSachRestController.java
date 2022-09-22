package edu.poly.rest.controller;

import edu.poly.entity.MuonSach;
import edu.poly.service.MuonSachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin/muonsach")
public class MuonSachRestController {
    @Autowired
    MuonSachService muonSachService;

    @GetMapping
    public List<MuonSach> getAll(){
        List<MuonSach> nxbs = muonSachService.findAll();
        return nxbs;
    }
    @PostMapping("add")
    public MuonSach insert(@RequestBody MuonSach muonSach){
        muonSachService.save(muonSach);
        return muonSach;
    }
    @GetMapping("{id}")
    public MuonSach findById(@PathVariable Integer id){
        MuonSach muonSach = muonSachService.findById(id).get();
        return muonSach;
    }
    @PutMapping("update")
    public MuonSach update(@RequestBody MuonSach muonSach){
        muonSachService.update(muonSach);
        return muonSach;
    }
    @DeleteMapping("delete/{id}")
    public Boolean deleteById(@PathVariable Integer id){
        return muonSachService.deleteById(id);
    }
}
