export const formFieldValidation = (fieldName: string, value: string): boolean => {
  switch (fieldName) {
    case 'image':
    case 'address':
    case 'city':
    case 'postalCode':
    case 'state':
    case 'department':
    case 'name':
    case 'title': {
      return value.trim().length > 0;
    }
    case 'lat':
    case 'lng': {
      return !isNaN(parseFloat(value));
    }
    default:
      return false;
  }
};
