// Define an array of football players with player objects
const soccerStars = [
  // Define player objects here
];

// Progression 1 - Create a Manager array and return it
function createTeamManager(managerName, managerAge, currentTeam, trophiesWon) {
  const teamManager = [managerName, managerAge, currentTeam, trophiesWon];
  return teamManager;
}

// Progression 2 - Create a formation object and return it
function calculateFormationStats(formation) {
  if (formation === 0) {
    return null;
  }
  const formationStats = {
    defenders: formation[0],
    midfielders: formation[1],
    forwards: formation[2],
  };
  return formationStats;
}

// ... (other progressions and challenges)

// Challenge 2 - Sort players older than _____ years in alphabetical order
function sortPlayersByNameAndAgeThreshold(ageThreshold) {
  const filteredPlayers = soccerStars.filter((player) => player.age > ageThreshold);
  filteredPlayers.sort((a, b) => (a.name > b.name ? 1 : -1));
  filteredPlayers.forEach((player) => {
    player.awards.sort((a, b) => (a.year < b.year ? 1 : -1));
  });
  return filteredPlayers;
}

// Initialize the soccerStars array and use the functions accordingly
