import React, { useRef, useState, useEffect, Component } from 'react'
import { Link } from "react-router-dom"

class MainPage extends Component {



    render = () => {
        return (
            <div class="bodydiv">
               <form onSubmit = {this.submitVote}>
               
                <header class="navheader">
                    <div class="navdiv">
                        <nav>
                            <input type="checkbox" id="check" />
                            <label for="check" class="checkbtn">
                                <span class="fasfa-bars"></span>
                            </label>
                            <label class="logo">Our Name Here</label>
                            <ul>
                                <li><Link to="/" class="active">Vote</Link></li>
                                <li><Link to="/registrationpage" >Register</Link></li>
                                <li><Link to="/loginPage">Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <div class="formdivtop"></div>



                <section className="workarea">
                    <section class="Imageslider">

                    </section>
                    <header class="titleheader">
                        <h1>ELECTION 2020</h1>
                        <h2>Vote for your candidate, Vote for the future</h2>
                    </header>
                    <section class="tablesection">
                        <p>List of candidates are grouped into categories below.
                           Check the checkbox beside your candidate and click on the vote button to vote.
                           Remember, you can only vote once. Attempt to vote multiple times in one category may render your vote void.
                        </p>

                        <div class="tablediv">
                            {/* <p>Category One</p> */}
                            <table class="tables">
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
                                        <td>SAMUEL OWUSU</td>
                                        <td><img src="imgs/owusu.jpg" /></td>
                                        <td><img src="imgs/flag.jpg" /></td>
                                        <td>
                                            <label class="tickcont">
                                                <input type="radio" name="cat1tick" />
                                                <span class="cusrd"></span>
                                            </label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>02</td>
                                        <td>KELVIN GYIMAH</td>
                                        <td><img src="imgs/jim.jpg" /></td>
                                        <td><img src="imgs/flag2.jpg" /></td>
                                        <td>
                                            <label class="tickcont">
                                                <input type="radio" name="cat1tick" />
                                                <span class="cusrd"></span>
                                            </label>
                                        </td>                                    
                                    </tr>

                                    <tr>
                                        <td>03</td>
                                        <td>NOTHING YET</td>
                                        <td><img src="imgs/set.jpg" /></td>
                                        <td><img src="imgs/flag3.jpg" /></td>
                                        <td>
                                            <label class="tickcont">
                                                <input type="radio" name="cat1tick" />
                                                <span class="cusrd"></span>
                                            </label>
                                        </td>                                    
                                    </tr>

                                    <tr>
                                        <td colspan="5">
                                            <div class="votebtndiv">
                                                <button type="button"
                                                onClick={this.castBallot}>VOTE</button>
                                                
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