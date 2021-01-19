import { createContext, useContext, useState } from 'react';
import _ from 'lodash';
import { setSettings } from '../utils/settings';

export const SettingsContext = createContext();

const defaultSettings = {
  darkMode: false,
};

export function SettingsProvider({ settings, children }) {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings
  );

  const handleSave = (newSettings) => {
    const mergedSettings = _.merge({}, currentSettings, newSettings);
    setCurrentSettings(mergedSettings);
    setSettings(mergedSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSave,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  return ctx;
}
