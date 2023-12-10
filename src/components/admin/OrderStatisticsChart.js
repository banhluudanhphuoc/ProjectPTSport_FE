import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const OrderStatisticsChart = () => {
    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: 'order-statistics-chart',
            },
            xaxis: {
                type: 'datetime',
                labels: {
                    format: 'dd/MM/yyyy',
                },
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return new Intl.NumberFormat('en-US').format(value);
                    },
                },
            },
        },
        series: [
            {
                name: 'Tổng tiền',
                data: [],
            },
            {
                name: 'Tổng số đơn hàng',
                data: [],
            },
        ],
    });

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { REACT_APP_API_URL } = process.env;

                const response = await axios.get(`${REACT_APP_API_URL}/orders`);
                const orders = response.data;

                // Process orders to get daily totals
                const dailyTotals = orders.reduce((acc, order) => {
                    const date = new Date(order.createdAt).setHours(0, 0, 0, 0);

                    if (!acc[date]) {
                        acc[date] = {
                            totalAmount: 0,
                            totalOrders: 0,
                        };
                    }

                    acc[date].totalAmount += order.totalPrice;
                    acc[date].totalOrders += 1;

                    return acc;
                }, {});

                // Convert dailyTotals to series data
                const seriesData = Object.entries(dailyTotals).map(([date, { totalAmount, totalOrders }]) => ({
                    x: Number(date), // Convert date to a number (timestamp)
                    y1: totalAmount,
                    y2: totalOrders,
                }));

                setChartData((prevChartData) => ({
                    ...prevChartData,
                    series: [
                        {
                            name: 'Tổng tiền',
                            data: seriesData.map((data) => ({ x: data.x, y: data.y1 })),
                        },
                        {
                            name: 'Tổng số đơn hàng',
                            data: seriesData.map((data) => ({ x: data.x, y: data.y2 })),
                        },
                    ],
                }));
            } catch (error) {
                console.error('Error fetching orders:', error);
                // Handle the error appropriately (e.g., display an error message)
            }
        };

        fetchOrders();
    }, []);

    return <Chart options={chartData.options} series={chartData.series} type="line" height={400} />;
};

export default OrderStatisticsChart;
