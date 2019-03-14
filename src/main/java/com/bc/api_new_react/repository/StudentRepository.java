package com.bc.api_new_react.repository;

import com.bc.api_new_react.domain.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    @Query(value="select s from Student s where s.id = :id")
    List<Student> findStudentById(@Param("id") Integer id);
}
