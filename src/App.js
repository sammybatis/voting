import React from 'react'
import Web3 from 'web3'
import {Table, Header, Image} from 'semantic-ui-react'
//import DisplayAcct from './components/DisplayAcct'
import Election from './contracts/Election.json'
//import TableData from './components/TableData'


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
    candidates: [],
    account: '',
    loading: true
  }
}

  render() {
    return (
        <div>
          <h1 className = "App-Intro">Welcome to Draxma Blockchain Voting System</h1>
          <Table basic='very' celled collapsing className="cantab">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Candidate's #</Table.HeaderCell>
          <Table.HeaderCell>Candidate's Name</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
            <Header.Content>Lena</Header.Content>
            </Header>
        </Table.Cell>
      </Table.Row>
      </Table.Body>
      </Table>
        </div>
        
      
    )
    }     
      
}





export default App;
