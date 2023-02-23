import React, { useEffect, useState } from "react";

export default function Mediaquery(
  query,
  defaultMatches = window.matchMedia(query)
) {
  const [matches, setMatches] = useState(defaultMatches);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);

    media.addListener(listener, null);

    return () => media.removeListener(listener, null);
  }, [query, matches]);

  return matches;
}

// export const tablet = Mediaquery("(max-width:820px)");
// export const mobile = Mediaquery("(min-width:460px)");
