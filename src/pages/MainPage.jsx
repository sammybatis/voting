import React, { useRef, useState, useEffect, Component } from 'react'
import { Link } from "react-router-dom"

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: " "
        };

    
    }
    handleOptionChange = event => {
        this.setState ({ selectedOption: event.target.value});
        
    };
    handleFormSubmit = async event =>  {
        event.preventDefault()
        alert(this.state.selectedOption) 
    
    };

        
        
 
    render = () => {
        return (
            <div className="bodydiv">
               <form onSubmit = {this.handleFormSubmit}>
               
                <header className="navheader">
                    <div className="navdiv">
                        <nav>
                            <input type="checkbox" id="check" />
                            <label for="check" class="checkbtn">
                                <span className="fasfa-bars"></span>
                            </label>
                            <label className="logo">DRAXMA GH</label>
                            <ul>
                                <li><Link to="/" class="active">Vote</Link></li>
                                <li><Link to="/registrationpage" >Register</Link></li>
                                <li><Link to="/loginPage">Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <div className="formdivtop"></div>



                <section className="workarea">
                    <section className="Imageslider">

                    </section>
                    <header className="titleheader">
                        <h1>ELECTION 2020</h1>
                        <h2>Vote for your candidate, Vote for the future</h2>
                    </header>
                    <section className="tablesection">
                        <p>Check the checkbox beside your candidate and click on the vote button to vote.
                           Remember, you can only vote once. Attempt to vote multiple times in one category may render your vote void.
                        </p>

                        <div className="tablediv">
                            {/* <p>Category One</p> */}
                            <table className="tables">
                                <thead>
                                    <tr>
                                        <td>CANDIDATE ID</td>
                                        <td>CANDIDATE NAME</td>
                                        <td>CANDIDATE PHOTO</td>
                                        <td>CANDIDATE PARTY</td>
                                        <td>CHECK</td>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>01</td>
                                        <td>JOHNSON SMITH</td>
                                        <td><img src="imgs/owusu.jpg" /></td>
                                        <td><img src="imgs/flag.jpg" /></td>
                                        <td>
                                            <label className="tickcont">
                                                <input type="radio" 
                                                       name="cat1tick" 
                                                       value ="I have voted for Smith"
                                                       checked={this.state.selectedOption === "I have voted for Smith"}
                                                       onChange={this.handleOptionChange}/>
                                                <span className="cusrd"></span>
                                            </label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>02</td>
                                        <td>RYAN ROBBINS</td>
                                        <td><img src="imgs/jim.jpg" /></td>
                                        <td><img src="imgs/flag2.jpg" /></td>
                                        <td>
                                            <label className="tickcont">
                                                <input type="radio" 
                                                       name="cat1tick"
                                                       value="I have voted for Ryan"
                                                       checked={this.state.selectedOption === "I have voted for Ryan"} 
                                                       onChange={this.handleOptionChange}/>
                                                <span className="cusrd"></span>
                                            </label>
                                        </td>                                    
                                    </tr>

                                    <tr>
                                        <td>03</td>
                                        <td>BOB ANDREWS </td>
                                        <td><img src="imgs/set.jpg" /></td>
                                        <td><img src="imgs/flag3.jpg" /></td>
                                        <td>
                                            <label className="tickcont">
                                                <input type="radio" 
                                                       name="cat1tick" 
                                                       value="I have voted for Bob"
                                                       checked={this.state.selectedOption === "I have voted for Bob"}                                                                  
                                                       onChange={this.handleOptionChange}/>
                                                <span className="cusrd"></span>
                                            </label>
                                        </td>                                    
                                    </tr>

                                    <tr>
                                        <td colspan="5">
                                            <div className="votebtndiv">
                                                <button type="button"
                                                onClick={this.handleFormSubmit}>VOTE</button>
                                                
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>

                        
                        <div class="tablediv">
                            <p> </p>
                            {/* <table class="tables">
                            <thead>
                                <tr>
                                    <th>CANDIDATE #</th>
                                    <th>CANDIDATE PHOTO</th>
                                    <th>CANDIDATE PARTY</th>
                                    <th>CHECK</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>01</td>
                                    <td><img src="navbg.png" /></td>
                                    <td><img src="navbg.png" /></td>
                                    <td><input type="radio" name="cat1tick"/></td>
                                </tr>

                                <tr>
                                    <td>02</td>
                                    <td><img src="navbg.png" /></td>
                                    <td><img src="navbg.png" /></td>
                                    <td><input type="radio" name="cat1tick"/></td>
                                </tr>

                                <tr>
                                    <td>03</td>
                                    <td><img src="navbg.png" /></td>
                                    <td><img src="navbg.png" /></td>
                                    <td><input type="radio" name="cat1tick"/></td>
                                </tr>

                                <tr>
                                    <td>04</td>
                                    <td><img src="navbg.png" /></td>
                                    <td><img src="navbg.png" /></td>
                                    <td><input type="radio" name="cat1tick"/></td>
                                </tr>

                                <tr>
                                    <td>05</td>
                                    <td><img src="navbg.png" /></td>
                                    <td><img src="navbg.png" /></td>
                                    <td><input type="radio" name="cat1tick"/></td>
                                </tr>

                                <tr>
                                    <td>06</td>
                                    <td><img src="navbg.png" width="100px"/></td>
                                    <td><img src="navbg.png" width="100px"/></td>
                                    <td><input type="radio" name="cat1tick"/>
                                        <span class="checker"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <div class="votebtndiv">
                                        <button type="button">VOTE</button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table> */}

                        </div>



                    </section>
                </section>



                <footer>
                    <p>Copyright &copy; OUR NAME HERE. All Rights Reserved.</p>
                    <div class="socialdiv">
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                    </div>
                </footer>
                {/* Never go outside of this div------------------------------------------------------------------- */}
                </form>
            </div>
        )
    }
}

export default MainPage