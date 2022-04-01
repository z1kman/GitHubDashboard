import React, { useRef, useEffect } from "react";

type CallbackFunc = () => void;

interface Props {
  children: React.ReactNode;
  callback: CallbackFunc;
}

function useOutsideClick(
  ref: React.RefObject<HTMLDivElement>,
  callback: CallbackFunc
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function OutsideClick(props: Props) {
  const { children, callback } = props;
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, callback);

  return <div ref={wrapperRef}>{children}</div>;
}
