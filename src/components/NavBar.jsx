import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Row, Col } from "antd";
import {
    HomeOutlined,
    UserOutlined,
    SettingOutlined,
    MenuOutlined,
} from "@ant-design/icons";
import ThemeButton from "./ThemeButton";

const { Header } = Layout;

const NavBar = ({ handleClick, isDarkMode }) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <Header style={{ padding: 0 }}>
            <Row justify="space-between" align="middle">
                <Col xs={20} sm={20} md={4}>
                    <div
                        className="logo"
                        style={{ color: "white", paddingLeft: "20px" }}
                    >
                        My Logo
                    </div>
                </Col>
                <Col xs={0} sm={0} md={20}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            Home
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            About
                        </Menu.Item>
                        <Menu.Item key="3" icon={<SettingOutlined />}>
                            Contact
                        </Menu.Item>
                        <Menu.Item key="4" icon={<SettingOutlined />}>
                            Old Portfolio
                        </Menu.Item>
                        <Menu.Item key="5">
                            <ThemeButton handleClick={handleClick} isDarkMode={isDarkMode} />
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={2} sm={2} md={0}>
                    <Button type="primary" onClick={showDrawer}>
                        <MenuOutlined />
                    </Button>
                </Col>
            </Row>
            <Drawer
                title="Menu"
                placement="right"
                onClick={onClose}
                onClose={onClose}
                visible={visible}
            >
                <Menu mode="vertical" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        About
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SettingOutlined />}>
                        Contact
                    </Menu.Item>
                    <Menu.Item key="4" icon={<SettingOutlined />}>
                        Old Portfolio
                    </Menu.Item>
                    <Menu.Item key="5">
                        <ThemeButton handleClick={handleClick} isDarkMode={isDarkMode} />
                    </Menu.Item>
                </Menu>
            </Drawer>
        </Header>
    );
};

export default NavBar;
