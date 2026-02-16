import { useState, useEffect } from "react";

export function useLazyLoad(src) {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!src) {
      setLoading(false);
      return;
    }
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setLoading(false);
    };
    img.onerror = () => setLoading(false);
  }, [src]);

  return { imageSrc, loading };
}
