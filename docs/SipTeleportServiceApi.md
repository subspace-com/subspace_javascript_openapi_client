# SubspaceProductApi.SipTeleportServiceApi

All URIs are relative to *https://api.subspace.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sipTeleportServiceCreate**](SipTeleportServiceApi.md#sipTeleportServiceCreate) | **POST** /v1/sip-teleports | CreateSipTeleport
[**sipTeleportServiceDelete**](SipTeleportServiceApi.md#sipTeleportServiceDelete) | **DELETE** /v1/sip-teleports/{id} | DeleteSipTeleport
[**sipTeleportServiceGet**](SipTeleportServiceApi.md#sipTeleportServiceGet) | **GET** /v1/sip-teleports/{id} | GetSipTeleport
[**sipTeleportServiceList**](SipTeleportServiceApi.md#sipTeleportServiceList) | **GET** /v1/sip-teleports | ListSipTeleports
[**sipTeleportServiceUpdate**](SipTeleportServiceApi.md#sipTeleportServiceUpdate) | **PUT** /v1/sip-teleports/{id} | UpdateSipTeleport



## sipTeleportServiceCreate

> V1SipTeleportResponse sipTeleportServiceCreate()

CreateSipTeleport

CreateSipTeleport creates a new SIP Teleport

### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.SipTeleportServiceApi();
apiInstance.sipTeleportServiceCreate((error, data, response) => {
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

[**V1SipTeleportResponse**](V1SipTeleportResponse.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sipTeleportServiceDelete

> V1SipTeleportResponse sipTeleportServiceDelete(id)

DeleteSipTeleport

DeleteSipTeleport deletes an existing SIP Teleport, specified by its id

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

GetSipTeleport

GetSipTeleport fetches the details of a specific SIP Teleport, specified by its id

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

ListSipTeleports

ListSipTeleports lists all SIP Teleports

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

> V1SipTeleportResponse sipTeleportServiceUpdate(id)

UpdateSipTeleport

UpdateSipTeleport updates an existing SIP Teleport, specified by its id

### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.SipTeleportServiceApi();
let id = "id_example"; // String | 
apiInstance.sipTeleportServiceUpdate(id, (error, data, response) => {
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

