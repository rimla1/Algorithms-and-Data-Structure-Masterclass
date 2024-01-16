const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let sLookup = {};
  let tLookup = {};

  for (let i = 0; i < s.length; i++) {
    sLookup[s[i]] = (sLookup[s[i]] || 0) + 1;
  }

  for (let j = 0; j < t.length; j++) {
    tLookup[t[j]] = (tLookup[t[j]] || 0) + 1;
  }

  for (let key in sLookup) {
    if (sLookup[key] !== tLookup[key]) return false;
  }

  return true;
};
