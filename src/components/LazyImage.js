import React from "react";
import { useLazyLoad } from "../hooks/useLazyLoad";

const LazyImage = ({ src, alt, className }) => {
  const { imageSrc, loading } = useLazyLoad(src);

  return (
    <div
      className={`lazy-image-wrapper ${loading ? "loading" : "loaded"}`}
      style={{ minHeight: loading ? 200 : undefined }}
    >
      {imageSrc && (
        <img src={imageSrc} alt={alt || ""} className={className} />
      )}
    </div>
  );
};

export default LazyImage;
