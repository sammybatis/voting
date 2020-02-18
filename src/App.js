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
    await this.loadBlockchainData()
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
  this.setState({account:accounts[0]})
  const networkId = await web3.eth.net.getId()
  const networkInfo = Election.networks[networkId]
  
  if(networkInfo) {
  const instance =  new web3.eth.Contract(Election.abi, networkInfo && networkInfo.address)
  this.setState({instance})
}
else {
  window.alert('Wrong network deployed')
}
  
}

constructor(props) {
  super(props)
  this.state = {
    voteCounts: 0,
    candidates: [],
    account: '',
    loading: true,
  }
  
  this.Vote = this.Vote.bind(this)
}



  Vote(candidateId) {
    this.setState({ loading: true})
    this.state.instance.methods.Vote(candidateId).send({from: this.state.account})
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
