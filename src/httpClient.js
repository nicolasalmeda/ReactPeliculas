const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTc5OThlODNjNTJlYjNhNTdhNDE2ZDliMWQxNDU5YSIsInN1YiI6IjYxZjA2ODJkY2QyMDQ2MDA2OGI4MmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m8mdJKEE2_9RgsCgDkhQFpsqceTWvaKH7XPY9m_zg4E",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
