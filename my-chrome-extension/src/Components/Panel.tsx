import  { ReactElement, useState } from 'react';
import { APP_COLLAPSE_WIDTH, APP_EXTEND_WIDTH, URLS } from './consts';

interface PanelProps {
  onWidthChange: (value: number) => void;
  initialEnabled: boolean;
}

export default function Panel({ onWidthChange, initialEnabled }: PanelProps): ReactElement {
  const [enabled, setEnabled] = useState(initialEnabled);
  const [sidePanelWidth, setSidePanelWidth] = useState(enabled ? APP_EXTEND_WIDTH : APP_COLLAPSE_WIDTH);
  const [tabIndex, setTabIndex] = useState(0);

  function handleOnToggle(enabled: boolean) {
    const value = enabled ? APP_EXTEND_WIDTH : APP_COLLAPSE_WIDTH;
    setSidePanelWidth(value);
    onWidthChange(value);

    // Use Chrome API to save the state
    chrome.storage.local.set({ enabled });

    if (enabled) {
      chrome.action.setBadgeText({ text: '' });
    }
  }

  function openPanel(force?: boolean) {
    const newValue = force || !enabled;
    setEnabled(newValue);
    handleOnToggle(newValue);
  }

  return (
    <div
      style={{
        width: sidePanelWidth - 5,
        boxShadow: '0px 0px 5px #0000009e',
        transition: 'width 0.3s ease-in-out',
      }}
      className="absolute top-0 right-0 bottom-0 z-max bg-gray-100 overflow-hidden"
    >
      {/* IFrame for the selected URL */}
      <iframe
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          opacity: enabled ? 1 : 0,
          zIndex: enabled ? 1 : -1,
          transition: 'opacity 0.3s ease-in-out',
        }}
        title={URLS[tabIndex].name}
        src={URLS[tabIndex].url}
      />
      {/* Tab Navigation */}
      <div
        style={{
          display: enabled ? 'none' : 'flex',
          flexDirection: 'column',
          width: '50px',
          padding: '5px',
          gap: '10px',
        }}
      >
        {URLS.map(({ name, image }, _index) => {
          function onMenuClick(index: number) {
            setTabIndex(index);
            openPanel(true);
          }
          return (
            <button
              key={name}
              onClick={() => onMenuClick(_index)}
              style={{
                backgroundColor: _index === tabIndex ? '#ddd' : '#fff',
                padding: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              <img src={image} alt={name} style={{ width: '100%' }} />
            </button>
          );
        })}
      </div>
      {/* Toggle Button */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
        }}
      >
        <button
          onClick={() => openPanel()}
          style={{
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: enabled ? '#ddd' : '#fff',
            cursor: 'pointer',
          }}
        >
          {enabled ? 'Close' : 'Open'}
        </button>
      </div>
    </div>
  );
}
