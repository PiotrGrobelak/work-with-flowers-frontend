export default function translateType(types) {
  switch (types) {
    case 'florist': {
      return 'Florysta';
    }
    case 'courier': {
      return 'Kurier';
    }
    case 'gardener': {
      return 'Ogród';
    }
    case 'apprentice': {
      return 'Praktyki';
    }
    case 'conservator': {
      return 'Serwisant';
    }
    default:
      return null;
  }
}
