import React,{ useState, useRef, useEffect, useCallback } from 'react'
import Axios from 'axios'
import useFetch from "../hooks/useFetch";
import './Cards.css'
const Cards =() => {
  const [query, setQuery] = useState(8);
  const [page, setPage] = useState(0);
  const { loading, error, list } = useFetch(query, page);
  const loader = useRef(null);
  const handleObserver = useCallback((entries) => {
    console.log("handleObserver called....")
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
      setQuery(prev => prev + 8);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);
  console.log(">>>>", list)

    return (
         <div >
     {!loading && list && list.map((item) => (
      <div className="main">
      <ul className="card">
      <li className="cards_item">
      <div className="card">
        <div className="card_image">
            <img key={item.article_id} src={item.feature_img} alt="Avatar"/>
        </div>
      <div className="card_content">
            <h5 className="card_title" key={item.article_id}><b>{item.category}</b></h5>
            <p className="card_text" key={item.article_id}>{item.title}</p>
            <h8 className="card_name" key={item.article_id}>{item.auth_display.display_name}</h8>
      </div>
      <small>{item.pub_date}|{item.readtime}</small>
      </div>
      </li>
      </ul>
      </div>
      ))}
       {error && <p>Error!</p>}
      {loading && <p>Loading...</p>}
       <div ref={loader} />
      </div>
    )
}
     
   

export default Cards