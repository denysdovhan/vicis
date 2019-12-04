export enum TYPES_ENUM {
  BOOLEAN = "boolean",
  NUMERIC = "numeric",
  INTEGER = "integer",
  STRING = "string",
  JSON = "json",
}

export interface IAlterMeOptions {
  cast: { [prop: string]: TYPES_ENUM };
  defined: string[];
  omit: string[];
  pick: string[];
  rename: { [prop: string]: string };
  replace: { [prop: string]: any };
  required: string[];
  transform: { [prop: string]: Function };
}

export declare class AlterMe {
  /**
   * @public
   * @constructor
   * @param {object} data
   * @param {object=} config
   */
  public constructor(data: object, config);
  /**
   * @public
   * @return {{}}
   */
  public getConfig(): IAlterMeOptions;
}
