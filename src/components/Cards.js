import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import './Cards.css'
const Cards =() => {
    const [data, setData] = useState([]); 
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        Axios.get('https://www.scoopwhoop.com/api/v4/read/all/?offset=0&limit=8')
        .then(res => {
          setData(res.data)
          console.log(res.data)
        })
        .catch(error=>{
            setisLoading(false)
          console.log(error)
        })
      }, [])
     
    return(
     <div >
     {data.data && data.data.map((item) => (
      <div class="main">
      <ul class="card">
      <li class="cards_item">
      <div class="card">
        <div class="card_image">
        <img key={item.article_id} src={item.feature_img} alt="Avatar"/>
        </div>
      <div class="card_content">
            <h5 class="card_title" key={item.article_id}><b>{item.category}</b></h5>
            <p class="card_text" key={item.article_id}>{item.title}</p>
            <h8 class="card_name" key={item.article_id}>{item.auth_display.display_name}</h8>
          </div>
          <small>{item.pub_date}|{item.readtime}</small>
          </div>
          </li>
          </ul>
          </div>
      ))}
      </div>
    )
}
     
   

export default Cards