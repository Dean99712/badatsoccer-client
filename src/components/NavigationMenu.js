import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import '../styles/NavigationMenu.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faLineChart, faUserTie} from "@fortawesome/free-solid-svg-icons";
import {faFutbol} from "@fortawesome/free-regular-svg-icons/faFutbol";
import Logo from "../assets/Logo";
import useFields from "../hooks/useFields";
import useSelectedField from "../hooks/useSelectedField";
import usePageTitle from "../hooks/usePageTitle";

const NavigationMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation()
    const {fields} = useFields();
    const {selectedField, setSelectedField} = useSelectedField()
    const headerTitle = usePageTitle();

    const navigationPages = [{
        path: '/',
        title: 'Home',
        icon: faHouse,
    }, {
        path: '/',
        title: 'Games',
        icon: faFutbol
    }, {
        path: '/statistics',
        title: 'Statistics',
        icon: faLineChart
    }, {
        path: '/admin',
        title: 'Admin',
        icon: faUserTie
    }]
    const renderNavigationMenu = () => {
        return (
                <div className="nav-menu">
                    <div className={`menu ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="page-title">
                        <h1 id="header-title">{headerTitle}</h1>
                    </div>
                    <div className="statistics-nav-menu" style={{display: location.pathname === '/statistics' ? "block" : "none"}}></div>
                    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                        <ul>{
                            navigationPages.map((item) => (<span className="list-item">
                            <li><FontAwesomeIcon fill={"white"} icon={item.icon}/><Link onClick={() => setIsOpen(false)}
                                                                                        to={item.path}>{item.title}</Link></li>
                        </span>))
                        }
                        </ul>
                    </div>
                    <Link to={"/"}><Logo height={50}/></Link>
                    <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}/>
                </div>
        )
    }
    const renderStatisticsNavigationMenu = () => {
        return (
                <div className="nav-menu">
                    <div className={`menu ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="page-title">
                        <h1 id="header-title">{headerTitle}</h1>
                    </div>
                    <div className="statistics-nav-menu" style={{display: location.pathname === '/statistics' ? "block" : "none"}}>
                        <ul className="statistics-nav-titles">{
                            fields && fields.map((field, index) => (
                                <li className={field.field === selectedField ? 'selected-field' : ''}
                                    onClick={() => setSelectedField(field.field)} key={index}><h5>{field.field}</h5></li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                        <ul>{
                            navigationPages.map((item) => (<span className="list-item">
                            <li><FontAwesomeIcon fill={"white"} icon={item.icon}/><Link onClick={() => setIsOpen(false)}
                                                                                        to={item.path}>{item.title}</Link></li>
                        </span>))
                        }
                        </ul>
                    </div>
                    <Link to={"/"}><Logo height={50}/></Link>
                    <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}/>
                </div>
        )
    }

    switch (location.pathname) {
        case '/':
            return renderNavigationMenu()
        case '/statistics':
            return renderStatisticsNavigationMenu()
        case '/admin':
            return renderNavigationMenu()
        default:
            return renderNavigationMenu
    }
};

export default NavigationMenu;
