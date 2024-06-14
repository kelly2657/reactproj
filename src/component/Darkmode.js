import React, { useState, useEffect } from 'react';
import '../styles/Darkmode.css';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode === 'enabled' ? true : false;
    });

    useEffect(() => {
        const bodyClassList = document.body.classList;
        if (darkMode) {
            bodyClassList.add('dark');
            bodyClassList.remove('light');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            bodyClassList.add('light');
            bodyClassList.remove('dark');
            localStorage.setItem('dark-mode', 'disabled');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="darkmode">
            <div className="toggle-container">
                <button onClick={toggleDarkMode} className="toggle-button"></button>
            </div>
        </div>
    );
};

export default DarkMode;
