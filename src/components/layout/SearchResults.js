import React, { useState, useEffect, useContext } from 'react';
import SearchResultItem from './SearchResultItem';

import boardContext from '../../context/board/boardContext';

const SearchResults = ({ text, clickedACard }) => {
  const [resultInCardText, setResultInCardText] = useState([])
  const [resultInCardDesc, setResultInCardDesc] = useState([])

  const { boards } = useContext(boardContext);

  useEffect(() => {
    let list1 = [];
    let list2 = [];

    boards.forEach(b => {
      b.lists.forEach(l => {
        l.items.forEach(card => {
          if(card.text.indexOf(text) !== -1) {
            list1.push(card)
          }
          if(card.desc.indexOf(text) !== -1) {
            list2.push(card)
          }
        })
      })
    })

    text !== ''
      ? setResultInCardText(list1)
      : setResultInCardText([])
    text !== ''
      ? setResultInCardDesc(list2)
      : setResultInCardDesc([])

    // eslint-disable-next-line
  }, [text]);

  return (
    <div className='search-result'>
      {
        text === '' && 'what do you want to search for?'
      }
      {
        resultInCardText.length !== 0
          &&  <div className='text-85 mb'>
                result in card texts
              </div>
      }
      {
        resultInCardText.map(card => (
          <SearchResultItem key={card.id} card={card} clickedACard={clickedACard} />
        ))
      }
      {
        resultInCardDesc.length !== 0
          &&  <div className={`text-85 mb ${resultInCardText.length !== 0 && 'mt-1'}`}>
                result in card descriptions
              </div>
      }
      {
        resultInCardDesc.map(card => (
          <SearchResultItem key={card.id} card={card} clickedACard={clickedACard} />
        ))
      }
      {
        text !== ''
          && resultInCardText.length === 0
            && resultInCardDesc.length === 0
              && 'your search had no result'
      }
    </div>
  )
}

export default SearchResults
