import React, { Fragment, useState, useEffect, useContext } from 'react';
import HomeMainItem from './HomeMainItem';

import BoardContext from '../../../context/board/boardContext';

const Starred = () => {
  const [list, setList] = useState([])

  const boardContext = useContext(BoardContext);

  const { boards } = boardContext;

  useEffect(() => {
    const l = boards.filter(b => b.starred);
    setList(l)
    // eslint-disable-next-line
  }, [boards])

  return (
    <Fragment>
      { list.length !== 0
        &&  <div className='card border-top-0 border-right-0 border-left-0 pb-2'>
              <i className='fa fa-star mr-1'></i>
              favorite borads
              <div>
                { list.map(b => (
                    <HomeMainItem key={b.id} board={b} />
                  ))
                }
              </div>
            </div>
      }
    </Fragment>
  )
}

export default Starred
