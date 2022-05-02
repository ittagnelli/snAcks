const N_SKEW_DAYS = 2;
const TIME_SERVER = "http://worldtimeapi.org/api/timezone/Europe/Rome";
let festivi = [[14, 4], [15, 4], [16, 4], [18, 4], [19, 4], [25, 4], [2, 6]]

function find_next_school_day(start) {
    let festivi_mese = [];
    do {
      start.setDate(start.getDate() + 1);
    } while (start.getDay() == 0 ||
             start.getDay() == 6 ||
             festivi.find(cal =>
                 cal[0] == start.getDate() &&
                 cal[1] == start.getMonth() + 1))
    
    return start
}
  
//calculate the next n_days school days a user can order
export function calc_next_N_days(today, n_days) {
    let days = [];

    today.setDate(today.getDate() + N_SKEW_DAYS - 1); //skip N_SKEW_DAYS days
    for(let i = 0; i < n_days; i++)
        days.push(find_next_school_day(today).toLocaleDateString("it-IT"));

    return days;
}

export async function get_today(){
    let time_from_server = await fetch(TIME_SERVER);
    
    if (time_from_server.ok) { 
      let json = await time_from_server.json();
      return new Date(json.datetime);
    } else {
      return new Date()
    }
}