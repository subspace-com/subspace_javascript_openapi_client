# SubspaceProductApi.GlobalTurnServiceApi

All URIs are relative to *https://api.subspace.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**globalTurnServiceGetGlobalTurn**](GlobalTurnServiceApi.md#globalTurnServiceGetGlobalTurn) | **POST** /v1/globalturn | 



## globalTurnServiceGetGlobalTurn

> V1GlobalTurnResponse globalTurnServiceGetGlobalTurn()



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.GlobalTurnServiceApi();
apiInstance.globalTurnServiceGetGlobalTurn((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**V1GlobalTurnResponse**](V1GlobalTurnResponse.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

