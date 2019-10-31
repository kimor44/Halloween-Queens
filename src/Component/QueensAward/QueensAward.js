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
      victory:0,
      winner:false,
      display:true,
      life:15,
      attack:15,
      name:'Robert',
      describ:'',
      pictureDescription:'',
      picture:'https://pbs.twimg.com/profile_images/1039622074342498304/UWbxR4lt.jpg',
      attaqueNameOne:'',
      attaqueStrokeOne:'',
      attaqueStrokeOneSound:'',
      attaqueNameTwo:'',
      attaqueStrokeTwo:'',
      attaqueStrokeTwoSound:'',
      attaqueNameThree:'',
      attaqueStrokeThree:'',
      attaqueStrokeThreeSound:'',
      
      fighterAttaqueNameOne:'regard',
      fighterAttaqueStrokeOne:'',
      fighterAttaqueStrokeOneSound:'',
      fighterAttaqueNameTwo:'yeux',
      fighterAttaqueStrokeTwo:'',
      fighterAttaqueStrokeTwoSound:'',
      fighterAttaqueNameThree:'charme',
      fighterAttaqueStrokeThree:'',
      fighterAttaqueStrokeThreeSound:'',
      fighterSong:'',
      fighterDisplay:true,
      fighterLife:15,
      fighterAttack:15,
      fighterName:'Guy',
      fighterDescrib:'',
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
    console.log('macron')
    this.play(`./assets/sounds/macron.mp3`)
    console.log('macron2')

    let character = this.getRandomInt(19)

    axios.get('http://192.168.184.61:8000/Home/monsterAll')
    .then((response)=>{
      console.log(response.data)
        this.setState({
          life:100,
          name:response.data[character].name,
          describ:response.data[character].description,
          picture:response.data[character].picture,
          pictureDescription:response.data[character].picture_legend,
          attaqueNameOne:response.data[character].attacks[0].name,
          attaqueStrokeOne:response.data[character].attacks[0].limitstroke,
          attaqueStrokeOneSound:response.data[character].attacks[0].sound,
          attaqueNameTwo:response.data[character].attacks[1].name,
          attaqueStrokeTwo:response.data[character].attacks[1].limitstroke,
          attaqueStrokeTwoSound:response.data[character].attacks[1].sound,
          attaqueNameThree:response.data[character].attacks[2].name,
          attaqueStrokeThree:response.data[character].attacks[2].limitstroke,
          attaqueStrokeThreeSound:response.data[character].attacks[2].sound,
          
    });
    console.log(response.data[0].name);
    })
  }


  sleep=(delay)=> {
    let start = new Date().getTime();
    while (new Date().getTime () < start + delay);
   }
   
   

  //initialisation de notre adversaire
  HandleClick=()=>{
    let character = this.getRandomInt(19)
    axios.get('http://192.168.184.61:8000/Home/monsterAll')
    .then((response)=>{
        this.setState({
          fighterLife:100,
          fighterAttack:response.data.attack,
          fighterName:response.data[character].name,
          fighterDescrib:response.data[character].description,
          fighterPictureDescription:response.data[character].picture_legend,
          fighterPicture:response.data[character].picture,
          fighterAttaqueNameOne:response.data[character].attacks[0].name,
          fighterAttaqueStrokeOne:response.data[character].attacks[0].limitstroke,
          fighterAttaqueStrokeOneSound: response.data[character].attacks[0].sound,
          fighterAttaqueNameTwo:response.data[character].attacks[1].name,
          fighterAttaqueStrokeTwo:response.data[character].attacks[1].limitstroke,
          fighterAttaqueStrokeTwoSound: response.data[character].attacks[1].sound,
          fighterAttaqueNameThree:response.data[character].attacks[2].name,
          fighterAttaqueStrokeThree:response.data[character].attacks[2].limitstroke,
          fighterAttaqueStrokeThreeSound:response.data[character].attacks[2].sound,
    })
    })
  }

  //fonctions d'attaques de notre pretendant

  handClickClose=()=>{
    this.setState({winner:!this.state.winner})
  }

  victoryPoint=()=>{
    if (this.state.victory <3){
    this.setState({victory: this.state.victory + 1 })
    console.log(this.state.victory)}
    else{
      this.setState({winner:!this.state.winner})
      console.log (!this.state.winner)
    }
  }

  play=(song)=>{
    let audio = new Audio(song);
      audio.play()
    }

  getRandomInt=(max)=>{
    return(Math.floor(Math.random()*Math.floor(max)))
    }

  strokeOne=()=>{
    
    
    this.play(`./assets/sounds/${this.state.attaqueStrokeOneSound}`)
    let damage = this.getRandomInt(40)
    this.fighterStrokeOne()
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
 
  strokeTwo=()=>{
    
    
    this.play(`./assets/sounds/${this.state.attaqueStrokeTwoSound}`)
    let damage = this.getRandomInt(40)
    this.fighterStrokeTwo()
    if (this.state.life>0 && this.state.fighterLife>0){
    this.setState({fighterLife:this.state.fighterLife - damage})
    this.setState({attack:this.state.attack -1})
    console.log(this.state.life)}
    else{
      console.log('dead')
      this.setState({fighterDisplay:!this.state.fighterDisplay})
      }
    }

  strokeThree=()=>{
    
    this.play(`./assets/sounds/${this.state.attaqueStrokeThreeSound}`)
    let damage = this.getRandomInt(40)
    this.fighterStrokeThree()
    if (this.state.life>0 && this.state.fighterLife>0){
      this.setState({fighterLife:this.state.fighterLife - damage})
      console.log(this.state.life)}
    else{
      console.log('dead')
      this.setState({fighterDisplay:!this.state.fighterDisplay})
    }
  }
    
  newGameBitch=()=>{
    this.setState({fighterDisplay:!this.fighterDisplay})
  }

  //attaque fighter
  fighterPlay=(song)=>{
    let audio = new Audio(song);
      audio.play()
    }

  fighterStrokeOne=()=>{
    
    let damage = this.getRandomInt(10)
    console.log(this.getRandomInt(this.state.life))
    this.play(`./assets/sounds/${this.state.fighterAttaqueStrokeOneSound}`)
    if (this.state.life>0){
    this.setState({life:this.state.life - damage})
    this.setState({attack:this.state.attack -1})
    console.log(this.state.life)}
    else{
      console.log('dead')
      this.setState({display:!this.state.display})
      }
    }

  fighterStrokeTwo=()=>{
    
    let damage = this.getRandomInt(10)
    console.log(this.getRandomInt(this.state.life))
    this.play(`./assets/sounds/${this.state.fighterAttaqueStrokeTwoSound}`)

    if (this.state.life>0){
    this.setState({life:this.state.life - damage})
    console.log(this.state.life)}
    else{
      console.log('dead')
      this.setState({display:!this.state.display})

    }
  }

  fighterStrokeThree=()=>{
    
    let damage = this.getRandomInt(10)
    console.log(this.getRandomInt(this.state.life))
    this.play(`./assets/sounds/${this.state.fighterAttaqueStrokeThreeSound}`)

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
      <div className="containerCarte">
        {this.state.display &&
        <div className='queenPretender' >
          <img className="imageFighter" src={this.state.picture} alt={this.state.pictureDescription}/>
            <div className='lowDiv'>
              <button onClick={this.strokeOne}>{this.state.attaqueNameOne}</button>
              <button onClick={this.strokeTwo}>{this.state.attaqueNameTwo}</button>
              <button onClick={this.strokeThree}>{this.state.attaqueNameThree}</button>

              <h2>{this.state.name}</h2>
              <p className='descriptioncss'>{this.state.describ}</p>
                <div className='lifeConteneur'>
                  <div className="restLife" style={{width:this.state.life+'%'}}>
                  </div>
                </div>
              <p>{this.state.life} points de vie</p>
            </div>
        </div>}
        {/* <button onClick={this.php}>php</button> */}

        {!this.state.display && <button>You Lose Loooooooser ... New game ?</button>}
       
        <button onClick={this.HandleClick}>nouveau concurrent</button>

        {this.state.fighterDisplay && 
        <div className="fighter" style={this.state.fighterDisplay?{display:'block'}:{display:'none'}}>
          <img className="imageFighter" src={this.state.fighterPicture} alt='pretty'/>
          <div className='lowDivFighter'>
            <button onClick={this.fighterStrokeOne}>{this.state.fighterAttaqueNameOne}</button>
            <button onClick={this.fighterStrokeTwo}>{this.state.fighterAttaqueNameTwo}</button>
            <button onClick={this.fighterStrokeThree}>{this.state.fighterAttaqueNameThree}</button>
            <h2>{this.state.fighterName}</h2>
            <p className="descriptioncss">{this.state.fighterDescrib}</p>
            <div className='lifeConteneur'>
              <div className="restLifeFighter" style={{width:this.state.fighterLife+'%'}}>
              </div>
            </div>
              <p>{this.state.fighterLife} points de vie</p>
              <p>{this.state.fightername}</p>
                
          </div>
        </div>}
        {!this.state.fighterDisplay && <button onClick={()=>{this.newGameBitch(); this.victoryPoint()}} >You win ! New game ?</button>}

        {this.state.winner && <div className='winnerDiv'><h2>WINNER !!!!!!!!!!!!!!!!! bitch</h2><button onClick={this.handClickClose}>Again</button></div>}

      </div>
    )
}
}
export default QueensAward;