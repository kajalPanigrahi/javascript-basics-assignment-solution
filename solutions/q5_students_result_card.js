// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

// Object definition for Students
class Students
{
    constructor(id,name,subjectId,total){
        this.id = id;
        this.name = name;
        this.subjectId = subjectId;
        this.total = total;
    }
}

// Object definition for subject
class Subject{
    constructor(subject1,score1,subject2,score2){
        this.subject1 = subject1;
        this.score1 = score1;
        this.subject2 = subject2;
        this.score2 = score2;
    }
}

// Object definition for ScoreCard
class ScoreCard{
    constructor(id , name , group , percentage){
        this.id=id;
        this.name = name;
        this.group = group;
        this.percentage = percentage;
    }

}

// Function to generate random two digit value in between min and max limit
let randomNo = (min, max)=> {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Creating list of 100 students
let studentList = [];
for(let i=100 ; i<=200 ;i++){
    if(i%2==0)
        studentList[i] = new Students(i,`Student${i}`,new Subject('Grammer', randomNo(30,49),'Accounts',randomNo(20,37)),100 );
    else
        studentList[i] = new Students(i,`Student${i}`,new Subject('Grammer', randomNo(29,43),'Physics ',randomNo(30,39)),100 );
}

// Computing Score for individual in the list
let scoreCardArr = [];
let index =0;
let computeScore = (()=>{
    
studentList.forEach(element => {
        let percentage = (element.subjectId.score1 + element.subjectId.score1/element.total*100);
        scoreCardArr[index] = new ScoreCard(element.id,element.name,`${element.subjectId.subject1} and ${element.subjectId.subject2}`,percentage);
        index++;
    });
   return scoreCardArr;
})


// function invocation and printing score-card 
let computedResult = computeScore();
console.log(`ID    Name            Subject               Score(%) `);

let printScore = () =>{
    console.log("----------------------------------------------------------");
    computedResult.forEach(element => {
        
       console.log(`${element.id }   ${element.name}      ${element.group}  ${element.percentage}`);
    });
    console.log("----------------------------------------------------------");
}
console.log(printScore());

