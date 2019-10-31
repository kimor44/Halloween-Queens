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
      display:true,
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
    
      fighterDisplay:true,
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
    let damage = this.getRandomInt(this.state.attack)
    console.log(damage)
    if (this.state.life>0 && this.state.fighterLife>0){
    this.setState({fighterLife:this.state.fighterLife - damage})
      if(this.state.fighterLife<=0){
        this.setState({fighterDisplay:!this.state.fighterDisplay})
      }
    console.log(this.state.life)}
    else{
      console.log('dead')
      this.setState({fighterDisplay:!this.state.fighterDisplay})

    }
  }

  php=()=>{
    this.play('./assets/sounds/phpRespect.mp3')
  }

  kick=()=>{
    this.play('./assets/sounds/coupMachoire.wav')
    let damage = this.getRandomInt(this.state.attack)

    if (this.state.life>0 && this.state.fighterLife>0){
    this.setState({fighterLife:this.state.fighterLife - damage})
    this.setState({attack:this.state.attack -1})
    console.log(this.state.life)}
    else{
      console.log('dead')
      this.setState({fighterDisplay:!this.state.fighterDisplay})

      }
    }

  blowSack=()=>{
    this.play('./assets/sounds/bagarre.mp3')
    let damage = this.getRandomInt(this.state.attack)

    if (this.state.life>0 && this.state.fighterLife>0){
      this.setState({fighterLife:this.state.fighterLife - damage})
      console.log(this.state.life)}
    else{
      console.log('dead')
      this.setState({fighterDisplay:!this.state.fighterDisplay})
    }
  }
    


  //attaque fighter
  fighterPlay=(song)=>{
    let audio = new Audio(song);
      audio.play()
    }

  fighterKick=()=>{
    this.getRandomInt(this.state.life)
    let damage = this.getRandomInt(this.state.attack)

    console.log(this.getRandomInt(this.state.life))
    this.play('./assets/sounds/coupMachoire.wav')
    if (this.state.life>0){
    this.setState({life:this.state.life - damage})
    this.setState({attack:this.state.attack -1})
    console.log(this.state.life)}
    else{
      console.log('dead')
      this.setState({display:!this.state.display})
      }
    }

  fighterBlowSack=()=>{
    this.play('./assets/sounds/bagarre.mp3')
    let damage = this.getRandomInt(this.state.attack)

    if (this.state.life>0){
    this.setState({life:this.state.life - damage})
    console.log(this.state.life)}
    else{
      console.log('dead')
      this.setState({display:!this.state.display})

    }
  }

  fighterCry=()=>{
    this.play('./assets/sounds/cri.wav')
    let damage = this.getRandomInt(this.state.attack)

    if (this.state.life>0){
    this.setState({life:this.state.life - damage})
    console.log(this.state.life)}
    else{
      this.setState({display:!this.state.display})
      console.log('dead2')
    }
  }

  render(){
    return(
      <div>
        {this.state.display &&
        <div className='queenPretender' >
          <img className="imageFighter" src={this.state.picture} alt={this.state.pictureDescription}/>
            <div className='lowDiv'>
              <button onClick={this.kick}>kick {this.state.fighterattack}</button>
              <button onClick={this.blowSack}>Coup de sac</button>
              <button onClick={this.cry}>cri</button>

              <h2>{this.state.name}</h2>
                <div className='lifeConteneur'>
                  <div className="restLife" style={{width:this.state.life*(100/15)+'%'}}>
                  </div>
                </div>
              <p>{this.state.life} points de vie</p>
            </div>
          </div>}
        <button onClick={this.php}>php</button>

        {!this.state.display && <button>You Lose Loooooooser ... New game ?</button>}

        {this.state.fighterDisplay && 
        <div className="fighter" style={this.state.fighterDisplay?{display:'block'}:{display:'none'}}>
          <img className="imageFighter" src={this.state.fighterPicture} alt='pretty'/>
          <div className='lowDivFighter'>
            <button onClick={this.fighterKick}>kick {this.state.fighterattack}</button>
            <button onClick={this.fighterBlowSack}>this.fighter</button>
            <button onClick={this.fighterCry}>Cry</button>
            <h2>{this.state.fighterName}</h2>
            <div className="lifeConteneurFighter">
              <div className="restLifeFighter" style={{width:this.state.fighterLife*(100/15)+'%'}}>
              </div>
            </div>
              <p>{this.state.fighterLife} points de vie</p>
              <p>{this.state.fightername}</p>
                
          </div>
        </div>}
        {!this.state.fighterDisplay && <button>You win ! New game ?</button>}


      

      </div>
      
      
    )
}
}
export default QueensAward;