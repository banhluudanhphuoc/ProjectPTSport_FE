import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

class OrderComparisonChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'order-comparison-chart'
                },
                xaxis: {
                    categories: []  // Dynamic categories
                }
            },
            series: [{
                name: 'Số lượng đơn hàng',
                data: []  // Dynamic series data
            }]
        };
    }

    componentDidMount() {
        this.fetchOrders();
    }

    fetchOrders = async () => {
        try {
            const { REACT_APP_API_URL } = process.env;

            const response = await axios.get(`${REACT_APP_API_URL}/orders`);
            const orders = response.data;

            // Extract unique order statuses and sort them
            const uniqueOrderStatuses = Array.from(new Set(orders.map(order => order.orderStatus.name)))
                .sort((a, b) => a.localeCompare(b));  // Sort alphabetically, adjust as needed
            const categoryColors = ['#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57', '#5733FF', '#FF5733'];
            // Initialize dynamic categories and series data

            const categories = uniqueOrderStatuses.map(status => `${status}`);
            const seriesData = uniqueOrderStatuses.map(status => {
                const count = orders.filter(order => order.orderStatus.name === status).length;
                return count;
            });

            // Update the state
            this.setState({
                options: {
                    ...this.state.options,
                    xaxis: {
                        categories: categories
                    }
                },
                series: [{
                    name: 'Số lượng đơn hàng',
                    data: seriesData
                }]
            });
        } catch (error) {
            console.error('Error fetching orders:', error);
            // Handle the error appropriately (e.g., display an error message)
        }
    };

    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width={'100%'}
                height={600}
            />
        );
    }
}

export default OrderComparisonChart;
