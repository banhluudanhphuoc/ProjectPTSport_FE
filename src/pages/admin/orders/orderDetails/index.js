
import { memo } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { Grid } from '@mantine/core';

const OrderDetailAdmin = () => {
    return (
        <Grid.Col md={10}>
            <div className="orders_admin">
                OrdersAdmin
            </div>
        </Grid.Col>
    );
};

export default memo(OrderDetailAdmin);