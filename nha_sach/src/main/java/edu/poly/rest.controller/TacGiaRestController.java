package edu.poly.rest.controller;

import edu.poly.entity.TacGia;
import edu.poly.service.TacGiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin/tacgia")
public class TacGiaRestController {
    @Autowired
    TacGiaService tacGiaService;

    @GetMapping
    public List<TacGia> getAll(){
        List<TacGia> nxbs = tacGiaService.findAll();
        return nxbs;
    }
    @PostMapping("add")
    public TacGia insert(@RequestBody TacGia tacGia){
        tacGiaService.save(tacGia);
        return tacGia;
    }
    @GetMapping("{id}")
    public TacGia findById(@PathVariable Integer id){
        TacGia tacGia = tacGiaService.findById(id).get();
        return tacGia;
    }
    @PutMapping("update")
    public TacGia update(@RequestBody TacGia tacGia){
        tacGiaService.update(tacGia);
        return tacGia;
    }
    @DeleteMapping("delete/{id}")
    public Boolean deleteById(@PathVariable Integer id){
        return tacGiaService.deleteById(id);
    }
}
