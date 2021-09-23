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
    logging.log(`cant find user`)
    return " "
  }
}

//Change Methods
//Change state in BLockchain
//Costs transaction fees to do so

export function addUrl(name: string,url: string):void{
  CandidateURL.set(name,url);
  logging.log('added url for '+ name);
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
  }

}