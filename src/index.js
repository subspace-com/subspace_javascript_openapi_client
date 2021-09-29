/**
 * Subspace Product API
 * # Introduction  The Subspace API is based on REST, has resource-oriented URLs, returns JSON-encoded responses, and returns standard HTTP response codes.  The base URL for the API is:  `https://api.subspace.com/`  # Naming Convention  * Version name currently in use is: *v1*   * Example: `https://api.subspace.com/v1`  # Authentication  ## API Tokens  Subspace authenticates your API requests using JWT Bearer tokens. To use any Subspace API, you must pass a Bearer token with each request. If you do not include your Bearer token when making an API request, or use one that is incorrect or disabled, Subspace returns an error.  Bearer tokens are granted by requesting one (as noted below) and presenting your publishable (client_id) and secret (client_secret) tokens.     Subspace provides two types of API tokens: publishable (client_id) and secret (client_secret).  These are available in the Subspace console.   * **Publishable** API tokens (client_id) are meant solely to identify your account with Subspace, they aren’t secret. They can be published in places like your website JavaScript code, or in an iPhone or Android app.   * **Secret** API tokens (client_secret) should be kept confidential and only stored on your own servers. Your account’s secret API token will allow you to acquire a valid JWT token authorized to perform any API request to Subspace.  ## Getting a JWT Bearer Token  Subspace uses auth0 for JWT token management.  You can acquire a JWT token by utilizing `https://id.subspace.com` and following the instructions in the curl example below.  ## Protecting Your API Tokens    * **JWT tokens have a expiration time of 24 hours.**  Once expired, you will have to use your Subspace private API and public token to request a new one.   * The Subspace private token can be rotated from within the Subspace console.  Rotation may take up to 10 minutes for all systems to update state to invalidate the older token and enable the new one.   * **Keep your secret token safe.** Your secret token can make any API call on behalf of your account, including changes that may impact billing such as enabling pay-as-you-go charges. Do not store your secret token in your version control system. Do not use your secret token outside your web server, such as a browser, mobile app, or distributed file.   * **You may use the Subspace console to acquire an API token.**   * **You may use the Subspace console to disable pay-as-you-go.** This may prevent unexpected charges due to unauthorized or abnormal usage.   * **Do not embed API keys directly in code.** Instead of directly embedding API keys in your application’s code, put them in environment variables, or within include files that are stored separately from the bulk of your code—outside the source repository of your application. Then, if you share your code, the API keys will not be included in the shared files.   * **Do not store API tokens inside your application’s source control.** If you store API tokens in files, keep the files outside your application’s source control system. This is particularly important if you use a public source code management system such as GitHub.   * **Limit access with restricted tokens.** The Subspace console will allow you to specify the IP addresses or referrer URLs associated with each token, reducing the impact of a compromised API token.   * **Use independent API tokens for different apps.** This limits the scope of each token. If an API token is compromised, you can rotate the impacted token without impacting other API tokens.  # Error Codes  Subspace uses HTTP response codes to indicate the success or failure of an API request.   General HTML status codes:   * 2xx Success.    * 4xx Errors based on information provided in the request.   * 5xx Errors on Subspace servers.    # Security  We provide a valid, signed certificate for our API methods. Be sure your connection library supports HTTPS with the SNI extension.  # REST How-To  Making your first REST API call is easy and can be done from your browser.  You will need:   * Your **secret** token and public client token, both found in the Console.   * The URL for the type of data you would like to request.  First, acquire a JWT Bearer Token.  Command line example:          curl --request POST \\          --url \"https://id.subspace.com/oauth/token\" \\          --header 'content-type: application/json' \\          --data '{ \"client_id\": \"YOURCLIENTID\", \"client_secret\": \"YOURCLIENTSECRET\", \"audience\": \"https://api.subspace.com/\", \"grant_type\": \"client_credentials\" }'  REST calls are made up of:   * Base url: Example: `https://api.subspace.com`   * Version: Example: `v1`   * The API Endpoint and any parameters: `accelerator/acc_NDA3MUI5QzUtOTY4MC00Nz` where `acc_NDA3MUI5QzUtOTY4MC00Nz` is a valid accelerator ID   * Accelerator ids are always of the format `acc_NDA3MUI5QzUtOTY4MC00Nz`, with a \"acc_\" prefix followed by 22 characters.   * Project ids are always of the format `prj_00Iaqxjo71vNL1uLKKo5Kn`, with a \"prj_\" prefix followed by 22 characters.   * Token header: All REST requests require a valid JWT Bearer token which should be added as an “Authorization” header to the request:              `Authorization: Bearer YOUR_TOKEN_HERE`    ## Authorization header example  If your API token was “my_api_token”, you would add...      Authorization: Bearer my_api_token      ...to the header.  ## Command line examples  To list your current open packet_accelerators using the token “my_api_token”:      curl -H “Authorization: Bearer my_api_token” https://api.subspace.com/v1/accelerator      Alternately, to get the details of a specific accelerator whose id is 'abcd-ef01-2345':      curl -H “Authorization: Bearer my_api_token” https://api.subspace.com/v1/accelerator/abcd-ef01-2345  # API Versioning  Subspace will release new versions when we make backwards-incompatible changes to the API. We will give advance notice before releasing a new version or retiring an old version.  Backwards compatible changes:   * Adding new response attributes   * Adding new endpoints   * Adding new methods to an existing endpoint   * Adding new query string parameters   * Adding new path parameters   * Adding new webhook events   * Adding new streaming endpoints   * Changing the order of existing response attributes    Versions are added to the base url, for example:   * `https://api.subspace.com/v1`  Current Version is **v1:** `https://api.subspace.com/v1` 
 *
 * The version of the OpenAPI document: 1.0
 * Contact: sales@subspace.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Body from './model/Body';
import Body1 from './model/Body1';
import ProtobufAny from './model/ProtobufAny';
import V1Accelerator from './model/V1Accelerator';
import V1CreateSipTeleport from './model/V1CreateSipTeleport';
import V1GlobalTurnResponse from './model/V1GlobalTurnResponse';
import V1GlobalTurnServer from './model/V1GlobalTurnServer';
import V1ListAcceleratorResponse from './model/V1ListAcceleratorResponse';
import V1ListProjectsResponse from './model/V1ListProjectsResponse';
import V1ListSessionsResponse from './model/V1ListSessionsResponse';
import V1ListSipTeleportResponse from './model/V1ListSipTeleportResponse';
import V1NextPage from './model/V1NextPage';
import V1Project from './model/V1Project';
import V1Session from './model/V1Session';
import V1SipTeleportResponse from './model/V1SipTeleportResponse';
import V1SipTeleportStatus from './model/V1SipTeleportStatus';
import V1TeleportAddresses from './model/V1TeleportAddresses';
import V1TransportType from './model/V1TransportType';
import V1UpdateSipTeleport from './model/V1UpdateSipTeleport';
import AcceleratorServiceApi from './api/AcceleratorServiceApi';
import GlobalTurnServiceApi from './api/GlobalTurnServiceApi';
import ProjectServiceApi from './api/ProjectServiceApi';
import SessionServiceApi from './api/SessionServiceApi';
import SipTeleportServiceApi from './api/SipTeleportServiceApi';


/**
* _IntroductionThe_Subspace_API_is_based_on_REST_has_resource_oriented_URLs_returns_JSON_encoded_responses_and_returns_standard_HTTP_response_codes_The_base_URL_for_the_API_is__https__api_subspace_com__Naming_Convention_Version_name_currently_in_use_is_v1___Example_https__api_subspace_com_v1_Authentication_API_TokensSubspace_authenticates_your_API_requests_using_JWT_Bearer_tokens__To_use_any_Subspace_API_you_must_pass_a_Bearer_token_with_each_request__If_you_do_not_include_your_Bearer_token_when_making_an_API_request_or_use_one_that_is_incorrect_or_disabled_Subspace_returns_an_error_Bearer_tokens_are_granted_by_requesting_one__as_noted_below_and_presenting_your_publishable__client_id_and_secret__client_secret_tokens____Subspace_provides_two_types_of_API_tokens_publishable__client_id_and_secret__client_secret___These_are_available_in_the_Subspace_console____Publishable_API_tokens__client_id_are_meant_solely_to_identify_your_account_with_Subspace_they_arent_secret__They_can_be_published_in_places_like_your_website_JavaScript_code_or_in_an_iPhone_or_Android_app____Secret_API_tokens__client_secret_should_be_kept_confidential_and_only_stored_on_your_own_servers__Your_accounts_secret_API_token_will_allow_you_to_acquire_a_valid_JWT_token_authorized_to_perform_any_API_request_to_Subspace__Getting_a_JWT_Bearer_TokenSubspace_uses_auth0_for_JWT_token_management___You_can_acquire_a_JWT_token_by_utilizing_https__id_subspace_com_and_following_the_instructions_in_the_curl_example_below__Protecting_Your_API_Tokens___JWT_tokens_have_a_expiration_time_of_24_hours___Once_expired_you_will_have_to_use_your_Subspace_private_API_and_public_token_to_request_a_new_one____The_Subspace_private_token_can_be_rotated_from_within_the_Subspace_console___Rotation_may_take_up_to_10_minutes_for_all_systems_to_update_state_to_invalidate_the_older_token_and_enable_the_new_one____Keep_your_secret_token_safe__Your_secret_token_can_make_any_API_call_on_behalf_of_your_account_including_changes_that_may_impact_billing_such_as_enabling_pay_as_you_go_charges__Do_not_store_your_secret_token_in_your_version_control_system__Do_not_use_your_secret_token_outside_your_web_server_such_as_a_browser_mobile_app_or_distributed_file____You_may_use_the_Subspace_console_to_acquire_an_API_token____You_may_use_the_Subspace_console_to_disable_pay_as_you_go__This_may_prevent_unexpected_charges_due_to_unauthorized_or_abnormal_usage____Do_not_embed_API_keys_directly_in_code__Instead_of_directly_embedding_API_keys_in_your_applications_code_put_them_in_environment_variables_or_within_include_files_that_are_stored_separately_from_the_bulk_of_your_codeoutside_the_source_repository_of_your_application__Then_if_you_share_your_code_the_API_keys_will_not_be_included_in_the_shared_files____Do_not_store_API_tokens_inside_your_applications_source_control__If_you_store_API_tokens_in_files_keep_the_files_outside_your_applications_source_control_system__This_is_particularly_important_if_you_use_a_public_source_code_management_system_such_as_GitHub____Limit_access_with_restricted_tokens__The_Subspace_console_will_allow_you_to_specify_the_IP_addresses_or_referrer_URLs_associated_with_each_token_reducing_the_impact_of_a_compromised_API_token____Use_independent_API_tokens_for_different_apps__This_limits_the_scope_of_each_token__If_an_API_token_is_compromised_you_can_rotate_the_impacted_token_without_impacting_other_API_tokens__Error_CodesSubspace_uses_HTTP_response_codes_to_indicate_the_success_or_failure_of_an_API_request__General_HTML_status_codes___2xx_Success_____4xx_Errors_based_on_information_provided_in_the_request____5xx_Errors_on_Subspace_servers____SecurityWe_provide_a_valid_signed_certificate_for_our_API_methods__Be_sure_your_connection_library_supports_HTTPS_with_the_SNI_extension__REST_How_ToMaking_your_first_REST_API_call_is_easy_and_can_be_done_from_your_browser___You_will_need___Your_secret_token_and_public_client_token_both_found_in_the_Console____The_URL_for_the_type_of_data_you_would_like_to_request_First_acquire_a_JWT_Bearer_Token___Command_line_example________curl___request_POST_____________url_https__id_subspace_com_oauth_token_____________header_content_type_application_json_____________data__client_id_YOURCLIENTID_client_secret_YOURCLIENTSECRET_audience_https__api_subspace_com__grant_type_client_credentials_REST_calls_are_made_up_of___Base_url_Example_https__api_subspace_com___Version_Example_v1___The_API_Endpoint_and_any_parameters_accelerator_acc_NDA3MUI5QzUtOTY4MC00Nz_where_acc_NDA3MUI5QzUtOTY4MC00Nz_is_a_valid_accelerator_ID___Accelerator_ids_are_always_of_the_format_acc_NDA3MUI5QzUtOTY4MC00Nz_with_a_acc__prefix_followed_by_22_characters____Project_ids_are_always_of_the_format_prj_00Iaqxjo71vNL1uLKKo5Kn_with_a_prj__prefix_followed_by_22_characters____Token_header_All_REST_requests_require_a_valid_JWT_Bearer_token_which_should_be_added_as_an_Authorization_header_to_the_request____________Authorization_Bearer_YOUR_TOKEN_HERE___Authorization_header_exampleIf_your_API_token_was_my_api_token_you_would_add_______Authorization_Bearer_my_api_token_______to_the_header__Command_line_examplesTo_list_your_current_open_packet_accelerators_using_the_token_my_api_token____curl__H_Authorization_Bearer_my_api_token_https__api_subspace_com_v1_accelerator____Alternately_to_get_the_details_of_a_specific_accelerator_whose_id_is_abcd_ef01_2345____curl__H_Authorization_Bearer_my_api_token_https__api_subspace_com_v1_accelerator_abcd_ef01_2345_API_VersioningSubspace_will_release_new_versions_when_we_make_backwards_incompatible_changes_to_the_API__We_will_give_advance_notice_before_releasing_a_new_version_or_retiring_an_old_version_Backwards_compatible_changes___Adding_new_response_attributes___Adding_new_endpoints___Adding_new_methods_to_an_existing_endpoint___Adding_new_query_string_parameters___Adding_new_path_parameters___Adding_new_webhook_events___Adding_new_streaming_endpoints___Changing_the_order_of_existing_response_attributes__Versions_are_added_to_the_base_url_for_example___https__api_subspace_com_v1Current_Version_is_v1_https__api_subspace_com_v1.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SubspaceProductApi = require('index'); // See note below*.
* var xxxSvc = new SubspaceProductApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SubspaceProductApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SubspaceProductApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SubspaceProductApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body,

    /**
     * The Body1 model constructor.
     * @property {module:model/Body1}
     */
    Body1,

    /**
     * The ProtobufAny model constructor.
     * @property {module:model/ProtobufAny}
     */
    ProtobufAny,

    /**
     * The V1Accelerator model constructor.
     * @property {module:model/V1Accelerator}
     */
    V1Accelerator,

    /**
     * The V1CreateSipTeleport model constructor.
     * @property {module:model/V1CreateSipTeleport}
     */
    V1CreateSipTeleport,

    /**
     * The V1GlobalTurnResponse model constructor.
     * @property {module:model/V1GlobalTurnResponse}
     */
    V1GlobalTurnResponse,

    /**
     * The V1GlobalTurnServer model constructor.
     * @property {module:model/V1GlobalTurnServer}
     */
    V1GlobalTurnServer,

    /**
     * The V1ListAcceleratorResponse model constructor.
     * @property {module:model/V1ListAcceleratorResponse}
     */
    V1ListAcceleratorResponse,

    /**
     * The V1ListProjectsResponse model constructor.
     * @property {module:model/V1ListProjectsResponse}
     */
    V1ListProjectsResponse,

    /**
     * The V1ListSessionsResponse model constructor.
     * @property {module:model/V1ListSessionsResponse}
     */
    V1ListSessionsResponse,

    /**
     * The V1ListSipTeleportResponse model constructor.
     * @property {module:model/V1ListSipTeleportResponse}
     */
    V1ListSipTeleportResponse,

    /**
     * The V1NextPage model constructor.
     * @property {module:model/V1NextPage}
     */
    V1NextPage,

    /**
     * The V1Project model constructor.
     * @property {module:model/V1Project}
     */
    V1Project,

    /**
     * The V1Session model constructor.
     * @property {module:model/V1Session}
     */
    V1Session,

    /**
     * The V1SipTeleportResponse model constructor.
     * @property {module:model/V1SipTeleportResponse}
     */
    V1SipTeleportResponse,

    /**
     * The V1SipTeleportStatus model constructor.
     * @property {module:model/V1SipTeleportStatus}
     */
    V1SipTeleportStatus,

    /**
     * The V1TeleportAddresses model constructor.
     * @property {module:model/V1TeleportAddresses}
     */
    V1TeleportAddresses,

    /**
     * The V1TransportType model constructor.
     * @property {module:model/V1TransportType}
     */
    V1TransportType,

    /**
     * The V1UpdateSipTeleport model constructor.
     * @property {module:model/V1UpdateSipTeleport}
     */
    V1UpdateSipTeleport,

    /**
    * The AcceleratorServiceApi service constructor.
    * @property {module:api/AcceleratorServiceApi}
    */
    AcceleratorServiceApi,

    /**
    * The GlobalTurnServiceApi service constructor.
    * @property {module:api/GlobalTurnServiceApi}
    */
    GlobalTurnServiceApi,

    /**
    * The ProjectServiceApi service constructor.
    * @property {module:api/ProjectServiceApi}
    */
    ProjectServiceApi,

    /**
    * The SessionServiceApi service constructor.
    * @property {module:api/SessionServiceApi}
    */
    SessionServiceApi,

    /**
    * The SipTeleportServiceApi service constructor.
    * @property {module:api/SipTeleportServiceApi}
    */
    SipTeleportServiceApi
};
