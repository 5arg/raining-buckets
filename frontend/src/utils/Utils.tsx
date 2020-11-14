function teamAbbrevationToTeamName(teamAbbreviation: string | undefined) {
  let teamName;
  switch (teamAbbreviation) {
    case "ATL":
      teamName = "Atlanta Hawks";
      break;
    case "BOS":
      teamName = "Boston Celtics";
      break;
    case "BKN":
      teamName = "Brooklyn Nets";
      break;
    case "CHA":
      teamName = "Charlotte Hornets";
      break;
    case "CHI":
      teamName = "Chicago Bulls";
      break;
    case "DAL":
      teamName = "Dallas Mavericks";
      break;
    case "DEN":
      teamName = "Denver Nuggets";
      break;
    case "DET":
      teamName = "Detroit Pistons";
      break;
    case "GSW":
      teamName = "Golden State Warriors";
      break;
    case "HOU":
      teamName = "Houston Rockets";
      break;
    case "IND":
      teamName = "Indiana Pacers";
      break;
    case "LAC":
      teamName = "Los Angeles Clippers";
      break;
    case "LAL":
      teamName = "Los Angeles Lakers";
      break;
    case "MEM":
      teamName = "Memphis Grizzlies";
      break;
    case "MIA":
      teamName = "Miami Heat";
      break;
    case "MIL":
      teamName = "Milwaukee Bucks";
      break;
    case "MIN":
      teamName = "Minnesota Timberwolves";
      break;
    case "NOP":
      teamName = "New Orleans Pelicans";
      break;
    case "NYK":
      teamName = "New York Knicks";
      break;
    case "OKC":
      teamName = "Oklahoma City Thunder";
      break;
    case "ORL":
      teamName = "Orlando Magic";
      break;
    case "PHI":
      teamName = "Philadelphia 76ers";
      break;
    case "PHX":
      teamName = "Pheonix Suns";
      break;
    case "POR":
      teamName = "Portland Trail Blazers";
      break;
    case "SAC":
      teamName = "Sacramento Kings";
      break;
    case "SAS":
      teamName = "San Antonio Spurs";
      break;
    case "TOR":
      teamName = "Toronto Raptors";
      break;
    case "UTA":
      teamName = "Utah Jazz";
      break;
    case "WAS":
      teamName = "Washington Wizards";
      break;
    case undefined:
      teamName = "Free Agent";
      break;
    default:
      teamName = "Free Agent";
      break;
  }

  return teamName;
}

function heightInFeetAndCm(feetHeight: string | undefined) {
  if (feetHeight) {
    let heightInCm = Math.floor(
      parseFloat(feetHeight.replace("-", ".")) * 30.48
    );
    return `${feetHeight.replace("-", "'")} ft / ${heightInCm} cm`;
  }
  return "";
}

function weightInPoundsAndKg(poundWeight: string | undefined) {
  if (poundWeight) {
    let weightInKg = Math.floor(parseInt(poundWeight) / 2.2046);
    return `${poundWeight} lbs / ${weightInKg} kg`;
  }

  return "";
}

export { teamAbbrevationToTeamName, heightInFeetAndCm, weightInPoundsAndKg };
