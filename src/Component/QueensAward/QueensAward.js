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
      display:'block',
      life:15,
      attack:15,
      name:'Robert',
      pictureDescription:'',
      picture:'https://pbs.twimg.com/profile_images/1039622074342498304/UWbxR4lt.jpg',
      attaque:[{nom:'leve de coude',
              value:0},
              {nom:'slip sur la tete',
              value:0},
              {nom:'haleine fétide',
              value:0}],
    
      fighterDisplay:'block',
      fighterLife:15,
      fighterAttack:15,
      fighterName:'Guy',
      fighterPictureDescription:'',
      fighterPicture:'https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fmultiupload_du_22_juin_2017.2Fgeorge-clooney.2F4102307-1-fre-FR.2Fgeorge-clooney.2Ejpg/480x480/quality/80/george-clooney-vend-sa-marque-de-tequila-et-empoche-un-gros-cheque.jpg',
      fighterAttaque:[{nom:'leve de coude',
              value:0},
              {nom:'slip sur la tete',
              value:0},
              {nom:'haleine fétide',
              value:0}]
    }
  }
  

  //initialisation de notre pretendant au titre
  componentDidMount=()=>{
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

  //initialisation de notre adversaire
  HandleClick=()=>{
    axios.get('url')
    .then((response)=>{
        this.setState({
          fighterLife:response.data.life,
          fighterAttack:response.data.attack,
          fighterName:response.data.name,
          fighterPictureDescription:response.data.pictureDescription,
          fighterPicture:response.data.picture,
          fighterAttaque:response.data.attaque[0].nom,
          fighterAttaque:response.data.attaque[0].value,
          fighterAttaque:response.data.attaque[1].nom,
          fighterAttaque:response.data.attaque[1].value,
          fighterAttaque:response.data.attaque[2].nom,
          fighterAttaque:response.data.attaque[2].value
    })
    })
  }

  //fonctions d'attaques de notre pretendant
  play=(song)=>{
    let audio = new Audio(song);
      audio.play()
    }

  getRandomInt=(max)=>{
    return(Math.floor(Math.random()*Math.floor(max)))
    }

  cry=()=>{
    this.play('./assets/sounds/cri.wav')
    if (this.state.life>0){
    
    this.setState({fighterLife:this.state.fighterLife - this.getRandomInt(this.state.attack)})
    console.log(this.state.life)}
    else{
      console.log('dead')
    }
  }

  kick=()=>{
    this.play('./assets/sounds/coupMachoire.wav')
    if (this.state.life>0){
    this.setState({fighterLife:this.state.fighterLife - 1})
    this.setState({attack:this.state.attack -1})
    console.log(this.state.life)}
    else{
      console.log('dead')
      }
    }

  blowSack=()=>{
    this.play('./assets/sounds/bagarre.mp3')
    if (this.state.life>0 && this.state.fighterLife>0){
      this.setState({fighterLife:this.state.fighterLife - 1})
      console.log(this.state.life)}
    else{
      console.log('dead')
      this.setState({fighterDisplay:'none'})
    }
  }
    


  //attaque fighter
  fighterPlay=(song)=>{
    let audio = new Audio(song);
      audio.play()
    }

  fighterKick=()=>{
    this.getRandomInt(this.state.life)
    console.log(this.getRandomInt(this.state.life))
    this.play('./assets/sounds/coupMachoire.wav')
    if (this.state.life>0){
    this.setState({life:this.state.life - 1})
    this.setState({attack:this.state.attack -1})
    console.log(this.state.life)}
    else{
      console.log('dead')
      }
    }

  fighterBlowSack=()=>{
    this.play('./assets/sounds/bagarre.mp3')
    if (this.state.life>0){
    this.setState({life:this.state.life - 1})
    console.log(this.state.life)}
    else{
      console.log('dead')

    }
  }

  fighterCry=()=>{
    this.play('./assets/sounds/cri.wav')
    if (this.state.life>0){
    this.setState({life:this.state.life - 1})
    console.log(this.state.life)}
    else{
      this.setState({display:'none'})
      console.log('dead2')
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
        <button onClick={this.kick}>kick {this.state.fighterattack}</button>
        <button onClick={this.blowSack}>Coup de sac</button>
        <button onClick={this.cry}>cri</button>
        </div>

        {/* <FightMethod fighterlife ={this.state.fighterlife} /> */}

      {/* fighter */}
        <div className="fighter" style={{display:this.state.fighterDisplay}}>
        <h2>Fighter</h2>
        <div className="lifeConteneurFighter"><div className="restLifeFighter" style={{width:this.state.fighterLife*(100/15)+'%'}}></div></div>
        <p>{this.state.fighterlife}</p>
        <p>{this.state.fightername}</p>
        <img className="imageFighter" src={this.state.fighterPicture} alt='pretty'/>
        <button onClick={this.fighterKick}>kick {this.state.fighterattack}</button>
        <button onClick={this.fighterBlowSack}>Blow Sack</button>
        <button onClick={this.fighterCry}>Cry</button>

      </div>

      </Fragment>
      
      
    )
}
}
export default QueensAward;