//
declare namespace Ajax {
  //接口返回数据
  export interface AxiosResponse {
    data: AxiosResponse
  }
  //接口请求数据
  export interface AjaxResponse {
    code: number,
    data: any,
    message: string
  }
}
