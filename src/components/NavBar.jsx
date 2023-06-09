import React, {useState} from "react";
import {Layout, Menu, Button, Drawer, Row, Col} from "antd";
import {
    HomeOutlined,
    UserOutlined,
    SettingOutlined,
    MenuOutlined,
    HistoryOutlined,
    MailOutlined
} from "@ant-design/icons";
import {Link} from 'react-router-dom';
import Contact from './Contact';
import ThemeButton from "./ThemeButton";
import './styles.css';

const {Header} = Layout;

const NavBar = ({handleClick, isDarkMode}) => {
    const [visible, setVisible] = useState(false);
    const [size, setSize] = useState('default');

    const showDrawer = () => {
        setSize('default');
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <Header style={{padding: 0}}>
            <Row justify="space-between" align="middle">
                <Col xs={20} sm={20} md={4}>
                    <div style={{maxWidth: "100px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        {!isDarkMode
                            ? <img src="./avenaDev-lightMode.svg" alt="Logo LightMode" width="42" height="42"/>
                            : <img src="./avenaDev-darkMode.svg" alt="Logo DarkMode" width="42" height="42"/>}
                    </div>
                </Col>
                <Col xs={0} sm={0} md={20}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1" icon={<HomeOutlined/>}>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined/>}>
                            <Link to="/about">About</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<MailOutlined/>}>
                            <Contact/>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<HistoryOutlined/>}>
                            <Link
                                to="https://siljeangelvik.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Old Portfolio
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/presentation">
                                Presentation
                            </Link>
                        </Menu.Item>
                        <span style={{
                            position: "absolute",
                            right: "20px",
                            top: "0",
                        }}>
                            <ThemeButton handleClick={handleClick} isDarkMode={isDarkMode}/>
                        </span>
                    </Menu>
                </Col>

                <Col xs={2} sm={2} md={0} style={{marginRight: "20px"}}>
                    <Button type="primary" onClick={showDrawer}>
                        <MenuOutlined/>
                    </Button>
                </Col>
            </Row>
            <Drawer
                title="Menu"
                placement="right"
                onClick={onClose}
                onClose={onClose}
                visible={visible}
                size={size}
            >
                <Menu mode="vertical" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1" icon={<HomeOutlined/>}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined/>}>
                        <Link to="/about">About</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SettingOutlined/>}>
                        <Contact/>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<HistoryOutlined/>}>
                        <Link
                            to="https://siljeangelvik.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Old Portfolio
                        </Link>
                    </Menu.Item>
                    <span style={{
                        width: "100%",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px",
                        padding: "10px"
                    }}>
                            <ThemeButton handleClick={handleClick} isDarkMode={isDarkMode}/>
                        </span>
                </Menu>
            </Drawer>
        </Header>
    )
        ;
};

export default NavBar;