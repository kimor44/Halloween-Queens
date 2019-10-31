import React , {Fragment} from 'react';
import FightMethod from '../FightMethod/FightMethod';
import {Link} from 'react-router-dom';


class ThirdFight extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <Fragment>
      <FightMethod/>
      <Link to ='/victory'>Victory</Link>
      </Fragment>
    )
    }
}

export default ThirdFight;