import React,{ useRef, useState, useEffect, Component} from 'react'
import {Link} from "react-router-dom"

// function useHover(){
//     const ref = useRef()
//     const [hovered, setHovered] = useState(false)

//     const enter = ()=> setHovered(true)
//     const leave = ()=> setHovered(false)

//     useEffect(()=>{
//         ref.current.addEventListener('mouseenter', enter)
//         ref.current.addEventListener('mouseleave', enter)
//         return()=>{
//             ref.current.removeEventListener('mouseenter', enter)
//             ref.current.removeEventListener('mouseleave', enter)
//         }

//     }, {ref})
//     return{ref, hovered}

// }

class RegistrationPage extends Component{
    

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
    handlePassword2 = ()=>{
        const{isPasswordShown2} = this.state;
        this.setState({
            isPasswordShown2: !isPasswordShown2
        });
    }

    render = ()=>{
    const{isPasswordShown} = this.state;
    const{isPasswordShown2} = this.state;
    // const [ref, hovered] = useHover()
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
                            <li><Link to="/registrationpage" class="active">Register</Link></li>
                            <li><Link to="/loginPage">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div class="formdivtop"></div>
        
            <div class="RegformHeader">
                <div class="RegisterBox">
                    <div class="leftbox">
                    <h3>WELCOME TO</h3>
                    <h2>LOGO & NAME HERE</h2>
                    <p class="txt">Register to vote. Note: You must have a valid Voter ID. You can register only once.</p>
                    <form>
                        <p>Personal Information</p>
                        <p>
                            <div class="ui left icon input">
                                <input type="text" placeholder="First Name" class="usertxt"/>
                                <i aria-hidden="true" class="user icon"></i>
                            </div>
                        </p>
                        <p>
                            <div class="ui left icon input">
                                <input type="text" placeholder="Last Name" class="usertxt"/>
                                <i aria-hidden="true" class="user icon"></i>
                            </div>
                        </p>
                        <p>
                            <div class="ui left icon input">
                                <input type="text" placeholder="Other Name(Optional)" class="usertxt"/>
                                <i aria-hidden="true" class="user icon"></i>
                            </div>
                        </p>
                        <p>Contact Information</p>
                        <p>
                            <div class="ui left icon input">
                                <input type="text" placeholder="Phone" class="usertxt"/>
                                <i aria-hidden="true" class="tty icon"></i>
                            </div>
                        </p>
                        <p>
                            <div class="ui left icon input">
                                <input type="email" placeholder="E-mail" class="usertxt"/>
                                <i aria-hidden="true" class="at icon"></i>
                            </div>
                        </p>
                        <p>
                            <div class="ui left icon input">
                                <input type="text" placeholder="Address" class="usertxt"/>
                                <i aria-hidden="true" class="location arrow icon"></i>
                            </div>
                        </p> 
                    </form>
                        
                    </div>
                    
                    <div class="rightbox">
                        <form>
                            <p>Login Information</p>
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
                                <input /*ref ={ref}*/ type={isPasswordShown ? "text": "password"} placeholder="Password" id="password" class="passinput" maxLength="25"/>
                                <i aria-hidden="true" class="lock icon"></i>
                                <div class="ui right icon input">
                                    <button type="button" onClick = {this.handlePassword} id="eye1"><i aria-hidden="true" class={`${isPasswordShown ? "eye slash" : "eye"} icon`} id="eye"></i></button>
                                </div>
                            </div>
                        </p>
                        <p>
                            <div class="ui left icon input">
                                <input type={isPasswordShown2 ? "text": "password"} placeholder="Confirm Password" class="passinput" maxLength="25"/>
                                <i aria-hidden="true" class="lock icon"></i>
                                <div class="ui right icon input">
                                    <button type="button" onClick = {this.handlePassword2}><i aria-hidden="true" class={`${isPasswordShown2 ? "eye slash" : "eye"} icon`} id="eye"></i></button>
                                </div>
                            </div>
                        </p>
                            <p>
                                <button type="button" class="registerbtn">Login</button>
                            </p>
                            <p>Already registered? <Link to="/loginpage">Login Now</Link></p>
                        </form>
                        
                    </div>
                </div>
                
            </div>
            
            
            
        
     
        
{/* Never go outside of this div------------------------------------------------------------------- */}

        </div>
    )
                        
}
}
export default RegistrationPage
