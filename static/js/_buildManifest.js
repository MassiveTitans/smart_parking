(self.__BUILD_MANIFEST = (function (s, e, a, r) {
  return {
    __rewrites: {
      beforeFiles: [],
      afterFiles: [{ source: "/api/:path*/" }],
      fallback: [],
    },
    "/": [
      s,
      a,
      "static/chunks/877-1b326b46a22229c1.js",
      "static/chunks/pages/index-9fe084ccc45f2da4.js",
    ],
    "/_error": ["static/chunks/pages/_error-d20dd478b791b37a.js"],
    "/login": [s, e, r, "static/chunks/pages/login-c1d18d11abe82a29.js"],
    "/order": [s, a, "static/chunks/pages/order-9df5c613ac844112.js"],
    "/profile": [e, "static/chunks/pages/profile-cb2578b7d2c9a06e.js"],
    "/register": [s, e, r, "static/chunks/pages/register-f2839821a148ffd7.js"],
    sortedPages: [
      "/",
      "/_app",
      "/_error",
      "/login",
      "/order",
      "/profile",
      "/register",
    ],
  };
})(
  "static/chunks/424-9ac04397b18a8dc1.js",
  "static/chunks/890-78d49fa34f0f01be.js",
  "static/chunks/261-9419b3d063c1f58b.js",
  "static/chunks/536-13e7dda7c2844793.js"
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
