import React, { useEffect, useState } from 'react'


  const dummyContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
const NewsCard = ({category, country}) => {
  const [data, setData]=useState();
  const [error, setError]=useState();
  const [loading, setLoading]=useState();
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=15cfddc182164a4698377a38046c8d59`;
  // console.log(apiUrl)
    const fetchData = async (url) => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          const jsonData = data.articles;
          
          setData(jsonData);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

    useEffect(()=>{

        fetchData(apiUrl)
    
    },[category, country])
  return (
   <>
   <div className='container'>
    <div className='row'>
     {
      loading ? (<h4>Loading....</h4>) : error ? (error.message) : data ? data.map((article, index) => ( // Map over articles if data is not null
        <div className='col-lg-6 col-xl-4 mb-4' key={index}>
          <div className="card newsCard h-100" >
              <img src={article.urlToImage ? article.urlToImage : 'images/placeholder.svg'} className="card-img-top" alt={article.title}/>
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description ? article.description.slice(0, 100) : dummyContent.slice(0,100)}</p>
                <a href={article.url} target='_blank' className="btn btn-primary">View More</a>
              </div>
            </div>
        </div>
            

          )) : <h4>Empty</h4>}
          </div></div>
   </>
  )
}

export default NewsCard