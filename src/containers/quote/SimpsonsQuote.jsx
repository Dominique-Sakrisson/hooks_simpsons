import React, {useState} from 'react'
import {getQuotes} from '../../services/simpsonsApi'
import Quote from '../../components/app/quote/Quote'
import Load from '../../components/app/quote/Load'

const SimpsonsQuote = () => {
    const [character, setCharacter] = useState('');
    const [text, setText] = useState('');
    const [img, setImg] = useState('');

    const handleClick = async() => {
        const quote = await getQuotes();
        setCharacter(quote.character);
        setText(quote.text);
        setImg(quote.img);
    };

    return(
        <>
            <Load onClick={handleClick}/>
            <Quote character={character} text={text} img={img}/>
        </>
    )
}

export default SimpsonsQuote;
