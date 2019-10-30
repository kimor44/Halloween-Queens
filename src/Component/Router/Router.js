import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FirstFight from '../FirstFight/FirstFight';
import QueensAward from '../QueensAward/QueensAward';
import SecondFight from '../SecondFight/SecondFight';
import ThirdFight from '../ThirdFight/ThirdFight';
import Victory from '../Victory/Victory';

class Router extends React.Component{
  constructor(){
    super()

  }
  render(){
    return(
      <Switch>
        <Route exact path="/" component={QueensAward}/>
        <Route  path="/firstFight" component={FirstFight}/>
        <Route  path="/secondFight" component={SecondFight}/>
        <Route  path="/thirdFight" component={ThirdFight}/>
        <Route  path="/victory" component={Victory}/>

      </Switch> 
    )
  }
}
export default Router;