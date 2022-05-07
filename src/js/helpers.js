const N_SKEW_DAYS = 2;
const TIME_SERVER = "https://worldtimeapi.org/api/timezone/Europe/Rome";
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
/*
The logic is the following, given the day of the week, every day shoudl
return the followinf 3 days:
M -> W, T, F
T -> T, F, M
w -> F, M, T
T -> M, T, W
F -> T, W, T
S -> W, T, F
S -> W, T, F

In other words given the day of the week (Sunday = 0 ; Friday = 6)
1 -> 3, 4, 5
2 -> 4, 5, 1
3 -> 5, 1, 2
4 -> 1, 2, 3
5 -> 2, 3, 4
6 -> 3, 4, 5
0 -> 3, 4, 5
*/
export function calc_next_N_days(today, n_days) {
    let days = [];
    let skew;

    switch(today.getDay()) {
      case 1:
      case 2:
      case 3:
        skew = N_SKEW_DAYS;
        break;
      case 4:
      case 5:
      case 6:
        skew = N_SKEW_DAYS + 2;
        break;
      case 0:
        skew = N_SKEW_DAYS + 1;
        break;
    }
 
    today.setDate(today.getDate() + skew - 1); //skip N_SKEW_DAYS days
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
    // return new Date("2022-05-09T14:01:00");
}