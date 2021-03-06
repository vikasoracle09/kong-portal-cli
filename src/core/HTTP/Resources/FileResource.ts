
export interface FileResourceJSON {
  /** UUID */
  id?: string
  /** File path from workspace root */
  path: string
  /** Raw file content */
  contents: string
  /** Sha256 Checksum */
  checksum?: string
  /** @deprecated since 0.36 */
  auth?: boolean
}

export default class FileResource implements FileResourceJSON {
  public id?: string
  public path: string
  public contents: string
  public checksum?: string
  public auth?: boolean

  public constructor(json: FileResourceJSON) {

    this.id = json.id
    this.path = json.path
    this.contents = json.contents
    this.checksum = json.checksum
    this.auth = json.auth
  }
}
