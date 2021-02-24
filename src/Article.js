import React from 'react'
import moment from 'moment'
const Article = ({ title, date, snippet }) => {
  return (
    <article>
      <h2>{title}</h2>
      <div>
        <span>{moment(date).format('DD/MM/YYYY')}</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article