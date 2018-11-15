// var user = null;
var jwt = null;

// export function getUser() {
//   if (user == null) {
//     var json = localStorage.getItem("user");
//     user = JSON.parse(json);
//     return user;
//   }
//   else {
//     return user;
//   }
// };
//
// export function setUser(inUser) {
//   user = inUser;
//   localStorage.setItem("user", JSON.stringify(inUser));
// }

export function setJwtToken(inJwt) {
  jwt = inJwt;
  localStorage.setItem("jwt", inJwt);
};

export function getJwtToken() {
  if (jwt == null) {
    var json = localStorage.getItem("jwt");
    jwt = json;
    return jwt;
  }
  else {
    return jwt;
  }
};
