import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    const price = amount;
    return formatter.format(price).replace(/\D(?=\d{3,})/g, ''); // Add commas for thousands
}



function OrderValueTable() {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const { REACT_APP_API_URL } = process.env;
            const response = await axios.get(`${REACT_APP_API_URL}/orders`);
            const fetchedOrders = response.data.map((order) => ({
                ...order,
                createdAt: new Date(order.createdAt).toLocaleString(), // Format createdAt field
            }));
            setOrders(fetchedOrders);
            //console.log(response);
            setFilteredOrders(fetchedOrders);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const handleDateRangeChange = (ranges) => {
        setDateRange([ranges.selection]);
        filterOrdersByDate(ranges.selection);
    };

    const filterOrdersByDate = (selectedRange) => {
        const filtered = orders.filter((order) => {
            const orderDate = new Date(order.createdAt);
            return (
                orderDate >= selectedRange.startDate &&
                orderDate <= selectedRange.endDate
            );
        });
        setFilteredOrders(filtered);
    };

    const getOrderChartData = () => {
        const chartData = {
            options: {
                chart: {
                    toolbar: {
                        show: filteredOrders.length > 10,
                    },
                },
                xaxis: {
                    categories: filteredOrders.map((order) =>
                        new Date(order.createdAt).toLocaleDateString('vi-VN')
                    ),
                },
            },
            series: [
                {
                    name: 'Tổng Giá Trị',
                    data: filteredOrders.map((order) => formatCurrency(order.totalPrice)),
                },
            ],
        };
        return chartData;
    };


    return (
        <div>
            <h2 className='mt-3 ml-3'>Bảng Thống Kê Giá Trị Đơn Hàng</h2>
            <div>
                <Chart
                    options={getOrderChartData().options}
                    series={getOrderChartData().series}
                    type="bar"
                    width="100%"
                    height={500}
                />
            </div>

            <DateRangePicker
                ranges={dateRange}
                onChange={handleDateRangeChange}
                months={2}
            />

        </div>
    );
}

export default OrderValueTable;
