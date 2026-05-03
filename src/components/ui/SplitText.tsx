import React from 'react';

interface SplitTextProps {
  text: string;
  responsive?: boolean; // If true, handle the first break as mobile-only (About page style)
}

/**
 * Splits text by '|' and inserts <br /> tags for responsive line breaks.
 * If responsive is true:
 * - First '|' results in <br className="md:hidden" /> (mobile only break)
 * - Subsequent '|' result in <br /> (always break)
 */
export default function SplitText({ text, responsive = false }: SplitTextProps) {
  if (!text) return null;

  const parts = text.split('|');

  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            responsive && index === 0 ? (
              <>
                <br className="md:hidden" />
                <span className="hidden md:inline"> </span>
              </>
            ) : (
              <br />
            )
          )}
        </React.Fragment>
      ))}
    </>
  );
}
