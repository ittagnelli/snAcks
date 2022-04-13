const N_SKEW_DAYS = 2;
let festivi = [[14,4],[15,4],[16,4],[18,4],[19,4],[25,4],[2,6]] //day,month

function find_next_school_day(start) {
    let festivi_mese = [];
    festivi.forEach(day => {
        if(day[1] == start.getMonth()+1){
            festivi_mese.push(day[0])
        }
    });
    do {
      start.setDate(start.getDate() + 1);
    } while (start.getDay() == 0 || start.getDay() == 6 || festivi_mese.includes(start.getDate(),0))
    return start
}
  
//calculate the next n_days school days a user can order
export function calc_next_N_days(today, n_days) {
    let days = [];

    today.setDate(today.getDate() + N_SKEW_DAYS); //skip N_SKEW_DAYS days
    for(let i = 0; i < n_days; i++)
        days.push(find_next_school_day(today).toLocaleDateString("it-IT"));

    return days;
}