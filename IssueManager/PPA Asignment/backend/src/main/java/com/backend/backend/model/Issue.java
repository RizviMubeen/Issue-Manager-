/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.backend.backend.model;

import jakarta.persistence.*;

/**
 *
 * @author rizvi
 */
@Entity
public class Issue {

    @GeneratedValue
    @Id
   private long id;

   private String Issues;

   private String Status;

   private String Summary ;
   private String Email;


    public Issue(long id, String issue, String status, String summary,String email ) {
        this.id = id;
        Issues = issue;
        Status = status;
        Summary = summary;
        Email=email;
    }

    public Issue(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getIssue() {
        return Issues;
    }

    public void setIssue(String issue) {
        Issues = issue;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public String getSummary() {
        return Summary;
    }

    public void setSummary(String summary) {
        Summary = summary;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }
}
