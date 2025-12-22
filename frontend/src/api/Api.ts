/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Categorys {
  /** Id */
  id: number;
  /**
   * Название
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** Статус */
  status?: 1 | 2;
  /**
   * Sex
   * @minLength 1
   */
  sex: string;
  /**
   * Image
   * @format uri
   */
  image?: string;
}

export interface CategoryAdd {
  /**
   * Название
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * Описание
   * @minLength 1
   * @maxLength 500
   */
  description: string;
  /**
   * Пол
   * @minLength 1
   */
  sex: string;
  /**
   * Фото
   * @format uri
   */
  image?: string | null;
}

export interface Category {
  /** Id */
  id: number;
  /**
   * Image
   * @format uri
   */
  image?: string;
  /**
   * Sex
   * @minLength 1
   */
  sex: string;
  /**
   * Название
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * Описание
   * @minLength 1
   * @maxLength 500
   */
  description: string;
  /** Статус */
  status?: 1 | 2;
  /**
   * Возраст
   * @minLength 1
   */
  age: string;
}

export interface CategoryItemSerializerWithCalc {
  /** Id */
  id: number;
  /**
   * Название
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** Статус */
  status?: 1 | 2;
  /**
   * Sex
   * @minLength 1
   */
  sex: string;
  /**
   * Image
   * @format uri
   */
  image?: string;
  /** Weight */
  weight?: number;
  /** Height */
  height?: number;
  /** Factor */
  factor?: number;
}

export interface Imt {
  /** Id */
  id: number;
  /** Owner */
  owner?: string;
  /** Moderator */
  moderator?: string;
  categorys?: CategoryItemSerializerWithCalc[];
  /** Статус */
  status?: 1 | 2 | 3 | 4 | 5;
  /**
   * Дата создания
   * @format date-time
   */
  date_created?: string;
  /**
   * Дата формирования
   * @format date-time
   */
  date_formation?: string | null;
  /**
   * Дата завершения
   * @format date-time
   */
  date_complete?: string | null;
  /**
   * Related
   * @min -2147483648
   * @max 2147483647
   */
  related?: number | null;
}

export interface Imts {
  /** Id */
  id: number;
  /** Owner */
  owner?: string;
  /** Moderator */
  moderator?: string;
  /** Categorys count */
  categorys_count?: number;
  /** Categorys calculated */
  categorys_calculated?: number;
  /** Статус */
  status?: 1 | 2 | 3 | 4 | 5;
  /**
   * Дата создания
   * @format date-time
   */
  date_created?: string;
  /**
   * Дата формирования
   * @format date-time
   */
  date_formation?: string | null;
  /**
   * Дата завершения
   * @format date-time
   */
  date_complete?: string | null;
  /**
   * Related
   * @min -2147483648
   * @max 2147483647
   */
  related?: number | null;
}

export interface CategoryItem {
  /** Id */
  id: number;
  /**
   * Название
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** Статус */
  status?: 1 | 2;
  /**
   * Sex
   * @minLength 1
   */
  sex: string;
  /**
   * Image
   * @format uri
   */
  image?: string;
  /** Weight */
  weight?: number;
  /** Height */
  height?: number;
}

export interface CategoryImt {
  /** Pk */
  pk?: string;
  /**
   * Weight
   * @min -2147483648
   * @max 2147483647
   */
  weight?: number;
  /**
   * Height
   * @min -2147483648
   * @max 2147483647
   */
  height?: number;
  /**
   * Factor
   * @min -2147483648
   * @max 2147483647
   */
  factor?: number | null;
  /** Category */
  category: number;
  /** Imt */
  imt: number;
}

export interface User {
  /** ID */
  id?: number;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /**
   * Superuser status
   * Designates that this user has all permissions without explicitly assigning them.
   */
  is_superuser?: boolean;
}

export interface UserLogin {
  /**
   * Username
   * @minLength 1
   */
  username: string;
  /**
   * Password
   * @minLength 1
   */
  password: string;
}

export interface UserRegister {
  /** ID */
  id?: number;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Password
   * @minLength 1
   * @maxLength 128
   */
  password: string;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
}

