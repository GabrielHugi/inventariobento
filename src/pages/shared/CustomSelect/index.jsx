import './index.css'
import { useState, useRef, useEffect } from "react";

function CustomSelect({ options, placeholder, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selected = options.find(opt => opt.value === value);

  return (
    <div className="CustomSelect" ref={ref}>
      <button
        type="button"
        className="CustomSelectButton"
        onClick={() => setOpen(!open)}
      >
        {selected?.label || placeholder}
        <span>▼</span>
      </button>

      {open && (
        <div className="CustomSelectMenu">
          {options.map(option => (
            <div
              key={option.value}
              className="CustomSelectOption"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;