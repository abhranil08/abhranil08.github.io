/**
 * Glassmorphism: fine-tuned blur, border, and shadow for a clean professional look.
 * Matches the header (Brunel / Software Engineer bar). Used for Education blocks, cert cards, etc.
 */
export function getHeaderGlassStyle(theme) {
  const isDark = theme && theme.body === "#020617";
  return isDark
    ? {
        background: "rgba(30, 41, 59, 0.52)",
        border: "1px solid rgba(148, 163, 184, 0.28)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(148, 163, 184, 0.06)",
        backdropFilter: "blur(24px) saturate(1.1)",
        WebkitBackdropFilter: "blur(24px) saturate(1.1)",
      }
    : {
        background: "rgba(255, 255, 255, 0.58)",
        border: "1px solid rgba(124, 86, 194, 0.2)",
        boxShadow: "0 12px 40px rgba(124, 86, 194, 0.06), 0 0 0 1px rgba(124, 86, 194, 0.04)",
        backdropFilter: "blur(24px) saturate(1.1)",
        WebkitBackdropFilter: "blur(24px) saturate(1.1)",
      };
}

/**
 * Glassmorphism for greeting, skills blocks, and home page cards – same fine-tuned look.
 */
export function getGlassStyle(theme) {
  const isDark = theme && theme.body === "#020617";
  return isDark
    ? {
        borderRadius: "24px",
        background: "rgba(15, 23, 42, 0.38)",
        backdropFilter: "blur(24px) saturate(1.1)",
        WebkitBackdropFilter: "blur(24px) saturate(1.1)",
        border: "1px solid rgba(148, 163, 184, 0.28)",
        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(148, 163, 184, 0.05)",
      }
    : {
        borderRadius: "24px",
        background: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(24px) saturate(1.1)",
        WebkitBackdropFilter: "blur(24px) saturate(1.1)",
        border: "1px solid rgba(124, 86, 194, 0.2)",
        boxShadow: "0 16px 48px rgba(124, 86, 194, 0.05), 0 0 0 1px rgba(124, 86, 194, 0.04)",
      };
}
