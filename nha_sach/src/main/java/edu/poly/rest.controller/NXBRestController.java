package edu.poly.rest.controller;

import edu.poly.entity.NhaXuatBan;
import edu.poly.service.NhaXuatBanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin/nxb")
public class NXBRestController {
    @Autowired
    NhaXuatBanService nhaXuatBanService;

    @GetMapping
    public List<NhaXuatBan> getAll(){
        List<NhaXuatBan> nxbs = nhaXuatBanService.findAll();
        return nxbs;
    }
    @PostMapping("add")
    public NhaXuatBan insert(@RequestBody NhaXuatBan nxb){
        nhaXuatBanService.save(nxb);
        return nxb;
    }
    @GetMapping("{id}")
    public NhaXuatBan findById(@PathVariable Integer id){
        NhaXuatBan nxb = nhaXuatBanService.findById(id).get();
        return nxb;
    }
    @PutMapping("update")
    public NhaXuatBan update(@RequestBody NhaXuatBan nxb){
        nhaXuatBanService.update(nxb);
        return nxb;
    }
    @DeleteMapping("delete/{id}")
    public Boolean deleteById(@PathVariable Integer id){
        return nhaXuatBanService.deleteById(id);
    }
}
