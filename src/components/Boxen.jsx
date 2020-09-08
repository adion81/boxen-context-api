import React,{useContext} from 'react';
import BoxenContext from '../contexts/BoxenContext';
import Box from './Box';


const Boxen = props => {
    const {boxen} = useContext(BoxenContext);
    return (
        <div>
            {
                boxen.map((box,i) => {
                    return <Box 
                                color={box}
                            />
                })
            }
        </div>
    );
}

export default Boxen;