// in Products.js
import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, useRecordContext } from 'react-admin';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
export const ProductIcon = ProductionQuantityLimitsIcon;

export const ProductList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="productName" />
            <TextField source="productDescription" />
            <TextField source="productDescriptionSort" />
            <TextField source="productImage" />
            <TextField source="categotyId" />
            <EditButton />
        </Datagrid>
    </List>
);

const ProductTitle = () => {
    const record = useRecordContext();
    return <span>Product {record ? `"${record.title}"` : ''}</span>;
};

export const ProductEdit = () => (
    <Edit title={<ProductTitle />}>
        <SimpleForm>
            <TextField source="id" />
            <TextField source="productName" />
            <TextField source="productDescription" />
            <TextField source="productDescriptionSort" />
            <TextField source="productImage" />
            <TextField source="categotyId" />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = () => (
    <Create title="Create a Product">
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="productName" />
            <TextInput source="productDescription" />
            <TextInput source="productDescriptionSort" />
            <TextInput source="productImage" />
            <TextInput source="categotyId" />
        </SimpleForm>
    </Create>
);
