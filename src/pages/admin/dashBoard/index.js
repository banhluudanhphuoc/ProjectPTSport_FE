import { memo } from "react";
import * as React from "react";
import { Admin, Resource } from 'react-admin';
//import restProvider from 'ra-data-simple-rest';
import { PostList, PostEdit, PostCreate, PostIcon } from './posts';
import { ProductList, ProductEdit, ProductCreate, ProductIcon } from './products';
import { UserList, UserEdit, UserCreate, UserIcon } from './users';
//import jsonServerProvider from "ra-data-json-server";


//const dataProvider = data;
//dataProvider={dataProvider}
const dashBoard = () => {
    return <Admin >
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} icon={ProductIcon} />
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    </Admin>;
};

export default memo(dashBoard);


