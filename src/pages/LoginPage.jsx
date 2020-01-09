import React,{ useRef, useState, useEffect, Component} from 'react'
import {Link} from "react-router-dom"

class LoginPage extends Component{
    state ={
        isPasswordShown : false,
        isPasswordShown2 : false
    }
    handlePassword = ()=>{
        const{isPasswordShown} = this.state;
        this.setState({
            isPasswordShown: !isPasswordShown
        });
    }
    
    render = ()=>{
    const{isPasswordShown} = this.state;
    return(
        <div class="bodydiv">
        <header class="navheader">
            <div class="navdiv">
                <nav>
                    <input type="checkbox" id="check"/>
                    <label for="check" class="checkbtn">
                        <span class="fasfa-bars"></span>
                    </label>
                    <label class="logo">Our Name Here</label>
                    <ul>
                        <li><Link to="/" >Vote</Link></li>
                        <li><Link to="/registrationpage" >Register</Link></li>
                        <li><Link to="/loginPage" class="active">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        <div class="formdivtop"></div>
        <header class="formSection">      
            <div class="formdiv">
                <h3>WELCOME TO</h3>
                <h2>LOGO & NAME HERE</h2>
                <p class="txt">Login to vote your candidate to power. Note: You must be a valid voter. You can only vote once. 
                    Your Vote is Your Power
                </p>
                <form className="form">
                    <p>
                        <div class="ui left icon input">
                            <input type="text" placeholder="Student ID" class="usertxt"/>
                            <i aria-hidden="true" class="id badge icon"></i>
                        </div>
                    </p>
                    <p>
                        <div class="ui left icon input">
                            <input type="text" placeholder="Username" class="usertxt"/>
                            <i aria-hidden="true" class="user icon"></i>
                        </div>
                    </p>
                
                    <p>
                        <div class="ui left icon input">
                            <input type={isPasswordShown ? "text": "password"} placeholder="Password" class="passinput" maxLength="25"/>
                            <i aria-hidden="true" class="lock icon"></i>
                            <div class="ui right icon input"> 
                                <button type="button" onClick = {this.handlePassword}><i aria-hidden="true" class={`${isPasswordShown ? "eye slash" : "eye"} icon`} id="eye"></i></button>
                            </div>
                        </div>
                    </p>
                    <p>
                        <button type="button" class="loginbtn">Login</button>
                    </p>
                    <p>Not registered? <Link to="/registrationpage">Register Now</Link></p>
                </form>
            </div>
            <div class="picturediv">
                <div>
                <h3>LOGO</h3>
                <h2>OUR NAME HERE</h2><hr/>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Maecenas porttitor congue massa. Fusce posuere, magna sed 
                    pulvinar ultricies, purus lectus malesuada libero, sit amet 
                    commodo magna eros quis urna. Nunc viverra imperdiet enim. 
                    Fusce est.
                </p>
                </div>  
            </div>
            
        </header>
        
        
{/* Never go outside of this div------------------------------------------------------------------- */}
             {/* <footer>
                <p>Copyright &copy; OUR NAME HERE. All Rights Reserved.</p>            
                <div class="socialdiv">
                    <a href=""><img src="" alt=""/></a>
                    <a href=""><img src="" alt=""/></a>
                    <a href=""><img src="" alt=""/></a>
                    <a href=""><img src="" alt=""/></a>
                </div>                              
            </footer>  */}
        </div>
        
    )
    
}
}
export default LoginPage