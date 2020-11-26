
With image:

```jsx
<>
  <Avatar
    mx={2}
    src='https://s.gravatar.com/avatar/28ac01ecc6e4fdb02b400a744535b87f?rating=g&default=blank&size=48&fill=fillmax&bg=fff'
    name='frédéric'
    size={32}
    alt="avatar"
    square
  />
  <Avatar
    mx={2}
    src='https://s.gravatar.com/avatar/28ac01ecc6e4fdb02b400a744535b87f?rating=g&default=blank&size=48&fill=fillmax&bg=fff'
    name='frédéric'
    size={40}
    alt="avatar"
  />
  <Avatar
    mx={2}
    src='https://s.gravatar.com/avatar/28ac01ecc6e4fdb02b400a744535b87f?rating=g&default=blank&size=64&fill=fillmax&bg=fff'
    name='frédéric'
    size={64}
    alt="avatar"
  />
  <Avatar
    mx={2}
    src='https://s.gravatar.com/avatar/28ac01ecc6e4fdb02b400a744535b87f?rating=g&default=blank&size=128&fill=fillmax&bg=fff'
    name='frédéric'
    size={128}
    alt="avatar"
    square
  />
</>
```

Without image:

```jsx
<>
  <Avatar
    mx={2}
    name='frédéric'
    size={32}
    radius="rounded"
  />
  <Avatar
    mx={2}
    name='frédéric'
    size={40}
  />
  <Avatar
    mx={2}
    name='frédéric'
    size={64}
    radius='sharp'
  />
  <Avatar
    mx={2}
    name='frédéric'
    size={128}
    radius='regular'
  />
</>
```
