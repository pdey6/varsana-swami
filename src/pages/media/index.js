import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

const Media = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/media/photos">
            Photos
          </Link>
        </li>
        <li>
          <Link to="/media/audio">
            Audio
          </Link>
          </li>
      </ul>
    </Wrapper>
  )
}

export default Media


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
`