import {Button, Col, Drawer, Form, Input, Row, Space} from 'antd';
import React, {useState} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

const Contact = ({isDarkMode}) => {
    const [visible, setVisible] = useState(false);
    const [size, setSize] = useState();

    const showDefaultDrawer = () => {
        const isTabletSizeAndAbove = window.innerWidth >= 768; // Change the breakpoint as per your requirements
        setSize(isTabletSizeAndAbove ? 'large' : 'default');
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Link to="/" onClick={showDefaultDrawer}>Contact</Link>
            <Drawer
                title="Contact Me"
                placement="right"
                size={size}
                onClose={onClose}
                open={visible}

                bodyStyle={{
                    paddingBottom: 80,
                }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                    </Space>
                }
            >
                <Form name="portfolio2-contact"
                      method="POST"
                      netlify
                      layout="vertical"
                      hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Name"
                                type="name"
                                rules={[
                                    {
                                        required: true,
                                        type: 'string',
                                        pattern: new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),
                                        max: 50,
                                        min: 2,
                                        whitespace: true,
                                        message: 'Please enter a valid name',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter your name"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="phone"
                                label="Phone"
                                type="phone"
                                rules={[
                                    {
                                        required: false,
                                        type: 'number',
                                        pattern: new RegExp(/^[0-9\b]+$/),
                                        max: 15,
                                        min: 7,
                                        transform: (value) => value && value.trim(),
                                        message: 'Please enter a valid phone number',
                                    },
                                ]}
                            >
                                <Input placeholder="Optional to enter your phone number"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="email"
                                label="Email"
                                type="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your email address',
                                        type: 'email',
                                        pattern: new RegExp(
                                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                        ),
                                        maxLength: 50,
                                        minLength: 5,
                                        enum: ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com'],
                                        transform: (value) => value && value.trim(),
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter your email address"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="subject"
                                label="Subject"
                                type="subject"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Please enter a title to your message',
                                        type: 'string',
                                        pattern: new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),
                                        max: 50,
                                        min: 2,
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter a title to your message"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter a message',
                                        type: 'string',
                                        pattern: new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),
                                        max: 500,
                                        min: 2,
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="please enter a message"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <input type="hidden" name="portfolio2-contact" value="contact"/>

                    <Button
                        className={`primary-button ${isDarkMode ? 'dark' : 'light'}`}
                        type="submit"
                        onClick={onClose}
                        style={{width: '45%', borderRadius: '0'}}
                    >
                        Send Message
                    </Button>
                </Form>
            </Drawer>
        </>
    );
};
export default Contact;