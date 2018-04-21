import React, { Component } from 'react';
import Link from 'next/link';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a class="navbar-brand" href="#">{this.props.brand}</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul class="navbar-nav mr-auto">                        
                            <li class="nav-item">
                                <Link href='/'><a class="nav-link">Home</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link href='/about'><a class="nav-link">About</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link href='/contact'><a class="nav-link">Contact</a></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;