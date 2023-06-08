import React from 'react';
import {Space, Switch} from 'antd';
import './styles.css';

const ThemeButton = ({handleClick, isDarkMode}) => {

    return (
        <>
            <Space
                className="theme-switch-container"
                direction="vertical">
                <Switch
                    className="theme-switch-button"
                    onClick={handleClick}
                    checkedChildren={`☀️ LightMode`}
                    unCheckedChildren={`🌙️ DarkMode`}
                    defaultUnchecked
                    style={{backgroundColor: isDarkMode ? 'orange' : '#444'}}
                />
            </Space>
        </>
    );
};

export default ThemeButton;
/*
const ThemeButton = ({handleClick, isDarkMode}) => {
    return (
        <>

            <Button
                type="primary"
                onClick={handleClick}
                icon={isDarkMode ? '🌞' : '🌙'}
                style={{
                    backgroundColor: isDarkMode ? '#1890ff' : '#f5222d',
                    borderColor: isDarkMode ? '#1890ff' : '#f5222d'
                }}
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
        </>
    );
};
*/
