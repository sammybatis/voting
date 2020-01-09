import React from 'react'
import Web3 from 'web3'
import {Table, Header, Image} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
import Election from './contracts/Election.json'
import MainPage from './pages/MainPage.jsx'
import NotFound from './pages/404'
import LoginPage from "./pages/LoginPage.jsx"
import RegistrationPage from "./pages/RegistrationPage.jsx"


import './App.css'


class App extends React.Component {

 async componentDidMount(){
    await this.loadWeb3()
 }

async loadWeb3 (){
  if (window.ethereum){
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  }
  else{
    window.web3 = new Web3(window.web3.providers.HttpProvider('http://127.0.0.1:9545'));
  }

}

async loadBlockchainData() {
  const web3 = window.web3
  const accounts = await web3.eth.getAccounts()
  const networkId = await web3.eth.net.getId()
  const networkInfo = Election.networks[networkId]
  const instance = web3.eth.Contract(Election.abi, networkInfo && networkInfo.address) 
  this.setState({election: instance, web3: web3, account: accounts[0], loading: false})
  this.addEventListener(this)
}

constructor(props) {
  super(props)
  this.state = {
    election: undefined,
    voteCounts: 0,
    candidateId: '',
    candidates: [],
    account: '',
    loading: true,
  }
    this.castBallot = this.castBallot.bind(this)
}

  submitVote = (event) => {
    event.preventDefault();

  }
  castBallot = (event) => {
    this.setState({candidateId: event.target.value});
    this.setState({loading: true})
    this.state.election.methods.castBallot().send({from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({loading: false})
    })
  }


  render = () => {
    return(
      <Router>
          <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route exact path="/404" component={NotFound}/>
              <Route exact path="/loginpage" component={LoginPage}/>
              <Route exact path="/registrationpage" component={RegistrationPage}/>
              <Redirect to="/404"/>
          </Switch>
      </Router>
  )
}

}





export default App;
