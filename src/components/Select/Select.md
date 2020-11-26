select

```jsx
const options = [
  {value: 'hello1', label: "hello1printed"},
  {value: 'hello2', label: "hello2printed"},
  {value: 'hello3', label: "hello3printed"},
  {value: 'hello4', label: "hello4printed"},
  {value: 'hello1', label: "hello1printed"},
  {value: 'hello2', label: "hello2printed"},
];

const onSelect = (selected) => console.log(selected, 'is selected');

<>
  <Select
    options={options}
    onSelect={(selected) => onSelect(selected)}
  />
</>
```
