import { Button, Col, Drawer, Form, Input, Row, Space } from 'antd';
import React, { useState } from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

const Contact = () => {
    const [visible, setVisible] = useState(false);
    const [size, setSize] = useState();

    const showDefaultDrawer = () => {
        setSize('default');
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Link to="/*" onClick={showDefaultDrawer}>Contact</Link>
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
                        <Button onClick={onClose} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your name',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter your name" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="phone"
                                label="Phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your phone number',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter your phone number" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your email address',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter your email address" />
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
                                        message: 'please enter a message',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="please enter a message" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
};
export default Contact;