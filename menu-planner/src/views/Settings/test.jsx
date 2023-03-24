import CheckIcon from "@mui/icons-material/Check";
import React, { useState, useEffect } from "react";
import "./test.scss";

export default function Settings() {
  const [settings, setSettings] = useState({
    "--background-color": localStorage.getItem("--background-color") || "#fff",
    "--background-light": localStorage.getItem("--background-light") || "#fff",
    "--primary-color":
      localStorage.getItem("--primary-color") || "rgb(26, 255, 0)",
    "--shadow-color":
      localStorage.getItem("--shadow-color") || "rgba(0, 0, 0, 0.3)",
    "--text-color": localStorage.getItem("--text-color") || "#0A0A0A",
    "--text-light": localStorage.getItem("--text-light") || "#575757",
    "--font-size": localStorage.getItem("--font-size") || "1rem",
    "--animation-speed": localStorage.getItem("--animation-speed") || 1,
  });

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
      localStorage.setItem(key, settings[key]);
    }
  }, [settings]);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const themes = [
    {
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
    },
    {
      "--background-color": "rgb(29, 29, 29)",
      "--background-light": "rgb(77, 77, 77)",
      "--shadow-color": "rgba(0, 0, 0, 0.3)",
      "--text-color": "#fff",
      "--text-light": "#eceaea",
    },
  ];

  function changeTheme(i) {
    const _theme = { ...themes[i] };
    setTheme(i === 0 ? "light" : "dark");
    let _settings = { ...settings };
    for (let key in _theme) {
      _settings[key] = _theme[key];
    }
    setSettings(_settings);
    localStorage.setItem("theme", i === 0 ? "light" : "dark");
  }

  function changeColor(i) {
    const _color = primaryColors[i];
    let _settings = { ...settings };
    _settings["--primary-color"] = _color;
    setPrimaryColor(i);
    setSettings(_settings);
    localStorage.setItem("--primary-color", _color);
  }

  function changeFontSize(i) {
    const _size = fontSizes[i];
    let _settings = { ...settings };
    _settings["--font-size"] = _size.value;
    setFontSize(i);
    setSettings(_settings);
    localStorage.setItem("--font-size", _size.value);
  }
  function changeAnimationSpeed(i) {
    let _speed = animationSpeeds[i];
    let _settings = { ...settings };
    _settings["--animation-speed"] = _speed;
    setAnimationSpeed(i);
    setSettings(_settings);
    localStorage.setItem("--animation-speed", _speed);
  }
  const primaryColors = [
    "rgb(26, 255, 0)",
    "rgb(0, 185, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 0, 0)",
  ];

  const fontSizes = [
    { value: "0.8rem", label: "Small" },
    { value: "1rem", label: "Medium" },
    { value: "1.2rem", label: "Large" },
  ];

  const animationSpeeds = [1, 1.5, 2];

  function SettingsOption({ title, children }) {
    return (
      <div className="settings-option">
        <h3>{title}</h3>
        {children}
      </div>
    );
  }

  // state for primary color selection
  const [primaryColor, setPrimaryColor] = useState(
    primaryColors.indexOf(settings["--primary-color"])
  );

  // state for font size selection
  const [fontSize, setFontSize] = useState(
    fontSizes.findIndex((size) => size.value === settings["--font-size"])
  );

  // state for animation speed selection
  const [animationSpeed, setAnimationSpeed] = useState(
    animationSpeeds.indexOf(Number(settings["--animation-speed"]))
  );

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-options">
        <SettingsOption title="Theme">
          <div className="theme-options">
            <div
              className={`theme-option light ${
                theme === "light" ? "selected" : ""
              }`}
              onClick={() => changeTheme(0)}
            >
              <CheckIcon />
            </div>
            <div
              className={`theme-option dark ${
                theme === "dark" ? "selected" : ""
              }`}
              onClick={() => changeTheme(1)}
            >
              <CheckIcon />
            </div>
          </div>
        </SettingsOption>
        <SettingsOption title="Primary Color">
          <div className="color-options">
            {primaryColors.map((color, index) => (
              <div
                key={index}
                className={`color-option ${
                  index === primaryColor ? "selected" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => changeColor(index)}
              >
                {index === primaryColor ? <CheckIcon /> : null}
              </div>
            ))}
          </div>
        </SettingsOption>
        <SettingsOption title="Font Size">
          <div className="font-size-options">
            {fontSizes.map((size, index) => (
              <div
                key={index}
                className={`font-size-option ${
                  index === fontSize ? "selected" : ""
                }`}
                onClick={() => changeFontSize(index)}
              >
                {size.label}
                {index === fontSize ? <CheckIcon /> : null}
              </div>
            ))}
          </div>
        </SettingsOption>
        <SettingsOption title="Animation Speed">
          <div className="animation-speed-options">
            {animationSpeeds.map((speed, index) => (
              <div
                key={index}
                className={`animation-speed-option ${
                  index === animationSpeed ? "selected" : ""
                }`}
                onClick={() => changeAnimationSpeed(index)}
              >
                {speed}x{index === animationSpeed ? <CheckIcon /> : null}
              </div>
            ))}
          </div>
        </SettingsOption>
      </div>
    </div>
  );
}
