// export function create_order(email, date_order, qty_dolce, qty_salato) {
export function create_order(email, date_order, food_list) {
    let current_date = new Date();
    let yy = date_order.split('/')[2];
    let mm = date_order.split('/')[1];
    let dd = date_order.split('/')[0];
    let millis = new Date(yy, mm - 1, dd).getTime();

    return {
            timestamp_request: current_date.toLocaleString("it-IT"),
            millis_request: current_date.getTime(),
            email: email,
            date_order: date_order,
            // yy_order: yy,
            // mm_order: mm,
            // dd_order: dd,
            millis_order: millis,
            food_list
        }
    }
