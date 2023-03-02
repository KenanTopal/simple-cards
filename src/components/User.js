import React from 'react'

const User = ({user}) => {
  return (
    <img
        src={`https://robohash.org/${user.name}.png?set=set4`}
        alt=""
        width="200px"
      />
  )
}

export default User