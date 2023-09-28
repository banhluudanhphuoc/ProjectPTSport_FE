
import { memo, useState } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import {
    Grid,
    SimpleGrid,
    Card,
    Image,
    Text,
    Button,
    NumberInput,
    TextInput,
    Box,
    FileButton,
    NativeSelect,
    Title,
    Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';

const EditCategoryAdmin = () => {

    const [valueBrand, setValueBrand] = useState('');
    const [valueCategories, setValueCategories] = useState('');
    const [files, setFiles] = useState([]);
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            age: 0,
            description: '', // Add the description field
        },

        // functions will be used to validate values at corresponding key
        validate: {
            name: (value) => (value.length < 2 ? 'Tên sản phẩm quá ngắn' : null),
            price: (value) => (value == null ? 'Không được để trống' : null),
            inventory: (value) => (value == 0 || value == null ? 'Số lượng không được bằng 0 hoặc để trống' : null),
            description: (value) => (value.length < 10 ? 'Mô tả quá ngắn' : null), // Add validation for the description field
        },
    });
    return (
        <></>
    );
};

export default memo(EditCategoryAdmin);