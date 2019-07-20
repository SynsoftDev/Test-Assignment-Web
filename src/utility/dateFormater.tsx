// Import top level dependencies
import Moment from 'moment';

/*
* function `getYearFromDate`
* Retrievs year from specified date
* @date: date string
* @return : string
*/
export const getYearFromDate = (date: string) => {
    Moment.locale('en');
    return Moment(date).format('YYYY')
}