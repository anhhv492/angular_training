package edu.poly.rest.controller;

import edu.poly.entity.Sach;
import edu.poly.service.SachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin/sach")
public class SachRestController {
    @Autowired
    SachService sachService;

    @GetMapping
    public List<Sach> getAll(){
        List<Sach> nxbs = sachService.findAll();
        return nxbs;
    }
    @PostMapping("add")
    public Sach insert(@RequestBody Sach sach){
        System.out.println(sach.getNhaXuatBan().getTen()+" nxb--");
        sachService.save(sach);
        return sach;
    }
    @GetMapping("{id}")
    public Sach findById(@PathVariable Integer id){
        Sach sach = sachService.findById(id).get();
        return sach;
    }
    @PutMapping("update")
    public Sach update(@RequestBody Sach sach){
        sachService.update(sach);
        return sach;
    }
    @DeleteMapping("delete/{id}")
    public Boolean deleteById(@PathVariable Integer id){
        return sachService.deleteById(id);
    }
}
