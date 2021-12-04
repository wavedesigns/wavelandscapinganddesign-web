export interface Service {
  title: string
  description: string
  id?: string
  displayImage: {
    id: string | number
    url: string
    fileName: string
  }
}
