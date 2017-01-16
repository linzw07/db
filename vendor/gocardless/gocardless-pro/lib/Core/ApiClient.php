<?php
/**
 * WARNING: Do not edit by hand, this file was generated by Crank:
 *
 *   https://github.com/gocardless/crank
 */

namespace GoCardlessPro\Core;

use GoCardlessPro\Core\Exception\ApiException;

/**
 * HTTP Client class wrapped by the Client class and
 * used internally to route http requests.
 */
class ApiClient
{
    /**
     * @param string                     $access_token Auth api key
     * @param string                     $endpoint_url API endpoint
     * @param GuzzleHttp\ClientInterface $http_client  An HTTP client to make requests
     */
    public function __construct($http_client)
    {
        $this->http_client = $http_client;
    }

    /**
     * Make a GET request to the API
     *
     * @param string $path   The relative path for the API request. e.g. /records
     * @param array  $params Any query params to send with the request
     *
     * @return array The raw response
     */
    public function get($path, $params = array())
    {
        $response = $this->http_client->request('GET', $path, $params);
        $this->handleErrors($response);
        return $response;
    }

    /**
     * Make a PUT request to the API
     *
     * @param string $path   The relative path for the API request. e.g. /records
     * @param array  $params Body of the request, will be serialized to JSON
     *
     * @return array The raw response
     */
    public function put($path, $params)
    {
        $response = $this->http_client->request('PUT', $path, $params);
        $this->handleErrors($response);
        return $response;
    }

    /**
     * Make a POST request to the API
     *
     * @param string $path   The relative path for the API request. e.g. /records
     * @param array  $params Body of the request, will be serialized to JSON
     *
     * @return array The raw response
     */
    public function post($path, $params)
    {
        $response = $this->http_client->request('POST', $path, $params);
        $this->handleErrors($response);
        return $response;
    }

    /**
     * Handle any errors in the API response
     *
     * If the response doesn't contain JSON, we will fail to decode and throw a
     * MalFormedResponseException.
     *
     * If the response is JSON, but the status code is >= 400, then we return
     * the appropriate error depending on the code
     *
     * @param GuzzleHttp\Psr7\Response $response The raw API response
     */
    private function handleErrors($response)
    {
        $json = json_decode($response->getBody());

        if ($json === null) {
            $msg = "Malformed response received from server";
            throw new Exception\MalformedResponseException($msg, $response);
        }

        if ($response->getStatusCode() < 400) {
            return null;
        }

        $error = $json->error;
        $exception_class = (string) ApiException::getErrorForType($error->type);
        $exception_class = 'GoCardlessPro\\Core\\Exception\\' . $exception_class;
        throw new $exception_class($error);
    }
}
