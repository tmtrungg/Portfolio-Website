import React from 'react'
import './experience.css'
import SkillColumn from './SkillColumn'
import {FaNodeJs} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiFirebase} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'
import AAA from '../../assets/skill_icon/csharp.png'
import {ImDatabase} from 'react-icons/im'
import {SiArduino} from 'react-icons/si'
import PARTICLE from '../../assets/skill_icon/particle.png'
import {SiScikitlearn} from 'react-icons/si'
import {SiPandas} from 'react-icons/si'
import {SiSolidity} from 'react-icons/si'
import TRUFFLE from '../../assets/skill_icon/truffle.png'
import GANACHE from '../../assets/skill_icon/ganache.png'
import {SiWeb3Dotjs} from 'react-icons/si'
import REMIX from '../../assets/skill_icon/remix.png'
// import {FaPython} from 'react-icons/fa'
// import {FaPython} from 'react-icons/fa'



const Experience = () => {
  const data = [ 
    {
      title: 'Web development',
      item: [
        {skill: 'NodeJS', color: 'rgb(66,68,60)',bg:'rgba(147,185,81)',color2:'rgb(66,68,60)',icon: <FaNodeJs style={{margin:'auto 0',fontSize:'50px'}}/>},
        {skill: 'ReactJS', color: 'rgb(140,202,231)',bg:'rgb(12,7,38)',color2:'rgb(140,202,231)',icon: <FaReact style={{margin:'auto 0',fontSize:'50px'}}/>},
        {skill: 'Javascript', color: 'black',bg:'rgb(232,212,76)',color2:'black',icon: <TbBrandJavascript style={{margin:'auto 0',fontSize:'50px'}}/>},
        {skill: 'HTML', color: 'black',bg:'rgb(199,106,67)',color2:'black',icon: <AiFillHtml5 style={{margin:'auto 0',fontSize:'50px'}}/>},
        {skill: 'CSS', color: 'white',bg:'rgb(42,77,209)',color2:'white',icon: <DiCss3 style={{margin:'auto 0',fontSize:'50px'}}/>},
        {skill: 'Firebase', color: 'rgb(235,194,77)',bg:'white',color2:'rgb(66,68,60)',icon: <SiFirebase style={{margin:'auto 0',fontSize:'50px'}}/>}]
      // ['NodeJS','ReactJS','Javascript','HTML','CSS', 'Firebase']
    },
    {
      title: 'General Programming Skill',
      item: [
        {skill: 'Python', color: 'rgb(236,271,90)',bg:'rgb(16,27,44)',color2:'rgb(236,271,90)',icon: <FaPython style={{margin:'auto 0',fontSize:'50px'}}/>},
        {skill: 'C#', color: 'rgb(51,18,138)',bg:'rgb(40,12,107)',color2:'white',icon: <img src={AAA} alt=""  style={{margin:'auto 0',width:'50px',height:'50px'}}/>},
        {skill: 'SQL', color: 'rgb(76,143,196)',bg:'black',color2:'rgb(76,143,196)',icon: <ImDatabase style={{margin:'auto 0',fontSize:'50px'}}/>},
        {skill: 'Arduino IDE', color: 'white',bg:'rgb(62,141,146)',color2:'white',icon: <SiArduino style={{margin:'auto 0',fontSize:'50px'}}/>},
        {skill: 'Particle IOT', color: 'white',bg:'white',color2:'black',icon: <img src={PARTICLE} alt=""  style={{margin:'auto 0',width:'50px',height:'50px'}}/>},
        {skill: 'Scikit-Learn', color: 'black',bg:'rgb(230,146,53)',color2:'black',icon: <SiScikitlearn style={{margin:'auto 0',fontSize:'50px'}}/>},
        {skill: 'Pandas', color: 'rgb(15,11,76)',bg:'rgb(100,190,129)',color2:'rgb(15,11,76)',icon: <SiPandas style={{margin:'auto 0',fontSize:'50px'}}/>}]
      // ['Python','C#','SQL','Arduino IDE','Particle IOT','Scikit-Learn','Pandas']
    },
    {
      title: 'Blockchain/Web3',
      item: [
        {skill: 'Solidity', color: 'rgb(53,53,53)',bg:'white',color2:'black',icon: <SiSolidity style={{margin:'auto 0',fontSize:'50px'}}/>},
        {skill: 'Truffle', color: 'rgb(51,18,138)',bg:'rgb(47,37,40)',color2:'white',icon: <img src={TRUFFLE} alt=""  style={{margin:'auto 0',width:'50px',height:'50px'}}/>},
        {skill: 'Ganache', color: 'rgb(76,143,196)',bg:'rgb(238, 144, 100)',color2:'rgb(85,67,73)',icon: <img src={GANACHE} alt=""  style={{margin:'auto 0',width:'50px',height:'50px'}}/>},
        {skill: 'Web3JS', color: 'rgb(213,105,61)',bg:'rgb(41,45,50)',color2:'white',icon: <SiWeb3Dotjs style={{margin:'auto 0',fontSize:'50px'}}/>},
        {skill: 'Ethereum Remix', color: 'rgb(15,11,76)',bg:'rgb(34,35,51)',color2:'rgb(90,92,114)',icon: <img src={REMIX} alt="" style={{margin:'auto 0',width:'50px',height:'50px'}}/>}]
      // ['Solidity', 'Truffle', 'Ganache', 'Web3js', 'Remix']
    }
  ]
  return (
    <section id='experience' className='experience'>
      <h4>Find out</h4>
      <h2>My Skillset</h2>

      <div className="experience__container">
      {data.map(({ title, item}) => (
        <SkillColumn
          title={title}
          item = {item}
        />
      ))}
      </div>
    </section>
  )
}

export default Experience