export function sort_orders(orders) {
    return orders.sort((a, b) => {
        return a.millis_order - b.millis_order;
    });
}

export function chart(el, type, height, title, color, labels, s1, s2) {
    let datasets = [];

    if(s1) {
        datasets.push({
            name: s1.title,
            chartType: s1.type,
            values: s1.values
        });
    }

    if(s2) {
        datasets.push({
            name: s2.title,
            chartType: s2.type,
            values: s2.values
        });
    }

    const data = {
        labels: labels,
        datasets: datasets
    }

    const chart = new frappe.Chart(el, {
        title: title,
        data: data,
        type: type,
        height: height,
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

export function total_items(orders) {
    let items = 0
    orders.forEach(order => {
        order.food_list.forEach(item => items += item.count);
    });

    return items;
}