import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const price = amount;
    return formatter.format(price);
}

class DonutChart extends Component {
    render() {
        const { data } = this.props;

        const chartData = {
            options: {
                labels: data.map(orderAmount => orderAmount.status),
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            series: data.map(orderAmount => parseFloat(orderAmount.totalAmount))
        };

        return (
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="donut"
                width="100%"
                height={300}
            />
        );
    }
}

class OrderAmountComparisonTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderAmounts: [],
            totalPossibleRevenue: 0, // Thêm biến totalPossibleRevenue và totalPaidRevenue vào state
            totalRevenue: 0,
            totalPaidRevenue: 0,
        };
    }

    componentDidMount() {
        this.fetchOrderAmounts();
    }

    fetchOrderAmounts = async () => {
        try {
            const { REACT_APP_API_URL } = process.env;
            const response = await axios.get(`${REACT_APP_API_URL}/orders`);
            const orders = response.data;


            const uniqueOrderStatuses1 = Array.from(new Set(orders.map(order => order.orderStatus.name)))
                .sort((a, b) => a.localeCompare(b));

            const orderAmounts1 = uniqueOrderStatuses1.map(status => {
                const totalAmount = orders
                    .filter(order => order.orderStatus.name === status)
                    .reduce((sum, order) => sum + order.totalPrice, 0);

                return {
                    status: `${status}`,
                    totalAmount: totalAmount.toFixed(2)
                };
            });
            // Lọc các đơn hàng không bị hủy
            const validOrders = orders.filter(order => order.orderStatus.id !== 7);

            const uniqueOrderStatuses = Array.from(new Set(validOrders.map(order => order.orderStatus.name)))
                .sort((a, b) => a.localeCompare(b));

            const orderAmounts = uniqueOrderStatuses.map(status => {
                const totalAmount = validOrders
                    .filter(order => order.orderStatus.name === status)
                    .reduce((sum, order) => sum + order.totalPrice, 0);

                return {
                    status: `${status}`,
                    totalAmount: totalAmount.toFixed(2)
                };
            });

            // Tính tổng giá trị có thể thu được từ tất cả các loại đơn hàng (ngoại trừ đơn hàng đã hủy)
            const totalPossibleRevenue = orderAmounts.reduce((sum, orderAmount) => sum + parseFloat(orderAmount.totalAmount), 0);

            // Lọc các đơn hàng đã thanh toán hoặc đã hoàn thành
            const paidAndCompletedOrders = validOrders.filter(order =>
                order.orderStatus.id === 2 || order.orderStatus.id === 6
            );

            // Tính tổng giá trị thu được bao gồm đơn hàng đã thanh toán và đơn hàng đã hoàn thành
            const totalPaidRevenue = paidAndCompletedOrders.reduce((sum, order) => sum + order.totalPrice, 0);

            const totalRevenue = orders.reduce((sum, order) => sum + order.totalPrice, 0);
            this.setState({
                orderAmounts: orderAmounts1,
                totalPossibleRevenue: totalPossibleRevenue,
                totalRevenue: totalRevenue,
                totalPaidRevenue: totalPaidRevenue,
            });
        } catch (error) {
            console.error('Error fetching order amounts:', error);
        }
    };

    render() {
        const { orderAmounts, totalPossibleRevenue, totalRevenue, totalPaidRevenue } = this.state;

        return (
            <div>
                <DonutChart data={orderAmounts} />
                <table className='mt-2 ml-5'>
                    <thead>
                        <tr>
                            <th>Trạng thái đơn hàng</th>
                            <th>Tổng giá trị đơn hàng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderAmounts.map((orderAmount, index) => (
                            <tr key={index}>
                                <td>{orderAmount.status}</td>
                                <td>{formatCurrency(orderAmount.totalAmount)}</td>
                            </tr>
                        ))}





                        <tr>
                            <td><strong>Tổng giá trị tất cả</strong></td>
                            <td>{formatCurrency(totalRevenue.toFixed(2))}</td>
                        </tr>


                        <tr>
                            <td><strong>Tổng giá trị có thể thu được (ngoại trừ hủy)</strong></td>
                            <td>{formatCurrency(totalPossibleRevenue.toFixed(2))}</td>
                        </tr>

                        <tr>
                            <td><strong>Tổng giá trị đã thanh toán và đã hoàn thành</strong></td>
                            <td>{formatCurrency(totalPaidRevenue.toFixed(2))}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default OrderAmountComparisonTable;