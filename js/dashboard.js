// bar chart Order Quantity
const getOrderQty = document.getElementById("orderQty");
            
// bar chart Order Quantity
const getOrderQuantity = async () => {
    const response = await fetch("../data/dataset.json");
    const dataJson = await response.json();
    // console.log(dataJson);

    // Objek untuk menyimpan total pesanan berdasarkan bulan
    const totalOrdersByMonth = {
        "January": 0,
        "February": 0,
        "March": 0,
        "April": 0,
        "May": 0,
        "June": 0,
        "July": 0
    };

    // Menghitung total pesanan berdasarkan bulan
    dataJson.data.forEach((item) => {
        const month = item.Month;
        if (totalOrdersByMonth.hasOwnProperty(month)) {
            totalOrdersByMonth[month] += parseInt(item.Order_Quantity);
        }
    });

    new Chart(getOrderQty, {
        type: "bar",
        data: {
            labels: Object.keys(totalOrdersByMonth), // Mengambil label dari objek totalOrdersByMonth
            datasets: [
                {
                    label: 'Penjualan Bulanan',
                    data: Object.values(totalOrdersByMonth), // Mengambil data dari objek totalOrdersByMonth
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

getOrderQuantity();