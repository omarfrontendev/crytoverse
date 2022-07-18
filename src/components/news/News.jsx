import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import moment from 'react-moment';
import { getNew } from '../../api'
import Card from '../../UI/Card';
import Spinner from '../../UI/Spinner';
import AOS from 'aos';

import 'aos/dist/aos.css';

const News = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    AOS.init();
    setIsLoading(true)
    getNew('/news').then(({ data }) => {
      setNews(data.value)
      setIsLoading(false);
    })
  }, []);

  return (
    <div>
      <h3 className='amount'>News: {news.length}</h3>
      {isLoading ? <Spinner /> 
      : 
      <div className='cards_container'>
        {news.map((n, i) => 
          <Card key={i} class='news'>
            <a href={n.url} target='_blank'>
              <div data-aos="fade-up">
                <div className="header_card flex">
                  <h4>{n.name.length > 60 ? `${n.name.substring(0, 60)}...` : n.name}</h4>
                  <img src={n?.image?.thumbnail?.contentUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHPyOvGiKd0qhvX-iHiRV6VQnSdVlkWwhYw&usqp=CAU'} alt='news'/>
                </div>
                <p>
                  {n?.description?.length > 100 
                  ? `${n.description.substring(0, 100)}...` : n.description}
                </p>
                <div className="card_footer flex">
                  <img src={n?.provider[0]?.image?.thumbnail?.contentUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHPyOvGiKd0qhvX-iHiRV6VQnSdVlkWwhYw&usqp=CAU"} alt="new" />
                  <Moment fromNow ago>{n.datePublished}</Moment>
                </div>
              </div>
            </a>
          </Card>
        )}
      </div>
      }  
    </div>
  )
}

export default News