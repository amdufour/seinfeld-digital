export const getId = (sonificationId: string) => {
  switch (sonificationId) {
    case 'Jerry':
      return 'JERRY';
      break;
    case 'George':
      return 'GEORGE';
      break;
    case 'Elaine':
      return 'ELAINE';
      break;
    case 'Kramer':
      return 'KRAMER';
      break;
    case 'FNC':
      return 'Friend/Acquaintance';
      return 'Neighbour';
      return 'Work colleague';
      break;
    case 'LoveInterest':
      return 'Love interest';
      break;
    case 'Families':
      return "Jerry's family";
      return "George's family";
      return "Elaine's family";
      return "Kramer's family";
      break;
    case 'Situation':
      return 'The situation';
      break;
    default:
      return 'Other';
  }
};