let order = {
    email: '',
    date_order: '',
    yy_order: 0,
    mm_order: 0,
    dd_order: 0,
    qty_dolce: 0,
    qty_salato: 0
}

export function create_order(email, date_order, qty_dolce, qty_salato) {
    return order = {email: email,
                    date_order: date_order,
                    yy_order: date_order.split('-')[0],
                    mm_order: date_order.split('-')[1],
                    dd_order: date_order.split('-')[2],
                    qty_dolce,
                    qty_salato}
}