import React from 'react';
import {Switch} from 'antd';
import './styles.css';

const ThemeButton = ({handleClick, isDarkMode}) => {
    return (
        <div className="theme-switch-container">
            <Switch
                className={`theme-switch-button ${isDarkMode ? 'dark' : 'light'}`}
                onChange={handleClick}
                hoverable={false}
                checkedChildren="🌙️ DarkMode"
                unCheckedChildren="☀️ LightMode"
                defaultChecked={isDarkMode}
            />
        </div>
    );
};

export default ThemeButton;