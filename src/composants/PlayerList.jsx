import React from 'react';
import joueurs from '../players'
import Player from './Player';

const PlayerList = () => {
    return (
        <div className='row'>
            {
                joueurs.map( el => (
                <Player
                     nom={el.nom} 
                     club={el.club} 
                     nat={el.nationalité} 
                     num={el.dossard} 
                     age={el.age} 
                     img={el.img} 
                     key={el.dossard}
                />))
            }
        </div>
    );
}

export default PlayerList;