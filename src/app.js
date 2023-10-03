//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  var manager=[managerName,managerAge,currentTeam,trophiesWon]
  return manager
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if (formation==0){
    return null
  }
  var player={
    defender:formation[0],
    midfield:formation[1],
    forward:formation[2]
  }
  return player
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var data=players.filter(player=>player.debut==year)
  return data
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var data=players.filter(player=>player.position==position)
  return  data
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  var data=[]
  for (i=0;i<players.length;i++){
    for (j=0;j<players[i].awards.length;j++){
      if (players[i].awards[j].name==awardName){
        data.push(players[i])
      }
    }
  }
  return data
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes){
  var data=[]
  for (i=0;i<players.length;i++){
    var count=0
    for (j=0;j<players[i].awards.length;j++){
      if (players[i].awards[j].name==awardName){
        count+=1
      }
    }
    if(count==noOfTimes){
      data.push(players[i])
    }
  }
  return data
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName,country){
  var data=[]
  var awardPlayer = filterByAward(awardName);
  data = awardPlayer.filter(player => player.country == country)
  return data
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age){
  var data=players.filter(player=>( player.awards.length>=noOfAwards && player.team==team && player.age<age))
  return data
}
//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  for (i=0;i<players.length;i++){
    for(j=i+1;j<players.length;j++){
      if (players[i].age < players[j].age) {
        let container = players[i];
        players[i] = players[j];
        players[j] = container;
      }
    }
  }
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  var data=players.filter(player=>player.team==team)
  for (i=0;i<data.length;i++){
    for(j=i+1;j<data.length;j++){
      if (data[i].awards.length<data[j].awards.length){
        let container = data[i];
        players[i] = players[j];
        players[j] = container;
      }
    }
  }
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function sortByNamexAwardxTimes(awardName,noOfTimes,country){
  list=filterByAwardxTimes(awardName,noOfTimes)
  var data=list.filter(player=>player.country==country)
  data.sort()
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function sortByNamexOlderThan(age){
  var data=players.filter(player=>player.age>age)
  data.sort()
  (data.awards.year).sort().reverse()
}
