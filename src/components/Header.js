import React, { Component } from 'react'
import { BiSearch } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { Link } from "react-router-dom";



export default class Header extends Component {
     render() {
        return (
            <div className="header fixed flex aic">
                <div className="logo">
                    <img src={require("../ui/olx-logo.png")} />
                </div>

                <div className="location rel flex aic">
                    <div  className="s22 ico b"><BiSearch /></div>
                    <input className="label" placeholder="Your Location" value="Pakistan" />
                    <button className="s22 arro"><BsChevronDown /></button>
                </div>

                <div className="search flex aic">
                    <input className="query" type="text" placeholder="Find Cars, Mobile Phones and more..." />
                    <div className="s22 go b cfff"><BiSearch /></div>
                </div>

                <div className="flex aic actions">
                    <Link to="/accounts/signin" className="fontb s16 noulh ">Sign in</Link>
                    <button className="sell flex aic">
                        <div className="s22 ico b"><FiPlus /></div>
                        <h2 className="s15 b">SELL</h2>
                    </button>
                </div>
            </div>
            )
    }
}
