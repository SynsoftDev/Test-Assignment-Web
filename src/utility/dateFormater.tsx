import Moment from 'moment';

export const getYearFromDate = (date: string) => {
    Moment.locale('en');
    return Moment(date).format('YYYY')
}