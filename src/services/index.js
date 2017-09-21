import { queryParameters, fetchJson } from './Fetch';
import { fetchJson as fixtureFetchJson } from './FixtureFetch';
import Config from '../config'
// ------------------------------------
// Constants Method
// ------------------------------------
export const GET_LIST = 'GET_LIST';
export const GET_ONE = 'GET_ONE';
export const UPDATE = 'UPDATE';
export const CREATE = 'CREATE';
export const DELETE = 'DELETE';
export const POST = 'POST';
export const GET = 'GET';

/**
 * Maps queries to a json-server powered REST API
 *
 * @see https://github.com/typicode/json-server
 * @example
 * GET_LIST     => GET http://my.api.url/posts?_sort=title&_order=ASC&_start=0&_end=24
 * GET_ONE      => GET http://my.api.url/posts/123
 * GET_MANY     => GET http://my.api.url/posts/123, GET http://my.api.url/posts/456, GET http://my.api.url/posts/789
 * UPDATE       => PUT http://my.api.url/posts/123
 * CREATE       => POST http://my.api.url/posts/123
 * DELETE       => DELETE http://my.api.url/posts/123
 * POST       => POST http://my.api.url/posts
 */
const jsonServer =  (apiUrl, httpClient = fetchJson) => {
  /**
   * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
   * @param {String} resource Name of the resource to fetch, e.g. 'posts'
   * @param {Object} params The REST request params, depending on the type
   * @param {String} token
   * @returns {Object} { url, options } The HTTP request parameters
   */
  const convertRESTRequestToHTTP = (type, resource, params,token = null) => {
    let url = Config.useFixtures ? resource : `${apiUrl}${resource}`;
    const options = {};

    options.token = token;

    switch (type) {
      case GET_LIST: {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
          ...params.filter,
          _sort: field,
          _order: order,
          _start: (page - 1) * perPage,
          _end: page * perPage,
        };
        url = `${url}?${queryParameters(query)}`;
        break;
      }
      case GET_ONE:
        url = `${url}/${params.id}`;
        break;
      case UPDATE:
        url = `${url}/${params.id}`;
        options.method = 'PUT';
        options.body = JSON.stringify(params.data);
        break;
      case CREATE:
        options.method = 'POST';
        options.body = JSON.stringify(params.data);
        break;
      case DELETE:
        url = `${url}/${params.id}`;
        options.method = 'DELETE';
        break;
      case POST:
        options.method = 'POST';
        options.body = JSON.stringify(params.data);
        break;
      case GET:
        break;
      default:
        throw new Error(`Unsupported fetch action type ${type}`);
    }
    return { url, options };
  };

  /**
   * @param {string} type Request type, e.g GET_LIST
   * @param {string} resource Resource name, e.g. "posts"
   * @param {Object} params Request parameters. Depends on the request type
   * @param {string} token Request header for Authorize
   * @returns {Promise} the Promise for a REST response
   */
  return (type, resource, params, token) => {
    const { url, options } = convertRESTRequestToHTTP(type, resource, params, token);
    return httpClient(url, options);
  };
};

const api = Config.useFixtures ? fixtureFetchJson : fetchJson

export default jsonServer(Config.BASE_URL_API,api);
