/**
 * Load images from assests/images so webpack can bundle them.
 * CRA cannot resolve fully dynamic require() paths, so we use require.context
 * and only resolve known filenames.
 */

const imageContext = require.context(
  "../assests/images/",
  false,
  /\.(png|jpe?g|gif|svg|webp)$/i
);

const imageKeys = imageContext.keys();

function getImageUrl(filename) {
  if (!filename || typeof filename !== "string") return null;
  const normalized = filename.trim();
  if (!normalized) return null;
  const key = "./" + normalized;
  if (imageKeys.includes(key)) {
    return imageContext(key);
  }
  return null;
}

export { getImageUrl };
