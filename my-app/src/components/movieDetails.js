import React from 'react'
import {Table, Row, Col} from 'react-bootstrap';
import { useState} from 'react';
import {MovieCard} from './movieCard'

export const Movie = (props) => {
 
  const [movieShowCard, setMovieShowCard] = useState(false)
  const [detail, setDetail] = useState([])
  const showDetails = (res) => {
    setMovieShowCard(true)
    setDetail(res)
  }

  return ( 
   <div className="mt-4">
     <h2 className="heading mb-4">Movies Details</h2>
     <Row>
      <Col xs={movieShowCard? 7 : 12}>
        <Table striped bordered hover className="movie">
        <thead>
          <tr>
            <th>Id</th>
            <th>Movie Name</th>
            <th>Release Year</th>
            <th>Release Date</th>
            <th>Total Ratings</th>
          </tr>
        </thead>
        <tbody>
          {props.movieDetail.map((res,i) => {
            return (<tr key={i} onClick={() => showDetails(res)}>
              <td>{res.id}</td>
              <td>{res.title}</td>
              <td>{res.year}</td>
              <td>{res.releaseDate}</td>
              <td>{res.ratings.length}</td>
            </tr> )
          }
        )}
        </tbody>
      </Table>
      </Col>
      <Col xs={5}>
        {movieShowCard ?
          <MovieCard movieDetail={detail} /> : null
        }
      </Col>
    </Row>
   </div>
  )
}