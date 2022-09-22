package edu.poly.rest.controller;

import edu.poly.entity.BanDoc;
import edu.poly.service.BanDocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin/bandoc")
public class BanDocRestController {
    @Autowired
    BanDocService banDocService;
    @GetMapping
    public List<BanDoc> getAll(){
        List<BanDoc> nxbs = banDocService.findAll();
        return nxbs;
    }
    @PostMapping("add")
    public BanDoc insert(@RequestBody BanDoc banDoc){
        banDocService.save(banDoc);
        return banDoc;
    }
    @GetMapping("{id}")
    public BanDoc findById(@PathVariable Integer id){
        BanDoc banDoc = banDocService.findById(id).get();
        return banDoc;
    }
    @PutMapping("update")
    public BanDoc update(@RequestBody BanDoc banDoc){
        banDocService.update(banDoc);
        return banDoc;
    }
    @DeleteMapping("delete/{id}")
    public Boolean deleteById(@PathVariable Integer id){
        return banDocService.deleteById(id);
    }
}
