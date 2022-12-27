import { useEffect, useState } from "react";

export default function useOutsideAlerter({menuRef, setMenuOpened}) {
  const viewport_width = document.documentElement.clientWidth;
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (viewport_width <= 640) {
            setMenuOpened(false);
        }
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

}
