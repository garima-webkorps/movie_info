import React from 'react'
import {Table} from 'react-bootstrap'

export const Genre = (props) => {
  var movies = props.movieDetail
  var genres = [];
  for (var i = 0; i < movies.length; i++) {
    var list = movies[i].genres;
    for (var j = 0; j < list.length; j++) {
      var existingValue = genres.find(function (value) {
          return value.label === list[j]
      });
      if (!existingValue) {
        genres.push(
          {
              label: list[j],
              count: 1
          }
        );
      } else {
        existingValue.count++;
      }
    }
  }
  return ( 
   <div className="mt-4">
     <h2 className="heading mb-4">Grouping of Movies by Category</h2>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>Label</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {genres.map((res,i) => {
          return (<tr key={i}>
            <td>{res.label}</td>
            <td>{res.count}</td>
          </tr> )
          }
        )}
      </tbody>
    </Table>
   </div>
  )
}