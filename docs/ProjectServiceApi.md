# SubspaceProductApi.ProjectServiceApi

All URIs are relative to *https://api.subspace.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectServiceCreate**](ProjectServiceApi.md#projectServiceCreate) | **POST** /v1/project | 
[**projectServiceGet**](ProjectServiceApi.md#projectServiceGet) | **GET** /v1/project/{id} | 
[**projectServiceList**](ProjectServiceApi.md#projectServiceList) | **GET** /v1/project | 
[**projectServiceUpdate**](ProjectServiceApi.md#projectServiceUpdate) | **PUT** /v1/project/{id} | 



## projectServiceCreate

> V1Project projectServiceCreate()



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.ProjectServiceApi();
apiInstance.projectServiceCreate((error, data, response) => {
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

[**V1Project**](V1Project.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectServiceGet

> V1Project projectServiceGet(id)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.ProjectServiceApi();
let id = "id_example"; // String | 
apiInstance.projectServiceGet(id, (error, data, response) => {
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

[**V1Project**](V1Project.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectServiceList

> V1ListProjectsResponse projectServiceList(opts)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.ProjectServiceApi();
let opts = {
  'before': "before_example", // String | 
  'limit': 789 // Number | 
};
apiInstance.projectServiceList(opts, (error, data, response) => {
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

[**V1ListProjectsResponse**](V1ListProjectsResponse.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectServiceUpdate

> V1Project projectServiceUpdate(id)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.ProjectServiceApi();
let id = "id_example"; // String | id is the project identity
apiInstance.projectServiceUpdate(id, (error, data, response) => {
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
 **id** | **String**| id is the project identity | 

### Return type

[**V1Project**](V1Project.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

