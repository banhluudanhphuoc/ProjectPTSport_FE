import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, useRecordContext, EmailField } from 'react-admin';
import PersonIcon from '@mui/icons-material/Person';
export const UserIcon = PersonIcon;
export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);


const UserTitle = () => {
    const record = useRecordContext();
    return <span>User {record ? `"${record.title}"` : ''}</span>;
};

export const UserEdit = () => (
    <Edit title={<UserTitle />}>
        <SimpleForm>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create title="Create a User">
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" />
        </SimpleForm>
    </Create>
);