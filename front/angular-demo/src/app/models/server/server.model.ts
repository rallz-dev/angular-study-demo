export interface ServerResponse {
  data: {
    prop1: string,
    prop2: string
  }[],
  pagination: {
    pages: number,
    count: number,
    total: number
  }
}
