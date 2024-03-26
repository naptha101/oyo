import React, { useState } from 'react';
import axios from 'axios';
import Hotel from '../components/Hotel';
import { useRouter } from 'next/router';
import Filters from '../components/Filters';

const Index = ({ hotels }) => {
  const router = useRouter();
  const [range, setRange] = useState(100);
  const [list, setList] = useState([]);

  const handleRange = async () => {
    const res = await axios.get('http://localhost:3000/api/hotel/range?range=' + range);
    setList(res.data.hots);
  };

  return (
    <div>
      <Filters setList={setList}></Filters>
      <input type="range" min={100} max={500} value={range} onChange={(e) => setRange(e.target.value)}></input>
      <button onClick={handleRange}>Set Range:- {range}</button>
      <div className="m-5">
        {list.length === 0 ? (
          hotels.map((e, i) => (
            <Hotel onClick={() => router.push('/' + e._id)} key={i} hotel={e}></Hotel>
          ))
        ) : (
          list.map((e, i) => <Hotel onClick={() => router.push('/' + e._id)} key={i} hotel={e}></Hotel>)
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log(process.env.BASE_URL);
  const res = await axios.get(process.env.BASE_URL + '/api/hotel');
  return {
    props: { hotels: res.data.hotels1 },
  };
}

export default Index;
