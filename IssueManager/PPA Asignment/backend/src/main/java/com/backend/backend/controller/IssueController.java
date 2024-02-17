package com.backend.backend.controller;

import com.backend.backend.exception.IssueNotFoundException;
import com.backend.backend.exception.ResourceNotFoundException;
import com.backend.backend.model.Issue;
import com.backend.backend.repositery.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")

public class IssueController {
    @Autowired
    private IssueRepository issueRepository;
    @PostMapping ("/addissue")
    Issue newissue(@RequestBody Issue newissue){
        return issueRepository.save(newissue);
    }
    @GetMapping("/allissues")
    public List<Issue> getAllIssue(){
        return issueRepository.findAll();
    }
   @GetMapping("/allissues/{id}")
    Issue getIssuebyId(@PathVariable Long id){
        return issueRepository.findById(id).orElseThrow(()->new IssueNotFoundException(id));
   }
   @PutMapping("/allissues/{id}")
    Issue updateIssue(@RequestBody Issue newissue,@PathVariable Long id){
        return issueRepository.findById(id).map(issue ->{issue.setEmail(newissue.getEmail());
            issue.setIssue(newissue.getIssue());
            issue.setSummary(newissue.getSummary());
            issue.setStatus(newissue.getStatus());
            return issueRepository.save(issue);
        } ).orElseThrow(()-> new IssueNotFoundException(id));

   }
   @DeleteMapping("/allissues/{id}")
    String deleteUser(@PathVariable Long id){
        if(!issueRepository.existsById(id)){
            throw new IssueNotFoundException(id);
        }
        issueRepository.deleteById(id);
        return "Issue Id =>"+id+" Has been Deleted";
   }

}
