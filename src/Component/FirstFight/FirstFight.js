import React,{Fragment} from 'react';
import FightMethod from '../FightMethod/FightMethod';
import {Link} from 'react-router-dom';



class FirstFight extends React.Component{
  constructor(props){
    super(props)
    this.state={
    life: this.props.life,
    toto:'toto'
    }

  }
  render(){
    return(
      <Fragment>
      <FightMethod life={this.state.life}/>
      <Link to ='/secondFight'>Second Fight</Link>

{/* robert */}
      <p>name{this.state.toto}{this.state.life}</p>

      </Fragment>
    )
  }
}

export default FirstFight;