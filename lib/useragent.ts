export default class UserAgent {
  private readonly _agent: string
  public constructor (originUA: string) {
    this._agent = originUA
  }
  public get isWeixin(): boolean {
    return /MicroMessenger/i.test(this._agent)
  }
  public get isVmovierApp(): boolean {
    return /VmovierApp/i.test(this._agent)
  }
  public get isXpcApp(): boolean {
    return /NewStudios/i.test(this._agent)
  }
  public get isMobile(): boolean {
    return /Mobile/i.test(this._agent)
  }
  public get isIOS(): boolean {
    return /iphone|ipad|ipod/i.test(this._agent)
  }
  public get xpcAppVersion(): RegExpExecArray | null {
    return /NewStudios(?:Enterprise)?\/(\d+\.\d+\.\d+)/gm.exec(this._agent)
  }
}