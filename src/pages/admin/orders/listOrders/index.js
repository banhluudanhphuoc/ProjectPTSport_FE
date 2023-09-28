
import { memo } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { Grid, Card, Table } from '@mantine/core';



const OrdersListAdmin = () => {
    const items = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon', id: 1 },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen', id: 2 },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium', id: 3 },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium', id: 4 },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium', id: 5 },
    ];

    return <>

    </>
};

export default memo(OrdersListAdmin);