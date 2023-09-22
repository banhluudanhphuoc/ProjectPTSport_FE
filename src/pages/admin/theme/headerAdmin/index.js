
import { memo } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Button, Group, TextInput, NumberInput, Box, Grid, Card, Table, ActionIcon, NativeSelect, Image, Menu, Text, rem } from '@mantine/core';
import {
    IconSettings,
    IconSearch,
    IconPhoto,
    IconMessageCircle,
    IconTrash,
    IconArrowsLeftRight,
} from '@tabler/icons-react';

const HeaderAdmin = () => {
    return <div className="header_admin">
        <div className="container">
            <div className="row">
                <Grid>
                    <Grid.Col md={6} className="header_left_admin">
                        <h1>ADMINISTRATOR</h1>
                    </Grid.Col>
                    <Grid.Col md={6} className="header_right_admin">
                        <h3 className="name-account">Name</h3>
                        <div className="admin-account">
                            <Link><Image src="" alt="" /></Link>
                        </div>
                        <div className="menu_header_admin">
                            <Menu shadow="md" width={200}>
                                <Menu.Target>
                                    <button className="button_setting_admin"><AiOutlineMenu /></button>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Label>Application</Menu.Label>
                                    <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                        Settings
                                    </Menu.Item>
                                    <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
                                        Messages
                                    </Menu.Item>
                                    <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
                                        Gallery
                                    </Menu.Item>
                                    <Menu.Item
                                        leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
                                        rightSection={
                                            <Text size="xs" c="dimmed">
                                                ⌘K
                                            </Text>
                                        }
                                    >
                                        Search
                                    </Menu.Item>

                                    <Menu.Divider />

                                    <Menu.Label>Danger zone</Menu.Label>
                                    <Menu.Item
                                        leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
                                    >
                                        Transfer my data
                                    </Menu.Item>
                                    <Menu.Item
                                        color="red"
                                        leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                                    >
                                        Delete my account
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    </div >;
};

export default memo(HeaderAdmin);