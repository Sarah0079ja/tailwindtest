import React from 'react';
import { cards } from './cards';

const CardArray = () => {
  const [people, setPeople] = React.useState(cards);
  const [noBirthdays, setnoBirthdays] = React.useState(false);

  const clearAll = () => {
    setPeople([]);
    setnoBirthdays(true);
  };

  return (
    <>
      {noBirthdays ? (
        <h1>0 Birthdays Today</h1>
      ) : (
        <h1>50 Birthdays Today</h1>
      )}
      {people.map((person) => {
        const { id, img1, name, age } = person;
        return (
          <div key={id}>
            <div className='whale1'>
              <div>
                <img src={img1} alt="" className='whale' />
              </div>
              <div>
                <h3>{name}</h3>
                <h5>{age}</h5>
              </div>
            </div>
          </div>
        )
      })}
      {people.length === 0 && !noBirthdays}
      <button className='btn' onClick={clearAll}>Clear All</button>
    </>
  );
};

export default CardArray;
