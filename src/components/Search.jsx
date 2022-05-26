import { useContext, useState, useEffect } from 'react';
import AppContext from '@context/AppContext';
import { searchLocation } from '@services/api/weather';
import Image from 'next/image';
import searchIcon from '@assets/icons/search.svg';
import styles from '@styles/Search.module.scss';

export default function Search() {
  const { setLocation } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (!inputValue) return;
    let timer = setTimeout(async () => {
      searchLocation(inputValue).then((res) => {
        setSearchData(res);
      });
    }, 600);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const changeLocation = (item) => {
    console.log(item);
    setLocation(item.url);
    setSearchData([]);
    setInputValue('');
  };

  return (
    <div className={styles['container']}>
      <figure>
        <Image src={searchIcon} alt="search" />
      </figure>
      <input type="text" placeholder="Change location..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <ul>
        {searchData.map((item) => (
          <li key={item?.id}>
            <button onClick={() => changeLocation(item)}>
              {item?.name}, {item?.region}, {item?.country}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
