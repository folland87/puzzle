Highlight.

```jsx
<>
  <Highlight>
    Je suis un paragraphe mis en avant et j'explique un truc hyper important. Si j'ai plein de trucs a dire je vais apparaitre sur deux lignes. Et même sur trois si tu continues...
  </Highlight>
  <Highlight color="colmar.1">
    Je suis un paragraphe mis en avant et j'explique un truc hyper important. Si j'ai plein de trucs a dire je vais apparaitre sur deux lignes. Et même sur trois si tu continues... D'ailleurs, je peux même m'afficher avec une couleur du theme. Celle que tu veux...
  </Highlight>
  <Highlight color="info" fontSize="small">
    Je peux etre plus petit, si tu veux m'afficher sur mobile par exemple...
  </Highlight>
  <Highlight color="danger" fontSize="large">
    Ou plus grand, sur les super grands écrans... Tu décides.
  </Highlight>
  <Highlight color="danger" fontSize={["small", "small", "regular", "regular", "large"]}>
    Je peux même etre responsive, comme ca t'es tranquille...
  </Highlight>
</>
```
