package edu.poly.repository;

import edu.poly.entity.NhaXuatBan;
import edu.poly.entity.Sach;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SachRepository extends JpaRepository<Sach,Integer> {
}