export interface UserUpdateProfile {
  /** Username */
  username?: string;
  /** Email */
  email?: string;
  /** Password */
  password?: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://localhost:8000/api" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Snippets API
 * @version v1
 * @license BSD License
 * @termsOfService https://www.google.com/policies/terms/
 * @baseUrl http://localhost:8000/api
 * @contact <contact@snippets.local>
 *
 * Test description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  categorys = {
    /**
     * No description
     *
     * @tags categorys
     * @name CategorysList
     * @request GET:/categorys/
     * @secure
     */
    categorysList: (
      query?: {
        category_name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Categorys[], any>({
        path: `/categorys/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categorys
     * @name CategorysCreateCreate
     * @request POST:/categorys/create/
     * @secure
     */
    categorysCreateCreate: (data: CategoryAdd, params: RequestParams = {}) =>
      this.request<Category, any>({
        path: `/categorys/create/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categorys
     * @name CategorysRead
     * @request GET:/categorys/{category_id}/
     * @secure
     */
    categorysRead: (categoryId: string, params: RequestParams = {}) =>
      this.request<Category, any>({
        path: `/categorys/${categoryId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categorys
     * @name CategorysAddToImtCreate
     * @request POST:/categorys/{category_id}/add_to_imt/
     * @secure
     */
    categorysAddToImtCreate: (categoryId: string, params: RequestParams = {}) =>
      this.request<Imt, any>({
        path: `/categorys/${categoryId}/add_to_imt/`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categorys
     * @name CategorysDeleteDelete
     * @request DELETE:/categorys/{category_id}/delete/
     * @secure
     */
    categorysDeleteDelete: (categoryId: string, params: RequestParams = {}) =>
      this.request<Category, any>({
        path: `/categorys/${categoryId}/delete/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categorys
     * @name CategorysUpdateUpdate
     * @request PUT:/categorys/{category_id}/update/
     * @secure
     */
    categorysUpdateUpdate: (categoryId: string, data: Category, params: RequestParams = {}) =>
      this.request<Category, any>({
        path: `/categorys/${categoryId}/update/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categorys
     * @name CategorysUpdateImageCreate
     * @request POST:/categorys/{category_id}/update_image/
     * @secure
     */
    categorysUpdateImageCreate: (
      categoryId: string,
      data: {
        /** @format binary */
        image?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<Category, any>({
        path: `/categorys/${categoryId}/update_image/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  imts = {
    /**
     * No description
     *
     * @tags imts
     * @name ImtsList
     * @request GET:/imts/
     * @secure
     */
    imtsList: (
      query?: {
        status?: number;
        date_formation_start?: string;
        date_formation_end?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Imts[], any>({
        path: `/imts/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags imts
     * @name ImtsCartList
     * @request GET:/imts/cart/
     * @secure
     */
    imtsCartList: (params: RequestParams = {}) =>
      this.request<
        {
          categorys_count: number;
          draft_imt: number;
        },
        any
      >({
        path: `/imts/cart/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags imts
     * @name ImtsRead
     * @request GET:/imts/{imt_id}/
     * @secure
     */
    imtsRead: (imtId: string, params: RequestParams = {}) =>
      this.request<Imt, any>({
        path: `/imts/${imtId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags imts
     * @name ImtsDeleteDelete
     * @request DELETE:/imts/{imt_id}/delete/
     * @secure
     */
    imtsDeleteDelete: (imtId: string, params: RequestParams = {}) =>
      this.request<Imt, any>({
        path: `/imts/${imtId}/delete/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags imts
     * @name ImtsDeleteCategoryDelete
     * @request DELETE:/imts/{imt_id}/delete_category/{category_id}/
     * @secure
     */
    imtsDeleteCategoryDelete: (imtId: string, categoryId: string, params: RequestParams = {}) =>
      this.request<CategoryItem[], any>({
        path: `/imts/${imtId}/delete_category/${categoryId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags imts
     * @name ImtsUpdateUpdate
     * @request PUT:/imts/{imt_id}/update/
     * @secure
     */
    imtsUpdateUpdate: (imtId: string, data: Imt, params: RequestParams = {}) =>
      this.request<Imt, any>({
        path: `/imts/${imtId}/update/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags imts
     * @name ImtsUpdateCategoryUpdate
     * @request PUT:/imts/{imt_id}/update_category/{category_id}/
     * @secure
     */
    imtsUpdateCategoryUpdate: (
      imtId: string,
      categoryId: string,
      data: {
        weight: number;
        height: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CategoryImt, any>({
        path: `/imts/${imtId}/update_category/${categoryId}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags imts
     * @name ImtsUpdateFactorUpdate
     * @request PUT:/imts/{imt_id}/update_factor/{category_id}/
     * @secure
     */
    imtsUpdateFactorUpdate: (imtId: string, categoryId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/imts/${imtId}/update_factor/${categoryId}/`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags imts
     * @name ImtsUpdateStatusAdminUpdate
     * @request PUT:/imts/{imt_id}/update_status_admin/
     * @secure
     */
    imtsUpdateStatusAdminUpdate: (
      imtId: string,
      data: {
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Imt, any>({
        path: `/imts/${imtId}/update_status_admin/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags imts
     * @name ImtsUpdateStatusUserUpdate
     * @request PUT:/imts/{imt_id}/update_status_user/
     * @secure
     */
    imtsUpdateStatusUserUpdate: (imtId: string, params: RequestParams = {}) =>
      this.request<Imt, any>({
        path: `/imts/${imtId}/update_status_user/`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags users
     * @name UsersInfoList
     * @request GET:/users/info/
     * @secure
     */
    usersInfoList: (params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/info/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersLoginCreate
     * @request POST:/users/login/
     * @secure
     */
    usersLoginCreate: (data: UserLogin, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/login/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersLogoutCreate
     * @request POST:/users/logout/
     * @secure
     */
    usersLogoutCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/logout/`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersRegisterCreate
     * @request POST:/users/register/
     * @secure
     */
    usersRegisterCreate: (data: UserRegister, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/register/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersUpdateUpdate
     * @request PUT:/users/update/
     * @secure
     */
    usersUpdateUpdate: (data: UserUpdateProfile, params: RequestParams = {}) =>
      this.request<UserUpdateProfile, any>({
        path: `/users/update/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
