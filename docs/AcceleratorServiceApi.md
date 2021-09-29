# SubspaceProductApi.AcceleratorServiceApi

All URIs are relative to *https://api.subspace.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceleratorServiceCreate**](AcceleratorServiceApi.md#acceleratorServiceCreate) | **POST** /v1/accelerator | 
[**acceleratorServiceDelete**](AcceleratorServiceApi.md#acceleratorServiceDelete) | **DELETE** /v1/accelerator/{id} | 
[**acceleratorServiceGet**](AcceleratorServiceApi.md#acceleratorServiceGet) | **GET** /v1/accelerator/{id} | 
[**acceleratorServiceList**](AcceleratorServiceApi.md#acceleratorServiceList) | **GET** /v1/accelerator | 
[**acceleratorServiceUpdate**](AcceleratorServiceApi.md#acceleratorServiceUpdate) | **PUT** /v1/accelerator/{id} | 



## acceleratorServiceCreate

> V1Accelerator acceleratorServiceCreate(body, opts)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.AcceleratorServiceApi();
let body = new SubspaceProductApi.Body(); // Body | Required parameters to create a new PacketAccelerator.  NOTE- only subspace_port is optional
let opts = {
  'idempotencyKey': "idempotencyKey_example" // String | Value is the returned etag of a get request.  If a retry sends an Idempotency-Key that has been seen before, the existing accelerator is returned with the status code of 200
};
apiInstance.acceleratorServiceCreate(body, opts, (error, data, response) => {
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
 **body** | [**Body**](Body.md)| Required parameters to create a new PacketAccelerator.  NOTE- only subspace_port is optional | 
 **idempotencyKey** | **String**| Value is the returned etag of a get request.  If a retry sends an Idempotency-Key that has been seen before, the existing accelerator is returned with the status code of 200 | [optional] 

### Return type

[**V1Accelerator**](V1Accelerator.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## acceleratorServiceDelete

> Object acceleratorServiceDelete(id)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.AcceleratorServiceApi();
let id = "id_example"; // String | 
apiInstance.acceleratorServiceDelete(id, (error, data, response) => {
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

**Object**

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## acceleratorServiceGet

> V1Accelerator acceleratorServiceGet(id)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.AcceleratorServiceApi();
let id = "id_example"; // String | 
apiInstance.acceleratorServiceGet(id, (error, data, response) => {
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

[**V1Accelerator**](V1Accelerator.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## acceleratorServiceList

> V1ListAcceleratorResponse acceleratorServiceList(opts)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.AcceleratorServiceApi();
let opts = {
  'before': "before_example", // String | 
  'limit': 789 // Number | 
};
apiInstance.acceleratorServiceList(opts, (error, data, response) => {
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

[**V1ListAcceleratorResponse**](V1ListAcceleratorResponse.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## acceleratorServiceUpdate

> V1Accelerator acceleratorServiceUpdate(id, body1, opts)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.AcceleratorServiceApi();
let id = "id_example"; // String | 
let body1 = new SubspaceProductApi.Body1(); // Body1 | Parameters to update an existing PacketAccelerator, minimum requirement of one of them defined to update
let opts = {
  'ifMatch': 56 // Number | 
};
apiInstance.acceleratorServiceUpdate(id, body1, opts, (error, data, response) => {
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
 **body1** | [**Body1**](Body1.md)| Parameters to update an existing PacketAccelerator, minimum requirement of one of them defined to update | 
 **ifMatch** | **Number**|  | [optional] 

### Return type

[**V1Accelerator**](V1Accelerator.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

