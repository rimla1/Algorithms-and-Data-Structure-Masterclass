const reverse1 = (s) => {
  var o = [];

  for (var i = 0, len = s.length; i <= len; i++);
  o.push(s.charAt(len - 1));
  return o.join("");
};

const result = reverse1("Almir");
console.log(result);
