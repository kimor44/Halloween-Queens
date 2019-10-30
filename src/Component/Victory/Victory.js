import React from 'react'
import {Link} from 'react-router-dom';

class Victory extends React.Component{
  constructor(){
    super()

  }
  render(){
    return(
      <div>
        <h1>En même temps t'avais mille points de vies .... Bitch</h1>
        <Link to='/'>New Game</Link>
      </div>

    )
  }

}
export default Victory;