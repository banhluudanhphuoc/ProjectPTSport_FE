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

class PaymentComparisonChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paymentData: [],
        };
    }

    componentDidMount() {
        this.fetchPaymentData();
    }

    fetchPaymentData = async () => {
        try {
            const { REACT_APP_API_URL } = process.env;
            const response = await axios.get(`${REACT_APP_API_URL}/orders`);
            const orders = response.data;

            // Filter orders for cash payments
            const cashPayments = orders.filter(order => order.paymentMethodID === 1);

            // Filter orders for VNPay payments
            const vnpayPayments = orders.filter(order => order.paymentMethodID === 2);

            const paymentData = [
                { paymentMethod: 'Tiền Mặt', totalAmount: cashPayments.reduce((sum, order) => sum + order.totalPrice, 0) },
                { paymentMethod: 'VNPay', totalAmount: vnpayPayments.reduce((sum, order) => sum + order.totalPrice, 0) },
            ];

            this.setState({
                paymentData: paymentData
            });
        } catch (error) {
            console.error('Error fetching payment data:', error);
        }
    };

    render() {
        const { paymentData } = this.state;

        const chartData = {
            options: {
                xaxis: {
                    categories: paymentData.map(data => data.paymentMethod),
                },
            },
            series: [
                {
                    name: 'Tổng Giá Trị',
                    data: paymentData.map(data => data.totalAmount),
                },
            ],
        };

        // Format the total amount in the series data
        chartData.series[0].data = chartData.series[0].data.map(totalAmount =>
            totalAmount
        );

        return (
            <div className='mt-2 ml-5 mb-2'>


                <h2>So sánh thanh toán</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Phương Thức Thanh Toán</th>
                            <th>Tổng Giá Trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.paymentMethod}</td>
                                <td>{formatCurrency(data.totalAmount)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type="bar"
                    width="100%"
                    height={300}
                />
            </div>
        );
    }
}

export default PaymentComparisonChart;
