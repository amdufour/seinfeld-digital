export const getId = (sonificationId: string) => {
  switch (sonificationId) {
    case 'Jerry':
      return ['JERRY'];
    case 'George':
      return ['GEORGE'];
    case 'Elaine':
      return ['ELAINE'];
    case 'Kramer':
      return ['KRAMER'];
    case 'FNC':
      return ['Friend/Acquaintance', 'Neighbour', 'Work colleague'];
    case 'LoveInterest':
      return ['Love interest'];
    case 'Families':
      return ["Jerry's family", "George's family", "Elaine's family", "Kramer's family"];
    case 'Situation':
      return ['The situation'];
    default:
      return 'Other';
  }
};