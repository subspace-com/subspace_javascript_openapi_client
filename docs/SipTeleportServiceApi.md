# SubspaceProductApi.SipTeleportServiceApi

All URIs are relative to *https://api.subspace.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sipTeleportServiceCreate**](SipTeleportServiceApi.md#sipTeleportServiceCreate) | **POST** /v1/sipteleport | 
[**sipTeleportServiceDelete**](SipTeleportServiceApi.md#sipTeleportServiceDelete) | **DELETE** /v1/sipteleport/{id} | 
[**sipTeleportServiceGet**](SipTeleportServiceApi.md#sipTeleportServiceGet) | **GET** /v1/sipteleport/{id} | 
[**sipTeleportServiceList**](SipTeleportServiceApi.md#sipTeleportServiceList) | **GET** /v1/sipteleport | 
[**sipTeleportServiceUpdate**](SipTeleportServiceApi.md#sipTeleportServiceUpdate) | **PUT** /v1/sipteleport/{id} | 



## sipTeleportServiceCreate

> V1SipTeleportResponse sipTeleportServiceCreate(v1CreateSipTeleport, opts)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.SipTeleportServiceApi();
let v1CreateSipTeleport = new SubspaceProductApi.V1CreateSipTeleport(); // V1CreateSipTeleport | Required parameters to create a new SIPTeleport
let opts = {
  'idempotencyKey': "idempotencyKey_example" // String | Value is the returned etag of a get request.  If a retry sends an Idempotency-Key that has been seen before, the existing teleport is returned with the status code of 200
};
apiInstance.sipTeleportServiceCreate(v1CreateSipTeleport, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v1CreateSipTeleport** | [**V1CreateSipTeleport**](V1CreateSipTeleport.md)| Required parameters to create a new SIPTeleport | 
 **idempotencyKey** | **String**| Value is the returned etag of a get request.  If a retry sends an Idempotency-Key that has been seen before, the existing teleport is returned with the status code of 200 | [optional] 

### Return type

[**V1SipTeleportResponse**](V1SipTeleportResponse.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sipTeleportServiceDelete

> V1SipTeleportResponse sipTeleportServiceDelete(id)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.SipTeleportServiceApi();
let id = "id_example"; // String | 
apiInstance.sipTeleportServiceDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**V1SipTeleportResponse**](V1SipTeleportResponse.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sipTeleportServiceGet

> V1SipTeleportResponse sipTeleportServiceGet(id)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.SipTeleportServiceApi();
let id = "id_example"; // String | 
apiInstance.sipTeleportServiceGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**V1SipTeleportResponse**](V1SipTeleportResponse.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sipTeleportServiceList

> V1ListSipTeleportResponse sipTeleportServiceList(opts)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.SipTeleportServiceApi();
let opts = {
  'before': "before_example", // String | 
  'limit': 789 // Number | 
};
apiInstance.sipTeleportServiceList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **before** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**V1ListSipTeleportResponse**](V1ListSipTeleportResponse.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sipTeleportServiceUpdate

> V1SipTeleportResponse sipTeleportServiceUpdate(id, v1UpdateSipTeleport)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.SipTeleportServiceApi();
let id = "id_example"; // String | 
let v1UpdateSipTeleport = new SubspaceProductApi.V1UpdateSipTeleport(); // V1UpdateSipTeleport | Parameters to update an existing SIPTeleport, minimum requirement of one of them defined to update
apiInstance.sipTeleportServiceUpdate(id, v1UpdateSipTeleport, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **v1UpdateSipTeleport** | [**V1UpdateSipTeleport**](V1UpdateSipTeleport.md)| Parameters to update an existing SIPTeleport, minimum requirement of one of them defined to update | 

### Return type

[**V1SipTeleportResponse**](V1SipTeleportResponse.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

