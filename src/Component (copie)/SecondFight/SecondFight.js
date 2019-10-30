import React , {Fragment} from 'react';
import FightMethod from '../FightMethod/FightMethod';
import {Link} from 'react-router-dom';
import FirstFight from '../FirstFight/FirstFight';


class SecondFight extends React.Component{
  constructor(props){
    super(props)
  
  this.state = {

    life: this.props.life
  }
}
  
  render(){
    return(
      <Fragment>
      <FightMethod/>
      <FirstFight/>
      <Link to ='/thirdFight'>Third Fight</Link>
      

      <p>name{this.state.toto}{this.state.life}</p>
      
      </Fragment>
    )
    }
}

export default SecondFight;