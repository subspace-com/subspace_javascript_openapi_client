# SubspaceProductApi.SessionServiceApi

All URIs are relative to *https://api.subspace.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sessionServiceList**](SessionServiceApi.md#sessionServiceList) | **GET** /v1/accelerator/{accelerator_id}/session | 



## sessionServiceList

> V1ListSessionsResponse sessionServiceList(acceleratorId, opts)



### Example

```javascript
import SubspaceProductApi from 'subspace_product_api';
let defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SubspaceProductApi.SessionServiceApi();
let acceleratorId = "acceleratorId_example"; // String | 
let opts = {
  'before': "before_example", // String | 
  'limit': 789 // Number | 
};
apiInstance.sessionServiceList(acceleratorId, opts, (error, data, response) => {
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
 **acceleratorId** | **String**|  | 
 **before** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**V1ListSessionsResponse**](V1ListSessionsResponse.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

