import { DSAKeyPairKeyObjectOptions } from 'crypto'
import { JSXElementConstructor, ReactElement } from 'react'
import { JsxElement } from 'typescript'
import BugIcon from './../../assets/icons/BugIcon.jpg'
import  DarkIcon from './../../assets/icons/DarkIcon.jpg'
import DragonIcon  from './../../assets/icons/DragonIcon.jpg'
import ElectricIcon  from './../../assets/icons/ElectricIcon.jpg'
import FightingIcon  from './../../assets/icons/FightingIcon.jpg'
import FireIcon  from './../../assets/icons/FireIcon.jpg'
import FlyingIcon  from './../../assets/icons/FlyingIcon.jpg'
import GhostIcon  from './../../assets/icons/GhostIcon.jpg'
import GrassIcon  from './../../assets/icons/GrassIcon.jpg'
import GroundIcon  from './../../assets/icons/GroundIcon.jpg'
import IceIcon  from './../../assets/icons/IceIcon.jpg'
import PhysicIcon  from './../../assets/icons/PhysicIcon.jpg'
import PoisonIcon  from './../../assets/icons/PoisonIcon.jpg'
import RockIcon  from './../../assets/icons/RockIcon.jpg'
import SteelIcon  from './../../assets/icons/SteelIcon.jpg'
import WatterIcon  from './../../assets/icons/WatterIcon.jpg'
import NormalIcon  from './../../assets/icons/NormalIcon.jpg'



export const typeNameToIconMapper= (typeName: string) =>{
   const pokemonTypes: {[key: string]: any} = {
    "bug": BugIcon,
    "dark": DarkIcon,
    "dragon": DragonIcon,
    "electric": ElectricIcon,
    "fighting": FightingIcon,
    "fire": FireIcon,
    "flying": FlyingIcon,
    "ghost": GhostIcon,
    "grass": GrassIcon,
    "ground": GroundIcon,
    "ice": IceIcon,
    "physic": PhysicIcon,
    "poison": PoisonIcon,
    "rock": RockIcon,
    "steel": SteelIcon,
    "water": WatterIcon,
    "normal": NormalIcon
   }

   return <img className="pokemondetail__container__figure__icon" src={pokemonTypes[typeName]}/>
}