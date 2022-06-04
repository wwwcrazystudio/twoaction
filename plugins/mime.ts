import { lookup } from 'mime-types'

export default ({ _app }: { _app: any }, inject: any) => {
  inject('mimeType', (file: string) => {
    const type = lookup(file) as string
    return type
  })
}
