import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'


const root = createRoot(document.getElementById('root')!);

root.render(
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>
);
