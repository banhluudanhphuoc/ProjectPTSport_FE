import './style.scss';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Card, Grid } from '@mantine/core';
import React, { useState, memo } from "react";
import InfiniteMultiLevelMenu from './menu';


const MenuAdmin = () => {
    const menuData = [
        {
            id: 1,
            label: 'Dashboard',
            icon: 'Dashboard',
            link: '/admin/dashboard',
        },
        {
            id: 2,
            label: 'Catalog',
            icon: 'Catalog',
            submenu: [
                {
                    id: 3,
                    label: 'Products',
                    icon: 'Products',
                    link: '/admin/products_list',
                },
                {
                    id: 4,
                    label: 'Categories',
                    icon: 'Categories',
                    link: '/admin/categories_list',
                },
                {
                    id: 5,
                    label: 'Posters',
                    icon: 'Posters',
                    link: '/admin/posters_list',
                },
            ],
        },
        {
            id: 6,
            label: 'Sales',
            icon: 'Sales',
            submenu: [
                {
                    id: 7,
                    label: 'Orders',
                    icon: 'Orders',
                    link: '/admin/orders_list_admin',
                },
                {
                    id: 8,
                    label: 'Invoices',
                    icon: 'Invoices',
                    link: '/admin/invoices_list',
                },
            ],
        },
        {
            id: 9,
            label: 'Customers',
            icon: 'Customers',
            submenu: [
                {
                    id: 10,
                    label: 'Customers',
                    icon: 'Customers',
                    link: '/admin/customers_list',
                },
                {
                    id: 11,
                    label: 'Segments',
                    icon: 'Segments',
                    link: '/admin/segments-list',
                },
            ],
        },
    ];
    return (
        <Grid.Col md={2}>
            <div >
                <Card>
                    <InfiniteMultiLevelMenu menuData={menuData} />
                </Card>

            </div>
        </Grid.Col>
    );
};

export default memo(MenuAdmin);