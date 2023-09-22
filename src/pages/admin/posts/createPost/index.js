
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

const CreatePosterAdmin = () => {

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
        <Grid.Col md={10}>
            <div className="edit_product_admin">
                <Box maw={340} mx="auto">
                    <form onSubmit={form.onSubmit(console.log)}>
                        <Title order={3} size="h1">
                            Thêm sản phẩm
                        </Title>
                        <TextInput label="Tên sản phẩm" placeholder="Tên sản phẩm" id="productName" {...form.getInputProps('name')} />
                        <NumberInput
                            mt="sm"
                            id="productPrice"
                            label="Giá sản phẩm"
                            placeholder="Giá sản phẩm"
                            min={0}
                            max={9999999999}
                            {...form.getInputProps('price')}
                        />
                        <NumberInput
                            mt="sm"
                            id="productInventory"
                            label="Số lượng sản phẩm"
                            placeholder="Số lượng sản phẩm"
                            min={0}
                            max={9999}
                            {...form.getInputProps('inventory')}
                        />
                        <NativeSelect
                            mt="sm"
                            label="Thương hiệu"
                            value={valueBrand}
                            onChange={(event) => setValueBrand(event.currentTarget.valueBrand)}
                            data={[
                                { label: 'React', valueBrand: 'react' },
                                { label: 'Angular', valueBrand: 'angular' },
                                { label: 'Svelte', valueBrand: 'svelte' },
                                { label: 'Vue', valueBrand: 'vue' },
                            ]}
                        />
                        <NativeSelect
                            mt="sm"
                            label="Danh mục"
                            value={valueCategories}
                            onChange={(event) => setValueCategories(event.currentTarget.valueCategories)}
                            data={[
                                { label: 'Reacts', valueCategories: 'reacts' },
                                { label: 'Angulars', valueCategories: 'angulars' },
                                { label: 'Sveltes', valueCategories: 'sveltes' },
                                { label: 'Vues', valueCategories: 'vues' },
                            ]}
                        />
                        <Textarea
                            mt="sm"
                            id="productDescription"
                            label="Mô tả sản phẩm"
                            placeholder="Mô tả sản phẩm"
                            {...form.getInputProps('description')}
                            rows={10}
                            className="custom-textarea"
                        />

                        <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple mt="sm">
                            {(props) => <Button {...props}>Upload image</Button>}
                        </FileButton>
                        {files.length > 0 && (
                            <Text size="sm" mt="sm">
                                Picked files:
                            </Text>
                        )}

                        <ul>
                            {files.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                        <Button type="submit" mt="sm">
                            Thêm sản phẩm
                        </Button>
                    </form>
                </Box>
            </div>
        </Grid.Col >
    );
};

export default memo(CreatePosterAdmin);