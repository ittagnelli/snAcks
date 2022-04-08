const N_SKEW_DAYS = 2;

//find the next school day
function find_next_school_day(start) {
    do {
      start.setDate(start.getDate() + 1);
    } while (start.getDay() == 0 || start.getDay() == 6)
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