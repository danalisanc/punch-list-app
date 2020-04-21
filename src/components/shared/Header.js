import React, {Component} from 'react';
import { Menu, Container } from 'semantic-ui-react'
import logo from '../../styles/logo.svg';
import 'semantic-ui-css/semantic.min.css';

export default class Header extends Component {
    render(){
        return (
        <header>
            <Menu inverted>
                <Container>
                        <a href="#" alt="header" className="header item">
                            <img className="logo" src={logo}/>
                            Bluebeam Atlas Punch List
                        </a>
                </Container>
            </Menu>
        </header>
        )
    }
}