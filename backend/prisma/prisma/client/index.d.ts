
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PostType
 * 
 */
export type PostType = $Result.DefaultSelection<Prisma.$PostTypePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PostTypes
 * const postTypes = await prisma.postType.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PostTypes
   * const postTypes = await prisma.postType.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.postType`: Exposes CRUD operations for the **PostType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostTypes
    * const postTypes = await prisma.postType.findMany()
    * ```
    */
  get postType(): Prisma.PostTypeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PostType: 'PostType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'postType'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      PostType: {
        payload: Prisma.$PostTypePayload<ExtArgs>
        fields: Prisma.PostTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostTypePayload>
          }
          findFirst: {
            args: Prisma.PostTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostTypePayload>
          }
          findMany: {
            args: Prisma.PostTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostTypePayload>[]
          }
          create: {
            args: Prisma.PostTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostTypePayload>
          }
          createMany: {
            args: Prisma.PostTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostTypePayload>
          }
          update: {
            args: Prisma.PostTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostTypePayload>
          }
          deleteMany: {
            args: Prisma.PostTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostTypePayload>
          }
          aggregate: {
            args: Prisma.PostTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePostType>
          }
          groupBy: {
            args: Prisma.PostTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<PostTypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model PostType
   */

  export type AggregatePostType = {
    _count: PostTypeCountAggregateOutputType | null
    _avg: PostTypeAvgAggregateOutputType | null
    _sum: PostTypeSumAggregateOutputType | null
    _min: PostTypeMinAggregateOutputType | null
    _max: PostTypeMaxAggregateOutputType | null
  }

  export type PostTypeAvgAggregateOutputType = {
    id: number | null
    entryNumber: number | null
    shareNumber: number | null
  }

  export type PostTypeSumAggregateOutputType = {
    id: number | null
    entryNumber: number | null
    shareNumber: number | null
  }

  export type PostTypeMinAggregateOutputType = {
    id: number | null
    image: string | null
    title: string | null
    description: string | null
    entryNumber: number | null
    companyLogo: string | null
    companyName: string | null
    shareNumber: number | null
  }

  export type PostTypeMaxAggregateOutputType = {
    id: number | null
    image: string | null
    title: string | null
    description: string | null
    entryNumber: number | null
    companyLogo: string | null
    companyName: string | null
    shareNumber: number | null
  }

  export type PostTypeCountAggregateOutputType = {
    id: number
    image: number
    hashtags: number
    title: number
    description: number
    entryNumber: number
    companyLogo: number
    companyName: number
    shareNumber: number
    _all: number
  }


  export type PostTypeAvgAggregateInputType = {
    id?: true
    entryNumber?: true
    shareNumber?: true
  }

  export type PostTypeSumAggregateInputType = {
    id?: true
    entryNumber?: true
    shareNumber?: true
  }

  export type PostTypeMinAggregateInputType = {
    id?: true
    image?: true
    title?: true
    description?: true
    entryNumber?: true
    companyLogo?: true
    companyName?: true
    shareNumber?: true
  }

  export type PostTypeMaxAggregateInputType = {
    id?: true
    image?: true
    title?: true
    description?: true
    entryNumber?: true
    companyLogo?: true
    companyName?: true
    shareNumber?: true
  }

  export type PostTypeCountAggregateInputType = {
    id?: true
    image?: true
    hashtags?: true
    title?: true
    description?: true
    entryNumber?: true
    companyLogo?: true
    companyName?: true
    shareNumber?: true
    _all?: true
  }

  export type PostTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostType to aggregate.
     */
    where?: PostTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTypes to fetch.
     */
    orderBy?: PostTypeOrderByWithRelationInput | PostTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostTypes
    **/
    _count?: true | PostTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostTypeMaxAggregateInputType
  }

  export type GetPostTypeAggregateType<T extends PostTypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePostType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostType[P]>
      : GetScalarType<T[P], AggregatePostType[P]>
  }




  export type PostTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTypeWhereInput
    orderBy?: PostTypeOrderByWithAggregationInput | PostTypeOrderByWithAggregationInput[]
    by: PostTypeScalarFieldEnum[] | PostTypeScalarFieldEnum
    having?: PostTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostTypeCountAggregateInputType | true
    _avg?: PostTypeAvgAggregateInputType
    _sum?: PostTypeSumAggregateInputType
    _min?: PostTypeMinAggregateInputType
    _max?: PostTypeMaxAggregateInputType
  }

  export type PostTypeGroupByOutputType = {
    id: number
    image: string
    hashtags: string[]
    title: string
    description: string
    entryNumber: number
    companyLogo: string
    companyName: string
    shareNumber: number
    _count: PostTypeCountAggregateOutputType | null
    _avg: PostTypeAvgAggregateOutputType | null
    _sum: PostTypeSumAggregateOutputType | null
    _min: PostTypeMinAggregateOutputType | null
    _max: PostTypeMaxAggregateOutputType | null
  }

  type GetPostTypeGroupByPayload<T extends PostTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostTypeGroupByOutputType[P]>
            : GetScalarType<T[P], PostTypeGroupByOutputType[P]>
        }
      >
    >


  export type PostTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    hashtags?: boolean
    title?: boolean
    description?: boolean
    entryNumber?: boolean
    companyLogo?: boolean
    companyName?: boolean
    shareNumber?: boolean
  }, ExtArgs["result"]["postType"]>

  export type PostTypeSelectScalar = {
    id?: boolean
    image?: boolean
    hashtags?: boolean
    title?: boolean
    description?: boolean
    entryNumber?: boolean
    companyLogo?: boolean
    companyName?: boolean
    shareNumber?: boolean
  }



  export type $PostTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      hashtags: string[]
      title: string
      description: string
      entryNumber: number
      companyLogo: string
      companyName: string
      shareNumber: number
    }, ExtArgs["result"]["postType"]>
    composites: {}
  }


  type PostTypeGetPayload<S extends boolean | null | undefined | PostTypeDefaultArgs> = $Result.GetResult<Prisma.$PostTypePayload, S>

  type PostTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostTypeCountAggregateInputType | true
    }

  export interface PostTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostType'], meta: { name: 'PostType' } }
    /**
     * Find zero or one PostType that matches the filter.
     * @param {PostTypeFindUniqueArgs} args - Arguments to find a PostType
     * @example
     * // Get one PostType
     * const postType = await prisma.postType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__PostTypeClient<$Result.GetResult<Prisma.$PostTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PostType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostTypeFindUniqueOrThrowArgs} args - Arguments to find a PostType
     * @example
     * // Get one PostType
     * const postType = await prisma.postType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostTypeClient<$Result.GetResult<Prisma.$PostTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PostType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeFindFirstArgs} args - Arguments to find a PostType
     * @example
     * // Get one PostType
     * const postType = await prisma.postType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostTypeFindFirstArgs<ExtArgs>>
    ): Prisma__PostTypeClient<$Result.GetResult<Prisma.$PostTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PostType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeFindFirstOrThrowArgs} args - Arguments to find a PostType
     * @example
     * // Get one PostType
     * const postType = await prisma.postType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostTypeClient<$Result.GetResult<Prisma.$PostTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PostTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTypes
     * const postTypes = await prisma.postType.findMany()
     * 
     * // Get first 10 PostTypes
     * const postTypes = await prisma.postType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postTypeWithIdOnly = await prisma.postType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PostType.
     * @param {PostTypeCreateArgs} args - Arguments to create a PostType.
     * @example
     * // Create one PostType
     * const PostType = await prisma.postType.create({
     *   data: {
     *     // ... data to create a PostType
     *   }
     * })
     * 
    **/
    create<T extends PostTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostTypeCreateArgs<ExtArgs>>
    ): Prisma__PostTypeClient<$Result.GetResult<Prisma.$PostTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PostTypes.
     *     @param {PostTypeCreateManyArgs} args - Arguments to create many PostTypes.
     *     @example
     *     // Create many PostTypes
     *     const postType = await prisma.postType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostType.
     * @param {PostTypeDeleteArgs} args - Arguments to delete one PostType.
     * @example
     * // Delete one PostType
     * const PostType = await prisma.postType.delete({
     *   where: {
     *     // ... filter to delete one PostType
     *   }
     * })
     * 
    **/
    delete<T extends PostTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostTypeDeleteArgs<ExtArgs>>
    ): Prisma__PostTypeClient<$Result.GetResult<Prisma.$PostTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PostType.
     * @param {PostTypeUpdateArgs} args - Arguments to update one PostType.
     * @example
     * // Update one PostType
     * const postType = await prisma.postType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostTypeUpdateArgs<ExtArgs>>
    ): Prisma__PostTypeClient<$Result.GetResult<Prisma.$PostTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PostTypes.
     * @param {PostTypeDeleteManyArgs} args - Arguments to filter PostTypes to delete.
     * @example
     * // Delete a few PostTypes
     * const { count } = await prisma.postType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTypes
     * const postType = await prisma.postType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostType.
     * @param {PostTypeUpsertArgs} args - Arguments to update or create a PostType.
     * @example
     * // Update or create a PostType
     * const postType = await prisma.postType.upsert({
     *   create: {
     *     // ... data to create a PostType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostType we want to update
     *   }
     * })
    **/
    upsert<T extends PostTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostTypeUpsertArgs<ExtArgs>>
    ): Prisma__PostTypeClient<$Result.GetResult<Prisma.$PostTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PostTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeCountArgs} args - Arguments to filter PostTypes to count.
     * @example
     * // Count the number of PostTypes
     * const count = await prisma.postType.count({
     *   where: {
     *     // ... the filter for the PostTypes we want to count
     *   }
     * })
    **/
    count<T extends PostTypeCountArgs>(
      args?: Subset<T, PostTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostTypeAggregateArgs>(args: Subset<T, PostTypeAggregateArgs>): Prisma.PrismaPromise<GetPostTypeAggregateType<T>>

    /**
     * Group by PostType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostTypeGroupByArgs['orderBy'] }
        : { orderBy?: PostTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostType model
   */
  readonly fields: PostTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PostType model
   */ 
  interface PostTypeFieldRefs {
    readonly id: FieldRef<"PostType", 'Int'>
    readonly image: FieldRef<"PostType", 'String'>
    readonly hashtags: FieldRef<"PostType", 'String[]'>
    readonly title: FieldRef<"PostType", 'String'>
    readonly description: FieldRef<"PostType", 'String'>
    readonly entryNumber: FieldRef<"PostType", 'Int'>
    readonly companyLogo: FieldRef<"PostType", 'String'>
    readonly companyName: FieldRef<"PostType", 'String'>
    readonly shareNumber: FieldRef<"PostType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostType findUnique
   */
  export type PostTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null
    /**
     * Filter, which PostType to fetch.
     */
    where: PostTypeWhereUniqueInput
  }

  /**
   * PostType findUniqueOrThrow
   */
  export type PostTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null
    /**
     * Filter, which PostType to fetch.
     */
    where: PostTypeWhereUniqueInput
  }

  /**
   * PostType findFirst
   */
  export type PostTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null
    /**
     * Filter, which PostType to fetch.
     */
    where?: PostTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTypes to fetch.
     */
    orderBy?: PostTypeOrderByWithRelationInput | PostTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTypes.
     */
    cursor?: PostTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTypes.
     */
    distinct?: PostTypeScalarFieldEnum | PostTypeScalarFieldEnum[]
  }

  /**
   * PostType findFirstOrThrow
   */
  export type PostTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null
    /**
     * Filter, which PostType to fetch.
     */
    where?: PostTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTypes to fetch.
     */
    orderBy?: PostTypeOrderByWithRelationInput | PostTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTypes.
     */
    cursor?: PostTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTypes.
     */
    distinct?: PostTypeScalarFieldEnum | PostTypeScalarFieldEnum[]
  }

  /**
   * PostType findMany
   */
  export type PostTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null
    /**
     * Filter, which PostTypes to fetch.
     */
    where?: PostTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTypes to fetch.
     */
    orderBy?: PostTypeOrderByWithRelationInput | PostTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostTypes.
     */
    cursor?: PostTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTypes.
     */
    skip?: number
    distinct?: PostTypeScalarFieldEnum | PostTypeScalarFieldEnum[]
  }

  /**
   * PostType create
   */
  export type PostTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null
    /**
     * The data needed to create a PostType.
     */
    data: XOR<PostTypeCreateInput, PostTypeUncheckedCreateInput>
  }

  /**
   * PostType createMany
   */
  export type PostTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostTypes.
     */
    data: PostTypeCreateManyInput | PostTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostType update
   */
  export type PostTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null
    /**
     * The data needed to update a PostType.
     */
    data: XOR<PostTypeUpdateInput, PostTypeUncheckedUpdateInput>
    /**
     * Choose, which PostType to update.
     */
    where: PostTypeWhereUniqueInput
  }

  /**
   * PostType updateMany
   */
  export type PostTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostTypes.
     */
    data: XOR<PostTypeUpdateManyMutationInput, PostTypeUncheckedUpdateManyInput>
    /**
     * Filter which PostTypes to update
     */
    where?: PostTypeWhereInput
  }

  /**
   * PostType upsert
   */
  export type PostTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null
    /**
     * The filter to search for the PostType to update in case it exists.
     */
    where: PostTypeWhereUniqueInput
    /**
     * In case the PostType found by the `where` argument doesn't exist, create a new PostType with this data.
     */
    create: XOR<PostTypeCreateInput, PostTypeUncheckedCreateInput>
    /**
     * In case the PostType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostTypeUpdateInput, PostTypeUncheckedUpdateInput>
  }

  /**
   * PostType delete
   */
  export type PostTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null
    /**
     * Filter which PostType to delete.
     */
    where: PostTypeWhereUniqueInput
  }

  /**
   * PostType deleteMany
   */
  export type PostTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTypes to delete
     */
    where?: PostTypeWhereInput
  }

  /**
   * PostType without action
   */
  export type PostTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostTypeScalarFieldEnum: {
    id: 'id',
    image: 'image',
    hashtags: 'hashtags',
    title: 'title',
    description: 'description',
    entryNumber: 'entryNumber',
    companyLogo: 'companyLogo',
    companyName: 'companyName',
    shareNumber: 'shareNumber'
  };

  export type PostTypeScalarFieldEnum = (typeof PostTypeScalarFieldEnum)[keyof typeof PostTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostTypeWhereInput = {
    AND?: PostTypeWhereInput | PostTypeWhereInput[]
    OR?: PostTypeWhereInput[]
    NOT?: PostTypeWhereInput | PostTypeWhereInput[]
    id?: IntFilter<"PostType"> | number
    image?: StringFilter<"PostType"> | string
    hashtags?: StringNullableListFilter<"PostType">
    title?: StringFilter<"PostType"> | string
    description?: StringFilter<"PostType"> | string
    entryNumber?: IntFilter<"PostType"> | number
    companyLogo?: StringFilter<"PostType"> | string
    companyName?: StringFilter<"PostType"> | string
    shareNumber?: IntFilter<"PostType"> | number
  }

  export type PostTypeOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    hashtags?: SortOrder
    title?: SortOrder
    description?: SortOrder
    entryNumber?: SortOrder
    companyLogo?: SortOrder
    companyName?: SortOrder
    shareNumber?: SortOrder
  }

  export type PostTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostTypeWhereInput | PostTypeWhereInput[]
    OR?: PostTypeWhereInput[]
    NOT?: PostTypeWhereInput | PostTypeWhereInput[]
    image?: StringFilter<"PostType"> | string
    hashtags?: StringNullableListFilter<"PostType">
    title?: StringFilter<"PostType"> | string
    description?: StringFilter<"PostType"> | string
    entryNumber?: IntFilter<"PostType"> | number
    companyLogo?: StringFilter<"PostType"> | string
    companyName?: StringFilter<"PostType"> | string
    shareNumber?: IntFilter<"PostType"> | number
  }, "id">

  export type PostTypeOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    hashtags?: SortOrder
    title?: SortOrder
    description?: SortOrder
    entryNumber?: SortOrder
    companyLogo?: SortOrder
    companyName?: SortOrder
    shareNumber?: SortOrder
    _count?: PostTypeCountOrderByAggregateInput
    _avg?: PostTypeAvgOrderByAggregateInput
    _max?: PostTypeMaxOrderByAggregateInput
    _min?: PostTypeMinOrderByAggregateInput
    _sum?: PostTypeSumOrderByAggregateInput
  }

  export type PostTypeScalarWhereWithAggregatesInput = {
    AND?: PostTypeScalarWhereWithAggregatesInput | PostTypeScalarWhereWithAggregatesInput[]
    OR?: PostTypeScalarWhereWithAggregatesInput[]
    NOT?: PostTypeScalarWhereWithAggregatesInput | PostTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostType"> | number
    image?: StringWithAggregatesFilter<"PostType"> | string
    hashtags?: StringNullableListFilter<"PostType">
    title?: StringWithAggregatesFilter<"PostType"> | string
    description?: StringWithAggregatesFilter<"PostType"> | string
    entryNumber?: IntWithAggregatesFilter<"PostType"> | number
    companyLogo?: StringWithAggregatesFilter<"PostType"> | string
    companyName?: StringWithAggregatesFilter<"PostType"> | string
    shareNumber?: IntWithAggregatesFilter<"PostType"> | number
  }

  export type PostTypeCreateInput = {
    image: string
    hashtags?: PostTypeCreatehashtagsInput | string[]
    title: string
    description: string
    entryNumber: number
    companyLogo: string
    companyName: string
    shareNumber: number
  }

  export type PostTypeUncheckedCreateInput = {
    id?: number
    image: string
    hashtags?: PostTypeCreatehashtagsInput | string[]
    title: string
    description: string
    entryNumber: number
    companyLogo: string
    companyName: string
    shareNumber: number
  }

  export type PostTypeUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    hashtags?: PostTypeUpdatehashtagsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    entryNumber?: IntFieldUpdateOperationsInput | number
    companyLogo?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    shareNumber?: IntFieldUpdateOperationsInput | number
  }

  export type PostTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    hashtags?: PostTypeUpdatehashtagsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    entryNumber?: IntFieldUpdateOperationsInput | number
    companyLogo?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    shareNumber?: IntFieldUpdateOperationsInput | number
  }

  export type PostTypeCreateManyInput = {
    id?: number
    image: string
    hashtags?: PostTypeCreatehashtagsInput | string[]
    title: string
    description: string
    entryNumber: number
    companyLogo: string
    companyName: string
    shareNumber: number
  }

  export type PostTypeUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    hashtags?: PostTypeUpdatehashtagsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    entryNumber?: IntFieldUpdateOperationsInput | number
    companyLogo?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    shareNumber?: IntFieldUpdateOperationsInput | number
  }

  export type PostTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    hashtags?: PostTypeUpdatehashtagsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    entryNumber?: IntFieldUpdateOperationsInput | number
    companyLogo?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    shareNumber?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PostTypeCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    hashtags?: SortOrder
    title?: SortOrder
    description?: SortOrder
    entryNumber?: SortOrder
    companyLogo?: SortOrder
    companyName?: SortOrder
    shareNumber?: SortOrder
  }

  export type PostTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    entryNumber?: SortOrder
    shareNumber?: SortOrder
  }

  export type PostTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    entryNumber?: SortOrder
    companyLogo?: SortOrder
    companyName?: SortOrder
    shareNumber?: SortOrder
  }

  export type PostTypeMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    entryNumber?: SortOrder
    companyLogo?: SortOrder
    companyName?: SortOrder
    shareNumber?: SortOrder
  }

  export type PostTypeSumOrderByAggregateInput = {
    id?: SortOrder
    entryNumber?: SortOrder
    shareNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PostTypeCreatehashtagsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PostTypeUpdatehashtagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PostTypeDefaultArgs instead
     */
    export type PostTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostTypeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}