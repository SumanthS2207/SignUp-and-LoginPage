import React, { useEffect, useState, useRef } from 'react'
import '../css/pro.css'
import axios from 'axios'
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

const MOVIE_URL = 'https://hoblist.com/api/movieList'

const Detail = () => {

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const postData = {
    "category": "movies",
    "language": "kannada",
    "genre": "all",
    "sorts": "voting"
  }

  const inform = useRef(null);
  const changeInfo = () => {
    // console.dir(inform.current);
    inform.current.innerText = "Company: Geeksynergy Technologies Pvt Ltd || Address: Sanjayanagar, Bengaluru-56 || Phone: XXXXXXXXX09 || Email: XXXXXX@gmail.com"
  }

  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    setCount(count - 1);
  }


  useEffect(() => { 
    axios.post(MOVIE_URL, postData)
      .then(function (response) {
        setData(response.data.result)
        console.log('Data::::::::', response)
      })
      .catch(function (error) {
        console.log('error::::::::::', error);
      });

  }, [])


  return (
    <>
      <h3> inside Details page</h3>
      <button type="button" className="btn btn-outline-dark" id='info' onClick={changeInfo} ref={inform}>Company</button>
      {data.map((user) => (
        <div id='full-container'>
          <div className='card mb-3' key={user.id}>
            <div className="row g-0">
              <div className="col-md-4" id='img5'>
                <img src={user.poster} id='img3' className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8" id='info3'>
                <div className="card-body">
                  <h5 className="card-title"><div >Title-{user.title}</div></h5>
                  <p className="card-text"><div>Genre-{user.genre}</div></p>
                  <p className="card-text"><div >Director-{user.director}</div></p>
                  {
                    user.stars.map((item) => (

                      <p>Starring-{item}</p>

                    )

                    )
                  }
                  {/* <div>{user.upVoted}</div> */}
                  <span className="card-text">{user.language} | </span>
                  <span className="card-text">{user.pageViews} Views |</span>
                  <span className="card-text">Voted by {count}</span>
                  <div>
                    <div className='icons'>
                      <div className='upVote' onClick={increase}>
                        <AiFillCaretUp />
                      </div>
                      <span>{count}</span>
                      <div className='downVote' onClick={decrease}>
                        <AiFillCaretDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div >{user.director}</div>
            <div >{user.title}</div>
            <div >{user.language}</div>
            <img  />
            {
              user.stars.map((item) => (

                <p>Actor Name :::::::{item}</p>

              )

              )
            } */}
            </div>
          </div>
        </div>


      ))}
    </>



  )
}

export default Detail