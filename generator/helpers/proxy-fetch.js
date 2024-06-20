
/**
 * ProxyFetch
 * Factory to create a wrapped version of the fetch function to work with predefined CORS proxy
 * @param {Object} params
 * @returns
 */
const ProxyFetch = params => {
  return async (url, options) => {
    let proxyUrl = url;
    let proxyOptions = { ...options };
    if (params.proxy === 'cors-lol') {
      proxyUrl = 'https://api.cors.lol/?url=' + encodeURIComponent(url);
    } else if (params.proxy === 'just-cors') {
      proxyUrl = params.justCorsUrl + url;
    } else if (params.proxy === 'proxy-cors-sh') {
      proxyUrl = 'https://proxy.cors.sh/' + url;
      proxyOptions = {
        ...proxyOptions,
        headers: {
          ...(proxyOptions.headers ?? {}),
          'x-cors-api-key': params.corsShApiKey
        }
      };
    } else if (params.proxy === 'cors-proxy-io') {
      proxyUrl = 'https://corsproxy.io/?' + url;
    }

    try {
      return await fetch(proxyUrl, proxyOptions);
    } catch(e) {
      // capture url
      e.url = proxyUrl;
      throw e;
    }
  };
};

export { ProxyFetch };