package edu.poly.repository;

import edu.poly.entity.BanDoc;
import edu.poly.entity.NhaXuatBan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NhaXuatBanRepository extends JpaRepository<NhaXuatBan,Integer> {
}
