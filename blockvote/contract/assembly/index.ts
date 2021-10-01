import { logging, PersistentMap } from 'near-sdk-as'

const CandidateURL=new PersistentMap<string,string>("CandidateURL");
const CandidatePair=new PersistentMap<string,string[]>("CandidatePair");
const PromptArray=new PersistentMap<string,string[]>("Array of prompts");
const VoteArray=new PersistentMap<string,i32[]>("stores Votes");
const userParticipation =new PersistentMap<string,string[]>('Uses Participation Record');


//View Methods
//Does not change  the state of blockchain
//Doesnot incur fees
//Pulls and read information from blockchain 

export function getUrl(name:string):string{
  if(CandidateURL.contains(name)){
    return CandidateURL.getSome(name);
  }
  else{
    logging.log(`cant find user`);
    return " ";
  }
}


export function didParticipate(prompt:string,user:string):bool{
  if(userParticipation.contains(prompt)){
    let getArray=userParticipation.getSome(prompt);
    return getArray.includes(user);
  }
  else{
    logging.log('prompt not found');
    return false;
  }
}



export function getAllprompt():string[]{
  if(PromptArray.contains('AllArrays')){
    return PromptArray.getSome('All Arrays');
  }
  else{
    logging.log('no prompts found');
    return [];
  }
}

export function getVotes(prompt:string):i32[]{
  if(VoteArray.contains(prompt)){
    return VoteArray.getSome(prompt);
  }
  else{
    logging.log('prompt not found for this vote');
    return [0,0];
  }
}

export function getCandidatePair(prompt:string):string[]{
  if(CandidatePair.contains(prompt)){
    return CandidatePair.getSome(prompt);
  }
  else{
    logging.log('prompt not found');
    return [];
  }
}


//Change Methods
//Change state in BLockchain
//Costs transaction fees to do so

export function addUrl(name: string,url: string):void{
  CandidateURL.set(name,url);
  logging.log('added url for '+ name);
}


export function addToPromptArray(prompt:string):void{
  logging.log('Added to prompt array')
  if(PromptArray.contains("AllArrays")){
    let tempArray=PromptArray.getSome("AllArrays")
    tempArray.push(prompt); 
  }
  else{
    PromptArray.set("AllArrays",[prompt])
  }
}


export function addCandidatePair(prompt:string,name1:string,name2:string):void{
  CandidatePair.set(prompt,[name1,name2])
}
export function addVote(prompt:string,index:i32):void{
  if(VoteArray.contains(prompt)){
    let tempArray=VoteArray.getSome(prompt)
    let tempVal=tempArray[index];
    let newVal=tempVal+1;
    tempArray[index]=newVal;
    VoteArray.set(prompt,tempArray);
  }
  else{
    let newArray=[0,0];
    newArray[index]=1;
    VoteArray.set(prompt,newArray);
  }
}

export function recordUser(prompt:string,user:string):void{
  if(userParticipation.contains(prompt)){
    let tempArray= userParticipation.getSome(prompt);
    tempArray.push(user);
    userParticipation.set(prompt,tempArray);
  }
  else{
    userParticipation.set(prompt,[user]);
  }
}
