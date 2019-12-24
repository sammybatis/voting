pragma solidity ^0.5.1;

contract Election{
    uint public voteCounts;
    uint public candidateCounts;
    uint public numVoters;
    
    mapping (uint => Voters) public voter; 
    mapping (uint => Candidates) public candidate;
    
   address public EC;
   
   constructor () public{
    EC = msg.sender;   
   }
   
   modifier restricted {
    require (msg.sender == EC);
    _;
   }
    
    // Details about voters
    struct Voters {
        uint vid;
        string name;
        bool voted;
    
        
    }
    event Voted (
        uint indexed candidateId
    );
    
    // Details about Candidate
    struct Candidates {
        string name;
        uint candidateVoteCount;
    }
    // Adding a new voter
    function addVoter (uint vid, string memory _name) public restricted{
        numVoters++;
        voter[numVoters] = Voters(numVoters, _name, false);
    }
    // Adding a new candidate
    function addCandidate (string memory _name, uint candidateId) public restricted{
        candidateCounts++;
        candidate[candidateCounts] = Candidates(_name, 0);
        emit Voted(candidateId);
        
    }
    // Casting a ballot
    function Vote (uint vid, string memory _name, uint candidateId) public {
        
    // verify a valid candidate
    require(candidateId > 0 && candidateId <= candidateCounts, "Candidate Id does not exist");
    
    // verify a valid voter
    require(vid > 0 && vid <= numVoters, "Voter does not exist");
    
    
    // verify that voter hasn't voted already
    uint votedalready = vid;
    require(!voter[votedalready].voted == true, "Sorry, you have voted already" );
    
   // vote and record that voter has voted
     uint voterid = vid;
     voter[voterid] = Voters(vid, _name, true);
     
   // update vote counts
     voteCounts++;
     
     
   // update candidates vote counts 
     candidate[candidateId].candidateVoteCount++;
     
    }
}