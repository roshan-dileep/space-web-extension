
import { createRoot } from 'react-dom/client';
import Panel from './Components/Panel';
import { APP_COLLAPSE_WIDTH, APP_EXTEND_WIDTH } from './Components/consts';

async function loadChromeStorage() {
  let initialEnabled = true;
  try {
    // Load the "enabled" state from Chrome's local storage
    const result = await chrome.storage.local.get(['enabled']);
    initialEnabled = !!result.enabled;
  } catch (error) {
    console.error('Failed to load Chrome storage:', error);
    initialEnabled = true;
  }
  return initialEnabled;
}

async function init() {
  const initialEnabled = await loadChromeStorage();

  // Create a container for the extension UI
  const app = document.createElement('div');
  app.id = 'side-bar-extension-root';
  app.style.position = 'fixed';
  app.style.top = '0';
  app.style.right = '0';
  app.style.bottom = '0';
  app.style.width = `${initialEnabled ? APP_EXTEND_WIDTH : APP_COLLAPSE_WIDTH}px`;
  app.style.zIndex = '9999';
  document.body.appendChild(app);

  // Render the React application into the container
  const root = createRoot(app);
  root.render(
    <Panel
      onWidthChange={(value) => {
        app.style.width = `${value}px`;
      }}
      initialEnabled={initialEnabled}
    />
  );
}

// Call the initialization function
init();
