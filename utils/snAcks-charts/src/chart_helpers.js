export function sort_orders(orders) {
    return orders.sort((a, b) => {
        return a.millis_order - b.millis_order;
    });
}

export function chart(el, type, h, labels, values, title, color) {
    const data = {
        labels: labels,
        datasets: [
            {
                name: title, type: "bar",
                values: values
            },
        ],
    }

    const chart = new frappe.Chart(el, {
        title: title,
        data: data,
        type: type,
        height: h,
        colors: color,
        lineOptions: {
            dotSize: 8
        },
        valuesOverPoints: 1,
    });
}

export function total_orders(orders) {
    return orders.length;
}

export function total_users(orders) {
    let users = new Set();
    orders.forEach(order => {
        users.add(order.email);
    });

    return users.size;
}
