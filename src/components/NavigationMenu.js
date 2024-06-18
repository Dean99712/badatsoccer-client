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
import FootballFieldIcon from "../assets/FootballFieldIcon";

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
    },{
        path: '/players',
        title: 'Players',
    }];

    console.log(location.pathname)

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
                    <div className="secondary-nav-menu" style={{display: location.pathname === '/statistics' ? "block" : "none"}}></div>
                    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                        <ul>{
                            navigationPages.map((item) => (<span className="list-item">
                            <li>{item.title === 'Players' ? <FootballFieldIcon width={40} height={40} strokeColor="white" fillColor="none" /> : <FontAwesomeIcon fill={"white"} icon={item.icon}/>}<Link onClick={() => setIsOpen(false)}
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

    const renderSecondaryNavigationMenu = () => {
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
                    <div className="secondary-nav-menu" style={{display: (location.pathname === '/statistics' || location.pathname === '/players') ? "block" : "none"}}>
                        <ul className="secondary-nav-titles" style={{justifyContent: fields.length < 4 ? "space-evenly" : "space-between"}}>{
                            fields && fields.map((field, index) => {
                                let fieldTitle = field.field;
                                return (
                                <li className={fieldTitle === selectedField ? 'selected-field' : ''}
                                    onClick={() => setSelectedField(fieldTitle)} key={index}><h5>{fieldTitle}</h5></li>
                            )})
                        }
                        </ul>
                    </div>
                    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                        <ul>{
                            navigationPages.map((item) => (<span className="list-item">
                            <li>{item.title === 'Players' ? <FootballFieldIcon width={30} height={40} strokeColor="white" fillColor="none" strokeWidth={5} style={{margin: '0 0.5em 0 0 ', alignSelf: 'center'}}/> : <FontAwesomeIcon fill={"white"} icon={item.icon}/>}<Link onClick={() => setIsOpen(false)}
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
            return renderSecondaryNavigationMenu()
        case '/players':
            return renderSecondaryNavigationMenu()
        case '/admin':
            return renderNavigationMenu()
        default:
            return renderNavigationMenu
    }
};

export default NavigationMenu;
