import React , {Fragment} from 'react';
import './QueensAward.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import FirstFight from '../FirstFight/FirstFight';
import FightMethod from '../FightMethod/FightMethod';

class QueensAward extends React.Component{
  constructor(){
    super()
    this.state={
      life:15,
      attack:35,
      name:'Robert',
      pictureDescription:'',
      picture:'https://pbs.twimg.com/profile_images/1039622074342498304/UWbxR4lt.jpg',
      attaque:[{nom:'leve de coude',
              value:0},
              {nom:'slip sur la tete',
              value:0},
              {nom:'haleine fétide',
              value:0}],
    
      fighterlife:5,
      fighterattack:35,
      fightername:'Guy',
      fighterpictureDescription:'',
      fighterpicture:'https://pbs.twimg.com/profile_images/1039622074342498304/UWbxR4lt.jpg',
      fighterattaque:[{nom:'leve de coude',
              value:0},
              {nom:'slip sur la tete',
              value:0},
              {nom:'haleine fétide',
              value:0}]
    }
  }
  
  componentDidMount=()=>{
    
    console.log(this.state.attaque[0].nom)

    axios.get('url')
    .then((response)=>{
        this.setState({
          fighterlife:response.data.life,
          fighterattack:response.data.attack,
          fightername:response.data.name,
          fighterpictureDescription:response.data.pictureDescription,
          fighterpicture:response.data.picture,
          fighterattaque:response.data.attaque[0].nom,
          fighterattaque:response.data.attaque[0].value,
          fighterattaque:response.data.attaque[1].nom,
          fighterattaque:response.data.attaque[1].value,
          fighterattaque:response.data.attaque[2].nom,
          fighterattaque:response.data.attaque[2].value
    })
    })
  }

  HandleClick=()=>{
    console.log('handleClick')

    axios.get('url')
    .then((response)=>{
        this.setState({
          life:response.data.life,
          attack:response.data.attack,
          name:response.data.name,
          pictureDescription:response.data.pictureDescription,
          picture:response.data.picture,
          attaque:response.data.attaque[0].nom,
          attaque:response.data.attaque[0].value,
          attaque:response.data.attaque[1].nom,
          attaque:response.data.attaque[1].value,
          attaque:response.data.attaque[2].nom,
          attaque:response.data.attaque[2].value
    })
    })
  }




  play=(song)=>{
    let audio = new Audio(song);
      audio.play()
    }

  cry=()=>{
    this.play('./assets/sounds/cri.wav')
    if (this.state.life>0){
    this.setState({life:this.state.life - 1})
    console.log(this.state.life)}
    else{
      console.log('dead')
    }
  }
    

  render(){
    return(
      <Fragment>
        {/* QueensAward */}
        {/* <Link to ='/firstFight'>First Fight</Link> */}
        <div className='queenPretender'>
        <p>{this.state.name}</p>
        <div className='lifeConteneur'><div className="restLife" style={{width:this.state.life*(100/15)+'%'}}>
        </div></div><p>{this.state.life} points de vie</p>
        <img src={this.state.picture} alt={this.state.pictureDescription}/>
        <button>{this.state.attaque[0].nom} {this.state.attaque[0].value}</button>
        <button>{this.state.attaque[1].nom} {this.state.attaque[1].value}</button>
        <button>{this.state.attaque[2].nom} {this.state.attaque[2].value}</button>
        <button onClick={this.cry}>cri</button>
        </div>

        <FightMethod fighterlife ={this.state.fighterlife} />


      </Fragment>
      
      
    )
}
}
export default QueensAward;