function getTransformedVacationType(type) {
    let transformedType = '';
    switch (type) {
        case 'All Inclusive':
            transformedType = 'all_inclusive';
            break;
        case 'Family':
            transformedType = 'family';
            break;
        case 'Adults Only':
            transformedType = 'adults_only';
            break;
        case 'Honeymoon':
            transformedType = 'honeymoon';
            break;
        case 'Last Minute':
            transformedType = 'lastMinute';
            break;
        case 'Beach':
            transformedType = 'beach';
            break;
        case 'Exotic':
            transformedType = 'exotic';
            break;
        case 'Luxary':
          transformedType = 'luxary';
          break;
        // case 'all-inclusive':
        //   transformedType = 'All Inclusive';
        //   break;
        // case 'family':
        //   transformedType = 'Family';
        //   break;
        default:
            break;
    }
    return transformedType;
}

module.exports = getTransformedVacationType;