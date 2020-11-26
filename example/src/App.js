import React from 'react'

import { Avatar, Button, ThemeContextProvider } from '@doad/puzzle'
import { FaChevronRight } from 'react-icons/fa'

const App = () => {
  return (
    <ThemeContextProvider>
      <Avatar
        mx={2}
        src='https://s.gravatar.com/avatar/28ac01ecc6e4fdb02b400a744535b87f?rating=g&default=blank&size=48&fill=fillmax&bg=fff'
        name='frédéric'
        size={32}
        alt="avatar"
        square
      />
      <Button iconRight={<FaChevronRight />} color="success" scale="small" label="Push me i'm famous">
        Click Me
      </Button>
      <Button iconRight={<FaChevronRight />} iconLeft={<FaChevronRight />} scale="medium">
       Test button
      </Button>
      <Button scale="large" icon={<FaChevronRight />}>
        Click Me
      </Button>
    </ThemeContextProvider>
  )
}

export default App
