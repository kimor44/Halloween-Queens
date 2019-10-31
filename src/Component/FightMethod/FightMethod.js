import React from 'react';
import './FightMethod.css'
import { blockStatement } from '@babel/types';

class FightMethod extends React.Component{
    constructor(props){
        super(props)
        this.state={
          display:'block',
          life:this.props.fighterlife,
          attack:35,
          name:'George',
          picture:'https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fmultiupload_du_22_juin_2017.2Fgeorge-clooney.2F4102307-1-fre-FR.2Fgeorge-clooney.2Ejpg/480x480/quality/80/george-clooney-vend-sa-marque-de-tequila-et-empoche-un-gros-cheque.jpg',
          attaque:[{nom:'',
                  value:0},
                  {nom:'',
                  value:0},
                  {nom:'',
                  value:0}]

        }
    }

  play=(song)=>{
    let audio = new Audio(song);
      audio.play()
    }

  kick=()=>{
    this.play('./assets/sounds/coupMachoire.wav')
    if (this.state.life>0){
    this.setState({life:this.state.life - 1})
    this.setState({attack:this.state.attack -1})
    console.log(this.state.life)}
    else{
      console.log('dead')
      }
    }

  blowSack=()=>{
    this.play('./assets/sounds/bagarre.mp3')
    if (this.state.life>0){
    this.setState({life:this.state.life - 1})
    console.log(this.state.life)}
    else{
      console.log('dead')

    }
  }

  cry=()=>{
    this.play('./assets/sounds/cry.mp3')
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
      <div className="fighter" style={{display:this.state.display}}>
        <h2>testFight</h2>
        <div className="lifeConteneurFighter"><div className="restLifeFighter" style={{width:this.state.life*(100/15)+'%'}}></div></div>
        <p>{this.state.life}</p>
        <p>{this.state.name}</p>
        <img className="imageFighter" src={this.state.picture} alt='pretty'/>
        <button onClick={this.kick}>kick {this.state.attack}</button>
        <button onClick={this.blowSack}>Coup de sac</button>
        <button onClick={this.cry}>cri</button>

      </div>
      
    )
  }
}
export default FightMethod;