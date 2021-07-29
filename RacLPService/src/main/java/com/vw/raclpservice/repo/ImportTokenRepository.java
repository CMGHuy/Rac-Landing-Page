package com.vw.raclpservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.vw.raclpservice.entity.ImportToken;

public interface ImportTokenRepository extends JpaRepository<ImportToken, String> {

}
