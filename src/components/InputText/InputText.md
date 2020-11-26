Input text:

```jsx
import { useState } from 'react';
import { FaEnvelopeOpen, FaLock } from 'react-icons/fa';
import { FlexColumn } from '../Flexbox';
import Button from '../Button';

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

<FlexColumn maxWidth="400px">
  <InputText
    my={2}
    label={"Nom d'utilisateur ou email"}
    value={username}
    type="text"
    required
    onChange={(e) => setUsername(e.target.value)}
    iconLeft={<FaEnvelopeOpen />}
  />
  <InputText
    my={2}
    label="Mot de passe"
    value={password}
    type="password"
    required
    onChange={(e) => setPassword(e.target.value)}
    iconLeft={<FaLock />}
    message="*: champs requis"
  />
</FlexColumn>
```

Errored input:
```jsx
import { useState } from 'react';
import { FaEnvelopeOpen } from 'react-icons/fa';

const [email, setEmail] = useState('hello world');
<>
  <InputText
    my={2}
    label={"Email"}
    value={email}
    type="text"
    onChange={(e) => setEmail(e.target.value)}
    scale="large"
    iconLeft={<FaEnvelopeOpen />}
    message="Entrez une adresse mail valide."
    messageType="danger"
  />
</>
```
