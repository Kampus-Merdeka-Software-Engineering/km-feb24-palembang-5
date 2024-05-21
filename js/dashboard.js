// bar chart Order Quantity
const getOrderQty = document.getElementById("orderQty");
            
// bar chart Average Of Value
const getAOV = document.getElementById("AOV");

// bar chart Quantity Sold by Category 2016
const getQtySoldCtg = document.getElementById("qtySoldCategory");

// bar chart Quantity Sold by Location
const getQtySoldLc = document.getElementById("qtySoldLocation");

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

// bar chart Average Of Value
// const getAverageOrderValue = async () => {
//     const response = await fetch("../data/dataset.json");
//     const dataJson = await response.json();
//     console.log(dataJson);

//     new Chart(getAOV, {
//         type: "bar",
//         data: {
//             labels: dataJson.data.map((bikes) => bikes.Customer_Gender),
//             datasets: [
//                 {
//                     label: 'Average Of Value',
//                     data: dataJson.data.map((bikes) => bikes.Order_Quantity),
//                     borderWidth: 1,
//                 },
//             ],
//         },
//     });
// };

// bar chart Quantity Sold by Category 2016
const getQtySoldByCategory = async () => {
    const response = await fetch("../data/dataset.json");
    const dataJson = await response.json();

    // Menginisialisasi variabel untuk menyimpan total penjualan tiap kategori
    let totalAccessories = 0;
    let totalClothing = 0;
    let totalBikes = 0;

    // Menghitung total penjualan tiap kategori
    dataJson.data.forEach((item) => {
        if (item.Product_Category === "Accessories") {
            totalAccessories += parseInt(item.Order_Quantity);
        } else if (item.Product_Category === "Clothing") {
            totalClothing += parseInt(item.Order_Quantity);
        } else if (item.Product_Category === "Bikes") {
            totalBikes += parseInt(item.Order_Quantity);
        }
    });

    // Membuat bar chart
    new Chart(getQtySoldCtg, {
        type: "bar",
        data: {
            labels: ["Accessories", "Clothing", "Bikes"],
            datasets: [
                {
                    label: "Quantity Sold by Category 2016",
                    data: [totalAccessories, totalClothing, totalBikes],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)', // Merah untuk aksesoris
                        'rgba(54, 162, 235, 0.2)', // Biru untuk pakaian
                        'rgba(255, 206, 86, 0.2)' // Kuning untuk sepeda
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
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

// bar chart Quantity Sold by Location
const getQtySoldByLocation = async () => {
    const response = await fetch("../data/dataset.json");
    const dataJson = await response.json();
    console.log(dataJson);

    // Objek untuk menyimpan total pesanan berdasarkan negara
    const totalOrdersByCountry = {
        "United States": 0,
        "Australia": 0,
        "Canada": 0,
        "United Kingdom": 0,
        "Germany": 0,
        "France": 0
    };

    // Menghitung total pesanan berdasarkan negara
    dataJson.data.forEach((item) => {
        const country = item.Country;
        if (totalOrdersByCountry.hasOwnProperty(country)) {
            totalOrdersByCountry[country] += parseInt(item.Order_Quantity);
        }
    });

    // Membuat bar chart
    new Chart(getQtySoldLc, {
        type: "bar",
        data: {
            labels: Object.keys(totalOrdersByCountry), // Mengambil label dari objek totalOrdersByCountry
            datasets: [
                {
                    label: 'Total Order Quantity by Country',
                    data: Object.values(totalOrdersByCountry), // Mengambil data dari objek totalOrdersByCountry
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
// getAverageOrderValue();
getQtySoldByCategory();
getQtySoldByLocation();