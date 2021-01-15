import config from "./_config";

export default function fetchApi(path, page, requestOptions) {
  if (page) {
    const result = fetch(
      config.BASE_API + path + "?" + new URLSearchParams({ page: page }),
      requestOptions
    );
    return result;
  } else {
    const result = fetch(config.BASE_API + path, requestOptions);
    return result;
  }
}

// console.log(result.json());
