
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model kegiatan
 * 
 */
export type kegiatan = $Result.DefaultSelection<Prisma.$kegiatanPayload>
/**
 * Model peminjaman
 * 
 */
export type peminjaman = $Result.DefaultSelection<Prisma.$peminjamanPayload>
/**
 * Model proyektor
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type proyektor = $Result.DefaultSelection<Prisma.$proyektorPayload>
/**
 * Model transaksi
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type transaksi = $Result.DefaultSelection<Prisma.$transaksiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kegiatan`: Exposes CRUD operations for the **kegiatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kegiatans
    * const kegiatans = await prisma.kegiatan.findMany()
    * ```
    */
  get kegiatan(): Prisma.kegiatanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peminjaman`: Exposes CRUD operations for the **peminjaman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peminjamen
    * const peminjamen = await prisma.peminjaman.findMany()
    * ```
    */
  get peminjaman(): Prisma.peminjamanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proyektor`: Exposes CRUD operations for the **proyektor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proyektors
    * const proyektors = await prisma.proyektor.findMany()
    * ```
    */
  get proyektor(): Prisma.proyektorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaksi`: Exposes CRUD operations for the **transaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaksis
    * const transaksis = await prisma.transaksi.findMany()
    * ```
    */
  get transaksi(): Prisma.transaksiDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    kegiatan: 'kegiatan',
    peminjaman: 'peminjaman',
    proyektor: 'proyektor',
    transaksi: 'transaksi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "kegiatan" | "peminjaman" | "proyektor" | "transaksi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      kegiatan: {
        payload: Prisma.$kegiatanPayload<ExtArgs>
        fields: Prisma.kegiatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kegiatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kegiatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          findFirst: {
            args: Prisma.kegiatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kegiatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          findMany: {
            args: Prisma.kegiatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>[]
          }
          create: {
            args: Prisma.kegiatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          createMany: {
            args: Prisma.kegiatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.kegiatanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>[]
          }
          delete: {
            args: Prisma.kegiatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          update: {
            args: Prisma.kegiatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          deleteMany: {
            args: Prisma.kegiatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kegiatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.kegiatanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>[]
          }
          upsert: {
            args: Prisma.kegiatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          aggregate: {
            args: Prisma.KegiatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKegiatan>
          }
          groupBy: {
            args: Prisma.kegiatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KegiatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.kegiatanCountArgs<ExtArgs>
            result: $Utils.Optional<KegiatanCountAggregateOutputType> | number
          }
        }
      }
      peminjaman: {
        payload: Prisma.$peminjamanPayload<ExtArgs>
        fields: Prisma.peminjamanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.peminjamanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.peminjamanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          findFirst: {
            args: Prisma.peminjamanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.peminjamanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          findMany: {
            args: Prisma.peminjamanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>[]
          }
          create: {
            args: Prisma.peminjamanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          createMany: {
            args: Prisma.peminjamanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.peminjamanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>[]
          }
          delete: {
            args: Prisma.peminjamanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          update: {
            args: Prisma.peminjamanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          deleteMany: {
            args: Prisma.peminjamanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.peminjamanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.peminjamanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>[]
          }
          upsert: {
            args: Prisma.peminjamanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          aggregate: {
            args: Prisma.PeminjamanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeminjaman>
          }
          groupBy: {
            args: Prisma.peminjamanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanGroupByOutputType>[]
          }
          count: {
            args: Prisma.peminjamanCountArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanCountAggregateOutputType> | number
          }
        }
      }
      proyektor: {
        payload: Prisma.$proyektorPayload<ExtArgs>
        fields: Prisma.proyektorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.proyektorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyektorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.proyektorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyektorPayload>
          }
          findFirst: {
            args: Prisma.proyektorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyektorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.proyektorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyektorPayload>
          }
          findMany: {
            args: Prisma.proyektorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyektorPayload>[]
          }
          create: {
            args: Prisma.proyektorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyektorPayload>
          }
          createMany: {
            args: Prisma.proyektorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.proyektorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyektorPayload>[]
          }
          delete: {
            args: Prisma.proyektorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyektorPayload>
          }
          update: {
            args: Prisma.proyektorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyektorPayload>
          }
          deleteMany: {
            args: Prisma.proyektorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.proyektorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.proyektorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyektorPayload>[]
          }
          upsert: {
            args: Prisma.proyektorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyektorPayload>
          }
          aggregate: {
            args: Prisma.ProyektorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProyektor>
          }
          groupBy: {
            args: Prisma.proyektorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProyektorGroupByOutputType>[]
          }
          count: {
            args: Prisma.proyektorCountArgs<ExtArgs>
            result: $Utils.Optional<ProyektorCountAggregateOutputType> | number
          }
        }
      }
      transaksi: {
        payload: Prisma.$transaksiPayload<ExtArgs>
        fields: Prisma.transaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          findFirst: {
            args: Prisma.transaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          findMany: {
            args: Prisma.transaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>[]
          }
          create: {
            args: Prisma.transaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          createMany: {
            args: Prisma.transaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaksiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>[]
          }
          delete: {
            args: Prisma.transaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          update: {
            args: Prisma.transaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          deleteMany: {
            args: Prisma.transaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaksiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>[]
          }
          upsert: {
            args: Prisma.transaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          aggregate: {
            args: Prisma.TransaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksi>
          }
          groupBy: {
            args: Prisma.transaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaksiCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    kegiatan?: kegiatanOmit
    peminjaman?: peminjamanOmit
    proyektor?: proyektorOmit
    transaksi?: transaksiOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type PeminjamanCountOutputType
   */

  export type PeminjamanCountOutputType = {
    transaksi: number
  }

  export type PeminjamanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | PeminjamanCountOutputTypeCountTransaksiArgs
  }

  // Custom InputTypes
  /**
   * PeminjamanCountOutputType without action
   */
  export type PeminjamanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanCountOutputType
     */
    select?: PeminjamanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeminjamanCountOutputType without action
   */
  export type PeminjamanCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksiWhereInput
  }


  /**
   * Count Type ProyektorCountOutputType
   */

  export type ProyektorCountOutputType = {
    transaksi: number
  }

  export type ProyektorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | ProyektorCountOutputTypeCountTransaksiArgs
  }

  // Custom InputTypes
  /**
   * ProyektorCountOutputType without action
   */
  export type ProyektorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProyektorCountOutputType
     */
    select?: ProyektorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProyektorCountOutputType without action
   */
  export type ProyektorCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model kegiatan
   */

  export type AggregateKegiatan = {
    _count: KegiatanCountAggregateOutputType | null
    _min: KegiatanMinAggregateOutputType | null
    _max: KegiatanMaxAggregateOutputType | null
  }

  export type KegiatanMinAggregateOutputType = {
    kode_transaksi: string | null
    kegiatan: string | null
    tempat: string | null
    waktu: Date | null
  }

  export type KegiatanMaxAggregateOutputType = {
    kode_transaksi: string | null
    kegiatan: string | null
    tempat: string | null
    waktu: Date | null
  }

  export type KegiatanCountAggregateOutputType = {
    kode_transaksi: number
    kegiatan: number
    tempat: number
    waktu: number
    _all: number
  }


  export type KegiatanMinAggregateInputType = {
    kode_transaksi?: true
    kegiatan?: true
    tempat?: true
    waktu?: true
  }

  export type KegiatanMaxAggregateInputType = {
    kode_transaksi?: true
    kegiatan?: true
    tempat?: true
    waktu?: true
  }

  export type KegiatanCountAggregateInputType = {
    kode_transaksi?: true
    kegiatan?: true
    tempat?: true
    waktu?: true
    _all?: true
  }

  export type KegiatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kegiatan to aggregate.
     */
    where?: kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kegiatans to fetch.
     */
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kegiatans
    **/
    _count?: true | KegiatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KegiatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KegiatanMaxAggregateInputType
  }

  export type GetKegiatanAggregateType<T extends KegiatanAggregateArgs> = {
        [P in keyof T & keyof AggregateKegiatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKegiatan[P]>
      : GetScalarType<T[P], AggregateKegiatan[P]>
  }




  export type kegiatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kegiatanWhereInput
    orderBy?: kegiatanOrderByWithAggregationInput | kegiatanOrderByWithAggregationInput[]
    by: KegiatanScalarFieldEnum[] | KegiatanScalarFieldEnum
    having?: kegiatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KegiatanCountAggregateInputType | true
    _min?: KegiatanMinAggregateInputType
    _max?: KegiatanMaxAggregateInputType
  }

  export type KegiatanGroupByOutputType = {
    kode_transaksi: string
    kegiatan: string | null
    tempat: string | null
    waktu: Date | null
    _count: KegiatanCountAggregateOutputType | null
    _min: KegiatanMinAggregateOutputType | null
    _max: KegiatanMaxAggregateOutputType | null
  }

  type GetKegiatanGroupByPayload<T extends kegiatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KegiatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KegiatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KegiatanGroupByOutputType[P]>
            : GetScalarType<T[P], KegiatanGroupByOutputType[P]>
        }
      >
    >


  export type kegiatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_transaksi?: boolean
    kegiatan?: boolean
    tempat?: boolean
    waktu?: boolean
    transaksi?: boolean | transaksiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kegiatan"]>

  export type kegiatanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_transaksi?: boolean
    kegiatan?: boolean
    tempat?: boolean
    waktu?: boolean
    transaksi?: boolean | transaksiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kegiatan"]>

  export type kegiatanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_transaksi?: boolean
    kegiatan?: boolean
    tempat?: boolean
    waktu?: boolean
    transaksi?: boolean | transaksiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kegiatan"]>

  export type kegiatanSelectScalar = {
    kode_transaksi?: boolean
    kegiatan?: boolean
    tempat?: boolean
    waktu?: boolean
  }

  export type kegiatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kode_transaksi" | "kegiatan" | "tempat" | "waktu", ExtArgs["result"]["kegiatan"]>
  export type kegiatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | transaksiDefaultArgs<ExtArgs>
  }
  export type kegiatanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | transaksiDefaultArgs<ExtArgs>
  }
  export type kegiatanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | transaksiDefaultArgs<ExtArgs>
  }

  export type $kegiatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kegiatan"
    objects: {
      transaksi: Prisma.$transaksiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      kode_transaksi: string
      kegiatan: string | null
      tempat: string | null
      waktu: Date | null
    }, ExtArgs["result"]["kegiatan"]>
    composites: {}
  }

  type kegiatanGetPayload<S extends boolean | null | undefined | kegiatanDefaultArgs> = $Result.GetResult<Prisma.$kegiatanPayload, S>

  type kegiatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kegiatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KegiatanCountAggregateInputType | true
    }

  export interface kegiatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kegiatan'], meta: { name: 'kegiatan' } }
    /**
     * Find zero or one Kegiatan that matches the filter.
     * @param {kegiatanFindUniqueArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kegiatanFindUniqueArgs>(args: SelectSubset<T, kegiatanFindUniqueArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kegiatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kegiatanFindUniqueOrThrowArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kegiatanFindUniqueOrThrowArgs>(args: SelectSubset<T, kegiatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kegiatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanFindFirstArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kegiatanFindFirstArgs>(args?: SelectSubset<T, kegiatanFindFirstArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kegiatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanFindFirstOrThrowArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kegiatanFindFirstOrThrowArgs>(args?: SelectSubset<T, kegiatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kegiatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kegiatans
     * const kegiatans = await prisma.kegiatan.findMany()
     * 
     * // Get first 10 Kegiatans
     * const kegiatans = await prisma.kegiatan.findMany({ take: 10 })
     * 
     * // Only select the `kode_transaksi`
     * const kegiatanWithKode_transaksiOnly = await prisma.kegiatan.findMany({ select: { kode_transaksi: true } })
     * 
     */
    findMany<T extends kegiatanFindManyArgs>(args?: SelectSubset<T, kegiatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kegiatan.
     * @param {kegiatanCreateArgs} args - Arguments to create a Kegiatan.
     * @example
     * // Create one Kegiatan
     * const Kegiatan = await prisma.kegiatan.create({
     *   data: {
     *     // ... data to create a Kegiatan
     *   }
     * })
     * 
     */
    create<T extends kegiatanCreateArgs>(args: SelectSubset<T, kegiatanCreateArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kegiatans.
     * @param {kegiatanCreateManyArgs} args - Arguments to create many Kegiatans.
     * @example
     * // Create many Kegiatans
     * const kegiatan = await prisma.kegiatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kegiatanCreateManyArgs>(args?: SelectSubset<T, kegiatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kegiatans and returns the data saved in the database.
     * @param {kegiatanCreateManyAndReturnArgs} args - Arguments to create many Kegiatans.
     * @example
     * // Create many Kegiatans
     * const kegiatan = await prisma.kegiatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kegiatans and only return the `kode_transaksi`
     * const kegiatanWithKode_transaksiOnly = await prisma.kegiatan.createManyAndReturn({
     *   select: { kode_transaksi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends kegiatanCreateManyAndReturnArgs>(args?: SelectSubset<T, kegiatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kegiatan.
     * @param {kegiatanDeleteArgs} args - Arguments to delete one Kegiatan.
     * @example
     * // Delete one Kegiatan
     * const Kegiatan = await prisma.kegiatan.delete({
     *   where: {
     *     // ... filter to delete one Kegiatan
     *   }
     * })
     * 
     */
    delete<T extends kegiatanDeleteArgs>(args: SelectSubset<T, kegiatanDeleteArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kegiatan.
     * @param {kegiatanUpdateArgs} args - Arguments to update one Kegiatan.
     * @example
     * // Update one Kegiatan
     * const kegiatan = await prisma.kegiatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kegiatanUpdateArgs>(args: SelectSubset<T, kegiatanUpdateArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kegiatans.
     * @param {kegiatanDeleteManyArgs} args - Arguments to filter Kegiatans to delete.
     * @example
     * // Delete a few Kegiatans
     * const { count } = await prisma.kegiatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kegiatanDeleteManyArgs>(args?: SelectSubset<T, kegiatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kegiatans
     * const kegiatan = await prisma.kegiatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kegiatanUpdateManyArgs>(args: SelectSubset<T, kegiatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kegiatans and returns the data updated in the database.
     * @param {kegiatanUpdateManyAndReturnArgs} args - Arguments to update many Kegiatans.
     * @example
     * // Update many Kegiatans
     * const kegiatan = await prisma.kegiatan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kegiatans and only return the `kode_transaksi`
     * const kegiatanWithKode_transaksiOnly = await prisma.kegiatan.updateManyAndReturn({
     *   select: { kode_transaksi: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends kegiatanUpdateManyAndReturnArgs>(args: SelectSubset<T, kegiatanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kegiatan.
     * @param {kegiatanUpsertArgs} args - Arguments to update or create a Kegiatan.
     * @example
     * // Update or create a Kegiatan
     * const kegiatan = await prisma.kegiatan.upsert({
     *   create: {
     *     // ... data to create a Kegiatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kegiatan we want to update
     *   }
     * })
     */
    upsert<T extends kegiatanUpsertArgs>(args: SelectSubset<T, kegiatanUpsertArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanCountArgs} args - Arguments to filter Kegiatans to count.
     * @example
     * // Count the number of Kegiatans
     * const count = await prisma.kegiatan.count({
     *   where: {
     *     // ... the filter for the Kegiatans we want to count
     *   }
     * })
    **/
    count<T extends kegiatanCountArgs>(
      args?: Subset<T, kegiatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KegiatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KegiatanAggregateArgs>(args: Subset<T, KegiatanAggregateArgs>): Prisma.PrismaPromise<GetKegiatanAggregateType<T>>

    /**
     * Group by Kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanGroupByArgs} args - Group by arguments.
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
      T extends kegiatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kegiatanGroupByArgs['orderBy'] }
        : { orderBy?: kegiatanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kegiatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKegiatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kegiatan model
   */
  readonly fields: kegiatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kegiatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kegiatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaksi<T extends transaksiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transaksiDefaultArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the kegiatan model
   */
  interface kegiatanFieldRefs {
    readonly kode_transaksi: FieldRef<"kegiatan", 'String'>
    readonly kegiatan: FieldRef<"kegiatan", 'String'>
    readonly tempat: FieldRef<"kegiatan", 'String'>
    readonly waktu: FieldRef<"kegiatan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * kegiatan findUnique
   */
  export type kegiatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which kegiatan to fetch.
     */
    where: kegiatanWhereUniqueInput
  }

  /**
   * kegiatan findUniqueOrThrow
   */
  export type kegiatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which kegiatan to fetch.
     */
    where: kegiatanWhereUniqueInput
  }

  /**
   * kegiatan findFirst
   */
  export type kegiatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which kegiatan to fetch.
     */
    where?: kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kegiatans to fetch.
     */
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kegiatans.
     */
    cursor?: kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kegiatans.
     */
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * kegiatan findFirstOrThrow
   */
  export type kegiatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which kegiatan to fetch.
     */
    where?: kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kegiatans to fetch.
     */
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kegiatans.
     */
    cursor?: kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kegiatans.
     */
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * kegiatan findMany
   */
  export type kegiatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which kegiatans to fetch.
     */
    where?: kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kegiatans to fetch.
     */
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kegiatans.
     */
    cursor?: kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kegiatans.
     */
    skip?: number
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * kegiatan create
   */
  export type kegiatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * The data needed to create a kegiatan.
     */
    data: XOR<kegiatanCreateInput, kegiatanUncheckedCreateInput>
  }

  /**
   * kegiatan createMany
   */
  export type kegiatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kegiatans.
     */
    data: kegiatanCreateManyInput | kegiatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kegiatan createManyAndReturn
   */
  export type kegiatanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * The data used to create many kegiatans.
     */
    data: kegiatanCreateManyInput | kegiatanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * kegiatan update
   */
  export type kegiatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * The data needed to update a kegiatan.
     */
    data: XOR<kegiatanUpdateInput, kegiatanUncheckedUpdateInput>
    /**
     * Choose, which kegiatan to update.
     */
    where: kegiatanWhereUniqueInput
  }

  /**
   * kegiatan updateMany
   */
  export type kegiatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kegiatans.
     */
    data: XOR<kegiatanUpdateManyMutationInput, kegiatanUncheckedUpdateManyInput>
    /**
     * Filter which kegiatans to update
     */
    where?: kegiatanWhereInput
    /**
     * Limit how many kegiatans to update.
     */
    limit?: number
  }

  /**
   * kegiatan updateManyAndReturn
   */
  export type kegiatanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * The data used to update kegiatans.
     */
    data: XOR<kegiatanUpdateManyMutationInput, kegiatanUncheckedUpdateManyInput>
    /**
     * Filter which kegiatans to update
     */
    where?: kegiatanWhereInput
    /**
     * Limit how many kegiatans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * kegiatan upsert
   */
  export type kegiatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * The filter to search for the kegiatan to update in case it exists.
     */
    where: kegiatanWhereUniqueInput
    /**
     * In case the kegiatan found by the `where` argument doesn't exist, create a new kegiatan with this data.
     */
    create: XOR<kegiatanCreateInput, kegiatanUncheckedCreateInput>
    /**
     * In case the kegiatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kegiatanUpdateInput, kegiatanUncheckedUpdateInput>
  }

  /**
   * kegiatan delete
   */
  export type kegiatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * Filter which kegiatan to delete.
     */
    where: kegiatanWhereUniqueInput
  }

  /**
   * kegiatan deleteMany
   */
  export type kegiatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kegiatans to delete
     */
    where?: kegiatanWhereInput
    /**
     * Limit how many kegiatans to delete.
     */
    limit?: number
  }

  /**
   * kegiatan without action
   */
  export type kegiatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
  }


  /**
   * Model peminjaman
   */

  export type AggregatePeminjaman = {
    _count: PeminjamanCountAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  export type PeminjamanMinAggregateOutputType = {
    nik: string | null
    nama: string | null
    no_hp: string | null
  }

  export type PeminjamanMaxAggregateOutputType = {
    nik: string | null
    nama: string | null
    no_hp: string | null
  }

  export type PeminjamanCountAggregateOutputType = {
    nik: number
    nama: number
    no_hp: number
    _all: number
  }


  export type PeminjamanMinAggregateInputType = {
    nik?: true
    nama?: true
    no_hp?: true
  }

  export type PeminjamanMaxAggregateInputType = {
    nik?: true
    nama?: true
    no_hp?: true
  }

  export type PeminjamanCountAggregateInputType = {
    nik?: true
    nama?: true
    no_hp?: true
    _all?: true
  }

  export type PeminjamanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peminjaman to aggregate.
     */
    where?: peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peminjamen to fetch.
     */
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned peminjamen
    **/
    _count?: true | PeminjamanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeminjamanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeminjamanMaxAggregateInputType
  }

  export type GetPeminjamanAggregateType<T extends PeminjamanAggregateArgs> = {
        [P in keyof T & keyof AggregatePeminjaman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeminjaman[P]>
      : GetScalarType<T[P], AggregatePeminjaman[P]>
  }




  export type peminjamanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peminjamanWhereInput
    orderBy?: peminjamanOrderByWithAggregationInput | peminjamanOrderByWithAggregationInput[]
    by: PeminjamanScalarFieldEnum[] | PeminjamanScalarFieldEnum
    having?: peminjamanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeminjamanCountAggregateInputType | true
    _min?: PeminjamanMinAggregateInputType
    _max?: PeminjamanMaxAggregateInputType
  }

  export type PeminjamanGroupByOutputType = {
    nik: string
    nama: string | null
    no_hp: string | null
    _count: PeminjamanCountAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  type GetPeminjamanGroupByPayload<T extends peminjamanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeminjamanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeminjamanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
            : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
        }
      >
    >


  export type peminjamanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nik?: boolean
    nama?: boolean
    no_hp?: boolean
    transaksi?: boolean | peminjaman$transaksiArgs<ExtArgs>
    _count?: boolean | PeminjamanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>

  export type peminjamanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nik?: boolean
    nama?: boolean
    no_hp?: boolean
  }, ExtArgs["result"]["peminjaman"]>

  export type peminjamanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nik?: boolean
    nama?: boolean
    no_hp?: boolean
  }, ExtArgs["result"]["peminjaman"]>

  export type peminjamanSelectScalar = {
    nik?: boolean
    nama?: boolean
    no_hp?: boolean
  }

  export type peminjamanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nik" | "nama" | "no_hp", ExtArgs["result"]["peminjaman"]>
  export type peminjamanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | peminjaman$transaksiArgs<ExtArgs>
    _count?: boolean | PeminjamanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type peminjamanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type peminjamanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $peminjamanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "peminjaman"
    objects: {
      transaksi: Prisma.$transaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nik: string
      nama: string | null
      no_hp: string | null
    }, ExtArgs["result"]["peminjaman"]>
    composites: {}
  }

  type peminjamanGetPayload<S extends boolean | null | undefined | peminjamanDefaultArgs> = $Result.GetResult<Prisma.$peminjamanPayload, S>

  type peminjamanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<peminjamanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeminjamanCountAggregateInputType | true
    }

  export interface peminjamanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['peminjaman'], meta: { name: 'peminjaman' } }
    /**
     * Find zero or one Peminjaman that matches the filter.
     * @param {peminjamanFindUniqueArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends peminjamanFindUniqueArgs>(args: SelectSubset<T, peminjamanFindUniqueArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peminjaman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {peminjamanFindUniqueOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends peminjamanFindUniqueOrThrowArgs>(args: SelectSubset<T, peminjamanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanFindFirstArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends peminjamanFindFirstArgs>(args?: SelectSubset<T, peminjamanFindFirstArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanFindFirstOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends peminjamanFindFirstOrThrowArgs>(args?: SelectSubset<T, peminjamanFindFirstOrThrowArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Peminjamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany()
     * 
     * // Get first 10 Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany({ take: 10 })
     * 
     * // Only select the `nik`
     * const peminjamanWithNikOnly = await prisma.peminjaman.findMany({ select: { nik: true } })
     * 
     */
    findMany<T extends peminjamanFindManyArgs>(args?: SelectSubset<T, peminjamanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peminjaman.
     * @param {peminjamanCreateArgs} args - Arguments to create a Peminjaman.
     * @example
     * // Create one Peminjaman
     * const Peminjaman = await prisma.peminjaman.create({
     *   data: {
     *     // ... data to create a Peminjaman
     *   }
     * })
     * 
     */
    create<T extends peminjamanCreateArgs>(args: SelectSubset<T, peminjamanCreateArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Peminjamen.
     * @param {peminjamanCreateManyArgs} args - Arguments to create many Peminjamen.
     * @example
     * // Create many Peminjamen
     * const peminjaman = await prisma.peminjaman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends peminjamanCreateManyArgs>(args?: SelectSubset<T, peminjamanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Peminjamen and returns the data saved in the database.
     * @param {peminjamanCreateManyAndReturnArgs} args - Arguments to create many Peminjamen.
     * @example
     * // Create many Peminjamen
     * const peminjaman = await prisma.peminjaman.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Peminjamen and only return the `nik`
     * const peminjamanWithNikOnly = await prisma.peminjaman.createManyAndReturn({
     *   select: { nik: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends peminjamanCreateManyAndReturnArgs>(args?: SelectSubset<T, peminjamanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Peminjaman.
     * @param {peminjamanDeleteArgs} args - Arguments to delete one Peminjaman.
     * @example
     * // Delete one Peminjaman
     * const Peminjaman = await prisma.peminjaman.delete({
     *   where: {
     *     // ... filter to delete one Peminjaman
     *   }
     * })
     * 
     */
    delete<T extends peminjamanDeleteArgs>(args: SelectSubset<T, peminjamanDeleteArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peminjaman.
     * @param {peminjamanUpdateArgs} args - Arguments to update one Peminjaman.
     * @example
     * // Update one Peminjaman
     * const peminjaman = await prisma.peminjaman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends peminjamanUpdateArgs>(args: SelectSubset<T, peminjamanUpdateArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Peminjamen.
     * @param {peminjamanDeleteManyArgs} args - Arguments to filter Peminjamen to delete.
     * @example
     * // Delete a few Peminjamen
     * const { count } = await prisma.peminjaman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends peminjamanDeleteManyArgs>(args?: SelectSubset<T, peminjamanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peminjamen
     * const peminjaman = await prisma.peminjaman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends peminjamanUpdateManyArgs>(args: SelectSubset<T, peminjamanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peminjamen and returns the data updated in the database.
     * @param {peminjamanUpdateManyAndReturnArgs} args - Arguments to update many Peminjamen.
     * @example
     * // Update many Peminjamen
     * const peminjaman = await prisma.peminjaman.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Peminjamen and only return the `nik`
     * const peminjamanWithNikOnly = await prisma.peminjaman.updateManyAndReturn({
     *   select: { nik: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends peminjamanUpdateManyAndReturnArgs>(args: SelectSubset<T, peminjamanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Peminjaman.
     * @param {peminjamanUpsertArgs} args - Arguments to update or create a Peminjaman.
     * @example
     * // Update or create a Peminjaman
     * const peminjaman = await prisma.peminjaman.upsert({
     *   create: {
     *     // ... data to create a Peminjaman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peminjaman we want to update
     *   }
     * })
     */
    upsert<T extends peminjamanUpsertArgs>(args: SelectSubset<T, peminjamanUpsertArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanCountArgs} args - Arguments to filter Peminjamen to count.
     * @example
     * // Count the number of Peminjamen
     * const count = await prisma.peminjaman.count({
     *   where: {
     *     // ... the filter for the Peminjamen we want to count
     *   }
     * })
    **/
    count<T extends peminjamanCountArgs>(
      args?: Subset<T, peminjamanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeminjamanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeminjamanAggregateArgs>(args: Subset<T, PeminjamanAggregateArgs>): Prisma.PrismaPromise<GetPeminjamanAggregateType<T>>

    /**
     * Group by Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanGroupByArgs} args - Group by arguments.
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
      T extends peminjamanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: peminjamanGroupByArgs['orderBy'] }
        : { orderBy?: peminjamanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, peminjamanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeminjamanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the peminjaman model
   */
  readonly fields: peminjamanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for peminjaman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__peminjamanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaksi<T extends peminjaman$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, peminjaman$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the peminjaman model
   */
  interface peminjamanFieldRefs {
    readonly nik: FieldRef<"peminjaman", 'String'>
    readonly nama: FieldRef<"peminjaman", 'String'>
    readonly no_hp: FieldRef<"peminjaman", 'String'>
  }
    

  // Custom InputTypes
  /**
   * peminjaman findUnique
   */
  export type peminjamanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjaman to fetch.
     */
    where: peminjamanWhereUniqueInput
  }

  /**
   * peminjaman findUniqueOrThrow
   */
  export type peminjamanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjaman to fetch.
     */
    where: peminjamanWhereUniqueInput
  }

  /**
   * peminjaman findFirst
   */
  export type peminjamanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjaman to fetch.
     */
    where?: peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peminjamen to fetch.
     */
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for peminjamen.
     */
    cursor?: peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * peminjaman findFirstOrThrow
   */
  export type peminjamanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjaman to fetch.
     */
    where?: peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peminjamen to fetch.
     */
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for peminjamen.
     */
    cursor?: peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * peminjaman findMany
   */
  export type peminjamanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjamen to fetch.
     */
    where?: peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peminjamen to fetch.
     */
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing peminjamen.
     */
    cursor?: peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peminjamen.
     */
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * peminjaman create
   */
  export type peminjamanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * The data needed to create a peminjaman.
     */
    data: XOR<peminjamanCreateInput, peminjamanUncheckedCreateInput>
  }

  /**
   * peminjaman createMany
   */
  export type peminjamanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many peminjamen.
     */
    data: peminjamanCreateManyInput | peminjamanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * peminjaman createManyAndReturn
   */
  export type peminjamanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * The data used to create many peminjamen.
     */
    data: peminjamanCreateManyInput | peminjamanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * peminjaman update
   */
  export type peminjamanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * The data needed to update a peminjaman.
     */
    data: XOR<peminjamanUpdateInput, peminjamanUncheckedUpdateInput>
    /**
     * Choose, which peminjaman to update.
     */
    where: peminjamanWhereUniqueInput
  }

  /**
   * peminjaman updateMany
   */
  export type peminjamanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update peminjamen.
     */
    data: XOR<peminjamanUpdateManyMutationInput, peminjamanUncheckedUpdateManyInput>
    /**
     * Filter which peminjamen to update
     */
    where?: peminjamanWhereInput
    /**
     * Limit how many peminjamen to update.
     */
    limit?: number
  }

  /**
   * peminjaman updateManyAndReturn
   */
  export type peminjamanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * The data used to update peminjamen.
     */
    data: XOR<peminjamanUpdateManyMutationInput, peminjamanUncheckedUpdateManyInput>
    /**
     * Filter which peminjamen to update
     */
    where?: peminjamanWhereInput
    /**
     * Limit how many peminjamen to update.
     */
    limit?: number
  }

  /**
   * peminjaman upsert
   */
  export type peminjamanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * The filter to search for the peminjaman to update in case it exists.
     */
    where: peminjamanWhereUniqueInput
    /**
     * In case the peminjaman found by the `where` argument doesn't exist, create a new peminjaman with this data.
     */
    create: XOR<peminjamanCreateInput, peminjamanUncheckedCreateInput>
    /**
     * In case the peminjaman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<peminjamanUpdateInput, peminjamanUncheckedUpdateInput>
  }

  /**
   * peminjaman delete
   */
  export type peminjamanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter which peminjaman to delete.
     */
    where: peminjamanWhereUniqueInput
  }

  /**
   * peminjaman deleteMany
   */
  export type peminjamanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peminjamen to delete
     */
    where?: peminjamanWhereInput
    /**
     * Limit how many peminjamen to delete.
     */
    limit?: number
  }

  /**
   * peminjaman.transaksi
   */
  export type peminjaman$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    where?: transaksiWhereInput
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    cursor?: transaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * peminjaman without action
   */
  export type peminjamanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
  }


  /**
   * Model proyektor
   */

  export type AggregateProyektor = {
    _count: ProyektorCountAggregateOutputType | null
    _min: ProyektorMinAggregateOutputType | null
    _max: ProyektorMaxAggregateOutputType | null
  }

  export type ProyektorMinAggregateOutputType = {
    kode_proyektor: string | null
    merek: string | null
    nomor_seri: string | null
    status: string | null
  }

  export type ProyektorMaxAggregateOutputType = {
    kode_proyektor: string | null
    merek: string | null
    nomor_seri: string | null
    status: string | null
  }

  export type ProyektorCountAggregateOutputType = {
    kode_proyektor: number
    merek: number
    nomor_seri: number
    status: number
    _all: number
  }


  export type ProyektorMinAggregateInputType = {
    kode_proyektor?: true
    merek?: true
    nomor_seri?: true
    status?: true
  }

  export type ProyektorMaxAggregateInputType = {
    kode_proyektor?: true
    merek?: true
    nomor_seri?: true
    status?: true
  }

  export type ProyektorCountAggregateInputType = {
    kode_proyektor?: true
    merek?: true
    nomor_seri?: true
    status?: true
    _all?: true
  }

  export type ProyektorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proyektor to aggregate.
     */
    where?: proyektorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyektors to fetch.
     */
    orderBy?: proyektorOrderByWithRelationInput | proyektorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: proyektorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyektors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyektors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned proyektors
    **/
    _count?: true | ProyektorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProyektorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProyektorMaxAggregateInputType
  }

  export type GetProyektorAggregateType<T extends ProyektorAggregateArgs> = {
        [P in keyof T & keyof AggregateProyektor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProyektor[P]>
      : GetScalarType<T[P], AggregateProyektor[P]>
  }




  export type proyektorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proyektorWhereInput
    orderBy?: proyektorOrderByWithAggregationInput | proyektorOrderByWithAggregationInput[]
    by: ProyektorScalarFieldEnum[] | ProyektorScalarFieldEnum
    having?: proyektorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProyektorCountAggregateInputType | true
    _min?: ProyektorMinAggregateInputType
    _max?: ProyektorMaxAggregateInputType
  }

  export type ProyektorGroupByOutputType = {
    kode_proyektor: string
    merek: string | null
    nomor_seri: string | null
    status: string | null
    _count: ProyektorCountAggregateOutputType | null
    _min: ProyektorMinAggregateOutputType | null
    _max: ProyektorMaxAggregateOutputType | null
  }

  type GetProyektorGroupByPayload<T extends proyektorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProyektorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProyektorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProyektorGroupByOutputType[P]>
            : GetScalarType<T[P], ProyektorGroupByOutputType[P]>
        }
      >
    >


  export type proyektorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_proyektor?: boolean
    merek?: boolean
    nomor_seri?: boolean
    status?: boolean
    transaksi?: boolean | proyektor$transaksiArgs<ExtArgs>
    _count?: boolean | ProyektorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proyektor"]>

  export type proyektorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_proyektor?: boolean
    merek?: boolean
    nomor_seri?: boolean
    status?: boolean
  }, ExtArgs["result"]["proyektor"]>

  export type proyektorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_proyektor?: boolean
    merek?: boolean
    nomor_seri?: boolean
    status?: boolean
  }, ExtArgs["result"]["proyektor"]>

  export type proyektorSelectScalar = {
    kode_proyektor?: boolean
    merek?: boolean
    nomor_seri?: boolean
    status?: boolean
  }

  export type proyektorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kode_proyektor" | "merek" | "nomor_seri" | "status", ExtArgs["result"]["proyektor"]>
  export type proyektorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | proyektor$transaksiArgs<ExtArgs>
    _count?: boolean | ProyektorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type proyektorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type proyektorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $proyektorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "proyektor"
    objects: {
      transaksi: Prisma.$transaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      kode_proyektor: string
      merek: string | null
      nomor_seri: string | null
      status: string | null
    }, ExtArgs["result"]["proyektor"]>
    composites: {}
  }

  type proyektorGetPayload<S extends boolean | null | undefined | proyektorDefaultArgs> = $Result.GetResult<Prisma.$proyektorPayload, S>

  type proyektorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<proyektorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProyektorCountAggregateInputType | true
    }

  export interface proyektorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['proyektor'], meta: { name: 'proyektor' } }
    /**
     * Find zero or one Proyektor that matches the filter.
     * @param {proyektorFindUniqueArgs} args - Arguments to find a Proyektor
     * @example
     * // Get one Proyektor
     * const proyektor = await prisma.proyektor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proyektorFindUniqueArgs>(args: SelectSubset<T, proyektorFindUniqueArgs<ExtArgs>>): Prisma__proyektorClient<$Result.GetResult<Prisma.$proyektorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proyektor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proyektorFindUniqueOrThrowArgs} args - Arguments to find a Proyektor
     * @example
     * // Get one Proyektor
     * const proyektor = await prisma.proyektor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proyektorFindUniqueOrThrowArgs>(args: SelectSubset<T, proyektorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__proyektorClient<$Result.GetResult<Prisma.$proyektorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyektor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyektorFindFirstArgs} args - Arguments to find a Proyektor
     * @example
     * // Get one Proyektor
     * const proyektor = await prisma.proyektor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proyektorFindFirstArgs>(args?: SelectSubset<T, proyektorFindFirstArgs<ExtArgs>>): Prisma__proyektorClient<$Result.GetResult<Prisma.$proyektorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyektor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyektorFindFirstOrThrowArgs} args - Arguments to find a Proyektor
     * @example
     * // Get one Proyektor
     * const proyektor = await prisma.proyektor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proyektorFindFirstOrThrowArgs>(args?: SelectSubset<T, proyektorFindFirstOrThrowArgs<ExtArgs>>): Prisma__proyektorClient<$Result.GetResult<Prisma.$proyektorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proyektors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyektorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proyektors
     * const proyektors = await prisma.proyektor.findMany()
     * 
     * // Get first 10 Proyektors
     * const proyektors = await prisma.proyektor.findMany({ take: 10 })
     * 
     * // Only select the `kode_proyektor`
     * const proyektorWithKode_proyektorOnly = await prisma.proyektor.findMany({ select: { kode_proyektor: true } })
     * 
     */
    findMany<T extends proyektorFindManyArgs>(args?: SelectSubset<T, proyektorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proyektorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proyektor.
     * @param {proyektorCreateArgs} args - Arguments to create a Proyektor.
     * @example
     * // Create one Proyektor
     * const Proyektor = await prisma.proyektor.create({
     *   data: {
     *     // ... data to create a Proyektor
     *   }
     * })
     * 
     */
    create<T extends proyektorCreateArgs>(args: SelectSubset<T, proyektorCreateArgs<ExtArgs>>): Prisma__proyektorClient<$Result.GetResult<Prisma.$proyektorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proyektors.
     * @param {proyektorCreateManyArgs} args - Arguments to create many Proyektors.
     * @example
     * // Create many Proyektors
     * const proyektor = await prisma.proyektor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends proyektorCreateManyArgs>(args?: SelectSubset<T, proyektorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proyektors and returns the data saved in the database.
     * @param {proyektorCreateManyAndReturnArgs} args - Arguments to create many Proyektors.
     * @example
     * // Create many Proyektors
     * const proyektor = await prisma.proyektor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proyektors and only return the `kode_proyektor`
     * const proyektorWithKode_proyektorOnly = await prisma.proyektor.createManyAndReturn({
     *   select: { kode_proyektor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends proyektorCreateManyAndReturnArgs>(args?: SelectSubset<T, proyektorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proyektorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proyektor.
     * @param {proyektorDeleteArgs} args - Arguments to delete one Proyektor.
     * @example
     * // Delete one Proyektor
     * const Proyektor = await prisma.proyektor.delete({
     *   where: {
     *     // ... filter to delete one Proyektor
     *   }
     * })
     * 
     */
    delete<T extends proyektorDeleteArgs>(args: SelectSubset<T, proyektorDeleteArgs<ExtArgs>>): Prisma__proyektorClient<$Result.GetResult<Prisma.$proyektorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proyektor.
     * @param {proyektorUpdateArgs} args - Arguments to update one Proyektor.
     * @example
     * // Update one Proyektor
     * const proyektor = await prisma.proyektor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends proyektorUpdateArgs>(args: SelectSubset<T, proyektorUpdateArgs<ExtArgs>>): Prisma__proyektorClient<$Result.GetResult<Prisma.$proyektorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proyektors.
     * @param {proyektorDeleteManyArgs} args - Arguments to filter Proyektors to delete.
     * @example
     * // Delete a few Proyektors
     * const { count } = await prisma.proyektor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends proyektorDeleteManyArgs>(args?: SelectSubset<T, proyektorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proyektors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyektorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proyektors
     * const proyektor = await prisma.proyektor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends proyektorUpdateManyArgs>(args: SelectSubset<T, proyektorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proyektors and returns the data updated in the database.
     * @param {proyektorUpdateManyAndReturnArgs} args - Arguments to update many Proyektors.
     * @example
     * // Update many Proyektors
     * const proyektor = await prisma.proyektor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proyektors and only return the `kode_proyektor`
     * const proyektorWithKode_proyektorOnly = await prisma.proyektor.updateManyAndReturn({
     *   select: { kode_proyektor: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends proyektorUpdateManyAndReturnArgs>(args: SelectSubset<T, proyektorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proyektorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proyektor.
     * @param {proyektorUpsertArgs} args - Arguments to update or create a Proyektor.
     * @example
     * // Update or create a Proyektor
     * const proyektor = await prisma.proyektor.upsert({
     *   create: {
     *     // ... data to create a Proyektor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proyektor we want to update
     *   }
     * })
     */
    upsert<T extends proyektorUpsertArgs>(args: SelectSubset<T, proyektorUpsertArgs<ExtArgs>>): Prisma__proyektorClient<$Result.GetResult<Prisma.$proyektorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proyektors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyektorCountArgs} args - Arguments to filter Proyektors to count.
     * @example
     * // Count the number of Proyektors
     * const count = await prisma.proyektor.count({
     *   where: {
     *     // ... the filter for the Proyektors we want to count
     *   }
     * })
    **/
    count<T extends proyektorCountArgs>(
      args?: Subset<T, proyektorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProyektorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proyektor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyektorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProyektorAggregateArgs>(args: Subset<T, ProyektorAggregateArgs>): Prisma.PrismaPromise<GetProyektorAggregateType<T>>

    /**
     * Group by Proyektor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyektorGroupByArgs} args - Group by arguments.
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
      T extends proyektorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: proyektorGroupByArgs['orderBy'] }
        : { orderBy?: proyektorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, proyektorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProyektorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the proyektor model
   */
  readonly fields: proyektorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for proyektor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__proyektorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaksi<T extends proyektor$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, proyektor$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the proyektor model
   */
  interface proyektorFieldRefs {
    readonly kode_proyektor: FieldRef<"proyektor", 'String'>
    readonly merek: FieldRef<"proyektor", 'String'>
    readonly nomor_seri: FieldRef<"proyektor", 'String'>
    readonly status: FieldRef<"proyektor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * proyektor findUnique
   */
  export type proyektorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyektor
     */
    select?: proyektorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyektor
     */
    omit?: proyektorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyektorInclude<ExtArgs> | null
    /**
     * Filter, which proyektor to fetch.
     */
    where: proyektorWhereUniqueInput
  }

  /**
   * proyektor findUniqueOrThrow
   */
  export type proyektorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyektor
     */
    select?: proyektorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyektor
     */
    omit?: proyektorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyektorInclude<ExtArgs> | null
    /**
     * Filter, which proyektor to fetch.
     */
    where: proyektorWhereUniqueInput
  }

  /**
   * proyektor findFirst
   */
  export type proyektorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyektor
     */
    select?: proyektorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyektor
     */
    omit?: proyektorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyektorInclude<ExtArgs> | null
    /**
     * Filter, which proyektor to fetch.
     */
    where?: proyektorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyektors to fetch.
     */
    orderBy?: proyektorOrderByWithRelationInput | proyektorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proyektors.
     */
    cursor?: proyektorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyektors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyektors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proyektors.
     */
    distinct?: ProyektorScalarFieldEnum | ProyektorScalarFieldEnum[]
  }

  /**
   * proyektor findFirstOrThrow
   */
  export type proyektorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyektor
     */
    select?: proyektorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyektor
     */
    omit?: proyektorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyektorInclude<ExtArgs> | null
    /**
     * Filter, which proyektor to fetch.
     */
    where?: proyektorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyektors to fetch.
     */
    orderBy?: proyektorOrderByWithRelationInput | proyektorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proyektors.
     */
    cursor?: proyektorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyektors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyektors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proyektors.
     */
    distinct?: ProyektorScalarFieldEnum | ProyektorScalarFieldEnum[]
  }

  /**
   * proyektor findMany
   */
  export type proyektorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyektor
     */
    select?: proyektorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyektor
     */
    omit?: proyektorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyektorInclude<ExtArgs> | null
    /**
     * Filter, which proyektors to fetch.
     */
    where?: proyektorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyektors to fetch.
     */
    orderBy?: proyektorOrderByWithRelationInput | proyektorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing proyektors.
     */
    cursor?: proyektorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyektors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyektors.
     */
    skip?: number
    distinct?: ProyektorScalarFieldEnum | ProyektorScalarFieldEnum[]
  }

  /**
   * proyektor create
   */
  export type proyektorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyektor
     */
    select?: proyektorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyektor
     */
    omit?: proyektorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyektorInclude<ExtArgs> | null
    /**
     * The data needed to create a proyektor.
     */
    data: XOR<proyektorCreateInput, proyektorUncheckedCreateInput>
  }

  /**
   * proyektor createMany
   */
  export type proyektorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many proyektors.
     */
    data: proyektorCreateManyInput | proyektorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proyektor createManyAndReturn
   */
  export type proyektorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyektor
     */
    select?: proyektorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proyektor
     */
    omit?: proyektorOmit<ExtArgs> | null
    /**
     * The data used to create many proyektors.
     */
    data: proyektorCreateManyInput | proyektorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proyektor update
   */
  export type proyektorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyektor
     */
    select?: proyektorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyektor
     */
    omit?: proyektorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyektorInclude<ExtArgs> | null
    /**
     * The data needed to update a proyektor.
     */
    data: XOR<proyektorUpdateInput, proyektorUncheckedUpdateInput>
    /**
     * Choose, which proyektor to update.
     */
    where: proyektorWhereUniqueInput
  }

  /**
   * proyektor updateMany
   */
  export type proyektorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update proyektors.
     */
    data: XOR<proyektorUpdateManyMutationInput, proyektorUncheckedUpdateManyInput>
    /**
     * Filter which proyektors to update
     */
    where?: proyektorWhereInput
    /**
     * Limit how many proyektors to update.
     */
    limit?: number
  }

  /**
   * proyektor updateManyAndReturn
   */
  export type proyektorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyektor
     */
    select?: proyektorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proyektor
     */
    omit?: proyektorOmit<ExtArgs> | null
    /**
     * The data used to update proyektors.
     */
    data: XOR<proyektorUpdateManyMutationInput, proyektorUncheckedUpdateManyInput>
    /**
     * Filter which proyektors to update
     */
    where?: proyektorWhereInput
    /**
     * Limit how many proyektors to update.
     */
    limit?: number
  }

  /**
   * proyektor upsert
   */
  export type proyektorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyektor
     */
    select?: proyektorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyektor
     */
    omit?: proyektorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyektorInclude<ExtArgs> | null
    /**
     * The filter to search for the proyektor to update in case it exists.
     */
    where: proyektorWhereUniqueInput
    /**
     * In case the proyektor found by the `where` argument doesn't exist, create a new proyektor with this data.
     */
    create: XOR<proyektorCreateInput, proyektorUncheckedCreateInput>
    /**
     * In case the proyektor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proyektorUpdateInput, proyektorUncheckedUpdateInput>
  }

  /**
   * proyektor delete
   */
  export type proyektorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyektor
     */
    select?: proyektorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyektor
     */
    omit?: proyektorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyektorInclude<ExtArgs> | null
    /**
     * Filter which proyektor to delete.
     */
    where: proyektorWhereUniqueInput
  }

  /**
   * proyektor deleteMany
   */
  export type proyektorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proyektors to delete
     */
    where?: proyektorWhereInput
    /**
     * Limit how many proyektors to delete.
     */
    limit?: number
  }

  /**
   * proyektor.transaksi
   */
  export type proyektor$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    where?: transaksiWhereInput
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    cursor?: transaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * proyektor without action
   */
  export type proyektorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyektor
     */
    select?: proyektorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyektor
     */
    omit?: proyektorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyektorInclude<ExtArgs> | null
  }


  /**
   * Model transaksi
   */

  export type AggregateTransaksi = {
    _count: TransaksiCountAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  export type TransaksiMinAggregateOutputType = {
    kode_transaksi: string | null
    kode_proyektor: string | null
    nik: string | null
    status: string | null
  }

  export type TransaksiMaxAggregateOutputType = {
    kode_transaksi: string | null
    kode_proyektor: string | null
    nik: string | null
    status: string | null
  }

  export type TransaksiCountAggregateOutputType = {
    kode_transaksi: number
    kode_proyektor: number
    nik: number
    status: number
    _all: number
  }


  export type TransaksiMinAggregateInputType = {
    kode_transaksi?: true
    kode_proyektor?: true
    nik?: true
    status?: true
  }

  export type TransaksiMaxAggregateInputType = {
    kode_transaksi?: true
    kode_proyektor?: true
    nik?: true
    status?: true
  }

  export type TransaksiCountAggregateInputType = {
    kode_transaksi?: true
    kode_proyektor?: true
    nik?: true
    status?: true
    _all?: true
  }

  export type TransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksi to aggregate.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaksis
    **/
    _count?: true | TransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiMaxAggregateInputType
  }

  export type GetTransaksiAggregateType<T extends TransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksi[P]>
      : GetScalarType<T[P], AggregateTransaksi[P]>
  }




  export type transaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksiWhereInput
    orderBy?: transaksiOrderByWithAggregationInput | transaksiOrderByWithAggregationInput[]
    by: TransaksiScalarFieldEnum[] | TransaksiScalarFieldEnum
    having?: transaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiCountAggregateInputType | true
    _min?: TransaksiMinAggregateInputType
    _max?: TransaksiMaxAggregateInputType
  }

  export type TransaksiGroupByOutputType = {
    kode_transaksi: string
    kode_proyektor: string | null
    nik: string | null
    status: string | null
    _count: TransaksiCountAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  type GetTransaksiGroupByPayload<T extends transaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
        }
      >
    >


  export type transaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_transaksi?: boolean
    kode_proyektor?: boolean
    nik?: boolean
    status?: boolean
    kegiatan?: boolean | transaksi$kegiatanArgs<ExtArgs>
    proyektor?: boolean | transaksi$proyektorArgs<ExtArgs>
    peminjaman?: boolean | transaksi$peminjamanArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type transaksiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_transaksi?: boolean
    kode_proyektor?: boolean
    nik?: boolean
    status?: boolean
    proyektor?: boolean | transaksi$proyektorArgs<ExtArgs>
    peminjaman?: boolean | transaksi$peminjamanArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type transaksiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_transaksi?: boolean
    kode_proyektor?: boolean
    nik?: boolean
    status?: boolean
    proyektor?: boolean | transaksi$proyektorArgs<ExtArgs>
    peminjaman?: boolean | transaksi$peminjamanArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type transaksiSelectScalar = {
    kode_transaksi?: boolean
    kode_proyektor?: boolean
    nik?: boolean
    status?: boolean
  }

  export type transaksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kode_transaksi" | "kode_proyektor" | "nik" | "status", ExtArgs["result"]["transaksi"]>
  export type transaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | transaksi$kegiatanArgs<ExtArgs>
    proyektor?: boolean | transaksi$proyektorArgs<ExtArgs>
    peminjaman?: boolean | transaksi$peminjamanArgs<ExtArgs>
  }
  export type transaksiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyektor?: boolean | transaksi$proyektorArgs<ExtArgs>
    peminjaman?: boolean | transaksi$peminjamanArgs<ExtArgs>
  }
  export type transaksiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyektor?: boolean | transaksi$proyektorArgs<ExtArgs>
    peminjaman?: boolean | transaksi$peminjamanArgs<ExtArgs>
  }

  export type $transaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaksi"
    objects: {
      kegiatan: Prisma.$kegiatanPayload<ExtArgs> | null
      proyektor: Prisma.$proyektorPayload<ExtArgs> | null
      peminjaman: Prisma.$peminjamanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      kode_transaksi: string
      kode_proyektor: string | null
      nik: string | null
      status: string | null
    }, ExtArgs["result"]["transaksi"]>
    composites: {}
  }

  type transaksiGetPayload<S extends boolean | null | undefined | transaksiDefaultArgs> = $Result.GetResult<Prisma.$transaksiPayload, S>

  type transaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaksiCountAggregateInputType | true
    }

  export interface transaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaksi'], meta: { name: 'transaksi' } }
    /**
     * Find zero or one Transaksi that matches the filter.
     * @param {transaksiFindUniqueArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaksiFindUniqueArgs>(args: SelectSubset<T, transaksiFindUniqueArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaksiFindUniqueOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, transaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindFirstArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaksiFindFirstArgs>(args?: SelectSubset<T, transaksiFindFirstArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindFirstOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, transaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaksis
     * const transaksis = await prisma.transaksi.findMany()
     * 
     * // Get first 10 Transaksis
     * const transaksis = await prisma.transaksi.findMany({ take: 10 })
     * 
     * // Only select the `kode_transaksi`
     * const transaksiWithKode_transaksiOnly = await prisma.transaksi.findMany({ select: { kode_transaksi: true } })
     * 
     */
    findMany<T extends transaksiFindManyArgs>(args?: SelectSubset<T, transaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaksi.
     * @param {transaksiCreateArgs} args - Arguments to create a Transaksi.
     * @example
     * // Create one Transaksi
     * const Transaksi = await prisma.transaksi.create({
     *   data: {
     *     // ... data to create a Transaksi
     *   }
     * })
     * 
     */
    create<T extends transaksiCreateArgs>(args: SelectSubset<T, transaksiCreateArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaksis.
     * @param {transaksiCreateManyArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaksiCreateManyArgs>(args?: SelectSubset<T, transaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaksis and returns the data saved in the database.
     * @param {transaksiCreateManyAndReturnArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaksis and only return the `kode_transaksi`
     * const transaksiWithKode_transaksiOnly = await prisma.transaksi.createManyAndReturn({
     *   select: { kode_transaksi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaksiCreateManyAndReturnArgs>(args?: SelectSubset<T, transaksiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaksi.
     * @param {transaksiDeleteArgs} args - Arguments to delete one Transaksi.
     * @example
     * // Delete one Transaksi
     * const Transaksi = await prisma.transaksi.delete({
     *   where: {
     *     // ... filter to delete one Transaksi
     *   }
     * })
     * 
     */
    delete<T extends transaksiDeleteArgs>(args: SelectSubset<T, transaksiDeleteArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaksi.
     * @param {transaksiUpdateArgs} args - Arguments to update one Transaksi.
     * @example
     * // Update one Transaksi
     * const transaksi = await prisma.transaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaksiUpdateArgs>(args: SelectSubset<T, transaksiUpdateArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaksis.
     * @param {transaksiDeleteManyArgs} args - Arguments to filter Transaksis to delete.
     * @example
     * // Delete a few Transaksis
     * const { count } = await prisma.transaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaksiDeleteManyArgs>(args?: SelectSubset<T, transaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaksiUpdateManyArgs>(args: SelectSubset<T, transaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis and returns the data updated in the database.
     * @param {transaksiUpdateManyAndReturnArgs} args - Arguments to update many Transaksis.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaksis and only return the `kode_transaksi`
     * const transaksiWithKode_transaksiOnly = await prisma.transaksi.updateManyAndReturn({
     *   select: { kode_transaksi: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transaksiUpdateManyAndReturnArgs>(args: SelectSubset<T, transaksiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaksi.
     * @param {transaksiUpsertArgs} args - Arguments to update or create a Transaksi.
     * @example
     * // Update or create a Transaksi
     * const transaksi = await prisma.transaksi.upsert({
     *   create: {
     *     // ... data to create a Transaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaksi we want to update
     *   }
     * })
     */
    upsert<T extends transaksiUpsertArgs>(args: SelectSubset<T, transaksiUpsertArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiCountArgs} args - Arguments to filter Transaksis to count.
     * @example
     * // Count the number of Transaksis
     * const count = await prisma.transaksi.count({
     *   where: {
     *     // ... the filter for the Transaksis we want to count
     *   }
     * })
    **/
    count<T extends transaksiCountArgs>(
      args?: Subset<T, transaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaksiAggregateArgs>(args: Subset<T, TransaksiAggregateArgs>): Prisma.PrismaPromise<GetTransaksiAggregateType<T>>

    /**
     * Group by Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiGroupByArgs} args - Group by arguments.
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
      T extends transaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaksiGroupByArgs['orderBy'] }
        : { orderBy?: transaksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaksi model
   */
  readonly fields: transaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kegiatan<T extends transaksi$kegiatanArgs<ExtArgs> = {}>(args?: Subset<T, transaksi$kegiatanArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    proyektor<T extends transaksi$proyektorArgs<ExtArgs> = {}>(args?: Subset<T, transaksi$proyektorArgs<ExtArgs>>): Prisma__proyektorClient<$Result.GetResult<Prisma.$proyektorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    peminjaman<T extends transaksi$peminjamanArgs<ExtArgs> = {}>(args?: Subset<T, transaksi$peminjamanArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaksi model
   */
  interface transaksiFieldRefs {
    readonly kode_transaksi: FieldRef<"transaksi", 'String'>
    readonly kode_proyektor: FieldRef<"transaksi", 'String'>
    readonly nik: FieldRef<"transaksi", 'String'>
    readonly status: FieldRef<"transaksi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transaksi findUnique
   */
  export type transaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi findUniqueOrThrow
   */
  export type transaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi findFirst
   */
  export type transaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi findFirstOrThrow
   */
  export type transaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi findMany
   */
  export type transaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksis to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi create
   */
  export type transaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a transaksi.
     */
    data: XOR<transaksiCreateInput, transaksiUncheckedCreateInput>
  }

  /**
   * transaksi createMany
   */
  export type transaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaksis.
     */
    data: transaksiCreateManyInput | transaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaksi createManyAndReturn
   */
  export type transaksiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * The data used to create many transaksis.
     */
    data: transaksiCreateManyInput | transaksiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaksi update
   */
  export type transaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a transaksi.
     */
    data: XOR<transaksiUpdateInput, transaksiUncheckedUpdateInput>
    /**
     * Choose, which transaksi to update.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi updateMany
   */
  export type transaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaksis.
     */
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyInput>
    /**
     * Filter which transaksis to update
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to update.
     */
    limit?: number
  }

  /**
   * transaksi updateManyAndReturn
   */
  export type transaksiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * The data used to update transaksis.
     */
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyInput>
    /**
     * Filter which transaksis to update
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaksi upsert
   */
  export type transaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the transaksi to update in case it exists.
     */
    where: transaksiWhereUniqueInput
    /**
     * In case the transaksi found by the `where` argument doesn't exist, create a new transaksi with this data.
     */
    create: XOR<transaksiCreateInput, transaksiUncheckedCreateInput>
    /**
     * In case the transaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaksiUpdateInput, transaksiUncheckedUpdateInput>
  }

  /**
   * transaksi delete
   */
  export type transaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter which transaksi to delete.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi deleteMany
   */
  export type transaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksis to delete
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to delete.
     */
    limit?: number
  }

  /**
   * transaksi.kegiatan
   */
  export type transaksi$kegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    where?: kegiatanWhereInput
  }

  /**
   * transaksi.proyektor
   */
  export type transaksi$proyektorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyektor
     */
    select?: proyektorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyektor
     */
    omit?: proyektorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyektorInclude<ExtArgs> | null
    where?: proyektorWhereInput
  }

  /**
   * transaksi.peminjaman
   */
  export type transaksi$peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    where?: peminjamanWhereInput
  }

  /**
   * transaksi without action
   */
  export type transaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KegiatanScalarFieldEnum: {
    kode_transaksi: 'kode_transaksi',
    kegiatan: 'kegiatan',
    tempat: 'tempat',
    waktu: 'waktu'
  };

  export type KegiatanScalarFieldEnum = (typeof KegiatanScalarFieldEnum)[keyof typeof KegiatanScalarFieldEnum]


  export const PeminjamanScalarFieldEnum: {
    nik: 'nik',
    nama: 'nama',
    no_hp: 'no_hp'
  };

  export type PeminjamanScalarFieldEnum = (typeof PeminjamanScalarFieldEnum)[keyof typeof PeminjamanScalarFieldEnum]


  export const ProyektorScalarFieldEnum: {
    kode_proyektor: 'kode_proyektor',
    merek: 'merek',
    nomor_seri: 'nomor_seri',
    status: 'status'
  };

  export type ProyektorScalarFieldEnum = (typeof ProyektorScalarFieldEnum)[keyof typeof ProyektorScalarFieldEnum]


  export const TransaksiScalarFieldEnum: {
    kode_transaksi: 'kode_transaksi',
    kode_proyektor: 'kode_proyektor',
    nik: 'nik',
    status: 'status'
  };

  export type TransaksiScalarFieldEnum = (typeof TransaksiScalarFieldEnum)[keyof typeof TransaksiScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
  }

  export type kegiatanWhereInput = {
    AND?: kegiatanWhereInput | kegiatanWhereInput[]
    OR?: kegiatanWhereInput[]
    NOT?: kegiatanWhereInput | kegiatanWhereInput[]
    kode_transaksi?: StringFilter<"kegiatan"> | string
    kegiatan?: StringNullableFilter<"kegiatan"> | string | null
    tempat?: StringNullableFilter<"kegiatan"> | string | null
    waktu?: DateTimeNullableFilter<"kegiatan"> | Date | string | null
    transaksi?: XOR<TransaksiScalarRelationFilter, transaksiWhereInput>
  }

  export type kegiatanOrderByWithRelationInput = {
    kode_transaksi?: SortOrder
    kegiatan?: SortOrderInput | SortOrder
    tempat?: SortOrderInput | SortOrder
    waktu?: SortOrderInput | SortOrder
    transaksi?: transaksiOrderByWithRelationInput
  }

  export type kegiatanWhereUniqueInput = Prisma.AtLeast<{
    kode_transaksi?: string
    AND?: kegiatanWhereInput | kegiatanWhereInput[]
    OR?: kegiatanWhereInput[]
    NOT?: kegiatanWhereInput | kegiatanWhereInput[]
    kegiatan?: StringNullableFilter<"kegiatan"> | string | null
    tempat?: StringNullableFilter<"kegiatan"> | string | null
    waktu?: DateTimeNullableFilter<"kegiatan"> | Date | string | null
    transaksi?: XOR<TransaksiScalarRelationFilter, transaksiWhereInput>
  }, "kode_transaksi">

  export type kegiatanOrderByWithAggregationInput = {
    kode_transaksi?: SortOrder
    kegiatan?: SortOrderInput | SortOrder
    tempat?: SortOrderInput | SortOrder
    waktu?: SortOrderInput | SortOrder
    _count?: kegiatanCountOrderByAggregateInput
    _max?: kegiatanMaxOrderByAggregateInput
    _min?: kegiatanMinOrderByAggregateInput
  }

  export type kegiatanScalarWhereWithAggregatesInput = {
    AND?: kegiatanScalarWhereWithAggregatesInput | kegiatanScalarWhereWithAggregatesInput[]
    OR?: kegiatanScalarWhereWithAggregatesInput[]
    NOT?: kegiatanScalarWhereWithAggregatesInput | kegiatanScalarWhereWithAggregatesInput[]
    kode_transaksi?: StringWithAggregatesFilter<"kegiatan"> | string
    kegiatan?: StringNullableWithAggregatesFilter<"kegiatan"> | string | null
    tempat?: StringNullableWithAggregatesFilter<"kegiatan"> | string | null
    waktu?: DateTimeNullableWithAggregatesFilter<"kegiatan"> | Date | string | null
  }

  export type peminjamanWhereInput = {
    AND?: peminjamanWhereInput | peminjamanWhereInput[]
    OR?: peminjamanWhereInput[]
    NOT?: peminjamanWhereInput | peminjamanWhereInput[]
    nik?: StringFilter<"peminjaman"> | string
    nama?: StringNullableFilter<"peminjaman"> | string | null
    no_hp?: StringNullableFilter<"peminjaman"> | string | null
    transaksi?: TransaksiListRelationFilter
  }

  export type peminjamanOrderByWithRelationInput = {
    nik?: SortOrder
    nama?: SortOrderInput | SortOrder
    no_hp?: SortOrderInput | SortOrder
    transaksi?: transaksiOrderByRelationAggregateInput
  }

  export type peminjamanWhereUniqueInput = Prisma.AtLeast<{
    nik?: string
    AND?: peminjamanWhereInput | peminjamanWhereInput[]
    OR?: peminjamanWhereInput[]
    NOT?: peminjamanWhereInput | peminjamanWhereInput[]
    nama?: StringNullableFilter<"peminjaman"> | string | null
    no_hp?: StringNullableFilter<"peminjaman"> | string | null
    transaksi?: TransaksiListRelationFilter
  }, "nik">

  export type peminjamanOrderByWithAggregationInput = {
    nik?: SortOrder
    nama?: SortOrderInput | SortOrder
    no_hp?: SortOrderInput | SortOrder
    _count?: peminjamanCountOrderByAggregateInput
    _max?: peminjamanMaxOrderByAggregateInput
    _min?: peminjamanMinOrderByAggregateInput
  }

  export type peminjamanScalarWhereWithAggregatesInput = {
    AND?: peminjamanScalarWhereWithAggregatesInput | peminjamanScalarWhereWithAggregatesInput[]
    OR?: peminjamanScalarWhereWithAggregatesInput[]
    NOT?: peminjamanScalarWhereWithAggregatesInput | peminjamanScalarWhereWithAggregatesInput[]
    nik?: StringWithAggregatesFilter<"peminjaman"> | string
    nama?: StringNullableWithAggregatesFilter<"peminjaman"> | string | null
    no_hp?: StringNullableWithAggregatesFilter<"peminjaman"> | string | null
  }

  export type proyektorWhereInput = {
    AND?: proyektorWhereInput | proyektorWhereInput[]
    OR?: proyektorWhereInput[]
    NOT?: proyektorWhereInput | proyektorWhereInput[]
    kode_proyektor?: StringFilter<"proyektor"> | string
    merek?: StringNullableFilter<"proyektor"> | string | null
    nomor_seri?: StringNullableFilter<"proyektor"> | string | null
    status?: StringNullableFilter<"proyektor"> | string | null
    transaksi?: TransaksiListRelationFilter
  }

  export type proyektorOrderByWithRelationInput = {
    kode_proyektor?: SortOrder
    merek?: SortOrderInput | SortOrder
    nomor_seri?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    transaksi?: transaksiOrderByRelationAggregateInput
  }

  export type proyektorWhereUniqueInput = Prisma.AtLeast<{
    kode_proyektor?: string
    AND?: proyektorWhereInput | proyektorWhereInput[]
    OR?: proyektorWhereInput[]
    NOT?: proyektorWhereInput | proyektorWhereInput[]
    merek?: StringNullableFilter<"proyektor"> | string | null
    nomor_seri?: StringNullableFilter<"proyektor"> | string | null
    status?: StringNullableFilter<"proyektor"> | string | null
    transaksi?: TransaksiListRelationFilter
  }, "kode_proyektor">

  export type proyektorOrderByWithAggregationInput = {
    kode_proyektor?: SortOrder
    merek?: SortOrderInput | SortOrder
    nomor_seri?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: proyektorCountOrderByAggregateInput
    _max?: proyektorMaxOrderByAggregateInput
    _min?: proyektorMinOrderByAggregateInput
  }

  export type proyektorScalarWhereWithAggregatesInput = {
    AND?: proyektorScalarWhereWithAggregatesInput | proyektorScalarWhereWithAggregatesInput[]
    OR?: proyektorScalarWhereWithAggregatesInput[]
    NOT?: proyektorScalarWhereWithAggregatesInput | proyektorScalarWhereWithAggregatesInput[]
    kode_proyektor?: StringWithAggregatesFilter<"proyektor"> | string
    merek?: StringNullableWithAggregatesFilter<"proyektor"> | string | null
    nomor_seri?: StringNullableWithAggregatesFilter<"proyektor"> | string | null
    status?: StringNullableWithAggregatesFilter<"proyektor"> | string | null
  }

  export type transaksiWhereInput = {
    AND?: transaksiWhereInput | transaksiWhereInput[]
    OR?: transaksiWhereInput[]
    NOT?: transaksiWhereInput | transaksiWhereInput[]
    kode_transaksi?: StringFilter<"transaksi"> | string
    kode_proyektor?: StringNullableFilter<"transaksi"> | string | null
    nik?: StringNullableFilter<"transaksi"> | string | null
    status?: StringNullableFilter<"transaksi"> | string | null
    kegiatan?: XOR<KegiatanNullableScalarRelationFilter, kegiatanWhereInput> | null
    proyektor?: XOR<ProyektorNullableScalarRelationFilter, proyektorWhereInput> | null
    peminjaman?: XOR<PeminjamanNullableScalarRelationFilter, peminjamanWhereInput> | null
  }

  export type transaksiOrderByWithRelationInput = {
    kode_transaksi?: SortOrder
    kode_proyektor?: SortOrderInput | SortOrder
    nik?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    kegiatan?: kegiatanOrderByWithRelationInput
    proyektor?: proyektorOrderByWithRelationInput
    peminjaman?: peminjamanOrderByWithRelationInput
  }

  export type transaksiWhereUniqueInput = Prisma.AtLeast<{
    kode_transaksi?: string
    AND?: transaksiWhereInput | transaksiWhereInput[]
    OR?: transaksiWhereInput[]
    NOT?: transaksiWhereInput | transaksiWhereInput[]
    kode_proyektor?: StringNullableFilter<"transaksi"> | string | null
    nik?: StringNullableFilter<"transaksi"> | string | null
    status?: StringNullableFilter<"transaksi"> | string | null
    kegiatan?: XOR<KegiatanNullableScalarRelationFilter, kegiatanWhereInput> | null
    proyektor?: XOR<ProyektorNullableScalarRelationFilter, proyektorWhereInput> | null
    peminjaman?: XOR<PeminjamanNullableScalarRelationFilter, peminjamanWhereInput> | null
  }, "kode_transaksi">

  export type transaksiOrderByWithAggregationInput = {
    kode_transaksi?: SortOrder
    kode_proyektor?: SortOrderInput | SortOrder
    nik?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: transaksiCountOrderByAggregateInput
    _max?: transaksiMaxOrderByAggregateInput
    _min?: transaksiMinOrderByAggregateInput
  }

  export type transaksiScalarWhereWithAggregatesInput = {
    AND?: transaksiScalarWhereWithAggregatesInput | transaksiScalarWhereWithAggregatesInput[]
    OR?: transaksiScalarWhereWithAggregatesInput[]
    NOT?: transaksiScalarWhereWithAggregatesInput | transaksiScalarWhereWithAggregatesInput[]
    kode_transaksi?: StringWithAggregatesFilter<"transaksi"> | string
    kode_proyektor?: StringNullableWithAggregatesFilter<"transaksi"> | string | null
    nik?: StringNullableWithAggregatesFilter<"transaksi"> | string | null
    status?: StringNullableWithAggregatesFilter<"transaksi"> | string | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type kegiatanCreateInput = {
    kegiatan?: string | null
    tempat?: string | null
    waktu?: Date | string | null
    transaksi: transaksiCreateNestedOneWithoutKegiatanInput
  }

  export type kegiatanUncheckedCreateInput = {
    kode_transaksi: string
    kegiatan?: string | null
    tempat?: string | null
    waktu?: Date | string | null
  }

  export type kegiatanUpdateInput = {
    kegiatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    waktu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaksi?: transaksiUpdateOneRequiredWithoutKegiatanNestedInput
  }

  export type kegiatanUncheckedUpdateInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    kegiatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    waktu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kegiatanCreateManyInput = {
    kode_transaksi: string
    kegiatan?: string | null
    tempat?: string | null
    waktu?: Date | string | null
  }

  export type kegiatanUpdateManyMutationInput = {
    kegiatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    waktu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kegiatanUncheckedUpdateManyInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    kegiatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    waktu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type peminjamanCreateInput = {
    nik: string
    nama?: string | null
    no_hp?: string | null
    transaksi?: transaksiCreateNestedManyWithoutPeminjamanInput
  }

  export type peminjamanUncheckedCreateInput = {
    nik: string
    nama?: string | null
    no_hp?: string | null
    transaksi?: transaksiUncheckedCreateNestedManyWithoutPeminjamanInput
  }

  export type peminjamanUpdateInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    transaksi?: transaksiUpdateManyWithoutPeminjamanNestedInput
  }

  export type peminjamanUncheckedUpdateInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    transaksi?: transaksiUncheckedUpdateManyWithoutPeminjamanNestedInput
  }

  export type peminjamanCreateManyInput = {
    nik: string
    nama?: string | null
    no_hp?: string | null
  }

  export type peminjamanUpdateManyMutationInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type peminjamanUncheckedUpdateManyInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type proyektorCreateInput = {
    kode_proyektor: string
    merek?: string | null
    nomor_seri?: string | null
    status?: string | null
    transaksi?: transaksiCreateNestedManyWithoutProyektorInput
  }

  export type proyektorUncheckedCreateInput = {
    kode_proyektor: string
    merek?: string | null
    nomor_seri?: string | null
    status?: string | null
    transaksi?: transaksiUncheckedCreateNestedManyWithoutProyektorInput
  }

  export type proyektorUpdateInput = {
    kode_proyektor?: StringFieldUpdateOperationsInput | string
    merek?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_seri?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    transaksi?: transaksiUpdateManyWithoutProyektorNestedInput
  }

  export type proyektorUncheckedUpdateInput = {
    kode_proyektor?: StringFieldUpdateOperationsInput | string
    merek?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_seri?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    transaksi?: transaksiUncheckedUpdateManyWithoutProyektorNestedInput
  }

  export type proyektorCreateManyInput = {
    kode_proyektor: string
    merek?: string | null
    nomor_seri?: string | null
    status?: string | null
  }

  export type proyektorUpdateManyMutationInput = {
    kode_proyektor?: StringFieldUpdateOperationsInput | string
    merek?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_seri?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type proyektorUncheckedUpdateManyInput = {
    kode_proyektor?: StringFieldUpdateOperationsInput | string
    merek?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_seri?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiCreateInput = {
    kode_transaksi: string
    status?: string | null
    kegiatan?: kegiatanCreateNestedOneWithoutTransaksiInput
    proyektor?: proyektorCreateNestedOneWithoutTransaksiInput
    peminjaman?: peminjamanCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiUncheckedCreateInput = {
    kode_transaksi: string
    kode_proyektor?: string | null
    nik?: string | null
    status?: string | null
    kegiatan?: kegiatanUncheckedCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiUpdateInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    kegiatan?: kegiatanUpdateOneWithoutTransaksiNestedInput
    proyektor?: proyektorUpdateOneWithoutTransaksiNestedInput
    peminjaman?: peminjamanUpdateOneWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    kode_proyektor?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    kegiatan?: kegiatanUncheckedUpdateOneWithoutTransaksiNestedInput
  }

  export type transaksiCreateManyInput = {
    kode_transaksi: string
    kode_proyektor?: string | null
    nik?: string | null
    status?: string | null
  }

  export type transaksiUpdateManyMutationInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiUncheckedUpdateManyInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    kode_proyektor?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TransaksiScalarRelationFilter = {
    is?: transaksiWhereInput
    isNot?: transaksiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type kegiatanCountOrderByAggregateInput = {
    kode_transaksi?: SortOrder
    kegiatan?: SortOrder
    tempat?: SortOrder
    waktu?: SortOrder
  }

  export type kegiatanMaxOrderByAggregateInput = {
    kode_transaksi?: SortOrder
    kegiatan?: SortOrder
    tempat?: SortOrder
    waktu?: SortOrder
  }

  export type kegiatanMinOrderByAggregateInput = {
    kode_transaksi?: SortOrder
    kegiatan?: SortOrder
    tempat?: SortOrder
    waktu?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TransaksiListRelationFilter = {
    every?: transaksiWhereInput
    some?: transaksiWhereInput
    none?: transaksiWhereInput
  }

  export type transaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type peminjamanCountOrderByAggregateInput = {
    nik?: SortOrder
    nama?: SortOrder
    no_hp?: SortOrder
  }

  export type peminjamanMaxOrderByAggregateInput = {
    nik?: SortOrder
    nama?: SortOrder
    no_hp?: SortOrder
  }

  export type peminjamanMinOrderByAggregateInput = {
    nik?: SortOrder
    nama?: SortOrder
    no_hp?: SortOrder
  }

  export type proyektorCountOrderByAggregateInput = {
    kode_proyektor?: SortOrder
    merek?: SortOrder
    nomor_seri?: SortOrder
    status?: SortOrder
  }

  export type proyektorMaxOrderByAggregateInput = {
    kode_proyektor?: SortOrder
    merek?: SortOrder
    nomor_seri?: SortOrder
    status?: SortOrder
  }

  export type proyektorMinOrderByAggregateInput = {
    kode_proyektor?: SortOrder
    merek?: SortOrder
    nomor_seri?: SortOrder
    status?: SortOrder
  }

  export type KegiatanNullableScalarRelationFilter = {
    is?: kegiatanWhereInput | null
    isNot?: kegiatanWhereInput | null
  }

  export type ProyektorNullableScalarRelationFilter = {
    is?: proyektorWhereInput | null
    isNot?: proyektorWhereInput | null
  }

  export type PeminjamanNullableScalarRelationFilter = {
    is?: peminjamanWhereInput | null
    isNot?: peminjamanWhereInput | null
  }

  export type transaksiCountOrderByAggregateInput = {
    kode_transaksi?: SortOrder
    kode_proyektor?: SortOrder
    nik?: SortOrder
    status?: SortOrder
  }

  export type transaksiMaxOrderByAggregateInput = {
    kode_transaksi?: SortOrder
    kode_proyektor?: SortOrder
    nik?: SortOrder
    status?: SortOrder
  }

  export type transaksiMinOrderByAggregateInput = {
    kode_transaksi?: SortOrder
    kode_proyektor?: SortOrder
    nik?: SortOrder
    status?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type transaksiCreateNestedOneWithoutKegiatanInput = {
    create?: XOR<transaksiCreateWithoutKegiatanInput, transaksiUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: transaksiCreateOrConnectWithoutKegiatanInput
    connect?: transaksiWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type transaksiUpdateOneRequiredWithoutKegiatanNestedInput = {
    create?: XOR<transaksiCreateWithoutKegiatanInput, transaksiUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: transaksiCreateOrConnectWithoutKegiatanInput
    upsert?: transaksiUpsertWithoutKegiatanInput
    connect?: transaksiWhereUniqueInput
    update?: XOR<XOR<transaksiUpdateToOneWithWhereWithoutKegiatanInput, transaksiUpdateWithoutKegiatanInput>, transaksiUncheckedUpdateWithoutKegiatanInput>
  }

  export type transaksiCreateNestedManyWithoutPeminjamanInput = {
    create?: XOR<transaksiCreateWithoutPeminjamanInput, transaksiUncheckedCreateWithoutPeminjamanInput> | transaksiCreateWithoutPeminjamanInput[] | transaksiUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutPeminjamanInput | transaksiCreateOrConnectWithoutPeminjamanInput[]
    createMany?: transaksiCreateManyPeminjamanInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type transaksiUncheckedCreateNestedManyWithoutPeminjamanInput = {
    create?: XOR<transaksiCreateWithoutPeminjamanInput, transaksiUncheckedCreateWithoutPeminjamanInput> | transaksiCreateWithoutPeminjamanInput[] | transaksiUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutPeminjamanInput | transaksiCreateOrConnectWithoutPeminjamanInput[]
    createMany?: transaksiCreateManyPeminjamanInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type transaksiUpdateManyWithoutPeminjamanNestedInput = {
    create?: XOR<transaksiCreateWithoutPeminjamanInput, transaksiUncheckedCreateWithoutPeminjamanInput> | transaksiCreateWithoutPeminjamanInput[] | transaksiUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutPeminjamanInput | transaksiCreateOrConnectWithoutPeminjamanInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutPeminjamanInput | transaksiUpsertWithWhereUniqueWithoutPeminjamanInput[]
    createMany?: transaksiCreateManyPeminjamanInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutPeminjamanInput | transaksiUpdateWithWhereUniqueWithoutPeminjamanInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutPeminjamanInput | transaksiUpdateManyWithWhereWithoutPeminjamanInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type transaksiUncheckedUpdateManyWithoutPeminjamanNestedInput = {
    create?: XOR<transaksiCreateWithoutPeminjamanInput, transaksiUncheckedCreateWithoutPeminjamanInput> | transaksiCreateWithoutPeminjamanInput[] | transaksiUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutPeminjamanInput | transaksiCreateOrConnectWithoutPeminjamanInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutPeminjamanInput | transaksiUpsertWithWhereUniqueWithoutPeminjamanInput[]
    createMany?: transaksiCreateManyPeminjamanInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutPeminjamanInput | transaksiUpdateWithWhereUniqueWithoutPeminjamanInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutPeminjamanInput | transaksiUpdateManyWithWhereWithoutPeminjamanInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type transaksiCreateNestedManyWithoutProyektorInput = {
    create?: XOR<transaksiCreateWithoutProyektorInput, transaksiUncheckedCreateWithoutProyektorInput> | transaksiCreateWithoutProyektorInput[] | transaksiUncheckedCreateWithoutProyektorInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutProyektorInput | transaksiCreateOrConnectWithoutProyektorInput[]
    createMany?: transaksiCreateManyProyektorInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type transaksiUncheckedCreateNestedManyWithoutProyektorInput = {
    create?: XOR<transaksiCreateWithoutProyektorInput, transaksiUncheckedCreateWithoutProyektorInput> | transaksiCreateWithoutProyektorInput[] | transaksiUncheckedCreateWithoutProyektorInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutProyektorInput | transaksiCreateOrConnectWithoutProyektorInput[]
    createMany?: transaksiCreateManyProyektorInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type transaksiUpdateManyWithoutProyektorNestedInput = {
    create?: XOR<transaksiCreateWithoutProyektorInput, transaksiUncheckedCreateWithoutProyektorInput> | transaksiCreateWithoutProyektorInput[] | transaksiUncheckedCreateWithoutProyektorInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutProyektorInput | transaksiCreateOrConnectWithoutProyektorInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutProyektorInput | transaksiUpsertWithWhereUniqueWithoutProyektorInput[]
    createMany?: transaksiCreateManyProyektorInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutProyektorInput | transaksiUpdateWithWhereUniqueWithoutProyektorInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutProyektorInput | transaksiUpdateManyWithWhereWithoutProyektorInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type transaksiUncheckedUpdateManyWithoutProyektorNestedInput = {
    create?: XOR<transaksiCreateWithoutProyektorInput, transaksiUncheckedCreateWithoutProyektorInput> | transaksiCreateWithoutProyektorInput[] | transaksiUncheckedCreateWithoutProyektorInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutProyektorInput | transaksiCreateOrConnectWithoutProyektorInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutProyektorInput | transaksiUpsertWithWhereUniqueWithoutProyektorInput[]
    createMany?: transaksiCreateManyProyektorInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutProyektorInput | transaksiUpdateWithWhereUniqueWithoutProyektorInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutProyektorInput | transaksiUpdateManyWithWhereWithoutProyektorInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type kegiatanCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<kegiatanCreateWithoutTransaksiInput, kegiatanUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: kegiatanCreateOrConnectWithoutTransaksiInput
    connect?: kegiatanWhereUniqueInput
  }

  export type proyektorCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<proyektorCreateWithoutTransaksiInput, proyektorUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: proyektorCreateOrConnectWithoutTransaksiInput
    connect?: proyektorWhereUniqueInput
  }

  export type peminjamanCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<peminjamanCreateWithoutTransaksiInput, peminjamanUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: peminjamanCreateOrConnectWithoutTransaksiInput
    connect?: peminjamanWhereUniqueInput
  }

  export type kegiatanUncheckedCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<kegiatanCreateWithoutTransaksiInput, kegiatanUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: kegiatanCreateOrConnectWithoutTransaksiInput
    connect?: kegiatanWhereUniqueInput
  }

  export type kegiatanUpdateOneWithoutTransaksiNestedInput = {
    create?: XOR<kegiatanCreateWithoutTransaksiInput, kegiatanUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: kegiatanCreateOrConnectWithoutTransaksiInput
    upsert?: kegiatanUpsertWithoutTransaksiInput
    disconnect?: kegiatanWhereInput | boolean
    delete?: kegiatanWhereInput | boolean
    connect?: kegiatanWhereUniqueInput
    update?: XOR<XOR<kegiatanUpdateToOneWithWhereWithoutTransaksiInput, kegiatanUpdateWithoutTransaksiInput>, kegiatanUncheckedUpdateWithoutTransaksiInput>
  }

  export type proyektorUpdateOneWithoutTransaksiNestedInput = {
    create?: XOR<proyektorCreateWithoutTransaksiInput, proyektorUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: proyektorCreateOrConnectWithoutTransaksiInput
    upsert?: proyektorUpsertWithoutTransaksiInput
    disconnect?: proyektorWhereInput | boolean
    delete?: proyektorWhereInput | boolean
    connect?: proyektorWhereUniqueInput
    update?: XOR<XOR<proyektorUpdateToOneWithWhereWithoutTransaksiInput, proyektorUpdateWithoutTransaksiInput>, proyektorUncheckedUpdateWithoutTransaksiInput>
  }

  export type peminjamanUpdateOneWithoutTransaksiNestedInput = {
    create?: XOR<peminjamanCreateWithoutTransaksiInput, peminjamanUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: peminjamanCreateOrConnectWithoutTransaksiInput
    upsert?: peminjamanUpsertWithoutTransaksiInput
    disconnect?: peminjamanWhereInput | boolean
    delete?: peminjamanWhereInput | boolean
    connect?: peminjamanWhereUniqueInput
    update?: XOR<XOR<peminjamanUpdateToOneWithWhereWithoutTransaksiInput, peminjamanUpdateWithoutTransaksiInput>, peminjamanUncheckedUpdateWithoutTransaksiInput>
  }

  export type kegiatanUncheckedUpdateOneWithoutTransaksiNestedInput = {
    create?: XOR<kegiatanCreateWithoutTransaksiInput, kegiatanUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: kegiatanCreateOrConnectWithoutTransaksiInput
    upsert?: kegiatanUpsertWithoutTransaksiInput
    disconnect?: kegiatanWhereInput | boolean
    delete?: kegiatanWhereInput | boolean
    connect?: kegiatanWhereUniqueInput
    update?: XOR<XOR<kegiatanUpdateToOneWithWhereWithoutTransaksiInput, kegiatanUpdateWithoutTransaksiInput>, kegiatanUncheckedUpdateWithoutTransaksiInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type transaksiCreateWithoutKegiatanInput = {
    kode_transaksi: string
    status?: string | null
    proyektor?: proyektorCreateNestedOneWithoutTransaksiInput
    peminjaman?: peminjamanCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiUncheckedCreateWithoutKegiatanInput = {
    kode_transaksi: string
    kode_proyektor?: string | null
    nik?: string | null
    status?: string | null
  }

  export type transaksiCreateOrConnectWithoutKegiatanInput = {
    where: transaksiWhereUniqueInput
    create: XOR<transaksiCreateWithoutKegiatanInput, transaksiUncheckedCreateWithoutKegiatanInput>
  }

  export type transaksiUpsertWithoutKegiatanInput = {
    update: XOR<transaksiUpdateWithoutKegiatanInput, transaksiUncheckedUpdateWithoutKegiatanInput>
    create: XOR<transaksiCreateWithoutKegiatanInput, transaksiUncheckedCreateWithoutKegiatanInput>
    where?: transaksiWhereInput
  }

  export type transaksiUpdateToOneWithWhereWithoutKegiatanInput = {
    where?: transaksiWhereInput
    data: XOR<transaksiUpdateWithoutKegiatanInput, transaksiUncheckedUpdateWithoutKegiatanInput>
  }

  export type transaksiUpdateWithoutKegiatanInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    proyektor?: proyektorUpdateOneWithoutTransaksiNestedInput
    peminjaman?: peminjamanUpdateOneWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateWithoutKegiatanInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    kode_proyektor?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiCreateWithoutPeminjamanInput = {
    kode_transaksi: string
    status?: string | null
    kegiatan?: kegiatanCreateNestedOneWithoutTransaksiInput
    proyektor?: proyektorCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiUncheckedCreateWithoutPeminjamanInput = {
    kode_transaksi: string
    kode_proyektor?: string | null
    status?: string | null
    kegiatan?: kegiatanUncheckedCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiCreateOrConnectWithoutPeminjamanInput = {
    where: transaksiWhereUniqueInput
    create: XOR<transaksiCreateWithoutPeminjamanInput, transaksiUncheckedCreateWithoutPeminjamanInput>
  }

  export type transaksiCreateManyPeminjamanInputEnvelope = {
    data: transaksiCreateManyPeminjamanInput | transaksiCreateManyPeminjamanInput[]
    skipDuplicates?: boolean
  }

  export type transaksiUpsertWithWhereUniqueWithoutPeminjamanInput = {
    where: transaksiWhereUniqueInput
    update: XOR<transaksiUpdateWithoutPeminjamanInput, transaksiUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<transaksiCreateWithoutPeminjamanInput, transaksiUncheckedCreateWithoutPeminjamanInput>
  }

  export type transaksiUpdateWithWhereUniqueWithoutPeminjamanInput = {
    where: transaksiWhereUniqueInput
    data: XOR<transaksiUpdateWithoutPeminjamanInput, transaksiUncheckedUpdateWithoutPeminjamanInput>
  }

  export type transaksiUpdateManyWithWhereWithoutPeminjamanInput = {
    where: transaksiScalarWhereInput
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyWithoutPeminjamanInput>
  }

  export type transaksiScalarWhereInput = {
    AND?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
    OR?: transaksiScalarWhereInput[]
    NOT?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
    kode_transaksi?: StringFilter<"transaksi"> | string
    kode_proyektor?: StringNullableFilter<"transaksi"> | string | null
    nik?: StringNullableFilter<"transaksi"> | string | null
    status?: StringNullableFilter<"transaksi"> | string | null
  }

  export type transaksiCreateWithoutProyektorInput = {
    kode_transaksi: string
    status?: string | null
    kegiatan?: kegiatanCreateNestedOneWithoutTransaksiInput
    peminjaman?: peminjamanCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiUncheckedCreateWithoutProyektorInput = {
    kode_transaksi: string
    nik?: string | null
    status?: string | null
    kegiatan?: kegiatanUncheckedCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiCreateOrConnectWithoutProyektorInput = {
    where: transaksiWhereUniqueInput
    create: XOR<transaksiCreateWithoutProyektorInput, transaksiUncheckedCreateWithoutProyektorInput>
  }

  export type transaksiCreateManyProyektorInputEnvelope = {
    data: transaksiCreateManyProyektorInput | transaksiCreateManyProyektorInput[]
    skipDuplicates?: boolean
  }

  export type transaksiUpsertWithWhereUniqueWithoutProyektorInput = {
    where: transaksiWhereUniqueInput
    update: XOR<transaksiUpdateWithoutProyektorInput, transaksiUncheckedUpdateWithoutProyektorInput>
    create: XOR<transaksiCreateWithoutProyektorInput, transaksiUncheckedCreateWithoutProyektorInput>
  }

  export type transaksiUpdateWithWhereUniqueWithoutProyektorInput = {
    where: transaksiWhereUniqueInput
    data: XOR<transaksiUpdateWithoutProyektorInput, transaksiUncheckedUpdateWithoutProyektorInput>
  }

  export type transaksiUpdateManyWithWhereWithoutProyektorInput = {
    where: transaksiScalarWhereInput
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyWithoutProyektorInput>
  }

  export type kegiatanCreateWithoutTransaksiInput = {
    kegiatan?: string | null
    tempat?: string | null
    waktu?: Date | string | null
  }

  export type kegiatanUncheckedCreateWithoutTransaksiInput = {
    kegiatan?: string | null
    tempat?: string | null
    waktu?: Date | string | null
  }

  export type kegiatanCreateOrConnectWithoutTransaksiInput = {
    where: kegiatanWhereUniqueInput
    create: XOR<kegiatanCreateWithoutTransaksiInput, kegiatanUncheckedCreateWithoutTransaksiInput>
  }

  export type proyektorCreateWithoutTransaksiInput = {
    kode_proyektor: string
    merek?: string | null
    nomor_seri?: string | null
    status?: string | null
  }

  export type proyektorUncheckedCreateWithoutTransaksiInput = {
    kode_proyektor: string
    merek?: string | null
    nomor_seri?: string | null
    status?: string | null
  }

  export type proyektorCreateOrConnectWithoutTransaksiInput = {
    where: proyektorWhereUniqueInput
    create: XOR<proyektorCreateWithoutTransaksiInput, proyektorUncheckedCreateWithoutTransaksiInput>
  }

  export type peminjamanCreateWithoutTransaksiInput = {
    nik: string
    nama?: string | null
    no_hp?: string | null
  }

  export type peminjamanUncheckedCreateWithoutTransaksiInput = {
    nik: string
    nama?: string | null
    no_hp?: string | null
  }

  export type peminjamanCreateOrConnectWithoutTransaksiInput = {
    where: peminjamanWhereUniqueInput
    create: XOR<peminjamanCreateWithoutTransaksiInput, peminjamanUncheckedCreateWithoutTransaksiInput>
  }

  export type kegiatanUpsertWithoutTransaksiInput = {
    update: XOR<kegiatanUpdateWithoutTransaksiInput, kegiatanUncheckedUpdateWithoutTransaksiInput>
    create: XOR<kegiatanCreateWithoutTransaksiInput, kegiatanUncheckedCreateWithoutTransaksiInput>
    where?: kegiatanWhereInput
  }

  export type kegiatanUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: kegiatanWhereInput
    data: XOR<kegiatanUpdateWithoutTransaksiInput, kegiatanUncheckedUpdateWithoutTransaksiInput>
  }

  export type kegiatanUpdateWithoutTransaksiInput = {
    kegiatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    waktu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kegiatanUncheckedUpdateWithoutTransaksiInput = {
    kegiatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    waktu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type proyektorUpsertWithoutTransaksiInput = {
    update: XOR<proyektorUpdateWithoutTransaksiInput, proyektorUncheckedUpdateWithoutTransaksiInput>
    create: XOR<proyektorCreateWithoutTransaksiInput, proyektorUncheckedCreateWithoutTransaksiInput>
    where?: proyektorWhereInput
  }

  export type proyektorUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: proyektorWhereInput
    data: XOR<proyektorUpdateWithoutTransaksiInput, proyektorUncheckedUpdateWithoutTransaksiInput>
  }

  export type proyektorUpdateWithoutTransaksiInput = {
    kode_proyektor?: StringFieldUpdateOperationsInput | string
    merek?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_seri?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type proyektorUncheckedUpdateWithoutTransaksiInput = {
    kode_proyektor?: StringFieldUpdateOperationsInput | string
    merek?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_seri?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type peminjamanUpsertWithoutTransaksiInput = {
    update: XOR<peminjamanUpdateWithoutTransaksiInput, peminjamanUncheckedUpdateWithoutTransaksiInput>
    create: XOR<peminjamanCreateWithoutTransaksiInput, peminjamanUncheckedCreateWithoutTransaksiInput>
    where?: peminjamanWhereInput
  }

  export type peminjamanUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: peminjamanWhereInput
    data: XOR<peminjamanUpdateWithoutTransaksiInput, peminjamanUncheckedUpdateWithoutTransaksiInput>
  }

  export type peminjamanUpdateWithoutTransaksiInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type peminjamanUncheckedUpdateWithoutTransaksiInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiCreateManyPeminjamanInput = {
    kode_transaksi: string
    kode_proyektor?: string | null
    status?: string | null
  }

  export type transaksiUpdateWithoutPeminjamanInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    kegiatan?: kegiatanUpdateOneWithoutTransaksiNestedInput
    proyektor?: proyektorUpdateOneWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateWithoutPeminjamanInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    kode_proyektor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    kegiatan?: kegiatanUncheckedUpdateOneWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateManyWithoutPeminjamanInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    kode_proyektor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiCreateManyProyektorInput = {
    kode_transaksi: string
    nik?: string | null
    status?: string | null
  }

  export type transaksiUpdateWithoutProyektorInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    kegiatan?: kegiatanUpdateOneWithoutTransaksiNestedInput
    peminjaman?: peminjamanUpdateOneWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateWithoutProyektorInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    kegiatan?: kegiatanUncheckedUpdateOneWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateManyWithoutProyektorInput = {
    kode_transaksi?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }



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