
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
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model VideoGenre
 * 
 */
export type VideoGenre = $Result.DefaultSelection<Prisma.$VideoGenrePayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model VideoCast
 * 
 */
export type VideoCast = $Result.DefaultSelection<Prisma.$VideoCastPayload>
/**
 * Model Season
 * 
 */
export type Season = $Result.DefaultSelection<Prisma.$SeasonPayload>
/**
 * Model Episode
 * 
 */
export type Episode = $Result.DefaultSelection<Prisma.$EpisodePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model UserWatchlist
 * 
 */
export type UserWatchlist = $Result.DefaultSelection<Prisma.$UserWatchlistPayload>
/**
 * Model UserWatchHistory
 * 
 */
export type UserWatchHistory = $Result.DefaultSelection<Prisma.$UserWatchHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AgeRating: {
  G: 'G',
  PG: 'PG',
  PG13: 'PG13',
  R: 'R',
  NC17: 'NC17'
};

export type AgeRating = (typeof AgeRating)[keyof typeof AgeRating]


export const VideoType: {
  MOVIE: 'MOVIE',
  SERIES: 'SERIES',
  DOCUMENTARY: 'DOCUMENTARY',
  ANIMATION: 'ANIMATION'
};

export type VideoType = (typeof VideoType)[keyof typeof VideoType]


export const VideoStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  COMING_SOON: 'COMING_SOON',
  ARCHIVED: 'ARCHIVED'
};

export type VideoStatus = (typeof VideoStatus)[keyof typeof VideoStatus]


export const CastRole: {
  ACTOR: 'ACTOR',
  DIRECTOR: 'DIRECTOR',
  PRODUCER: 'PRODUCER',
  WRITER: 'WRITER',
  CINEMATOGRAPHER: 'CINEMATOGRAPHER',
  COMPOSER: 'COMPOSER'
};

export type CastRole = (typeof CastRole)[keyof typeof CastRole]

}

export type AgeRating = $Enums.AgeRating

export const AgeRating: typeof $Enums.AgeRating

export type VideoType = $Enums.VideoType

export const VideoType: typeof $Enums.VideoType

export type VideoStatus = $Enums.VideoStatus

export const VideoStatus: typeof $Enums.VideoStatus

export type CastRole = $Enums.CastRole

export const CastRole: typeof $Enums.CastRole

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoGenre`: Exposes CRUD operations for the **VideoGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoGenres
    * const videoGenres = await prisma.videoGenre.findMany()
    * ```
    */
  get videoGenre(): Prisma.VideoGenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoCast`: Exposes CRUD operations for the **VideoCast** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoCasts
    * const videoCasts = await prisma.videoCast.findMany()
    * ```
    */
  get videoCast(): Prisma.VideoCastDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.season`: Exposes CRUD operations for the **Season** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seasons
    * const seasons = await prisma.season.findMany()
    * ```
    */
  get season(): Prisma.SeasonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userWatchlist`: Exposes CRUD operations for the **UserWatchlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserWatchlists
    * const userWatchlists = await prisma.userWatchlist.findMany()
    * ```
    */
  get userWatchlist(): Prisma.UserWatchlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userWatchHistory`: Exposes CRUD operations for the **UserWatchHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserWatchHistories
    * const userWatchHistories = await prisma.userWatchHistory.findMany()
    * ```
    */
  get userWatchHistory(): Prisma.UserWatchHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Profile: 'Profile',
    Video: 'Video',
    Genre: 'Genre',
    VideoGenre: 'VideoGenre',
    Person: 'Person',
    VideoCast: 'VideoCast',
    Season: 'Season',
    Episode: 'Episode',
    Review: 'Review',
    UserWatchlist: 'UserWatchlist',
    UserWatchHistory: 'UserWatchHistory'
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
      modelProps: "user" | "profile" | "video" | "genre" | "videoGenre" | "person" | "videoCast" | "season" | "episode" | "review" | "userWatchlist" | "userWatchHistory"
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
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      VideoGenre: {
        payload: Prisma.$VideoGenrePayload<ExtArgs>
        fields: Prisma.VideoGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoGenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoGenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoGenrePayload>
          }
          findFirst: {
            args: Prisma.VideoGenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoGenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoGenrePayload>
          }
          findMany: {
            args: Prisma.VideoGenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoGenrePayload>[]
          }
          create: {
            args: Prisma.VideoGenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoGenrePayload>
          }
          createMany: {
            args: Prisma.VideoGenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoGenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoGenrePayload>[]
          }
          delete: {
            args: Prisma.VideoGenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoGenrePayload>
          }
          update: {
            args: Prisma.VideoGenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoGenrePayload>
          }
          deleteMany: {
            args: Prisma.VideoGenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoGenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoGenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoGenrePayload>[]
          }
          upsert: {
            args: Prisma.VideoGenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoGenrePayload>
          }
          aggregate: {
            args: Prisma.VideoGenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoGenre>
          }
          groupBy: {
            args: Prisma.VideoGenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoGenreCountArgs<ExtArgs>
            result: $Utils.Optional<VideoGenreCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      VideoCast: {
        payload: Prisma.$VideoCastPayload<ExtArgs>
        fields: Prisma.VideoCastFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoCastFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCastPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoCastFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCastPayload>
          }
          findFirst: {
            args: Prisma.VideoCastFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCastPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoCastFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCastPayload>
          }
          findMany: {
            args: Prisma.VideoCastFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCastPayload>[]
          }
          create: {
            args: Prisma.VideoCastCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCastPayload>
          }
          createMany: {
            args: Prisma.VideoCastCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCastCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCastPayload>[]
          }
          delete: {
            args: Prisma.VideoCastDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCastPayload>
          }
          update: {
            args: Prisma.VideoCastUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCastPayload>
          }
          deleteMany: {
            args: Prisma.VideoCastDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoCastUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoCastUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCastPayload>[]
          }
          upsert: {
            args: Prisma.VideoCastUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCastPayload>
          }
          aggregate: {
            args: Prisma.VideoCastAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoCast>
          }
          groupBy: {
            args: Prisma.VideoCastGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoCastGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCastCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCastCountAggregateOutputType> | number
          }
        }
      }
      Season: {
        payload: Prisma.$SeasonPayload<ExtArgs>
        fields: Prisma.SeasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeasonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeasonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findFirst: {
            args: Prisma.SeasonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeasonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findMany: {
            args: Prisma.SeasonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          create: {
            args: Prisma.SeasonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          createMany: {
            args: Prisma.SeasonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeasonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          delete: {
            args: Prisma.SeasonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          update: {
            args: Prisma.SeasonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          deleteMany: {
            args: Prisma.SeasonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeasonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeasonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          upsert: {
            args: Prisma.SeasonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          aggregate: {
            args: Prisma.SeasonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeason>
          }
          groupBy: {
            args: Prisma.SeasonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeasonCountArgs<ExtArgs>
            result: $Utils.Optional<SeasonCountAggregateOutputType> | number
          }
        }
      }
      Episode: {
        payload: Prisma.$EpisodePayload<ExtArgs>
        fields: Prisma.EpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findFirst: {
            args: Prisma.EpisodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findMany: {
            args: Prisma.EpisodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          create: {
            args: Prisma.EpisodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          createMany: {
            args: Prisma.EpisodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpisodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          delete: {
            args: Prisma.EpisodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          update: {
            args: Prisma.EpisodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          deleteMany: {
            args: Prisma.EpisodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpisodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          upsert: {
            args: Prisma.EpisodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.EpisodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodeCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      UserWatchlist: {
        payload: Prisma.$UserWatchlistPayload<ExtArgs>
        fields: Prisma.UserWatchlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserWatchlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserWatchlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchlistPayload>
          }
          findFirst: {
            args: Prisma.UserWatchlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserWatchlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchlistPayload>
          }
          findMany: {
            args: Prisma.UserWatchlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchlistPayload>[]
          }
          create: {
            args: Prisma.UserWatchlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchlistPayload>
          }
          createMany: {
            args: Prisma.UserWatchlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserWatchlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchlistPayload>[]
          }
          delete: {
            args: Prisma.UserWatchlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchlistPayload>
          }
          update: {
            args: Prisma.UserWatchlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchlistPayload>
          }
          deleteMany: {
            args: Prisma.UserWatchlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserWatchlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserWatchlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchlistPayload>[]
          }
          upsert: {
            args: Prisma.UserWatchlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchlistPayload>
          }
          aggregate: {
            args: Prisma.UserWatchlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserWatchlist>
          }
          groupBy: {
            args: Prisma.UserWatchlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserWatchlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserWatchlistCountArgs<ExtArgs>
            result: $Utils.Optional<UserWatchlistCountAggregateOutputType> | number
          }
        }
      }
      UserWatchHistory: {
        payload: Prisma.$UserWatchHistoryPayload<ExtArgs>
        fields: Prisma.UserWatchHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserWatchHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserWatchHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchHistoryPayload>
          }
          findFirst: {
            args: Prisma.UserWatchHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserWatchHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchHistoryPayload>
          }
          findMany: {
            args: Prisma.UserWatchHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchHistoryPayload>[]
          }
          create: {
            args: Prisma.UserWatchHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchHistoryPayload>
          }
          createMany: {
            args: Prisma.UserWatchHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserWatchHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchHistoryPayload>[]
          }
          delete: {
            args: Prisma.UserWatchHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchHistoryPayload>
          }
          update: {
            args: Prisma.UserWatchHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchHistoryPayload>
          }
          deleteMany: {
            args: Prisma.UserWatchHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserWatchHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserWatchHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchHistoryPayload>[]
          }
          upsert: {
            args: Prisma.UserWatchHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchHistoryPayload>
          }
          aggregate: {
            args: Prisma.UserWatchHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserWatchHistory>
          }
          groupBy: {
            args: Prisma.UserWatchHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserWatchHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserWatchHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserWatchHistoryCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    profile?: ProfileOmit
    video?: VideoOmit
    genre?: GenreOmit
    videoGenre?: VideoGenreOmit
    person?: PersonOmit
    videoCast?: VideoCastOmit
    season?: SeasonOmit
    episode?: EpisodeOmit
    review?: ReviewOmit
    userWatchlist?: UserWatchlistOmit
    userWatchHistory?: UserWatchHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviews: number
    profiles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    profiles?: boolean | UserCountOutputTypeCountProfilesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    watchHistory: number
    watchList: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchHistory?: boolean | ProfileCountOutputTypeCountWatchHistoryArgs
    watchList?: boolean | ProfileCountOutputTypeCountWatchListArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountWatchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWatchHistoryWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountWatchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWatchlistWhereInput
  }


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    reviews: number
    seasons: number
    watchHistory: number
    watchlist: number
    cast: number
    genres: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | VideoCountOutputTypeCountReviewsArgs
    seasons?: boolean | VideoCountOutputTypeCountSeasonsArgs
    watchHistory?: boolean | VideoCountOutputTypeCountWatchHistoryArgs
    watchlist?: boolean | VideoCountOutputTypeCountWatchlistArgs
    cast?: boolean | VideoCountOutputTypeCountCastArgs
    genres?: boolean | VideoCountOutputTypeCountGenresArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountSeasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountWatchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWatchHistoryWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountWatchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWatchlistWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountCastArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoCastWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoGenreWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    videos: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | GenreCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoGenreWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    videoCast: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videoCast?: boolean | PersonCountOutputTypeCountVideoCastArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountVideoCastArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoCastWhereInput
  }


  /**
   * Count Type SeasonCountOutputType
   */

  export type SeasonCountOutputType = {
    episodes: number
  }

  export type SeasonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | SeasonCountOutputTypeCountEpisodesArgs
  }

  // Custom InputTypes
  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonCountOutputType
     */
    select?: SeasonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    plan_type: string | null
    payment: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    plan_type: string | null
    payment: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    plan_type: number
    payment: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    plan_type?: true
    payment?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    plan_type?: true
    payment?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    plan_type?: true
    payment?: true
    created_at?: true
    updated_at?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    plan_type: string
    payment: boolean
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    plan_type?: boolean
    payment?: boolean
    created_at?: boolean
    updated_at?: boolean
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    profiles?: boolean | User$profilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    plan_type?: boolean
    payment?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    plan_type?: boolean
    payment?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    plan_type?: boolean
    payment?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "plan_type" | "payment" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    profiles?: boolean | User$profilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      profiles: Prisma.$ProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      plan_type: string
      payment: boolean
      created_at: Date
      updated_at: Date
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
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profiles<T extends User$profilesArgs<ExtArgs> = {}>(args?: Subset<T, User$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly plan_type: FieldRef<"User", 'String'>
    readonly payment: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.profiles
   */
  export type User$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    cursor?: ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    name: string | null
    avatarUrl: string | null
    userId: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    avatarUrl: string | null
    userId: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    name: number
    avatarUrl: number
    userId: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    name?: true
    avatarUrl?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    name?: true
    avatarUrl?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    name?: true
    avatarUrl?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    name: string
    avatarUrl: string | null
    userId: string
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatarUrl?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    watchHistory?: boolean | Profile$watchHistoryArgs<ExtArgs>
    watchList?: boolean | Profile$watchListArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatarUrl?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatarUrl?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    name?: boolean
    avatarUrl?: boolean
    userId?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "avatarUrl" | "userId", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    watchHistory?: boolean | Profile$watchHistoryArgs<ExtArgs>
    watchList?: boolean | Profile$watchListArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      watchHistory: Prisma.$UserWatchHistoryPayload<ExtArgs>[]
      watchList: Prisma.$UserWatchlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      avatarUrl: string | null
      userId: string
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    watchHistory<T extends Profile$watchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Profile$watchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchList<T extends Profile$watchListArgs<ExtArgs> = {}>(args?: Subset<T, Profile$watchListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly avatarUrl: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.watchHistory
   */
  export type Profile$watchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryInclude<ExtArgs> | null
    where?: UserWatchHistoryWhereInput
    orderBy?: UserWatchHistoryOrderByWithRelationInput | UserWatchHistoryOrderByWithRelationInput[]
    cursor?: UserWatchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWatchHistoryScalarFieldEnum | UserWatchHistoryScalarFieldEnum[]
  }

  /**
   * Profile.watchList
   */
  export type Profile$watchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistInclude<ExtArgs> | null
    where?: UserWatchlistWhereInput
    orderBy?: UserWatchlistOrderByWithRelationInput | UserWatchlistOrderByWithRelationInput[]
    cursor?: UserWatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWatchlistScalarFieldEnum | UserWatchlistScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    duration: number | null
    introStartTime: number | null
    introEndTime: number | null
  }

  export type VideoSumAggregateOutputType = {
    duration: number | null
    introStartTime: number | null
    introEndTime: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    duration: number | null
    releaseDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    videoUrl: string | null
    thumbnailUrl: string | null
    introStartTime: number | null
    introEndTime: number | null
    trailerUrl: string | null
    ageRating: $Enums.AgeRating | null
    type: $Enums.VideoType | null
    status: $Enums.VideoStatus | null
    isOriginal: boolean | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    duration: number | null
    releaseDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    videoUrl: string | null
    thumbnailUrl: string | null
    introStartTime: number | null
    introEndTime: number | null
    trailerUrl: string | null
    ageRating: $Enums.AgeRating | null
    type: $Enums.VideoType | null
    status: $Enums.VideoStatus | null
    isOriginal: boolean | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    duration: number
    releaseDate: number
    createdAt: number
    updatedAt: number
    videoUrl: number
    thumbnailUrl: number
    introStartTime: number
    introEndTime: number
    trailerUrl: number
    ageRating: number
    type: number
    status: number
    isOriginal: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    duration?: true
    introStartTime?: true
    introEndTime?: true
  }

  export type VideoSumAggregateInputType = {
    duration?: true
    introStartTime?: true
    introEndTime?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    duration?: true
    releaseDate?: true
    createdAt?: true
    updatedAt?: true
    videoUrl?: true
    thumbnailUrl?: true
    introStartTime?: true
    introEndTime?: true
    trailerUrl?: true
    ageRating?: true
    type?: true
    status?: true
    isOriginal?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    duration?: true
    releaseDate?: true
    createdAt?: true
    updatedAt?: true
    videoUrl?: true
    thumbnailUrl?: true
    introStartTime?: true
    introEndTime?: true
    trailerUrl?: true
    ageRating?: true
    type?: true
    status?: true
    isOriginal?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    duration?: true
    releaseDate?: true
    createdAt?: true
    updatedAt?: true
    videoUrl?: true
    thumbnailUrl?: true
    introStartTime?: true
    introEndTime?: true
    trailerUrl?: true
    ageRating?: true
    type?: true
    status?: true
    isOriginal?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    title: string
    slug: string
    description: string | null
    duration: number
    releaseDate: Date
    createdAt: Date
    updatedAt: Date
    videoUrl: string
    thumbnailUrl: string
    introStartTime: number | null
    introEndTime: number | null
    trailerUrl: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status: $Enums.VideoStatus
    isOriginal: boolean
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    duration?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    introStartTime?: boolean
    introEndTime?: boolean
    trailerUrl?: boolean
    ageRating?: boolean
    type?: boolean
    status?: boolean
    isOriginal?: boolean
    reviews?: boolean | Video$reviewsArgs<ExtArgs>
    seasons?: boolean | Video$seasonsArgs<ExtArgs>
    watchHistory?: boolean | Video$watchHistoryArgs<ExtArgs>
    watchlist?: boolean | Video$watchlistArgs<ExtArgs>
    cast?: boolean | Video$castArgs<ExtArgs>
    genres?: boolean | Video$genresArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    duration?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    introStartTime?: boolean
    introEndTime?: boolean
    trailerUrl?: boolean
    ageRating?: boolean
    type?: boolean
    status?: boolean
    isOriginal?: boolean
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    duration?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    introStartTime?: boolean
    introEndTime?: boolean
    trailerUrl?: boolean
    ageRating?: boolean
    type?: boolean
    status?: boolean
    isOriginal?: boolean
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    duration?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    introStartTime?: boolean
    introEndTime?: boolean
    trailerUrl?: boolean
    ageRating?: boolean
    type?: boolean
    status?: boolean
    isOriginal?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description" | "duration" | "releaseDate" | "createdAt" | "updatedAt" | "videoUrl" | "thumbnailUrl" | "introStartTime" | "introEndTime" | "trailerUrl" | "ageRating" | "type" | "status" | "isOriginal", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Video$reviewsArgs<ExtArgs>
    seasons?: boolean | Video$seasonsArgs<ExtArgs>
    watchHistory?: boolean | Video$watchHistoryArgs<ExtArgs>
    watchlist?: boolean | Video$watchlistArgs<ExtArgs>
    cast?: boolean | Video$castArgs<ExtArgs>
    genres?: boolean | Video$genresArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      seasons: Prisma.$SeasonPayload<ExtArgs>[]
      watchHistory: Prisma.$UserWatchHistoryPayload<ExtArgs>[]
      watchlist: Prisma.$UserWatchlistPayload<ExtArgs>[]
      cast: Prisma.$VideoCastPayload<ExtArgs>[]
      genres: Prisma.$VideoGenrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      description: string | null
      duration: number
      releaseDate: Date
      createdAt: Date
      updatedAt: Date
      videoUrl: string
      thumbnailUrl: string
      introStartTime: number | null
      introEndTime: number | null
      trailerUrl: string | null
      ageRating: $Enums.AgeRating
      type: $Enums.VideoType
      status: $Enums.VideoStatus
      isOriginal: boolean
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends Video$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Video$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seasons<T extends Video$seasonsArgs<ExtArgs> = {}>(args?: Subset<T, Video$seasonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchHistory<T extends Video$watchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Video$watchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchlist<T extends Video$watchlistArgs<ExtArgs> = {}>(args?: Subset<T, Video$watchlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cast<T extends Video$castArgs<ExtArgs> = {}>(args?: Subset<T, Video$castArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genres<T extends Video$genresArgs<ExtArgs> = {}>(args?: Subset<T, Video$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly title: FieldRef<"Video", 'String'>
    readonly slug: FieldRef<"Video", 'String'>
    readonly description: FieldRef<"Video", 'String'>
    readonly duration: FieldRef<"Video", 'Int'>
    readonly releaseDate: FieldRef<"Video", 'DateTime'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
    readonly updatedAt: FieldRef<"Video", 'DateTime'>
    readonly videoUrl: FieldRef<"Video", 'String'>
    readonly thumbnailUrl: FieldRef<"Video", 'String'>
    readonly introStartTime: FieldRef<"Video", 'Int'>
    readonly introEndTime: FieldRef<"Video", 'Int'>
    readonly trailerUrl: FieldRef<"Video", 'String'>
    readonly ageRating: FieldRef<"Video", 'AgeRating'>
    readonly type: FieldRef<"Video", 'VideoType'>
    readonly status: FieldRef<"Video", 'VideoStatus'>
    readonly isOriginal: FieldRef<"Video", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.reviews
   */
  export type Video$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Video.seasons
   */
  export type Video$seasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    where?: SeasonWhereInput
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    cursor?: SeasonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Video.watchHistory
   */
  export type Video$watchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryInclude<ExtArgs> | null
    where?: UserWatchHistoryWhereInput
    orderBy?: UserWatchHistoryOrderByWithRelationInput | UserWatchHistoryOrderByWithRelationInput[]
    cursor?: UserWatchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWatchHistoryScalarFieldEnum | UserWatchHistoryScalarFieldEnum[]
  }

  /**
   * Video.watchlist
   */
  export type Video$watchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistInclude<ExtArgs> | null
    where?: UserWatchlistWhereInput
    orderBy?: UserWatchlistOrderByWithRelationInput | UserWatchlistOrderByWithRelationInput[]
    cursor?: UserWatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWatchlistScalarFieldEnum | UserWatchlistScalarFieldEnum[]
  }

  /**
   * Video.cast
   */
  export type Video$castArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastInclude<ExtArgs> | null
    where?: VideoCastWhereInput
    orderBy?: VideoCastOrderByWithRelationInput | VideoCastOrderByWithRelationInput[]
    cursor?: VideoCastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoCastScalarFieldEnum | VideoCastScalarFieldEnum[]
  }

  /**
   * Video.genres
   */
  export type Video$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreInclude<ExtArgs> | null
    where?: VideoGenreWhereInput
    orderBy?: VideoGenreOrderByWithRelationInput | VideoGenreOrderByWithRelationInput[]
    cursor?: VideoGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoGenreScalarFieldEnum | VideoGenreScalarFieldEnum[]
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: string
    name: string
    slug: string
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    videos?: boolean | Genre$videosArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | Genre$videosArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      videos: Prisma.$VideoGenrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
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
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
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
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videos<T extends Genre$videosArgs<ExtArgs> = {}>(args?: Subset<T, Genre$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'String'>
    readonly name: FieldRef<"Genre", 'String'>
    readonly slug: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.videos
   */
  export type Genre$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreInclude<ExtArgs> | null
    where?: VideoGenreWhereInput
    orderBy?: VideoGenreOrderByWithRelationInput | VideoGenreOrderByWithRelationInput[]
    cursor?: VideoGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoGenreScalarFieldEnum | VideoGenreScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model VideoGenre
   */

  export type AggregateVideoGenre = {
    _count: VideoGenreCountAggregateOutputType | null
    _min: VideoGenreMinAggregateOutputType | null
    _max: VideoGenreMaxAggregateOutputType | null
  }

  export type VideoGenreMinAggregateOutputType = {
    id: string | null
    videoId: string | null
    genreId: string | null
  }

  export type VideoGenreMaxAggregateOutputType = {
    id: string | null
    videoId: string | null
    genreId: string | null
  }

  export type VideoGenreCountAggregateOutputType = {
    id: number
    videoId: number
    genreId: number
    _all: number
  }


  export type VideoGenreMinAggregateInputType = {
    id?: true
    videoId?: true
    genreId?: true
  }

  export type VideoGenreMaxAggregateInputType = {
    id?: true
    videoId?: true
    genreId?: true
  }

  export type VideoGenreCountAggregateInputType = {
    id?: true
    videoId?: true
    genreId?: true
    _all?: true
  }

  export type VideoGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoGenre to aggregate.
     */
    where?: VideoGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoGenres to fetch.
     */
    orderBy?: VideoGenreOrderByWithRelationInput | VideoGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoGenres
    **/
    _count?: true | VideoGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoGenreMaxAggregateInputType
  }

  export type GetVideoGenreAggregateType<T extends VideoGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoGenre[P]>
      : GetScalarType<T[P], AggregateVideoGenre[P]>
  }




  export type VideoGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoGenreWhereInput
    orderBy?: VideoGenreOrderByWithAggregationInput | VideoGenreOrderByWithAggregationInput[]
    by: VideoGenreScalarFieldEnum[] | VideoGenreScalarFieldEnum
    having?: VideoGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoGenreCountAggregateInputType | true
    _min?: VideoGenreMinAggregateInputType
    _max?: VideoGenreMaxAggregateInputType
  }

  export type VideoGenreGroupByOutputType = {
    id: string
    videoId: string
    genreId: string
    _count: VideoGenreCountAggregateOutputType | null
    _min: VideoGenreMinAggregateOutputType | null
    _max: VideoGenreMaxAggregateOutputType | null
  }

  type GetVideoGenreGroupByPayload<T extends VideoGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGenreGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGenreGroupByOutputType[P]>
        }
      >
    >


  export type VideoGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    genreId?: boolean
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoGenre"]>

  export type VideoGenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    genreId?: boolean
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoGenre"]>

  export type VideoGenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    genreId?: boolean
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoGenre"]>

  export type VideoGenreSelectScalar = {
    id?: boolean
    videoId?: boolean
    genreId?: boolean
  }

  export type VideoGenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoId" | "genreId", ExtArgs["result"]["videoGenre"]>
  export type VideoGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type VideoGenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type VideoGenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $VideoGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoGenre"
    objects: {
      genre: Prisma.$GenrePayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoId: string
      genreId: string
    }, ExtArgs["result"]["videoGenre"]>
    composites: {}
  }

  type VideoGenreGetPayload<S extends boolean | null | undefined | VideoGenreDefaultArgs> = $Result.GetResult<Prisma.$VideoGenrePayload, S>

  type VideoGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoGenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoGenreCountAggregateInputType | true
    }

  export interface VideoGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoGenre'], meta: { name: 'VideoGenre' } }
    /**
     * Find zero or one VideoGenre that matches the filter.
     * @param {VideoGenreFindUniqueArgs} args - Arguments to find a VideoGenre
     * @example
     * // Get one VideoGenre
     * const videoGenre = await prisma.videoGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoGenreFindUniqueArgs>(args: SelectSubset<T, VideoGenreFindUniqueArgs<ExtArgs>>): Prisma__VideoGenreClient<$Result.GetResult<Prisma.$VideoGenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoGenre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoGenreFindUniqueOrThrowArgs} args - Arguments to find a VideoGenre
     * @example
     * // Get one VideoGenre
     * const videoGenre = await prisma.videoGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoGenreFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoGenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoGenreClient<$Result.GetResult<Prisma.$VideoGenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGenreFindFirstArgs} args - Arguments to find a VideoGenre
     * @example
     * // Get one VideoGenre
     * const videoGenre = await prisma.videoGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoGenreFindFirstArgs>(args?: SelectSubset<T, VideoGenreFindFirstArgs<ExtArgs>>): Prisma__VideoGenreClient<$Result.GetResult<Prisma.$VideoGenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGenreFindFirstOrThrowArgs} args - Arguments to find a VideoGenre
     * @example
     * // Get one VideoGenre
     * const videoGenre = await prisma.videoGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoGenreFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoGenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoGenreClient<$Result.GetResult<Prisma.$VideoGenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoGenres
     * const videoGenres = await prisma.videoGenre.findMany()
     * 
     * // Get first 10 VideoGenres
     * const videoGenres = await prisma.videoGenre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoGenreWithIdOnly = await prisma.videoGenre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoGenreFindManyArgs>(args?: SelectSubset<T, VideoGenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoGenre.
     * @param {VideoGenreCreateArgs} args - Arguments to create a VideoGenre.
     * @example
     * // Create one VideoGenre
     * const VideoGenre = await prisma.videoGenre.create({
     *   data: {
     *     // ... data to create a VideoGenre
     *   }
     * })
     * 
     */
    create<T extends VideoGenreCreateArgs>(args: SelectSubset<T, VideoGenreCreateArgs<ExtArgs>>): Prisma__VideoGenreClient<$Result.GetResult<Prisma.$VideoGenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoGenres.
     * @param {VideoGenreCreateManyArgs} args - Arguments to create many VideoGenres.
     * @example
     * // Create many VideoGenres
     * const videoGenre = await prisma.videoGenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoGenreCreateManyArgs>(args?: SelectSubset<T, VideoGenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoGenres and returns the data saved in the database.
     * @param {VideoGenreCreateManyAndReturnArgs} args - Arguments to create many VideoGenres.
     * @example
     * // Create many VideoGenres
     * const videoGenre = await prisma.videoGenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoGenres and only return the `id`
     * const videoGenreWithIdOnly = await prisma.videoGenre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoGenreCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoGenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoGenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoGenre.
     * @param {VideoGenreDeleteArgs} args - Arguments to delete one VideoGenre.
     * @example
     * // Delete one VideoGenre
     * const VideoGenre = await prisma.videoGenre.delete({
     *   where: {
     *     // ... filter to delete one VideoGenre
     *   }
     * })
     * 
     */
    delete<T extends VideoGenreDeleteArgs>(args: SelectSubset<T, VideoGenreDeleteArgs<ExtArgs>>): Prisma__VideoGenreClient<$Result.GetResult<Prisma.$VideoGenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoGenre.
     * @param {VideoGenreUpdateArgs} args - Arguments to update one VideoGenre.
     * @example
     * // Update one VideoGenre
     * const videoGenre = await prisma.videoGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoGenreUpdateArgs>(args: SelectSubset<T, VideoGenreUpdateArgs<ExtArgs>>): Prisma__VideoGenreClient<$Result.GetResult<Prisma.$VideoGenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoGenres.
     * @param {VideoGenreDeleteManyArgs} args - Arguments to filter VideoGenres to delete.
     * @example
     * // Delete a few VideoGenres
     * const { count } = await prisma.videoGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoGenreDeleteManyArgs>(args?: SelectSubset<T, VideoGenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoGenres
     * const videoGenre = await prisma.videoGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoGenreUpdateManyArgs>(args: SelectSubset<T, VideoGenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoGenres and returns the data updated in the database.
     * @param {VideoGenreUpdateManyAndReturnArgs} args - Arguments to update many VideoGenres.
     * @example
     * // Update many VideoGenres
     * const videoGenre = await prisma.videoGenre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoGenres and only return the `id`
     * const videoGenreWithIdOnly = await prisma.videoGenre.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoGenreUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoGenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoGenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoGenre.
     * @param {VideoGenreUpsertArgs} args - Arguments to update or create a VideoGenre.
     * @example
     * // Update or create a VideoGenre
     * const videoGenre = await prisma.videoGenre.upsert({
     *   create: {
     *     // ... data to create a VideoGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoGenre we want to update
     *   }
     * })
     */
    upsert<T extends VideoGenreUpsertArgs>(args: SelectSubset<T, VideoGenreUpsertArgs<ExtArgs>>): Prisma__VideoGenreClient<$Result.GetResult<Prisma.$VideoGenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGenreCountArgs} args - Arguments to filter VideoGenres to count.
     * @example
     * // Count the number of VideoGenres
     * const count = await prisma.videoGenre.count({
     *   where: {
     *     // ... the filter for the VideoGenres we want to count
     *   }
     * })
    **/
    count<T extends VideoGenreCountArgs>(
      args?: Subset<T, VideoGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoGenreAggregateArgs>(args: Subset<T, VideoGenreAggregateArgs>): Prisma.PrismaPromise<GetVideoGenreAggregateType<T>>

    /**
     * Group by VideoGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGenreGroupByArgs} args - Group by arguments.
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
      T extends VideoGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGenreGroupByArgs['orderBy'] }
        : { orderBy?: VideoGenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoGenre model
   */
  readonly fields: VideoGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoGenre model
   */
  interface VideoGenreFieldRefs {
    readonly id: FieldRef<"VideoGenre", 'String'>
    readonly videoId: FieldRef<"VideoGenre", 'String'>
    readonly genreId: FieldRef<"VideoGenre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VideoGenre findUnique
   */
  export type VideoGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreInclude<ExtArgs> | null
    /**
     * Filter, which VideoGenre to fetch.
     */
    where: VideoGenreWhereUniqueInput
  }

  /**
   * VideoGenre findUniqueOrThrow
   */
  export type VideoGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreInclude<ExtArgs> | null
    /**
     * Filter, which VideoGenre to fetch.
     */
    where: VideoGenreWhereUniqueInput
  }

  /**
   * VideoGenre findFirst
   */
  export type VideoGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreInclude<ExtArgs> | null
    /**
     * Filter, which VideoGenre to fetch.
     */
    where?: VideoGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoGenres to fetch.
     */
    orderBy?: VideoGenreOrderByWithRelationInput | VideoGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoGenres.
     */
    cursor?: VideoGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoGenres.
     */
    distinct?: VideoGenreScalarFieldEnum | VideoGenreScalarFieldEnum[]
  }

  /**
   * VideoGenre findFirstOrThrow
   */
  export type VideoGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreInclude<ExtArgs> | null
    /**
     * Filter, which VideoGenre to fetch.
     */
    where?: VideoGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoGenres to fetch.
     */
    orderBy?: VideoGenreOrderByWithRelationInput | VideoGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoGenres.
     */
    cursor?: VideoGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoGenres.
     */
    distinct?: VideoGenreScalarFieldEnum | VideoGenreScalarFieldEnum[]
  }

  /**
   * VideoGenre findMany
   */
  export type VideoGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreInclude<ExtArgs> | null
    /**
     * Filter, which VideoGenres to fetch.
     */
    where?: VideoGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoGenres to fetch.
     */
    orderBy?: VideoGenreOrderByWithRelationInput | VideoGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoGenres.
     */
    cursor?: VideoGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoGenres.
     */
    skip?: number
    distinct?: VideoGenreScalarFieldEnum | VideoGenreScalarFieldEnum[]
  }

  /**
   * VideoGenre create
   */
  export type VideoGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoGenre.
     */
    data: XOR<VideoGenreCreateInput, VideoGenreUncheckedCreateInput>
  }

  /**
   * VideoGenre createMany
   */
  export type VideoGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoGenres.
     */
    data: VideoGenreCreateManyInput | VideoGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoGenre createManyAndReturn
   */
  export type VideoGenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * The data used to create many VideoGenres.
     */
    data: VideoGenreCreateManyInput | VideoGenreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoGenre update
   */
  export type VideoGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoGenre.
     */
    data: XOR<VideoGenreUpdateInput, VideoGenreUncheckedUpdateInput>
    /**
     * Choose, which VideoGenre to update.
     */
    where: VideoGenreWhereUniqueInput
  }

  /**
   * VideoGenre updateMany
   */
  export type VideoGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoGenres.
     */
    data: XOR<VideoGenreUpdateManyMutationInput, VideoGenreUncheckedUpdateManyInput>
    /**
     * Filter which VideoGenres to update
     */
    where?: VideoGenreWhereInput
    /**
     * Limit how many VideoGenres to update.
     */
    limit?: number
  }

  /**
   * VideoGenre updateManyAndReturn
   */
  export type VideoGenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * The data used to update VideoGenres.
     */
    data: XOR<VideoGenreUpdateManyMutationInput, VideoGenreUncheckedUpdateManyInput>
    /**
     * Filter which VideoGenres to update
     */
    where?: VideoGenreWhereInput
    /**
     * Limit how many VideoGenres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoGenre upsert
   */
  export type VideoGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoGenre to update in case it exists.
     */
    where: VideoGenreWhereUniqueInput
    /**
     * In case the VideoGenre found by the `where` argument doesn't exist, create a new VideoGenre with this data.
     */
    create: XOR<VideoGenreCreateInput, VideoGenreUncheckedCreateInput>
    /**
     * In case the VideoGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoGenreUpdateInput, VideoGenreUncheckedUpdateInput>
  }

  /**
   * VideoGenre delete
   */
  export type VideoGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreInclude<ExtArgs> | null
    /**
     * Filter which VideoGenre to delete.
     */
    where: VideoGenreWhereUniqueInput
  }

  /**
   * VideoGenre deleteMany
   */
  export type VideoGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoGenres to delete
     */
    where?: VideoGenreWhereInput
    /**
     * Limit how many VideoGenres to delete.
     */
    limit?: number
  }

  /**
   * VideoGenre without action
   */
  export type VideoGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoGenre
     */
    select?: VideoGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoGenre
     */
    omit?: VideoGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoGenreInclude<ExtArgs> | null
  }


  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    name: string | null
    biography: string | null
    birthDate: Date | null
    photoUrl: string | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    biography: string | null
    birthDate: Date | null
    photoUrl: string | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    name: number
    biography: number
    birthDate: number
    photoUrl: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    name?: true
    biography?: true
    birthDate?: true
    photoUrl?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    name?: true
    biography?: true
    birthDate?: true
    photoUrl?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    name?: true
    biography?: true
    birthDate?: true
    photoUrl?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: string
    name: string
    biography: string | null
    birthDate: Date | null
    photoUrl: string | null
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    biography?: boolean
    birthDate?: boolean
    photoUrl?: boolean
    videoCast?: boolean | Person$videoCastArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    biography?: boolean
    birthDate?: boolean
    photoUrl?: boolean
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    biography?: boolean
    birthDate?: boolean
    photoUrl?: boolean
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    name?: boolean
    biography?: boolean
    birthDate?: boolean
    photoUrl?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "biography" | "birthDate" | "photoUrl", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videoCast?: boolean | Person$videoCastArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      videoCast: Prisma.$VideoCastPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      biography: string | null
      birthDate: Date | null
      photoUrl: string | null
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
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
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
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
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videoCast<T extends Person$videoCastArgs<ExtArgs> = {}>(args?: Subset<T, Person$videoCastArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'String'>
    readonly name: FieldRef<"Person", 'String'>
    readonly biography: FieldRef<"Person", 'String'>
    readonly birthDate: FieldRef<"Person", 'DateTime'>
    readonly photoUrl: FieldRef<"Person", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person.videoCast
   */
  export type Person$videoCastArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastInclude<ExtArgs> | null
    where?: VideoCastWhereInput
    orderBy?: VideoCastOrderByWithRelationInput | VideoCastOrderByWithRelationInput[]
    cursor?: VideoCastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoCastScalarFieldEnum | VideoCastScalarFieldEnum[]
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model VideoCast
   */

  export type AggregateVideoCast = {
    _count: VideoCastCountAggregateOutputType | null
    _min: VideoCastMinAggregateOutputType | null
    _max: VideoCastMaxAggregateOutputType | null
  }

  export type VideoCastMinAggregateOutputType = {
    id: string | null
    videoId: string | null
    personId: string | null
    role: $Enums.CastRole | null
    character: string | null
  }

  export type VideoCastMaxAggregateOutputType = {
    id: string | null
    videoId: string | null
    personId: string | null
    role: $Enums.CastRole | null
    character: string | null
  }

  export type VideoCastCountAggregateOutputType = {
    id: number
    videoId: number
    personId: number
    role: number
    character: number
    _all: number
  }


  export type VideoCastMinAggregateInputType = {
    id?: true
    videoId?: true
    personId?: true
    role?: true
    character?: true
  }

  export type VideoCastMaxAggregateInputType = {
    id?: true
    videoId?: true
    personId?: true
    role?: true
    character?: true
  }

  export type VideoCastCountAggregateInputType = {
    id?: true
    videoId?: true
    personId?: true
    role?: true
    character?: true
    _all?: true
  }

  export type VideoCastAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoCast to aggregate.
     */
    where?: VideoCastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCasts to fetch.
     */
    orderBy?: VideoCastOrderByWithRelationInput | VideoCastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoCastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoCasts
    **/
    _count?: true | VideoCastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoCastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoCastMaxAggregateInputType
  }

  export type GetVideoCastAggregateType<T extends VideoCastAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoCast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoCast[P]>
      : GetScalarType<T[P], AggregateVideoCast[P]>
  }




  export type VideoCastGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoCastWhereInput
    orderBy?: VideoCastOrderByWithAggregationInput | VideoCastOrderByWithAggregationInput[]
    by: VideoCastScalarFieldEnum[] | VideoCastScalarFieldEnum
    having?: VideoCastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCastCountAggregateInputType | true
    _min?: VideoCastMinAggregateInputType
    _max?: VideoCastMaxAggregateInputType
  }

  export type VideoCastGroupByOutputType = {
    id: string
    videoId: string
    personId: string
    role: $Enums.CastRole
    character: string | null
    _count: VideoCastCountAggregateOutputType | null
    _min: VideoCastMinAggregateOutputType | null
    _max: VideoCastMaxAggregateOutputType | null
  }

  type GetVideoCastGroupByPayload<T extends VideoCastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoCastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoCastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoCastGroupByOutputType[P]>
            : GetScalarType<T[P], VideoCastGroupByOutputType[P]>
        }
      >
    >


  export type VideoCastSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    personId?: boolean
    role?: boolean
    character?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoCast"]>

  export type VideoCastSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    personId?: boolean
    role?: boolean
    character?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoCast"]>

  export type VideoCastSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    personId?: boolean
    role?: boolean
    character?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoCast"]>

  export type VideoCastSelectScalar = {
    id?: boolean
    videoId?: boolean
    personId?: boolean
    role?: boolean
    character?: boolean
  }

  export type VideoCastOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoId" | "personId" | "role" | "character", ExtArgs["result"]["videoCast"]>
  export type VideoCastInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type VideoCastIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type VideoCastIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $VideoCastPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoCast"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoId: string
      personId: string
      role: $Enums.CastRole
      character: string | null
    }, ExtArgs["result"]["videoCast"]>
    composites: {}
  }

  type VideoCastGetPayload<S extends boolean | null | undefined | VideoCastDefaultArgs> = $Result.GetResult<Prisma.$VideoCastPayload, S>

  type VideoCastCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoCastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCastCountAggregateInputType | true
    }

  export interface VideoCastDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoCast'], meta: { name: 'VideoCast' } }
    /**
     * Find zero or one VideoCast that matches the filter.
     * @param {VideoCastFindUniqueArgs} args - Arguments to find a VideoCast
     * @example
     * // Get one VideoCast
     * const videoCast = await prisma.videoCast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoCastFindUniqueArgs>(args: SelectSubset<T, VideoCastFindUniqueArgs<ExtArgs>>): Prisma__VideoCastClient<$Result.GetResult<Prisma.$VideoCastPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoCast that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoCastFindUniqueOrThrowArgs} args - Arguments to find a VideoCast
     * @example
     * // Get one VideoCast
     * const videoCast = await prisma.videoCast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoCastFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoCastFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoCastClient<$Result.GetResult<Prisma.$VideoCastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoCast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCastFindFirstArgs} args - Arguments to find a VideoCast
     * @example
     * // Get one VideoCast
     * const videoCast = await prisma.videoCast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoCastFindFirstArgs>(args?: SelectSubset<T, VideoCastFindFirstArgs<ExtArgs>>): Prisma__VideoCastClient<$Result.GetResult<Prisma.$VideoCastPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoCast that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCastFindFirstOrThrowArgs} args - Arguments to find a VideoCast
     * @example
     * // Get one VideoCast
     * const videoCast = await prisma.videoCast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoCastFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoCastFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoCastClient<$Result.GetResult<Prisma.$VideoCastPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoCasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCastFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoCasts
     * const videoCasts = await prisma.videoCast.findMany()
     * 
     * // Get first 10 VideoCasts
     * const videoCasts = await prisma.videoCast.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoCastWithIdOnly = await prisma.videoCast.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoCastFindManyArgs>(args?: SelectSubset<T, VideoCastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoCast.
     * @param {VideoCastCreateArgs} args - Arguments to create a VideoCast.
     * @example
     * // Create one VideoCast
     * const VideoCast = await prisma.videoCast.create({
     *   data: {
     *     // ... data to create a VideoCast
     *   }
     * })
     * 
     */
    create<T extends VideoCastCreateArgs>(args: SelectSubset<T, VideoCastCreateArgs<ExtArgs>>): Prisma__VideoCastClient<$Result.GetResult<Prisma.$VideoCastPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoCasts.
     * @param {VideoCastCreateManyArgs} args - Arguments to create many VideoCasts.
     * @example
     * // Create many VideoCasts
     * const videoCast = await prisma.videoCast.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCastCreateManyArgs>(args?: SelectSubset<T, VideoCastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoCasts and returns the data saved in the database.
     * @param {VideoCastCreateManyAndReturnArgs} args - Arguments to create many VideoCasts.
     * @example
     * // Create many VideoCasts
     * const videoCast = await prisma.videoCast.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoCasts and only return the `id`
     * const videoCastWithIdOnly = await prisma.videoCast.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCastCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCastCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCastPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoCast.
     * @param {VideoCastDeleteArgs} args - Arguments to delete one VideoCast.
     * @example
     * // Delete one VideoCast
     * const VideoCast = await prisma.videoCast.delete({
     *   where: {
     *     // ... filter to delete one VideoCast
     *   }
     * })
     * 
     */
    delete<T extends VideoCastDeleteArgs>(args: SelectSubset<T, VideoCastDeleteArgs<ExtArgs>>): Prisma__VideoCastClient<$Result.GetResult<Prisma.$VideoCastPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoCast.
     * @param {VideoCastUpdateArgs} args - Arguments to update one VideoCast.
     * @example
     * // Update one VideoCast
     * const videoCast = await prisma.videoCast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoCastUpdateArgs>(args: SelectSubset<T, VideoCastUpdateArgs<ExtArgs>>): Prisma__VideoCastClient<$Result.GetResult<Prisma.$VideoCastPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoCasts.
     * @param {VideoCastDeleteManyArgs} args - Arguments to filter VideoCasts to delete.
     * @example
     * // Delete a few VideoCasts
     * const { count } = await prisma.videoCast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoCastDeleteManyArgs>(args?: SelectSubset<T, VideoCastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoCasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoCasts
     * const videoCast = await prisma.videoCast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoCastUpdateManyArgs>(args: SelectSubset<T, VideoCastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoCasts and returns the data updated in the database.
     * @param {VideoCastUpdateManyAndReturnArgs} args - Arguments to update many VideoCasts.
     * @example
     * // Update many VideoCasts
     * const videoCast = await prisma.videoCast.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoCasts and only return the `id`
     * const videoCastWithIdOnly = await prisma.videoCast.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoCastUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoCastUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCastPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoCast.
     * @param {VideoCastUpsertArgs} args - Arguments to update or create a VideoCast.
     * @example
     * // Update or create a VideoCast
     * const videoCast = await prisma.videoCast.upsert({
     *   create: {
     *     // ... data to create a VideoCast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoCast we want to update
     *   }
     * })
     */
    upsert<T extends VideoCastUpsertArgs>(args: SelectSubset<T, VideoCastUpsertArgs<ExtArgs>>): Prisma__VideoCastClient<$Result.GetResult<Prisma.$VideoCastPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoCasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCastCountArgs} args - Arguments to filter VideoCasts to count.
     * @example
     * // Count the number of VideoCasts
     * const count = await prisma.videoCast.count({
     *   where: {
     *     // ... the filter for the VideoCasts we want to count
     *   }
     * })
    **/
    count<T extends VideoCastCountArgs>(
      args?: Subset<T, VideoCastCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoCast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoCastAggregateArgs>(args: Subset<T, VideoCastAggregateArgs>): Prisma.PrismaPromise<GetVideoCastAggregateType<T>>

    /**
     * Group by VideoCast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCastGroupByArgs} args - Group by arguments.
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
      T extends VideoCastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoCastGroupByArgs['orderBy'] }
        : { orderBy?: VideoCastGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoCastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoCastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoCast model
   */
  readonly fields: VideoCastFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoCast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoCastClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoCast model
   */
  interface VideoCastFieldRefs {
    readonly id: FieldRef<"VideoCast", 'String'>
    readonly videoId: FieldRef<"VideoCast", 'String'>
    readonly personId: FieldRef<"VideoCast", 'String'>
    readonly role: FieldRef<"VideoCast", 'CastRole'>
    readonly character: FieldRef<"VideoCast", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VideoCast findUnique
   */
  export type VideoCastFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastInclude<ExtArgs> | null
    /**
     * Filter, which VideoCast to fetch.
     */
    where: VideoCastWhereUniqueInput
  }

  /**
   * VideoCast findUniqueOrThrow
   */
  export type VideoCastFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastInclude<ExtArgs> | null
    /**
     * Filter, which VideoCast to fetch.
     */
    where: VideoCastWhereUniqueInput
  }

  /**
   * VideoCast findFirst
   */
  export type VideoCastFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastInclude<ExtArgs> | null
    /**
     * Filter, which VideoCast to fetch.
     */
    where?: VideoCastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCasts to fetch.
     */
    orderBy?: VideoCastOrderByWithRelationInput | VideoCastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoCasts.
     */
    cursor?: VideoCastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoCasts.
     */
    distinct?: VideoCastScalarFieldEnum | VideoCastScalarFieldEnum[]
  }

  /**
   * VideoCast findFirstOrThrow
   */
  export type VideoCastFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastInclude<ExtArgs> | null
    /**
     * Filter, which VideoCast to fetch.
     */
    where?: VideoCastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCasts to fetch.
     */
    orderBy?: VideoCastOrderByWithRelationInput | VideoCastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoCasts.
     */
    cursor?: VideoCastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoCasts.
     */
    distinct?: VideoCastScalarFieldEnum | VideoCastScalarFieldEnum[]
  }

  /**
   * VideoCast findMany
   */
  export type VideoCastFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastInclude<ExtArgs> | null
    /**
     * Filter, which VideoCasts to fetch.
     */
    where?: VideoCastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCasts to fetch.
     */
    orderBy?: VideoCastOrderByWithRelationInput | VideoCastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoCasts.
     */
    cursor?: VideoCastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCasts.
     */
    skip?: number
    distinct?: VideoCastScalarFieldEnum | VideoCastScalarFieldEnum[]
  }

  /**
   * VideoCast create
   */
  export type VideoCastCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoCast.
     */
    data: XOR<VideoCastCreateInput, VideoCastUncheckedCreateInput>
  }

  /**
   * VideoCast createMany
   */
  export type VideoCastCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoCasts.
     */
    data: VideoCastCreateManyInput | VideoCastCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoCast createManyAndReturn
   */
  export type VideoCastCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * The data used to create many VideoCasts.
     */
    data: VideoCastCreateManyInput | VideoCastCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoCast update
   */
  export type VideoCastUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoCast.
     */
    data: XOR<VideoCastUpdateInput, VideoCastUncheckedUpdateInput>
    /**
     * Choose, which VideoCast to update.
     */
    where: VideoCastWhereUniqueInput
  }

  /**
   * VideoCast updateMany
   */
  export type VideoCastUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoCasts.
     */
    data: XOR<VideoCastUpdateManyMutationInput, VideoCastUncheckedUpdateManyInput>
    /**
     * Filter which VideoCasts to update
     */
    where?: VideoCastWhereInput
    /**
     * Limit how many VideoCasts to update.
     */
    limit?: number
  }

  /**
   * VideoCast updateManyAndReturn
   */
  export type VideoCastUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * The data used to update VideoCasts.
     */
    data: XOR<VideoCastUpdateManyMutationInput, VideoCastUncheckedUpdateManyInput>
    /**
     * Filter which VideoCasts to update
     */
    where?: VideoCastWhereInput
    /**
     * Limit how many VideoCasts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoCast upsert
   */
  export type VideoCastUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoCast to update in case it exists.
     */
    where: VideoCastWhereUniqueInput
    /**
     * In case the VideoCast found by the `where` argument doesn't exist, create a new VideoCast with this data.
     */
    create: XOR<VideoCastCreateInput, VideoCastUncheckedCreateInput>
    /**
     * In case the VideoCast was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoCastUpdateInput, VideoCastUncheckedUpdateInput>
  }

  /**
   * VideoCast delete
   */
  export type VideoCastDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastInclude<ExtArgs> | null
    /**
     * Filter which VideoCast to delete.
     */
    where: VideoCastWhereUniqueInput
  }

  /**
   * VideoCast deleteMany
   */
  export type VideoCastDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoCasts to delete
     */
    where?: VideoCastWhereInput
    /**
     * Limit how many VideoCasts to delete.
     */
    limit?: number
  }

  /**
   * VideoCast without action
   */
  export type VideoCastDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCast
     */
    select?: VideoCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCast
     */
    omit?: VideoCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCastInclude<ExtArgs> | null
  }


  /**
   * Model Season
   */

  export type AggregateSeason = {
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  export type SeasonAvgAggregateOutputType = {
    seasonNumber: number | null
  }

  export type SeasonSumAggregateOutputType = {
    seasonNumber: number | null
  }

  export type SeasonMinAggregateOutputType = {
    id: string | null
    videoId: string | null
    seasonNumber: number | null
    title: string | null
    description: string | null
    releaseDate: Date | null
  }

  export type SeasonMaxAggregateOutputType = {
    id: string | null
    videoId: string | null
    seasonNumber: number | null
    title: string | null
    description: string | null
    releaseDate: Date | null
  }

  export type SeasonCountAggregateOutputType = {
    id: number
    videoId: number
    seasonNumber: number
    title: number
    description: number
    releaseDate: number
    _all: number
  }


  export type SeasonAvgAggregateInputType = {
    seasonNumber?: true
  }

  export type SeasonSumAggregateInputType = {
    seasonNumber?: true
  }

  export type SeasonMinAggregateInputType = {
    id?: true
    videoId?: true
    seasonNumber?: true
    title?: true
    description?: true
    releaseDate?: true
  }

  export type SeasonMaxAggregateInputType = {
    id?: true
    videoId?: true
    seasonNumber?: true
    title?: true
    description?: true
    releaseDate?: true
  }

  export type SeasonCountAggregateInputType = {
    id?: true
    videoId?: true
    seasonNumber?: true
    title?: true
    description?: true
    releaseDate?: true
    _all?: true
  }

  export type SeasonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Season to aggregate.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seasons
    **/
    _count?: true | SeasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeasonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeasonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonMaxAggregateInputType
  }

  export type GetSeasonAggregateType<T extends SeasonAggregateArgs> = {
        [P in keyof T & keyof AggregateSeason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeason[P]>
      : GetScalarType<T[P], AggregateSeason[P]>
  }




  export type SeasonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonWhereInput
    orderBy?: SeasonOrderByWithAggregationInput | SeasonOrderByWithAggregationInput[]
    by: SeasonScalarFieldEnum[] | SeasonScalarFieldEnum
    having?: SeasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonCountAggregateInputType | true
    _avg?: SeasonAvgAggregateInputType
    _sum?: SeasonSumAggregateInputType
    _min?: SeasonMinAggregateInputType
    _max?: SeasonMaxAggregateInputType
  }

  export type SeasonGroupByOutputType = {
    id: string
    videoId: string
    seasonNumber: number
    title: string | null
    description: string | null
    releaseDate: Date | null
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  type GetSeasonGroupByPayload<T extends SeasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonGroupByOutputType[P]>
        }
      >
    >


  export type SeasonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    seasonNumber?: boolean
    title?: boolean
    description?: boolean
    releaseDate?: boolean
    episodes?: boolean | Season$episodesArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    seasonNumber?: boolean
    title?: boolean
    description?: boolean
    releaseDate?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    seasonNumber?: boolean
    title?: boolean
    description?: boolean
    releaseDate?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectScalar = {
    id?: boolean
    videoId?: boolean
    seasonNumber?: boolean
    title?: boolean
    description?: boolean
    releaseDate?: boolean
  }

  export type SeasonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoId" | "seasonNumber" | "title" | "description" | "releaseDate", ExtArgs["result"]["season"]>
  export type SeasonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | Season$episodesArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeasonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type SeasonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $SeasonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Season"
    objects: {
      episodes: Prisma.$EpisodePayload<ExtArgs>[]
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoId: string
      seasonNumber: number
      title: string | null
      description: string | null
      releaseDate: Date | null
    }, ExtArgs["result"]["season"]>
    composites: {}
  }

  type SeasonGetPayload<S extends boolean | null | undefined | SeasonDefaultArgs> = $Result.GetResult<Prisma.$SeasonPayload, S>

  type SeasonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeasonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeasonCountAggregateInputType | true
    }

  export interface SeasonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Season'], meta: { name: 'Season' } }
    /**
     * Find zero or one Season that matches the filter.
     * @param {SeasonFindUniqueArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeasonFindUniqueArgs>(args: SelectSubset<T, SeasonFindUniqueArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Season that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeasonFindUniqueOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeasonFindUniqueOrThrowArgs>(args: SelectSubset<T, SeasonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Season that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeasonFindFirstArgs>(args?: SelectSubset<T, SeasonFindFirstArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Season that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeasonFindFirstOrThrowArgs>(args?: SelectSubset<T, SeasonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seasons
     * const seasons = await prisma.season.findMany()
     * 
     * // Get first 10 Seasons
     * const seasons = await prisma.season.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonWithIdOnly = await prisma.season.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeasonFindManyArgs>(args?: SelectSubset<T, SeasonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Season.
     * @param {SeasonCreateArgs} args - Arguments to create a Season.
     * @example
     * // Create one Season
     * const Season = await prisma.season.create({
     *   data: {
     *     // ... data to create a Season
     *   }
     * })
     * 
     */
    create<T extends SeasonCreateArgs>(args: SelectSubset<T, SeasonCreateArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seasons.
     * @param {SeasonCreateManyArgs} args - Arguments to create many Seasons.
     * @example
     * // Create many Seasons
     * const season = await prisma.season.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeasonCreateManyArgs>(args?: SelectSubset<T, SeasonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seasons and returns the data saved in the database.
     * @param {SeasonCreateManyAndReturnArgs} args - Arguments to create many Seasons.
     * @example
     * // Create many Seasons
     * const season = await prisma.season.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seasons and only return the `id`
     * const seasonWithIdOnly = await prisma.season.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeasonCreateManyAndReturnArgs>(args?: SelectSubset<T, SeasonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Season.
     * @param {SeasonDeleteArgs} args - Arguments to delete one Season.
     * @example
     * // Delete one Season
     * const Season = await prisma.season.delete({
     *   where: {
     *     // ... filter to delete one Season
     *   }
     * })
     * 
     */
    delete<T extends SeasonDeleteArgs>(args: SelectSubset<T, SeasonDeleteArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Season.
     * @param {SeasonUpdateArgs} args - Arguments to update one Season.
     * @example
     * // Update one Season
     * const season = await prisma.season.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeasonUpdateArgs>(args: SelectSubset<T, SeasonUpdateArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seasons.
     * @param {SeasonDeleteManyArgs} args - Arguments to filter Seasons to delete.
     * @example
     * // Delete a few Seasons
     * const { count } = await prisma.season.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeasonDeleteManyArgs>(args?: SelectSubset<T, SeasonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeasonUpdateManyArgs>(args: SelectSubset<T, SeasonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons and returns the data updated in the database.
     * @param {SeasonUpdateManyAndReturnArgs} args - Arguments to update many Seasons.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seasons and only return the `id`
     * const seasonWithIdOnly = await prisma.season.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeasonUpdateManyAndReturnArgs>(args: SelectSubset<T, SeasonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Season.
     * @param {SeasonUpsertArgs} args - Arguments to update or create a Season.
     * @example
     * // Update or create a Season
     * const season = await prisma.season.upsert({
     *   create: {
     *     // ... data to create a Season
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Season we want to update
     *   }
     * })
     */
    upsert<T extends SeasonUpsertArgs>(args: SelectSubset<T, SeasonUpsertArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonCountArgs} args - Arguments to filter Seasons to count.
     * @example
     * // Count the number of Seasons
     * const count = await prisma.season.count({
     *   where: {
     *     // ... the filter for the Seasons we want to count
     *   }
     * })
    **/
    count<T extends SeasonCountArgs>(
      args?: Subset<T, SeasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeasonAggregateArgs>(args: Subset<T, SeasonAggregateArgs>): Prisma.PrismaPromise<GetSeasonAggregateType<T>>

    /**
     * Group by Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonGroupByArgs} args - Group by arguments.
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
      T extends SeasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonGroupByArgs['orderBy'] }
        : { orderBy?: SeasonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Season model
   */
  readonly fields: SeasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Season.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeasonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episodes<T extends Season$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Season$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Season model
   */
  interface SeasonFieldRefs {
    readonly id: FieldRef<"Season", 'String'>
    readonly videoId: FieldRef<"Season", 'String'>
    readonly seasonNumber: FieldRef<"Season", 'Int'>
    readonly title: FieldRef<"Season", 'String'>
    readonly description: FieldRef<"Season", 'String'>
    readonly releaseDate: FieldRef<"Season", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Season findUnique
   */
  export type SeasonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season findUniqueOrThrow
   */
  export type SeasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season findFirst
   */
  export type SeasonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season findFirstOrThrow
   */
  export type SeasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season findMany
   */
  export type SeasonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Seasons to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season create
   */
  export type SeasonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to create a Season.
     */
    data: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
  }

  /**
   * Season createMany
   */
  export type SeasonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seasons.
     */
    data: SeasonCreateManyInput | SeasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Season createManyAndReturn
   */
  export type SeasonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * The data used to create many Seasons.
     */
    data: SeasonCreateManyInput | SeasonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Season update
   */
  export type SeasonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to update a Season.
     */
    data: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
    /**
     * Choose, which Season to update.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season updateMany
   */
  export type SeasonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seasons.
     */
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to update.
     */
    limit?: number
  }

  /**
   * Season updateManyAndReturn
   */
  export type SeasonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * The data used to update Seasons.
     */
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Season upsert
   */
  export type SeasonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The filter to search for the Season to update in case it exists.
     */
    where: SeasonWhereUniqueInput
    /**
     * In case the Season found by the `where` argument doesn't exist, create a new Season with this data.
     */
    create: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
    /**
     * In case the Season was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
  }

  /**
   * Season delete
   */
  export type SeasonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter which Season to delete.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season deleteMany
   */
  export type SeasonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seasons to delete
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to delete.
     */
    limit?: number
  }

  /**
   * Season.episodes
   */
  export type Season$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Season without action
   */
  export type SeasonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
  }


  /**
   * Model Episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    episodeNumber: number | null
    duration: number | null
    introStartTime: number | null
    introEndTime: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    episodeNumber: number | null
    duration: number | null
    introStartTime: number | null
    introEndTime: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: string | null
    seasonId: string | null
    episodeNumber: number | null
    title: string | null
    description: string | null
    duration: number | null
    videoUrl: string | null
    thumbnailUrl: string | null
    releaseDate: Date | null
    introStartTime: number | null
    introEndTime: number | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: string | null
    seasonId: string | null
    episodeNumber: number | null
    title: string | null
    description: string | null
    duration: number | null
    videoUrl: string | null
    thumbnailUrl: string | null
    releaseDate: Date | null
    introStartTime: number | null
    introEndTime: number | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    seasonId: number
    episodeNumber: number
    title: number
    description: number
    duration: number
    videoUrl: number
    thumbnailUrl: number
    releaseDate: number
    introStartTime: number
    introEndTime: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    episodeNumber?: true
    duration?: true
    introStartTime?: true
    introEndTime?: true
  }

  export type EpisodeSumAggregateInputType = {
    episodeNumber?: true
    duration?: true
    introStartTime?: true
    introEndTime?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    seasonId?: true
    episodeNumber?: true
    title?: true
    description?: true
    duration?: true
    videoUrl?: true
    thumbnailUrl?: true
    releaseDate?: true
    introStartTime?: true
    introEndTime?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    seasonId?: true
    episodeNumber?: true
    title?: true
    description?: true
    duration?: true
    videoUrl?: true
    thumbnailUrl?: true
    releaseDate?: true
    introStartTime?: true
    introEndTime?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    seasonId?: true
    episodeNumber?: true
    title?: true
    description?: true
    duration?: true
    videoUrl?: true
    thumbnailUrl?: true
    releaseDate?: true
    introStartTime?: true
    introEndTime?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithAggregationInput | EpisodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: string
    seasonId: string
    episodeNumber: number
    title: string
    description: string | null
    duration: number
    videoUrl: string
    thumbnailUrl: string
    releaseDate: Date
    introStartTime: number | null
    introEndTime: number | null
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonId?: boolean
    episodeNumber?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    releaseDate?: boolean
    introStartTime?: boolean
    introEndTime?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonId?: boolean
    episodeNumber?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    releaseDate?: boolean
    introStartTime?: boolean
    introEndTime?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonId?: boolean
    episodeNumber?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    releaseDate?: boolean
    introStartTime?: boolean
    introEndTime?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectScalar = {
    id?: boolean
    seasonId?: boolean
    episodeNumber?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    releaseDate?: boolean
    introStartTime?: boolean
    introEndTime?: boolean
  }

  export type EpisodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seasonId" | "episodeNumber" | "title" | "description" | "duration" | "videoUrl" | "thumbnailUrl" | "releaseDate" | "introStartTime" | "introEndTime", ExtArgs["result"]["episode"]>
  export type EpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }

  export type $EpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episode"
    objects: {
      season: Prisma.$SeasonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seasonId: string
      episodeNumber: number
      title: string
      description: string | null
      duration: number
      videoUrl: string
      thumbnailUrl: string
      releaseDate: Date
      introStartTime: number | null
      introEndTime: number | null
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }

  type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = $Result.GetResult<Prisma.$EpisodePayload, S>

  type EpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episode'], meta: { name: 'Episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpisodeFindUniqueArgs>(args: SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Episode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs>(args: SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpisodeFindFirstArgs>(args?: SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs>(args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpisodeFindManyArgs>(args?: SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
     */
    create<T extends EpisodeCreateArgs>(args: SelectSubset<T, EpisodeCreateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Episodes.
     * @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpisodeCreateManyArgs>(args?: SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Episodes and returns the data saved in the database.
     * @param {EpisodeCreateManyAndReturnArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpisodeCreateManyAndReturnArgs>(args?: SelectSubset<T, EpisodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
     */
    delete<T extends EpisodeDeleteArgs>(args: SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpisodeUpdateArgs>(args: SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpisodeDeleteManyArgs>(args?: SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpisodeUpdateManyArgs>(args: SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes and returns the data updated in the database.
     * @param {EpisodeUpdateManyAndReturnArgs} args - Arguments to update many Episodes.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.updateManyAndReturn({
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
    updateManyAndReturn<T extends EpisodeUpdateManyAndReturnArgs>(args: SelectSubset<T, EpisodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
     */
    upsert<T extends EpisodeUpsertArgs>(args: SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
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
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episode model
   */
  readonly fields: EpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    season<T extends SeasonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeasonDefaultArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Episode model
   */
  interface EpisodeFieldRefs {
    readonly id: FieldRef<"Episode", 'String'>
    readonly seasonId: FieldRef<"Episode", 'String'>
    readonly episodeNumber: FieldRef<"Episode", 'Int'>
    readonly title: FieldRef<"Episode", 'String'>
    readonly description: FieldRef<"Episode", 'String'>
    readonly duration: FieldRef<"Episode", 'Int'>
    readonly videoUrl: FieldRef<"Episode", 'String'>
    readonly thumbnailUrl: FieldRef<"Episode", 'String'>
    readonly releaseDate: FieldRef<"Episode", 'DateTime'>
    readonly introStartTime: FieldRef<"Episode", 'Int'>
    readonly introEndTime: FieldRef<"Episode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Episode findUnique
   */
  export type EpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findFirst
   */
  export type EpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode create
   */
  export type EpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }

  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Episode createManyAndReturn
   */
  export type EpisodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode update
   */
  export type EpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
  }

  /**
   * Episode updateManyAndReturn
   */
  export type EpisodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }

  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to delete.
     */
    limit?: number
  }

  /**
   * Episode without action
   */
  export type EpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    userId: string | null
    videoId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    videoId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    videoId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    userId: string
    videoId: string
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    videoId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "videoId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      videoId: string
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly videoId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model UserWatchlist
   */

  export type AggregateUserWatchlist = {
    _count: UserWatchlistCountAggregateOutputType | null
    _min: UserWatchlistMinAggregateOutputType | null
    _max: UserWatchlistMaxAggregateOutputType | null
  }

  export type UserWatchlistMinAggregateOutputType = {
    id: string | null
    videoId: string | null
    addedAt: Date | null
    profileId: string | null
  }

  export type UserWatchlistMaxAggregateOutputType = {
    id: string | null
    videoId: string | null
    addedAt: Date | null
    profileId: string | null
  }

  export type UserWatchlistCountAggregateOutputType = {
    id: number
    videoId: number
    addedAt: number
    profileId: number
    _all: number
  }


  export type UserWatchlistMinAggregateInputType = {
    id?: true
    videoId?: true
    addedAt?: true
    profileId?: true
  }

  export type UserWatchlistMaxAggregateInputType = {
    id?: true
    videoId?: true
    addedAt?: true
    profileId?: true
  }

  export type UserWatchlistCountAggregateInputType = {
    id?: true
    videoId?: true
    addedAt?: true
    profileId?: true
    _all?: true
  }

  export type UserWatchlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWatchlist to aggregate.
     */
    where?: UserWatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatchlists to fetch.
     */
    orderBy?: UserWatchlistOrderByWithRelationInput | UserWatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserWatchlists
    **/
    _count?: true | UserWatchlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserWatchlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserWatchlistMaxAggregateInputType
  }

  export type GetUserWatchlistAggregateType<T extends UserWatchlistAggregateArgs> = {
        [P in keyof T & keyof AggregateUserWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWatchlist[P]>
      : GetScalarType<T[P], AggregateUserWatchlist[P]>
  }




  export type UserWatchlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWatchlistWhereInput
    orderBy?: UserWatchlistOrderByWithAggregationInput | UserWatchlistOrderByWithAggregationInput[]
    by: UserWatchlistScalarFieldEnum[] | UserWatchlistScalarFieldEnum
    having?: UserWatchlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWatchlistCountAggregateInputType | true
    _min?: UserWatchlistMinAggregateInputType
    _max?: UserWatchlistMaxAggregateInputType
  }

  export type UserWatchlistGroupByOutputType = {
    id: string
    videoId: string
    addedAt: Date
    profileId: string
    _count: UserWatchlistCountAggregateOutputType | null
    _min: UserWatchlistMinAggregateOutputType | null
    _max: UserWatchlistMaxAggregateOutputType | null
  }

  type GetUserWatchlistGroupByPayload<T extends UserWatchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWatchlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserWatchlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserWatchlistGroupByOutputType[P]>
            : GetScalarType<T[P], UserWatchlistGroupByOutputType[P]>
        }
      >
    >


  export type UserWatchlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    addedAt?: boolean
    profileId?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWatchlist"]>

  export type UserWatchlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    addedAt?: boolean
    profileId?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWatchlist"]>

  export type UserWatchlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    addedAt?: boolean
    profileId?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWatchlist"]>

  export type UserWatchlistSelectScalar = {
    id?: boolean
    videoId?: boolean
    addedAt?: boolean
    profileId?: boolean
  }

  export type UserWatchlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoId" | "addedAt" | "profileId", ExtArgs["result"]["userWatchlist"]>
  export type UserWatchlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type UserWatchlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type UserWatchlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $UserWatchlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserWatchlist"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoId: string
      addedAt: Date
      profileId: string
    }, ExtArgs["result"]["userWatchlist"]>
    composites: {}
  }

  type UserWatchlistGetPayload<S extends boolean | null | undefined | UserWatchlistDefaultArgs> = $Result.GetResult<Prisma.$UserWatchlistPayload, S>

  type UserWatchlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserWatchlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserWatchlistCountAggregateInputType | true
    }

  export interface UserWatchlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserWatchlist'], meta: { name: 'UserWatchlist' } }
    /**
     * Find zero or one UserWatchlist that matches the filter.
     * @param {UserWatchlistFindUniqueArgs} args - Arguments to find a UserWatchlist
     * @example
     * // Get one UserWatchlist
     * const userWatchlist = await prisma.userWatchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserWatchlistFindUniqueArgs>(args: SelectSubset<T, UserWatchlistFindUniqueArgs<ExtArgs>>): Prisma__UserWatchlistClient<$Result.GetResult<Prisma.$UserWatchlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserWatchlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserWatchlistFindUniqueOrThrowArgs} args - Arguments to find a UserWatchlist
     * @example
     * // Get one UserWatchlist
     * const userWatchlist = await prisma.userWatchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserWatchlistFindUniqueOrThrowArgs>(args: SelectSubset<T, UserWatchlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserWatchlistClient<$Result.GetResult<Prisma.$UserWatchlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWatchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchlistFindFirstArgs} args - Arguments to find a UserWatchlist
     * @example
     * // Get one UserWatchlist
     * const userWatchlist = await prisma.userWatchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserWatchlistFindFirstArgs>(args?: SelectSubset<T, UserWatchlistFindFirstArgs<ExtArgs>>): Prisma__UserWatchlistClient<$Result.GetResult<Prisma.$UserWatchlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWatchlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchlistFindFirstOrThrowArgs} args - Arguments to find a UserWatchlist
     * @example
     * // Get one UserWatchlist
     * const userWatchlist = await prisma.userWatchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserWatchlistFindFirstOrThrowArgs>(args?: SelectSubset<T, UserWatchlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserWatchlistClient<$Result.GetResult<Prisma.$UserWatchlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserWatchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWatchlists
     * const userWatchlists = await prisma.userWatchlist.findMany()
     * 
     * // Get first 10 UserWatchlists
     * const userWatchlists = await prisma.userWatchlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWatchlistWithIdOnly = await prisma.userWatchlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserWatchlistFindManyArgs>(args?: SelectSubset<T, UserWatchlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserWatchlist.
     * @param {UserWatchlistCreateArgs} args - Arguments to create a UserWatchlist.
     * @example
     * // Create one UserWatchlist
     * const UserWatchlist = await prisma.userWatchlist.create({
     *   data: {
     *     // ... data to create a UserWatchlist
     *   }
     * })
     * 
     */
    create<T extends UserWatchlistCreateArgs>(args: SelectSubset<T, UserWatchlistCreateArgs<ExtArgs>>): Prisma__UserWatchlistClient<$Result.GetResult<Prisma.$UserWatchlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserWatchlists.
     * @param {UserWatchlistCreateManyArgs} args - Arguments to create many UserWatchlists.
     * @example
     * // Create many UserWatchlists
     * const userWatchlist = await prisma.userWatchlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserWatchlistCreateManyArgs>(args?: SelectSubset<T, UserWatchlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserWatchlists and returns the data saved in the database.
     * @param {UserWatchlistCreateManyAndReturnArgs} args - Arguments to create many UserWatchlists.
     * @example
     * // Create many UserWatchlists
     * const userWatchlist = await prisma.userWatchlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserWatchlists and only return the `id`
     * const userWatchlistWithIdOnly = await prisma.userWatchlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserWatchlistCreateManyAndReturnArgs>(args?: SelectSubset<T, UserWatchlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserWatchlist.
     * @param {UserWatchlistDeleteArgs} args - Arguments to delete one UserWatchlist.
     * @example
     * // Delete one UserWatchlist
     * const UserWatchlist = await prisma.userWatchlist.delete({
     *   where: {
     *     // ... filter to delete one UserWatchlist
     *   }
     * })
     * 
     */
    delete<T extends UserWatchlistDeleteArgs>(args: SelectSubset<T, UserWatchlistDeleteArgs<ExtArgs>>): Prisma__UserWatchlistClient<$Result.GetResult<Prisma.$UserWatchlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserWatchlist.
     * @param {UserWatchlistUpdateArgs} args - Arguments to update one UserWatchlist.
     * @example
     * // Update one UserWatchlist
     * const userWatchlist = await prisma.userWatchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserWatchlistUpdateArgs>(args: SelectSubset<T, UserWatchlistUpdateArgs<ExtArgs>>): Prisma__UserWatchlistClient<$Result.GetResult<Prisma.$UserWatchlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserWatchlists.
     * @param {UserWatchlistDeleteManyArgs} args - Arguments to filter UserWatchlists to delete.
     * @example
     * // Delete a few UserWatchlists
     * const { count } = await prisma.userWatchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserWatchlistDeleteManyArgs>(args?: SelectSubset<T, UserWatchlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWatchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWatchlists
     * const userWatchlist = await prisma.userWatchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserWatchlistUpdateManyArgs>(args: SelectSubset<T, UserWatchlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWatchlists and returns the data updated in the database.
     * @param {UserWatchlistUpdateManyAndReturnArgs} args - Arguments to update many UserWatchlists.
     * @example
     * // Update many UserWatchlists
     * const userWatchlist = await prisma.userWatchlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserWatchlists and only return the `id`
     * const userWatchlistWithIdOnly = await prisma.userWatchlist.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserWatchlistUpdateManyAndReturnArgs>(args: SelectSubset<T, UserWatchlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserWatchlist.
     * @param {UserWatchlistUpsertArgs} args - Arguments to update or create a UserWatchlist.
     * @example
     * // Update or create a UserWatchlist
     * const userWatchlist = await prisma.userWatchlist.upsert({
     *   create: {
     *     // ... data to create a UserWatchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWatchlist we want to update
     *   }
     * })
     */
    upsert<T extends UserWatchlistUpsertArgs>(args: SelectSubset<T, UserWatchlistUpsertArgs<ExtArgs>>): Prisma__UserWatchlistClient<$Result.GetResult<Prisma.$UserWatchlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserWatchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchlistCountArgs} args - Arguments to filter UserWatchlists to count.
     * @example
     * // Count the number of UserWatchlists
     * const count = await prisma.userWatchlist.count({
     *   where: {
     *     // ... the filter for the UserWatchlists we want to count
     *   }
     * })
    **/
    count<T extends UserWatchlistCountArgs>(
      args?: Subset<T, UserWatchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWatchlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWatchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserWatchlistAggregateArgs>(args: Subset<T, UserWatchlistAggregateArgs>): Prisma.PrismaPromise<GetUserWatchlistAggregateType<T>>

    /**
     * Group by UserWatchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchlistGroupByArgs} args - Group by arguments.
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
      T extends UserWatchlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserWatchlistGroupByArgs['orderBy'] }
        : { orderBy?: UserWatchlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserWatchlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserWatchlist model
   */
  readonly fields: UserWatchlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserWatchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserWatchlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserWatchlist model
   */
  interface UserWatchlistFieldRefs {
    readonly id: FieldRef<"UserWatchlist", 'String'>
    readonly videoId: FieldRef<"UserWatchlist", 'String'>
    readonly addedAt: FieldRef<"UserWatchlist", 'DateTime'>
    readonly profileId: FieldRef<"UserWatchlist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserWatchlist findUnique
   */
  export type UserWatchlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchlist to fetch.
     */
    where: UserWatchlistWhereUniqueInput
  }

  /**
   * UserWatchlist findUniqueOrThrow
   */
  export type UserWatchlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchlist to fetch.
     */
    where: UserWatchlistWhereUniqueInput
  }

  /**
   * UserWatchlist findFirst
   */
  export type UserWatchlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchlist to fetch.
     */
    where?: UserWatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatchlists to fetch.
     */
    orderBy?: UserWatchlistOrderByWithRelationInput | UserWatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWatchlists.
     */
    cursor?: UserWatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWatchlists.
     */
    distinct?: UserWatchlistScalarFieldEnum | UserWatchlistScalarFieldEnum[]
  }

  /**
   * UserWatchlist findFirstOrThrow
   */
  export type UserWatchlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchlist to fetch.
     */
    where?: UserWatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatchlists to fetch.
     */
    orderBy?: UserWatchlistOrderByWithRelationInput | UserWatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWatchlists.
     */
    cursor?: UserWatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWatchlists.
     */
    distinct?: UserWatchlistScalarFieldEnum | UserWatchlistScalarFieldEnum[]
  }

  /**
   * UserWatchlist findMany
   */
  export type UserWatchlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchlists to fetch.
     */
    where?: UserWatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatchlists to fetch.
     */
    orderBy?: UserWatchlistOrderByWithRelationInput | UserWatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserWatchlists.
     */
    cursor?: UserWatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatchlists.
     */
    skip?: number
    distinct?: UserWatchlistScalarFieldEnum | UserWatchlistScalarFieldEnum[]
  }

  /**
   * UserWatchlist create
   */
  export type UserWatchlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistInclude<ExtArgs> | null
    /**
     * The data needed to create a UserWatchlist.
     */
    data: XOR<UserWatchlistCreateInput, UserWatchlistUncheckedCreateInput>
  }

  /**
   * UserWatchlist createMany
   */
  export type UserWatchlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserWatchlists.
     */
    data: UserWatchlistCreateManyInput | UserWatchlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserWatchlist createManyAndReturn
   */
  export type UserWatchlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * The data used to create many UserWatchlists.
     */
    data: UserWatchlistCreateManyInput | UserWatchlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWatchlist update
   */
  export type UserWatchlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistInclude<ExtArgs> | null
    /**
     * The data needed to update a UserWatchlist.
     */
    data: XOR<UserWatchlistUpdateInput, UserWatchlistUncheckedUpdateInput>
    /**
     * Choose, which UserWatchlist to update.
     */
    where: UserWatchlistWhereUniqueInput
  }

  /**
   * UserWatchlist updateMany
   */
  export type UserWatchlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserWatchlists.
     */
    data: XOR<UserWatchlistUpdateManyMutationInput, UserWatchlistUncheckedUpdateManyInput>
    /**
     * Filter which UserWatchlists to update
     */
    where?: UserWatchlistWhereInput
    /**
     * Limit how many UserWatchlists to update.
     */
    limit?: number
  }

  /**
   * UserWatchlist updateManyAndReturn
   */
  export type UserWatchlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * The data used to update UserWatchlists.
     */
    data: XOR<UserWatchlistUpdateManyMutationInput, UserWatchlistUncheckedUpdateManyInput>
    /**
     * Filter which UserWatchlists to update
     */
    where?: UserWatchlistWhereInput
    /**
     * Limit how many UserWatchlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWatchlist upsert
   */
  export type UserWatchlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistInclude<ExtArgs> | null
    /**
     * The filter to search for the UserWatchlist to update in case it exists.
     */
    where: UserWatchlistWhereUniqueInput
    /**
     * In case the UserWatchlist found by the `where` argument doesn't exist, create a new UserWatchlist with this data.
     */
    create: XOR<UserWatchlistCreateInput, UserWatchlistUncheckedCreateInput>
    /**
     * In case the UserWatchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserWatchlistUpdateInput, UserWatchlistUncheckedUpdateInput>
  }

  /**
   * UserWatchlist delete
   */
  export type UserWatchlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistInclude<ExtArgs> | null
    /**
     * Filter which UserWatchlist to delete.
     */
    where: UserWatchlistWhereUniqueInput
  }

  /**
   * UserWatchlist deleteMany
   */
  export type UserWatchlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWatchlists to delete
     */
    where?: UserWatchlistWhereInput
    /**
     * Limit how many UserWatchlists to delete.
     */
    limit?: number
  }

  /**
   * UserWatchlist without action
   */
  export type UserWatchlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchlist
     */
    select?: UserWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchlist
     */
    omit?: UserWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchlistInclude<ExtArgs> | null
  }


  /**
   * Model UserWatchHistory
   */

  export type AggregateUserWatchHistory = {
    _count: UserWatchHistoryCountAggregateOutputType | null
    _avg: UserWatchHistoryAvgAggregateOutputType | null
    _sum: UserWatchHistorySumAggregateOutputType | null
    _min: UserWatchHistoryMinAggregateOutputType | null
    _max: UserWatchHistoryMaxAggregateOutputType | null
  }

  export type UserWatchHistoryAvgAggregateOutputType = {
    progress: number | null
  }

  export type UserWatchHistorySumAggregateOutputType = {
    progress: number | null
  }

  export type UserWatchHistoryMinAggregateOutputType = {
    id: string | null
    videoId: string | null
    profileId: string | null
    watchedAt: Date | null
    episodeId: string | null
    progress: number | null
    completed: boolean | null
  }

  export type UserWatchHistoryMaxAggregateOutputType = {
    id: string | null
    videoId: string | null
    profileId: string | null
    watchedAt: Date | null
    episodeId: string | null
    progress: number | null
    completed: boolean | null
  }

  export type UserWatchHistoryCountAggregateOutputType = {
    id: number
    videoId: number
    profileId: number
    watchedAt: number
    episodeId: number
    progress: number
    completed: number
    _all: number
  }


  export type UserWatchHistoryAvgAggregateInputType = {
    progress?: true
  }

  export type UserWatchHistorySumAggregateInputType = {
    progress?: true
  }

  export type UserWatchHistoryMinAggregateInputType = {
    id?: true
    videoId?: true
    profileId?: true
    watchedAt?: true
    episodeId?: true
    progress?: true
    completed?: true
  }

  export type UserWatchHistoryMaxAggregateInputType = {
    id?: true
    videoId?: true
    profileId?: true
    watchedAt?: true
    episodeId?: true
    progress?: true
    completed?: true
  }

  export type UserWatchHistoryCountAggregateInputType = {
    id?: true
    videoId?: true
    profileId?: true
    watchedAt?: true
    episodeId?: true
    progress?: true
    completed?: true
    _all?: true
  }

  export type UserWatchHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWatchHistory to aggregate.
     */
    where?: UserWatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatchHistories to fetch.
     */
    orderBy?: UserWatchHistoryOrderByWithRelationInput | UserWatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserWatchHistories
    **/
    _count?: true | UserWatchHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserWatchHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserWatchHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserWatchHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserWatchHistoryMaxAggregateInputType
  }

  export type GetUserWatchHistoryAggregateType<T extends UserWatchHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserWatchHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWatchHistory[P]>
      : GetScalarType<T[P], AggregateUserWatchHistory[P]>
  }




  export type UserWatchHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWatchHistoryWhereInput
    orderBy?: UserWatchHistoryOrderByWithAggregationInput | UserWatchHistoryOrderByWithAggregationInput[]
    by: UserWatchHistoryScalarFieldEnum[] | UserWatchHistoryScalarFieldEnum
    having?: UserWatchHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWatchHistoryCountAggregateInputType | true
    _avg?: UserWatchHistoryAvgAggregateInputType
    _sum?: UserWatchHistorySumAggregateInputType
    _min?: UserWatchHistoryMinAggregateInputType
    _max?: UserWatchHistoryMaxAggregateInputType
  }

  export type UserWatchHistoryGroupByOutputType = {
    id: string
    videoId: string
    profileId: string
    watchedAt: Date
    episodeId: string | null
    progress: number
    completed: boolean
    _count: UserWatchHistoryCountAggregateOutputType | null
    _avg: UserWatchHistoryAvgAggregateOutputType | null
    _sum: UserWatchHistorySumAggregateOutputType | null
    _min: UserWatchHistoryMinAggregateOutputType | null
    _max: UserWatchHistoryMaxAggregateOutputType | null
  }

  type GetUserWatchHistoryGroupByPayload<T extends UserWatchHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWatchHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserWatchHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserWatchHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserWatchHistoryGroupByOutputType[P]>
        }
      >
    >


  export type UserWatchHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    profileId?: boolean
    watchedAt?: boolean
    episodeId?: boolean
    progress?: boolean
    completed?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWatchHistory"]>

  export type UserWatchHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    profileId?: boolean
    watchedAt?: boolean
    episodeId?: boolean
    progress?: boolean
    completed?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWatchHistory"]>

  export type UserWatchHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    profileId?: boolean
    watchedAt?: boolean
    episodeId?: boolean
    progress?: boolean
    completed?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWatchHistory"]>

  export type UserWatchHistorySelectScalar = {
    id?: boolean
    videoId?: boolean
    profileId?: boolean
    watchedAt?: boolean
    episodeId?: boolean
    progress?: boolean
    completed?: boolean
  }

  export type UserWatchHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoId" | "profileId" | "watchedAt" | "episodeId" | "progress" | "completed", ExtArgs["result"]["userWatchHistory"]>
  export type UserWatchHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type UserWatchHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type UserWatchHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $UserWatchHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserWatchHistory"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoId: string
      profileId: string
      watchedAt: Date
      episodeId: string | null
      progress: number
      completed: boolean
    }, ExtArgs["result"]["userWatchHistory"]>
    composites: {}
  }

  type UserWatchHistoryGetPayload<S extends boolean | null | undefined | UserWatchHistoryDefaultArgs> = $Result.GetResult<Prisma.$UserWatchHistoryPayload, S>

  type UserWatchHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserWatchHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserWatchHistoryCountAggregateInputType | true
    }

  export interface UserWatchHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserWatchHistory'], meta: { name: 'UserWatchHistory' } }
    /**
     * Find zero or one UserWatchHistory that matches the filter.
     * @param {UserWatchHistoryFindUniqueArgs} args - Arguments to find a UserWatchHistory
     * @example
     * // Get one UserWatchHistory
     * const userWatchHistory = await prisma.userWatchHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserWatchHistoryFindUniqueArgs>(args: SelectSubset<T, UserWatchHistoryFindUniqueArgs<ExtArgs>>): Prisma__UserWatchHistoryClient<$Result.GetResult<Prisma.$UserWatchHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserWatchHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserWatchHistoryFindUniqueOrThrowArgs} args - Arguments to find a UserWatchHistory
     * @example
     * // Get one UserWatchHistory
     * const userWatchHistory = await prisma.userWatchHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserWatchHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserWatchHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserWatchHistoryClient<$Result.GetResult<Prisma.$UserWatchHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWatchHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchHistoryFindFirstArgs} args - Arguments to find a UserWatchHistory
     * @example
     * // Get one UserWatchHistory
     * const userWatchHistory = await prisma.userWatchHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserWatchHistoryFindFirstArgs>(args?: SelectSubset<T, UserWatchHistoryFindFirstArgs<ExtArgs>>): Prisma__UserWatchHistoryClient<$Result.GetResult<Prisma.$UserWatchHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWatchHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchHistoryFindFirstOrThrowArgs} args - Arguments to find a UserWatchHistory
     * @example
     * // Get one UserWatchHistory
     * const userWatchHistory = await prisma.userWatchHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserWatchHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserWatchHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserWatchHistoryClient<$Result.GetResult<Prisma.$UserWatchHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserWatchHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWatchHistories
     * const userWatchHistories = await prisma.userWatchHistory.findMany()
     * 
     * // Get first 10 UserWatchHistories
     * const userWatchHistories = await prisma.userWatchHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWatchHistoryWithIdOnly = await prisma.userWatchHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserWatchHistoryFindManyArgs>(args?: SelectSubset<T, UserWatchHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserWatchHistory.
     * @param {UserWatchHistoryCreateArgs} args - Arguments to create a UserWatchHistory.
     * @example
     * // Create one UserWatchHistory
     * const UserWatchHistory = await prisma.userWatchHistory.create({
     *   data: {
     *     // ... data to create a UserWatchHistory
     *   }
     * })
     * 
     */
    create<T extends UserWatchHistoryCreateArgs>(args: SelectSubset<T, UserWatchHistoryCreateArgs<ExtArgs>>): Prisma__UserWatchHistoryClient<$Result.GetResult<Prisma.$UserWatchHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserWatchHistories.
     * @param {UserWatchHistoryCreateManyArgs} args - Arguments to create many UserWatchHistories.
     * @example
     * // Create many UserWatchHistories
     * const userWatchHistory = await prisma.userWatchHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserWatchHistoryCreateManyArgs>(args?: SelectSubset<T, UserWatchHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserWatchHistories and returns the data saved in the database.
     * @param {UserWatchHistoryCreateManyAndReturnArgs} args - Arguments to create many UserWatchHistories.
     * @example
     * // Create many UserWatchHistories
     * const userWatchHistory = await prisma.userWatchHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserWatchHistories and only return the `id`
     * const userWatchHistoryWithIdOnly = await prisma.userWatchHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserWatchHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, UserWatchHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserWatchHistory.
     * @param {UserWatchHistoryDeleteArgs} args - Arguments to delete one UserWatchHistory.
     * @example
     * // Delete one UserWatchHistory
     * const UserWatchHistory = await prisma.userWatchHistory.delete({
     *   where: {
     *     // ... filter to delete one UserWatchHistory
     *   }
     * })
     * 
     */
    delete<T extends UserWatchHistoryDeleteArgs>(args: SelectSubset<T, UserWatchHistoryDeleteArgs<ExtArgs>>): Prisma__UserWatchHistoryClient<$Result.GetResult<Prisma.$UserWatchHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserWatchHistory.
     * @param {UserWatchHistoryUpdateArgs} args - Arguments to update one UserWatchHistory.
     * @example
     * // Update one UserWatchHistory
     * const userWatchHistory = await prisma.userWatchHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserWatchHistoryUpdateArgs>(args: SelectSubset<T, UserWatchHistoryUpdateArgs<ExtArgs>>): Prisma__UserWatchHistoryClient<$Result.GetResult<Prisma.$UserWatchHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserWatchHistories.
     * @param {UserWatchHistoryDeleteManyArgs} args - Arguments to filter UserWatchHistories to delete.
     * @example
     * // Delete a few UserWatchHistories
     * const { count } = await prisma.userWatchHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserWatchHistoryDeleteManyArgs>(args?: SelectSubset<T, UserWatchHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWatchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWatchHistories
     * const userWatchHistory = await prisma.userWatchHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserWatchHistoryUpdateManyArgs>(args: SelectSubset<T, UserWatchHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWatchHistories and returns the data updated in the database.
     * @param {UserWatchHistoryUpdateManyAndReturnArgs} args - Arguments to update many UserWatchHistories.
     * @example
     * // Update many UserWatchHistories
     * const userWatchHistory = await prisma.userWatchHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserWatchHistories and only return the `id`
     * const userWatchHistoryWithIdOnly = await prisma.userWatchHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserWatchHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, UserWatchHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserWatchHistory.
     * @param {UserWatchHistoryUpsertArgs} args - Arguments to update or create a UserWatchHistory.
     * @example
     * // Update or create a UserWatchHistory
     * const userWatchHistory = await prisma.userWatchHistory.upsert({
     *   create: {
     *     // ... data to create a UserWatchHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWatchHistory we want to update
     *   }
     * })
     */
    upsert<T extends UserWatchHistoryUpsertArgs>(args: SelectSubset<T, UserWatchHistoryUpsertArgs<ExtArgs>>): Prisma__UserWatchHistoryClient<$Result.GetResult<Prisma.$UserWatchHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserWatchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchHistoryCountArgs} args - Arguments to filter UserWatchHistories to count.
     * @example
     * // Count the number of UserWatchHistories
     * const count = await prisma.userWatchHistory.count({
     *   where: {
     *     // ... the filter for the UserWatchHistories we want to count
     *   }
     * })
    **/
    count<T extends UserWatchHistoryCountArgs>(
      args?: Subset<T, UserWatchHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWatchHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWatchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserWatchHistoryAggregateArgs>(args: Subset<T, UserWatchHistoryAggregateArgs>): Prisma.PrismaPromise<GetUserWatchHistoryAggregateType<T>>

    /**
     * Group by UserWatchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchHistoryGroupByArgs} args - Group by arguments.
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
      T extends UserWatchHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserWatchHistoryGroupByArgs['orderBy'] }
        : { orderBy?: UserWatchHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserWatchHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWatchHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserWatchHistory model
   */
  readonly fields: UserWatchHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserWatchHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserWatchHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserWatchHistory model
   */
  interface UserWatchHistoryFieldRefs {
    readonly id: FieldRef<"UserWatchHistory", 'String'>
    readonly videoId: FieldRef<"UserWatchHistory", 'String'>
    readonly profileId: FieldRef<"UserWatchHistory", 'String'>
    readonly watchedAt: FieldRef<"UserWatchHistory", 'DateTime'>
    readonly episodeId: FieldRef<"UserWatchHistory", 'String'>
    readonly progress: FieldRef<"UserWatchHistory", 'Int'>
    readonly completed: FieldRef<"UserWatchHistory", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserWatchHistory findUnique
   */
  export type UserWatchHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchHistory to fetch.
     */
    where: UserWatchHistoryWhereUniqueInput
  }

  /**
   * UserWatchHistory findUniqueOrThrow
   */
  export type UserWatchHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchHistory to fetch.
     */
    where: UserWatchHistoryWhereUniqueInput
  }

  /**
   * UserWatchHistory findFirst
   */
  export type UserWatchHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchHistory to fetch.
     */
    where?: UserWatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatchHistories to fetch.
     */
    orderBy?: UserWatchHistoryOrderByWithRelationInput | UserWatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWatchHistories.
     */
    cursor?: UserWatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWatchHistories.
     */
    distinct?: UserWatchHistoryScalarFieldEnum | UserWatchHistoryScalarFieldEnum[]
  }

  /**
   * UserWatchHistory findFirstOrThrow
   */
  export type UserWatchHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchHistory to fetch.
     */
    where?: UserWatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatchHistories to fetch.
     */
    orderBy?: UserWatchHistoryOrderByWithRelationInput | UserWatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWatchHistories.
     */
    cursor?: UserWatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWatchHistories.
     */
    distinct?: UserWatchHistoryScalarFieldEnum | UserWatchHistoryScalarFieldEnum[]
  }

  /**
   * UserWatchHistory findMany
   */
  export type UserWatchHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchHistories to fetch.
     */
    where?: UserWatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatchHistories to fetch.
     */
    orderBy?: UserWatchHistoryOrderByWithRelationInput | UserWatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserWatchHistories.
     */
    cursor?: UserWatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatchHistories.
     */
    skip?: number
    distinct?: UserWatchHistoryScalarFieldEnum | UserWatchHistoryScalarFieldEnum[]
  }

  /**
   * UserWatchHistory create
   */
  export type UserWatchHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserWatchHistory.
     */
    data: XOR<UserWatchHistoryCreateInput, UserWatchHistoryUncheckedCreateInput>
  }

  /**
   * UserWatchHistory createMany
   */
  export type UserWatchHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserWatchHistories.
     */
    data: UserWatchHistoryCreateManyInput | UserWatchHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserWatchHistory createManyAndReturn
   */
  export type UserWatchHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many UserWatchHistories.
     */
    data: UserWatchHistoryCreateManyInput | UserWatchHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWatchHistory update
   */
  export type UserWatchHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserWatchHistory.
     */
    data: XOR<UserWatchHistoryUpdateInput, UserWatchHistoryUncheckedUpdateInput>
    /**
     * Choose, which UserWatchHistory to update.
     */
    where: UserWatchHistoryWhereUniqueInput
  }

  /**
   * UserWatchHistory updateMany
   */
  export type UserWatchHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserWatchHistories.
     */
    data: XOR<UserWatchHistoryUpdateManyMutationInput, UserWatchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UserWatchHistories to update
     */
    where?: UserWatchHistoryWhereInput
    /**
     * Limit how many UserWatchHistories to update.
     */
    limit?: number
  }

  /**
   * UserWatchHistory updateManyAndReturn
   */
  export type UserWatchHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * The data used to update UserWatchHistories.
     */
    data: XOR<UserWatchHistoryUpdateManyMutationInput, UserWatchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UserWatchHistories to update
     */
    where?: UserWatchHistoryWhereInput
    /**
     * Limit how many UserWatchHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWatchHistory upsert
   */
  export type UserWatchHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserWatchHistory to update in case it exists.
     */
    where: UserWatchHistoryWhereUniqueInput
    /**
     * In case the UserWatchHistory found by the `where` argument doesn't exist, create a new UserWatchHistory with this data.
     */
    create: XOR<UserWatchHistoryCreateInput, UserWatchHistoryUncheckedCreateInput>
    /**
     * In case the UserWatchHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserWatchHistoryUpdateInput, UserWatchHistoryUncheckedUpdateInput>
  }

  /**
   * UserWatchHistory delete
   */
  export type UserWatchHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryInclude<ExtArgs> | null
    /**
     * Filter which UserWatchHistory to delete.
     */
    where: UserWatchHistoryWhereUniqueInput
  }

  /**
   * UserWatchHistory deleteMany
   */
  export type UserWatchHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWatchHistories to delete
     */
    where?: UserWatchHistoryWhereInput
    /**
     * Limit how many UserWatchHistories to delete.
     */
    limit?: number
  }

  /**
   * UserWatchHistory without action
   */
  export type UserWatchHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchHistory
     */
    select?: UserWatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchHistory
     */
    omit?: UserWatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchHistoryInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    plan_type: 'plan_type',
    payment: 'payment',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatarUrl: 'avatarUrl',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    duration: 'duration',
    releaseDate: 'releaseDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    videoUrl: 'videoUrl',
    thumbnailUrl: 'thumbnailUrl',
    introStartTime: 'introStartTime',
    introEndTime: 'introEndTime',
    trailerUrl: 'trailerUrl',
    ageRating: 'ageRating',
    type: 'type',
    status: 'status',
    isOriginal: 'isOriginal'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const VideoGenreScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    genreId: 'genreId'
  };

  export type VideoGenreScalarFieldEnum = (typeof VideoGenreScalarFieldEnum)[keyof typeof VideoGenreScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    biography: 'biography',
    birthDate: 'birthDate',
    photoUrl: 'photoUrl'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const VideoCastScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    personId: 'personId',
    role: 'role',
    character: 'character'
  };

  export type VideoCastScalarFieldEnum = (typeof VideoCastScalarFieldEnum)[keyof typeof VideoCastScalarFieldEnum]


  export const SeasonScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    seasonNumber: 'seasonNumber',
    title: 'title',
    description: 'description',
    releaseDate: 'releaseDate'
  };

  export type SeasonScalarFieldEnum = (typeof SeasonScalarFieldEnum)[keyof typeof SeasonScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    seasonId: 'seasonId',
    episodeNumber: 'episodeNumber',
    title: 'title',
    description: 'description',
    duration: 'duration',
    videoUrl: 'videoUrl',
    thumbnailUrl: 'thumbnailUrl',
    releaseDate: 'releaseDate',
    introStartTime: 'introStartTime',
    introEndTime: 'introEndTime'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    videoId: 'videoId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const UserWatchlistScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    addedAt: 'addedAt',
    profileId: 'profileId'
  };

  export type UserWatchlistScalarFieldEnum = (typeof UserWatchlistScalarFieldEnum)[keyof typeof UserWatchlistScalarFieldEnum]


  export const UserWatchHistoryScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    profileId: 'profileId',
    watchedAt: 'watchedAt',
    episodeId: 'episodeId',
    progress: 'progress',
    completed: 'completed'
  };

  export type UserWatchHistoryScalarFieldEnum = (typeof UserWatchHistoryScalarFieldEnum)[keyof typeof UserWatchHistoryScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AgeRating'
   */
  export type EnumAgeRatingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeRating'>
    


  /**
   * Reference to a field of type 'AgeRating[]'
   */
  export type ListEnumAgeRatingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeRating[]'>
    


  /**
   * Reference to a field of type 'VideoType'
   */
  export type EnumVideoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoType'>
    


  /**
   * Reference to a field of type 'VideoType[]'
   */
  export type ListEnumVideoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoType[]'>
    


  /**
   * Reference to a field of type 'VideoStatus'
   */
  export type EnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus'>
    


  /**
   * Reference to a field of type 'VideoStatus[]'
   */
  export type ListEnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus[]'>
    


  /**
   * Reference to a field of type 'CastRole'
   */
  export type EnumCastRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CastRole'>
    


  /**
   * Reference to a field of type 'CastRole[]'
   */
  export type ListEnumCastRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CastRole[]'>
    


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
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    plan_type?: StringFilter<"User"> | string
    payment?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewListRelationFilter
    profiles?: ProfileListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    plan_type?: SortOrder
    payment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    profiles?: ProfileOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    plan_type?: StringFilter<"User"> | string
    payment?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewListRelationFilter
    profiles?: ProfileListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    plan_type?: SortOrder
    payment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    plan_type?: StringWithAggregatesFilter<"User"> | string
    payment?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    name?: StringFilter<"Profile"> | string
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    userId?: StringFilter<"Profile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    watchHistory?: UserWatchHistoryListRelationFilter
    watchList?: UserWatchlistListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    watchHistory?: UserWatchHistoryOrderByRelationAggregateInput
    watchList?: UserWatchlistOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: ProfileUserIdNameCompoundUniqueInput
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringFilter<"Profile"> | string
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    userId?: StringFilter<"Profile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    watchHistory?: UserWatchHistoryListRelationFilter
    watchList?: UserWatchlistListRelationFilter
  }, "id" | "userId_name">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    name?: StringWithAggregatesFilter<"Profile"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    userId?: StringWithAggregatesFilter<"Profile"> | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: StringFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    slug?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    duration?: IntFilter<"Video"> | number
    releaseDate?: DateTimeFilter<"Video"> | Date | string
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    videoUrl?: StringFilter<"Video"> | string
    thumbnailUrl?: StringFilter<"Video"> | string
    introStartTime?: IntNullableFilter<"Video"> | number | null
    introEndTime?: IntNullableFilter<"Video"> | number | null
    trailerUrl?: StringNullableFilter<"Video"> | string | null
    ageRating?: EnumAgeRatingFilter<"Video"> | $Enums.AgeRating
    type?: EnumVideoTypeFilter<"Video"> | $Enums.VideoType
    status?: EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus
    isOriginal?: BoolFilter<"Video"> | boolean
    reviews?: ReviewListRelationFilter
    seasons?: SeasonListRelationFilter
    watchHistory?: UserWatchHistoryListRelationFilter
    watchlist?: UserWatchlistListRelationFilter
    cast?: VideoCastListRelationFilter
    genres?: VideoGenreListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    introStartTime?: SortOrderInput | SortOrder
    introEndTime?: SortOrderInput | SortOrder
    trailerUrl?: SortOrderInput | SortOrder
    ageRating?: SortOrder
    type?: SortOrder
    status?: SortOrder
    isOriginal?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    seasons?: SeasonOrderByRelationAggregateInput
    watchHistory?: UserWatchHistoryOrderByRelationAggregateInput
    watchlist?: UserWatchlistOrderByRelationAggregateInput
    cast?: VideoCastOrderByRelationAggregateInput
    genres?: VideoGenreOrderByRelationAggregateInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    title?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    duration?: IntFilter<"Video"> | number
    releaseDate?: DateTimeFilter<"Video"> | Date | string
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    videoUrl?: StringFilter<"Video"> | string
    thumbnailUrl?: StringFilter<"Video"> | string
    introStartTime?: IntNullableFilter<"Video"> | number | null
    introEndTime?: IntNullableFilter<"Video"> | number | null
    trailerUrl?: StringNullableFilter<"Video"> | string | null
    ageRating?: EnumAgeRatingFilter<"Video"> | $Enums.AgeRating
    type?: EnumVideoTypeFilter<"Video"> | $Enums.VideoType
    status?: EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus
    isOriginal?: BoolFilter<"Video"> | boolean
    reviews?: ReviewListRelationFilter
    seasons?: SeasonListRelationFilter
    watchHistory?: UserWatchHistoryListRelationFilter
    watchlist?: UserWatchlistListRelationFilter
    cast?: VideoCastListRelationFilter
    genres?: VideoGenreListRelationFilter
  }, "id" | "slug">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    introStartTime?: SortOrderInput | SortOrder
    introEndTime?: SortOrderInput | SortOrder
    trailerUrl?: SortOrderInput | SortOrder
    ageRating?: SortOrder
    type?: SortOrder
    status?: SortOrder
    isOriginal?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Video"> | string
    title?: StringWithAggregatesFilter<"Video"> | string
    slug?: StringWithAggregatesFilter<"Video"> | string
    description?: StringNullableWithAggregatesFilter<"Video"> | string | null
    duration?: IntWithAggregatesFilter<"Video"> | number
    releaseDate?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    videoUrl?: StringWithAggregatesFilter<"Video"> | string
    thumbnailUrl?: StringWithAggregatesFilter<"Video"> | string
    introStartTime?: IntNullableWithAggregatesFilter<"Video"> | number | null
    introEndTime?: IntNullableWithAggregatesFilter<"Video"> | number | null
    trailerUrl?: StringNullableWithAggregatesFilter<"Video"> | string | null
    ageRating?: EnumAgeRatingWithAggregatesFilter<"Video"> | $Enums.AgeRating
    type?: EnumVideoTypeWithAggregatesFilter<"Video"> | $Enums.VideoType
    status?: EnumVideoStatusWithAggregatesFilter<"Video"> | $Enums.VideoStatus
    isOriginal?: BoolWithAggregatesFilter<"Video"> | boolean
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    slug?: StringFilter<"Genre"> | string
    videos?: VideoGenreListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    videos?: VideoGenreOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    videos?: VideoGenreListRelationFilter
  }, "id" | "name" | "slug">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genre"> | string
    name?: StringWithAggregatesFilter<"Genre"> | string
    slug?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type VideoGenreWhereInput = {
    AND?: VideoGenreWhereInput | VideoGenreWhereInput[]
    OR?: VideoGenreWhereInput[]
    NOT?: VideoGenreWhereInput | VideoGenreWhereInput[]
    id?: StringFilter<"VideoGenre"> | string
    videoId?: StringFilter<"VideoGenre"> | string
    genreId?: StringFilter<"VideoGenre"> | string
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type VideoGenreOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    genreId?: SortOrder
    genre?: GenreOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type VideoGenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    videoId_genreId?: VideoGenreVideoIdGenreIdCompoundUniqueInput
    AND?: VideoGenreWhereInput | VideoGenreWhereInput[]
    OR?: VideoGenreWhereInput[]
    NOT?: VideoGenreWhereInput | VideoGenreWhereInput[]
    videoId?: StringFilter<"VideoGenre"> | string
    genreId?: StringFilter<"VideoGenre"> | string
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id" | "videoId_genreId">

  export type VideoGenreOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    genreId?: SortOrder
    _count?: VideoGenreCountOrderByAggregateInput
    _max?: VideoGenreMaxOrderByAggregateInput
    _min?: VideoGenreMinOrderByAggregateInput
  }

  export type VideoGenreScalarWhereWithAggregatesInput = {
    AND?: VideoGenreScalarWhereWithAggregatesInput | VideoGenreScalarWhereWithAggregatesInput[]
    OR?: VideoGenreScalarWhereWithAggregatesInput[]
    NOT?: VideoGenreScalarWhereWithAggregatesInput | VideoGenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoGenre"> | string
    videoId?: StringWithAggregatesFilter<"VideoGenre"> | string
    genreId?: StringWithAggregatesFilter<"VideoGenre"> | string
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: StringFilter<"Person"> | string
    name?: StringFilter<"Person"> | string
    biography?: StringNullableFilter<"Person"> | string | null
    birthDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    photoUrl?: StringNullableFilter<"Person"> | string | null
    videoCast?: VideoCastListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    biography?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    videoCast?: VideoCastOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    name?: StringFilter<"Person"> | string
    biography?: StringNullableFilter<"Person"> | string | null
    birthDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    photoUrl?: StringNullableFilter<"Person"> | string | null
    videoCast?: VideoCastListRelationFilter
  }, "id">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    biography?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Person"> | string
    name?: StringWithAggregatesFilter<"Person"> | string
    biography?: StringNullableWithAggregatesFilter<"Person"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Person"> | Date | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Person"> | string | null
  }

  export type VideoCastWhereInput = {
    AND?: VideoCastWhereInput | VideoCastWhereInput[]
    OR?: VideoCastWhereInput[]
    NOT?: VideoCastWhereInput | VideoCastWhereInput[]
    id?: StringFilter<"VideoCast"> | string
    videoId?: StringFilter<"VideoCast"> | string
    personId?: StringFilter<"VideoCast"> | string
    role?: EnumCastRoleFilter<"VideoCast"> | $Enums.CastRole
    character?: StringNullableFilter<"VideoCast"> | string | null
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type VideoCastOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    personId?: SortOrder
    role?: SortOrder
    character?: SortOrderInput | SortOrder
    person?: PersonOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type VideoCastWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    videoId_personId_role?: VideoCastVideoIdPersonIdRoleCompoundUniqueInput
    AND?: VideoCastWhereInput | VideoCastWhereInput[]
    OR?: VideoCastWhereInput[]
    NOT?: VideoCastWhereInput | VideoCastWhereInput[]
    videoId?: StringFilter<"VideoCast"> | string
    personId?: StringFilter<"VideoCast"> | string
    role?: EnumCastRoleFilter<"VideoCast"> | $Enums.CastRole
    character?: StringNullableFilter<"VideoCast"> | string | null
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id" | "videoId_personId_role">

  export type VideoCastOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    personId?: SortOrder
    role?: SortOrder
    character?: SortOrderInput | SortOrder
    _count?: VideoCastCountOrderByAggregateInput
    _max?: VideoCastMaxOrderByAggregateInput
    _min?: VideoCastMinOrderByAggregateInput
  }

  export type VideoCastScalarWhereWithAggregatesInput = {
    AND?: VideoCastScalarWhereWithAggregatesInput | VideoCastScalarWhereWithAggregatesInput[]
    OR?: VideoCastScalarWhereWithAggregatesInput[]
    NOT?: VideoCastScalarWhereWithAggregatesInput | VideoCastScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoCast"> | string
    videoId?: StringWithAggregatesFilter<"VideoCast"> | string
    personId?: StringWithAggregatesFilter<"VideoCast"> | string
    role?: EnumCastRoleWithAggregatesFilter<"VideoCast"> | $Enums.CastRole
    character?: StringNullableWithAggregatesFilter<"VideoCast"> | string | null
  }

  export type SeasonWhereInput = {
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    id?: StringFilter<"Season"> | string
    videoId?: StringFilter<"Season"> | string
    seasonNumber?: IntFilter<"Season"> | number
    title?: StringNullableFilter<"Season"> | string | null
    description?: StringNullableFilter<"Season"> | string | null
    releaseDate?: DateTimeNullableFilter<"Season"> | Date | string | null
    episodes?: EpisodeListRelationFilter
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type SeasonOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    seasonNumber?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    episodes?: EpisodeOrderByRelationAggregateInput
    video?: VideoOrderByWithRelationInput
  }

  export type SeasonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    videoId_seasonNumber?: SeasonVideoIdSeasonNumberCompoundUniqueInput
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    videoId?: StringFilter<"Season"> | string
    seasonNumber?: IntFilter<"Season"> | number
    title?: StringNullableFilter<"Season"> | string | null
    description?: StringNullableFilter<"Season"> | string | null
    releaseDate?: DateTimeNullableFilter<"Season"> | Date | string | null
    episodes?: EpisodeListRelationFilter
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id" | "videoId_seasonNumber">

  export type SeasonOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    seasonNumber?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    _count?: SeasonCountOrderByAggregateInput
    _avg?: SeasonAvgOrderByAggregateInput
    _max?: SeasonMaxOrderByAggregateInput
    _min?: SeasonMinOrderByAggregateInput
    _sum?: SeasonSumOrderByAggregateInput
  }

  export type SeasonScalarWhereWithAggregatesInput = {
    AND?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    OR?: SeasonScalarWhereWithAggregatesInput[]
    NOT?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Season"> | string
    videoId?: StringWithAggregatesFilter<"Season"> | string
    seasonNumber?: IntWithAggregatesFilter<"Season"> | number
    title?: StringNullableWithAggregatesFilter<"Season"> | string | null
    description?: StringNullableWithAggregatesFilter<"Season"> | string | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Season"> | Date | string | null
  }

  export type EpisodeWhereInput = {
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    id?: StringFilter<"Episode"> | string
    seasonId?: StringFilter<"Episode"> | string
    episodeNumber?: IntFilter<"Episode"> | number
    title?: StringFilter<"Episode"> | string
    description?: StringNullableFilter<"Episode"> | string | null
    duration?: IntFilter<"Episode"> | number
    videoUrl?: StringFilter<"Episode"> | string
    thumbnailUrl?: StringFilter<"Episode"> | string
    releaseDate?: DateTimeFilter<"Episode"> | Date | string
    introStartTime?: IntNullableFilter<"Episode"> | number | null
    introEndTime?: IntNullableFilter<"Episode"> | number | null
    season?: XOR<SeasonScalarRelationFilter, SeasonWhereInput>
  }

  export type EpisodeOrderByWithRelationInput = {
    id?: SortOrder
    seasonId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    releaseDate?: SortOrder
    introStartTime?: SortOrderInput | SortOrder
    introEndTime?: SortOrderInput | SortOrder
    season?: SeasonOrderByWithRelationInput
  }

  export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    seasonId_episodeNumber?: EpisodeSeasonIdEpisodeNumberCompoundUniqueInput
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    seasonId?: StringFilter<"Episode"> | string
    episodeNumber?: IntFilter<"Episode"> | number
    title?: StringFilter<"Episode"> | string
    description?: StringNullableFilter<"Episode"> | string | null
    duration?: IntFilter<"Episode"> | number
    videoUrl?: StringFilter<"Episode"> | string
    thumbnailUrl?: StringFilter<"Episode"> | string
    releaseDate?: DateTimeFilter<"Episode"> | Date | string
    introStartTime?: IntNullableFilter<"Episode"> | number | null
    introEndTime?: IntNullableFilter<"Episode"> | number | null
    season?: XOR<SeasonScalarRelationFilter, SeasonWhereInput>
  }, "id" | "seasonId_episodeNumber">

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    seasonId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    releaseDate?: SortOrder
    introStartTime?: SortOrderInput | SortOrder
    introEndTime?: SortOrderInput | SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    OR?: EpisodeScalarWhereWithAggregatesInput[]
    NOT?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Episode"> | string
    seasonId?: StringWithAggregatesFilter<"Episode"> | string
    episodeNumber?: IntWithAggregatesFilter<"Episode"> | number
    title?: StringWithAggregatesFilter<"Episode"> | string
    description?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    duration?: IntWithAggregatesFilter<"Episode"> | number
    videoUrl?: StringWithAggregatesFilter<"Episode"> | string
    thumbnailUrl?: StringWithAggregatesFilter<"Episode"> | string
    releaseDate?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
    introStartTime?: IntNullableWithAggregatesFilter<"Episode"> | number | null
    introEndTime?: IntNullableWithAggregatesFilter<"Episode"> | number | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    videoId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_videoId?: ReviewUserIdVideoIdCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userId?: StringFilter<"Review"> | string
    videoId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id" | "userId_videoId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    userId?: StringWithAggregatesFilter<"Review"> | string
    videoId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserWatchlistWhereInput = {
    AND?: UserWatchlistWhereInput | UserWatchlistWhereInput[]
    OR?: UserWatchlistWhereInput[]
    NOT?: UserWatchlistWhereInput | UserWatchlistWhereInput[]
    id?: StringFilter<"UserWatchlist"> | string
    videoId?: StringFilter<"UserWatchlist"> | string
    addedAt?: DateTimeFilter<"UserWatchlist"> | Date | string
    profileId?: StringFilter<"UserWatchlist"> | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type UserWatchlistOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    addedAt?: SortOrder
    profileId?: SortOrder
    video?: VideoOrderByWithRelationInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type UserWatchlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId_videoId?: UserWatchlistProfileIdVideoIdCompoundUniqueInput
    AND?: UserWatchlistWhereInput | UserWatchlistWhereInput[]
    OR?: UserWatchlistWhereInput[]
    NOT?: UserWatchlistWhereInput | UserWatchlistWhereInput[]
    videoId?: StringFilter<"UserWatchlist"> | string
    addedAt?: DateTimeFilter<"UserWatchlist"> | Date | string
    profileId?: StringFilter<"UserWatchlist"> | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "profileId_videoId">

  export type UserWatchlistOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    addedAt?: SortOrder
    profileId?: SortOrder
    _count?: UserWatchlistCountOrderByAggregateInput
    _max?: UserWatchlistMaxOrderByAggregateInput
    _min?: UserWatchlistMinOrderByAggregateInput
  }

  export type UserWatchlistScalarWhereWithAggregatesInput = {
    AND?: UserWatchlistScalarWhereWithAggregatesInput | UserWatchlistScalarWhereWithAggregatesInput[]
    OR?: UserWatchlistScalarWhereWithAggregatesInput[]
    NOT?: UserWatchlistScalarWhereWithAggregatesInput | UserWatchlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserWatchlist"> | string
    videoId?: StringWithAggregatesFilter<"UserWatchlist"> | string
    addedAt?: DateTimeWithAggregatesFilter<"UserWatchlist"> | Date | string
    profileId?: StringWithAggregatesFilter<"UserWatchlist"> | string
  }

  export type UserWatchHistoryWhereInput = {
    AND?: UserWatchHistoryWhereInput | UserWatchHistoryWhereInput[]
    OR?: UserWatchHistoryWhereInput[]
    NOT?: UserWatchHistoryWhereInput | UserWatchHistoryWhereInput[]
    id?: StringFilter<"UserWatchHistory"> | string
    videoId?: StringFilter<"UserWatchHistory"> | string
    profileId?: StringFilter<"UserWatchHistory"> | string
    watchedAt?: DateTimeFilter<"UserWatchHistory"> | Date | string
    episodeId?: StringNullableFilter<"UserWatchHistory"> | string | null
    progress?: IntFilter<"UserWatchHistory"> | number
    completed?: BoolFilter<"UserWatchHistory"> | boolean
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type UserWatchHistoryOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    profileId?: SortOrder
    watchedAt?: SortOrder
    episodeId?: SortOrderInput | SortOrder
    progress?: SortOrder
    completed?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type UserWatchHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWatchHistoryWhereInput | UserWatchHistoryWhereInput[]
    OR?: UserWatchHistoryWhereInput[]
    NOT?: UserWatchHistoryWhereInput | UserWatchHistoryWhereInput[]
    videoId?: StringFilter<"UserWatchHistory"> | string
    profileId?: StringFilter<"UserWatchHistory"> | string
    watchedAt?: DateTimeFilter<"UserWatchHistory"> | Date | string
    episodeId?: StringNullableFilter<"UserWatchHistory"> | string | null
    progress?: IntFilter<"UserWatchHistory"> | number
    completed?: BoolFilter<"UserWatchHistory"> | boolean
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id">

  export type UserWatchHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    profileId?: SortOrder
    watchedAt?: SortOrder
    episodeId?: SortOrderInput | SortOrder
    progress?: SortOrder
    completed?: SortOrder
    _count?: UserWatchHistoryCountOrderByAggregateInput
    _avg?: UserWatchHistoryAvgOrderByAggregateInput
    _max?: UserWatchHistoryMaxOrderByAggregateInput
    _min?: UserWatchHistoryMinOrderByAggregateInput
    _sum?: UserWatchHistorySumOrderByAggregateInput
  }

  export type UserWatchHistoryScalarWhereWithAggregatesInput = {
    AND?: UserWatchHistoryScalarWhereWithAggregatesInput | UserWatchHistoryScalarWhereWithAggregatesInput[]
    OR?: UserWatchHistoryScalarWhereWithAggregatesInput[]
    NOT?: UserWatchHistoryScalarWhereWithAggregatesInput | UserWatchHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserWatchHistory"> | string
    videoId?: StringWithAggregatesFilter<"UserWatchHistory"> | string
    profileId?: StringWithAggregatesFilter<"UserWatchHistory"> | string
    watchedAt?: DateTimeWithAggregatesFilter<"UserWatchHistory"> | Date | string
    episodeId?: StringNullableWithAggregatesFilter<"UserWatchHistory"> | string | null
    progress?: IntWithAggregatesFilter<"UserWatchHistory"> | number
    completed?: BoolWithAggregatesFilter<"UserWatchHistory"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    plan_type?: string
    payment?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    profiles?: ProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    plan_type?: string
    payment?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    profiles?: ProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    plan_type?: StringFieldUpdateOperationsInput | string
    payment?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    profiles?: ProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    plan_type?: StringFieldUpdateOperationsInput | string
    payment?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    profiles?: ProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    plan_type?: string
    payment?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    plan_type?: StringFieldUpdateOperationsInput | string
    payment?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    plan_type?: StringFieldUpdateOperationsInput | string
    payment?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    user: UserCreateNestedOneWithoutProfilesInput
    watchHistory?: UserWatchHistoryCreateNestedManyWithoutProfileInput
    watchList?: UserWatchlistCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    userId: string
    watchHistory?: UserWatchHistoryUncheckedCreateNestedManyWithoutProfileInput
    watchList?: UserWatchlistUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfilesNestedInput
    watchHistory?: UserWatchHistoryUpdateManyWithoutProfileNestedInput
    watchList?: UserWatchlistUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    watchHistory?: UserWatchHistoryUncheckedUpdateManyWithoutProfileNestedInput
    watchList?: UserWatchlistUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    userId: string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    reviews?: ReviewCreateNestedManyWithoutVideoInput
    seasons?: SeasonCreateNestedManyWithoutVideoInput
    watchHistory?: UserWatchHistoryCreateNestedManyWithoutVideoInput
    watchlist?: UserWatchlistCreateNestedManyWithoutVideoInput
    cast?: VideoCastCreateNestedManyWithoutVideoInput
    genres?: VideoGenreCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutVideoInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutVideoInput
    watchHistory?: UserWatchHistoryUncheckedCreateNestedManyWithoutVideoInput
    watchlist?: UserWatchlistUncheckedCreateNestedManyWithoutVideoInput
    cast?: VideoCastUncheckedCreateNestedManyWithoutVideoInput
    genres?: VideoGenreUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUpdateManyWithoutVideoNestedInput
    seasons?: SeasonUpdateManyWithoutVideoNestedInput
    watchHistory?: UserWatchHistoryUpdateManyWithoutVideoNestedInput
    watchlist?: UserWatchlistUpdateManyWithoutVideoNestedInput
    cast?: VideoCastUpdateManyWithoutVideoNestedInput
    genres?: VideoGenreUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutVideoNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutVideoNestedInput
    watchHistory?: UserWatchHistoryUncheckedUpdateManyWithoutVideoNestedInput
    watchlist?: UserWatchlistUncheckedUpdateManyWithoutVideoNestedInput
    cast?: VideoCastUncheckedUpdateManyWithoutVideoNestedInput
    genres?: VideoGenreUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
  }

  export type VideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GenreCreateInput = {
    id?: string
    name: string
    slug: string
    videos?: VideoGenreCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    videos?: VideoGenreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    videos?: VideoGenreUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    videos?: VideoGenreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: string
    name: string
    slug: string
  }

  export type GenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type VideoGenreCreateInput = {
    id?: string
    genre: GenreCreateNestedOneWithoutVideosInput
    video: VideoCreateNestedOneWithoutGenresInput
  }

  export type VideoGenreUncheckedCreateInput = {
    id?: string
    videoId: string
    genreId: string
  }

  export type VideoGenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genre?: GenreUpdateOneRequiredWithoutVideosNestedInput
    video?: VideoUpdateOneRequiredWithoutGenresNestedInput
  }

  export type VideoGenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoGenreCreateManyInput = {
    id?: string
    videoId: string
    genreId: string
  }

  export type VideoGenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type VideoGenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonCreateInput = {
    id?: string
    name: string
    biography?: string | null
    birthDate?: Date | string | null
    photoUrl?: string | null
    videoCast?: VideoCastCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    name: string
    biography?: string | null
    birthDate?: Date | string | null
    photoUrl?: string | null
    videoCast?: VideoCastUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoCast?: VideoCastUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoCast?: VideoCastUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    name: string
    biography?: string | null
    birthDate?: Date | string | null
    photoUrl?: string | null
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoCastCreateInput = {
    id?: string
    role: $Enums.CastRole
    character?: string | null
    person: PersonCreateNestedOneWithoutVideoCastInput
    video: VideoCreateNestedOneWithoutCastInput
  }

  export type VideoCastUncheckedCreateInput = {
    id?: string
    videoId: string
    personId: string
    role: $Enums.CastRole
    character?: string | null
  }

  export type VideoCastUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumCastRoleFieldUpdateOperationsInput | $Enums.CastRole
    character?: NullableStringFieldUpdateOperationsInput | string | null
    person?: PersonUpdateOneRequiredWithoutVideoCastNestedInput
    video?: VideoUpdateOneRequiredWithoutCastNestedInput
  }

  export type VideoCastUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    role?: EnumCastRoleFieldUpdateOperationsInput | $Enums.CastRole
    character?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoCastCreateManyInput = {
    id?: string
    videoId: string
    personId: string
    role: $Enums.CastRole
    character?: string | null
  }

  export type VideoCastUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumCastRoleFieldUpdateOperationsInput | $Enums.CastRole
    character?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoCastUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    role?: EnumCastRoleFieldUpdateOperationsInput | $Enums.CastRole
    character?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeasonCreateInput = {
    id?: string
    seasonNumber: number
    title?: string | null
    description?: string | null
    releaseDate?: Date | string | null
    episodes?: EpisodeCreateNestedManyWithoutSeasonInput
    video: VideoCreateNestedOneWithoutSeasonsInput
  }

  export type SeasonUncheckedCreateInput = {
    id?: string
    videoId: string
    seasonNumber: number
    title?: string | null
    description?: string | null
    releaseDate?: Date | string | null
    episodes?: EpisodeUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: EpisodeUpdateManyWithoutSeasonNestedInput
    video?: VideoUpdateOneRequiredWithoutSeasonsNestedInput
  }

  export type SeasonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: EpisodeUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonCreateManyInput = {
    id?: string
    videoId: string
    seasonNumber: number
    title?: string | null
    description?: string | null
    releaseDate?: Date | string | null
  }

  export type SeasonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SeasonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EpisodeCreateInput = {
    id?: string
    episodeNumber: number
    title: string
    description?: string | null
    duration: number
    videoUrl: string
    thumbnailUrl: string
    releaseDate: Date | string
    introStartTime?: number | null
    introEndTime?: number | null
    season: SeasonCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: string
    seasonId: string
    episodeNumber: number
    title: string
    description?: string | null
    duration: number
    videoUrl: string
    thumbnailUrl: string
    releaseDate: Date | string
    introStartTime?: number | null
    introEndTime?: number | null
  }

  export type EpisodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    season?: SeasonUpdateOneRequiredWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EpisodeCreateManyInput = {
    id?: string
    seasonId: string
    episodeNumber: number
    title: string
    description?: string | null
    duration: number
    videoUrl: string
    thumbnailUrl: string
    releaseDate: Date | string
    introStartTime?: number | null
    introEndTime?: number | null
  }

  export type EpisodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    video: VideoCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    userId: string
    videoId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    video?: VideoUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    userId: string
    videoId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchlistCreateInput = {
    id?: string
    addedAt?: Date | string
    video: VideoCreateNestedOneWithoutWatchlistInput
    profile: ProfileCreateNestedOneWithoutWatchListInput
  }

  export type UserWatchlistUncheckedCreateInput = {
    id?: string
    videoId: string
    addedAt?: Date | string
    profileId: string
  }

  export type UserWatchlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutWatchlistNestedInput
    profile?: ProfileUpdateOneRequiredWithoutWatchListNestedInput
  }

  export type UserWatchlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type UserWatchlistCreateManyInput = {
    id?: string
    videoId: string
    addedAt?: Date | string
    profileId: string
  }

  export type UserWatchlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type UserWatchHistoryCreateInput = {
    id?: string
    watchedAt?: Date | string
    episodeId?: string | null
    progress?: number
    completed?: boolean
    profile: ProfileCreateNestedOneWithoutWatchHistoryInput
    video: VideoCreateNestedOneWithoutWatchHistoryInput
  }

  export type UserWatchHistoryUncheckedCreateInput = {
    id?: string
    videoId: string
    profileId: string
    watchedAt?: Date | string
    episodeId?: string | null
    progress?: number
    completed?: boolean
  }

  export type UserWatchHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    profile?: ProfileUpdateOneRequiredWithoutWatchHistoryNestedInput
    video?: VideoUpdateOneRequiredWithoutWatchHistoryNestedInput
  }

  export type UserWatchHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserWatchHistoryCreateManyInput = {
    id?: string
    videoId: string
    profileId: string
    watchedAt?: Date | string
    episodeId?: string | null
    progress?: number
    completed?: boolean
  }

  export type UserWatchHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserWatchHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput
    some?: ProfileWhereInput
    none?: ProfileWhereInput
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    plan_type?: SortOrder
    payment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    plan_type?: SortOrder
    payment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    plan_type?: SortOrder
    payment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserWatchHistoryListRelationFilter = {
    every?: UserWatchHistoryWhereInput
    some?: UserWatchHistoryWhereInput
    none?: UserWatchHistoryWhereInput
  }

  export type UserWatchlistListRelationFilter = {
    every?: UserWatchlistWhereInput
    some?: UserWatchlistWhereInput
    none?: UserWatchlistWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserWatchHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserWatchlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    userId?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumAgeRatingFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeRating | EnumAgeRatingFieldRefInput<$PrismaModel>
    in?: $Enums.AgeRating[] | ListEnumAgeRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeRating[] | ListEnumAgeRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeRatingFilter<$PrismaModel> | $Enums.AgeRating
  }

  export type EnumVideoTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoType | EnumVideoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VideoType[] | ListEnumVideoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoType[] | ListEnumVideoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoTypeFilter<$PrismaModel> | $Enums.VideoType
  }

  export type EnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
  }

  export type SeasonListRelationFilter = {
    every?: SeasonWhereInput
    some?: SeasonWhereInput
    none?: SeasonWhereInput
  }

  export type VideoCastListRelationFilter = {
    every?: VideoCastWhereInput
    some?: VideoCastWhereInput
    none?: VideoCastWhereInput
  }

  export type VideoGenreListRelationFilter = {
    every?: VideoGenreWhereInput
    some?: VideoGenreWhereInput
    none?: VideoGenreWhereInput
  }

  export type SeasonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoCastOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoGenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    introStartTime?: SortOrder
    introEndTime?: SortOrder
    trailerUrl?: SortOrder
    ageRating?: SortOrder
    type?: SortOrder
    status?: SortOrder
    isOriginal?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    duration?: SortOrder
    introStartTime?: SortOrder
    introEndTime?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    introStartTime?: SortOrder
    introEndTime?: SortOrder
    trailerUrl?: SortOrder
    ageRating?: SortOrder
    type?: SortOrder
    status?: SortOrder
    isOriginal?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    introStartTime?: SortOrder
    introEndTime?: SortOrder
    trailerUrl?: SortOrder
    ageRating?: SortOrder
    type?: SortOrder
    status?: SortOrder
    isOriginal?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    duration?: SortOrder
    introStartTime?: SortOrder
    introEndTime?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumAgeRatingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeRating | EnumAgeRatingFieldRefInput<$PrismaModel>
    in?: $Enums.AgeRating[] | ListEnumAgeRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeRating[] | ListEnumAgeRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeRatingWithAggregatesFilter<$PrismaModel> | $Enums.AgeRating
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgeRatingFilter<$PrismaModel>
    _max?: NestedEnumAgeRatingFilter<$PrismaModel>
  }

  export type EnumVideoTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoType | EnumVideoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VideoType[] | ListEnumVideoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoType[] | ListEnumVideoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoTypeWithAggregatesFilter<$PrismaModel> | $Enums.VideoType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoTypeFilter<$PrismaModel>
    _max?: NestedEnumVideoTypeFilter<$PrismaModel>
  }

  export type EnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type GenreScalarRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type VideoGenreVideoIdGenreIdCompoundUniqueInput = {
    videoId: string
    genreId: string
  }

  export type VideoGenreCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    genreId?: SortOrder
  }

  export type VideoGenreMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    genreId?: SortOrder
  }

  export type VideoGenreMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    genreId?: SortOrder
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

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    biography?: SortOrder
    birthDate?: SortOrder
    photoUrl?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    biography?: SortOrder
    birthDate?: SortOrder
    photoUrl?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    biography?: SortOrder
    birthDate?: SortOrder
    photoUrl?: SortOrder
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

  export type EnumCastRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CastRole | EnumCastRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CastRole[] | ListEnumCastRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CastRole[] | ListEnumCastRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCastRoleFilter<$PrismaModel> | $Enums.CastRole
  }

  export type PersonScalarRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type VideoCastVideoIdPersonIdRoleCompoundUniqueInput = {
    videoId: string
    personId: string
    role: $Enums.CastRole
  }

  export type VideoCastCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    personId?: SortOrder
    role?: SortOrder
    character?: SortOrder
  }

  export type VideoCastMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    personId?: SortOrder
    role?: SortOrder
    character?: SortOrder
  }

  export type VideoCastMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    personId?: SortOrder
    role?: SortOrder
    character?: SortOrder
  }

  export type EnumCastRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CastRole | EnumCastRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CastRole[] | ListEnumCastRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CastRole[] | ListEnumCastRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCastRoleWithAggregatesFilter<$PrismaModel> | $Enums.CastRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCastRoleFilter<$PrismaModel>
    _max?: NestedEnumCastRoleFilter<$PrismaModel>
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeasonVideoIdSeasonNumberCompoundUniqueInput = {
    videoId: string
    seasonNumber: number
  }

  export type SeasonCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    seasonNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    releaseDate?: SortOrder
  }

  export type SeasonAvgOrderByAggregateInput = {
    seasonNumber?: SortOrder
  }

  export type SeasonMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    seasonNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    releaseDate?: SortOrder
  }

  export type SeasonMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    seasonNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    releaseDate?: SortOrder
  }

  export type SeasonSumOrderByAggregateInput = {
    seasonNumber?: SortOrder
  }

  export type SeasonScalarRelationFilter = {
    is?: SeasonWhereInput
    isNot?: SeasonWhereInput
  }

  export type EpisodeSeasonIdEpisodeNumberCompoundUniqueInput = {
    seasonId: string
    episodeNumber: number
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    releaseDate?: SortOrder
    introStartTime?: SortOrder
    introEndTime?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    episodeNumber?: SortOrder
    duration?: SortOrder
    introStartTime?: SortOrder
    introEndTime?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    releaseDate?: SortOrder
    introStartTime?: SortOrder
    introEndTime?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    releaseDate?: SortOrder
    introStartTime?: SortOrder
    introEndTime?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    episodeNumber?: SortOrder
    duration?: SortOrder
    introStartTime?: SortOrder
    introEndTime?: SortOrder
  }

  export type ReviewUserIdVideoIdCompoundUniqueInput = {
    userId: string
    videoId: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type UserWatchlistProfileIdVideoIdCompoundUniqueInput = {
    profileId: string
    videoId: string
  }

  export type UserWatchlistCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    addedAt?: SortOrder
    profileId?: SortOrder
  }

  export type UserWatchlistMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    addedAt?: SortOrder
    profileId?: SortOrder
  }

  export type UserWatchlistMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    addedAt?: SortOrder
    profileId?: SortOrder
  }

  export type UserWatchHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    profileId?: SortOrder
    watchedAt?: SortOrder
    episodeId?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
  }

  export type UserWatchHistoryAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type UserWatchHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    profileId?: SortOrder
    watchedAt?: SortOrder
    episodeId?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
  }

  export type UserWatchHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    profileId?: SortOrder
    watchedAt?: SortOrder
    episodeId?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
  }

  export type UserWatchHistorySumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | ProfileCreateWithoutUserInput[] | ProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | ProfileCreateOrConnectWithoutUserInput[]
    createMany?: ProfileCreateManyUserInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | ProfileCreateWithoutUserInput[] | ProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | ProfileCreateOrConnectWithoutUserInput[]
    createMany?: ProfileCreateManyUserInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | ProfileCreateWithoutUserInput[] | ProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | ProfileCreateOrConnectWithoutUserInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutUserInput | ProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileCreateManyUserInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutUserInput | ProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutUserInput | ProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | ProfileCreateWithoutUserInput[] | ProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | ProfileCreateOrConnectWithoutUserInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutUserInput | ProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileCreateManyUserInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutUserInput | ProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutUserInput | ProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfilesInput = {
    create?: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilesInput
    connect?: UserWhereUniqueInput
  }

  export type UserWatchHistoryCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserWatchHistoryCreateWithoutProfileInput, UserWatchHistoryUncheckedCreateWithoutProfileInput> | UserWatchHistoryCreateWithoutProfileInput[] | UserWatchHistoryUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserWatchHistoryCreateOrConnectWithoutProfileInput | UserWatchHistoryCreateOrConnectWithoutProfileInput[]
    createMany?: UserWatchHistoryCreateManyProfileInputEnvelope
    connect?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
  }

  export type UserWatchlistCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserWatchlistCreateWithoutProfileInput, UserWatchlistUncheckedCreateWithoutProfileInput> | UserWatchlistCreateWithoutProfileInput[] | UserWatchlistUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserWatchlistCreateOrConnectWithoutProfileInput | UserWatchlistCreateOrConnectWithoutProfileInput[]
    createMany?: UserWatchlistCreateManyProfileInputEnvelope
    connect?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
  }

  export type UserWatchHistoryUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserWatchHistoryCreateWithoutProfileInput, UserWatchHistoryUncheckedCreateWithoutProfileInput> | UserWatchHistoryCreateWithoutProfileInput[] | UserWatchHistoryUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserWatchHistoryCreateOrConnectWithoutProfileInput | UserWatchHistoryCreateOrConnectWithoutProfileInput[]
    createMany?: UserWatchHistoryCreateManyProfileInputEnvelope
    connect?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
  }

  export type UserWatchlistUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserWatchlistCreateWithoutProfileInput, UserWatchlistUncheckedCreateWithoutProfileInput> | UserWatchlistCreateWithoutProfileInput[] | UserWatchlistUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserWatchlistCreateOrConnectWithoutProfileInput | UserWatchlistCreateOrConnectWithoutProfileInput[]
    createMany?: UserWatchlistCreateManyProfileInputEnvelope
    connect?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilesInput
    upsert?: UserUpsertWithoutProfilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfilesInput, UserUpdateWithoutProfilesInput>, UserUncheckedUpdateWithoutProfilesInput>
  }

  export type UserWatchHistoryUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserWatchHistoryCreateWithoutProfileInput, UserWatchHistoryUncheckedCreateWithoutProfileInput> | UserWatchHistoryCreateWithoutProfileInput[] | UserWatchHistoryUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserWatchHistoryCreateOrConnectWithoutProfileInput | UserWatchHistoryCreateOrConnectWithoutProfileInput[]
    upsert?: UserWatchHistoryUpsertWithWhereUniqueWithoutProfileInput | UserWatchHistoryUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserWatchHistoryCreateManyProfileInputEnvelope
    set?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    disconnect?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    delete?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    connect?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    update?: UserWatchHistoryUpdateWithWhereUniqueWithoutProfileInput | UserWatchHistoryUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserWatchHistoryUpdateManyWithWhereWithoutProfileInput | UserWatchHistoryUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserWatchHistoryScalarWhereInput | UserWatchHistoryScalarWhereInput[]
  }

  export type UserWatchlistUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserWatchlistCreateWithoutProfileInput, UserWatchlistUncheckedCreateWithoutProfileInput> | UserWatchlistCreateWithoutProfileInput[] | UserWatchlistUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserWatchlistCreateOrConnectWithoutProfileInput | UserWatchlistCreateOrConnectWithoutProfileInput[]
    upsert?: UserWatchlistUpsertWithWhereUniqueWithoutProfileInput | UserWatchlistUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserWatchlistCreateManyProfileInputEnvelope
    set?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    disconnect?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    delete?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    connect?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    update?: UserWatchlistUpdateWithWhereUniqueWithoutProfileInput | UserWatchlistUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserWatchlistUpdateManyWithWhereWithoutProfileInput | UserWatchlistUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserWatchlistScalarWhereInput | UserWatchlistScalarWhereInput[]
  }

  export type UserWatchHistoryUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserWatchHistoryCreateWithoutProfileInput, UserWatchHistoryUncheckedCreateWithoutProfileInput> | UserWatchHistoryCreateWithoutProfileInput[] | UserWatchHistoryUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserWatchHistoryCreateOrConnectWithoutProfileInput | UserWatchHistoryCreateOrConnectWithoutProfileInput[]
    upsert?: UserWatchHistoryUpsertWithWhereUniqueWithoutProfileInput | UserWatchHistoryUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserWatchHistoryCreateManyProfileInputEnvelope
    set?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    disconnect?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    delete?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    connect?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    update?: UserWatchHistoryUpdateWithWhereUniqueWithoutProfileInput | UserWatchHistoryUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserWatchHistoryUpdateManyWithWhereWithoutProfileInput | UserWatchHistoryUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserWatchHistoryScalarWhereInput | UserWatchHistoryScalarWhereInput[]
  }

  export type UserWatchlistUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserWatchlistCreateWithoutProfileInput, UserWatchlistUncheckedCreateWithoutProfileInput> | UserWatchlistCreateWithoutProfileInput[] | UserWatchlistUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserWatchlistCreateOrConnectWithoutProfileInput | UserWatchlistCreateOrConnectWithoutProfileInput[]
    upsert?: UserWatchlistUpsertWithWhereUniqueWithoutProfileInput | UserWatchlistUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserWatchlistCreateManyProfileInputEnvelope
    set?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    disconnect?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    delete?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    connect?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    update?: UserWatchlistUpdateWithWhereUniqueWithoutProfileInput | UserWatchlistUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserWatchlistUpdateManyWithWhereWithoutProfileInput | UserWatchlistUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserWatchlistScalarWhereInput | UserWatchlistScalarWhereInput[]
  }

  export type ReviewCreateNestedManyWithoutVideoInput = {
    create?: XOR<ReviewCreateWithoutVideoInput, ReviewUncheckedCreateWithoutVideoInput> | ReviewCreateWithoutVideoInput[] | ReviewUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVideoInput | ReviewCreateOrConnectWithoutVideoInput[]
    createMany?: ReviewCreateManyVideoInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SeasonCreateNestedManyWithoutVideoInput = {
    create?: XOR<SeasonCreateWithoutVideoInput, SeasonUncheckedCreateWithoutVideoInput> | SeasonCreateWithoutVideoInput[] | SeasonUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: SeasonCreateOrConnectWithoutVideoInput | SeasonCreateOrConnectWithoutVideoInput[]
    createMany?: SeasonCreateManyVideoInputEnvelope
    connect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
  }

  export type UserWatchHistoryCreateNestedManyWithoutVideoInput = {
    create?: XOR<UserWatchHistoryCreateWithoutVideoInput, UserWatchHistoryUncheckedCreateWithoutVideoInput> | UserWatchHistoryCreateWithoutVideoInput[] | UserWatchHistoryUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: UserWatchHistoryCreateOrConnectWithoutVideoInput | UserWatchHistoryCreateOrConnectWithoutVideoInput[]
    createMany?: UserWatchHistoryCreateManyVideoInputEnvelope
    connect?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
  }

  export type UserWatchlistCreateNestedManyWithoutVideoInput = {
    create?: XOR<UserWatchlistCreateWithoutVideoInput, UserWatchlistUncheckedCreateWithoutVideoInput> | UserWatchlistCreateWithoutVideoInput[] | UserWatchlistUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: UserWatchlistCreateOrConnectWithoutVideoInput | UserWatchlistCreateOrConnectWithoutVideoInput[]
    createMany?: UserWatchlistCreateManyVideoInputEnvelope
    connect?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
  }

  export type VideoCastCreateNestedManyWithoutVideoInput = {
    create?: XOR<VideoCastCreateWithoutVideoInput, VideoCastUncheckedCreateWithoutVideoInput> | VideoCastCreateWithoutVideoInput[] | VideoCastUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoCastCreateOrConnectWithoutVideoInput | VideoCastCreateOrConnectWithoutVideoInput[]
    createMany?: VideoCastCreateManyVideoInputEnvelope
    connect?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
  }

  export type VideoGenreCreateNestedManyWithoutVideoInput = {
    create?: XOR<VideoGenreCreateWithoutVideoInput, VideoGenreUncheckedCreateWithoutVideoInput> | VideoGenreCreateWithoutVideoInput[] | VideoGenreUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoGenreCreateOrConnectWithoutVideoInput | VideoGenreCreateOrConnectWithoutVideoInput[]
    createMany?: VideoGenreCreateManyVideoInputEnvelope
    connect?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<ReviewCreateWithoutVideoInput, ReviewUncheckedCreateWithoutVideoInput> | ReviewCreateWithoutVideoInput[] | ReviewUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVideoInput | ReviewCreateOrConnectWithoutVideoInput[]
    createMany?: ReviewCreateManyVideoInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SeasonUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<SeasonCreateWithoutVideoInput, SeasonUncheckedCreateWithoutVideoInput> | SeasonCreateWithoutVideoInput[] | SeasonUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: SeasonCreateOrConnectWithoutVideoInput | SeasonCreateOrConnectWithoutVideoInput[]
    createMany?: SeasonCreateManyVideoInputEnvelope
    connect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
  }

  export type UserWatchHistoryUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<UserWatchHistoryCreateWithoutVideoInput, UserWatchHistoryUncheckedCreateWithoutVideoInput> | UserWatchHistoryCreateWithoutVideoInput[] | UserWatchHistoryUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: UserWatchHistoryCreateOrConnectWithoutVideoInput | UserWatchHistoryCreateOrConnectWithoutVideoInput[]
    createMany?: UserWatchHistoryCreateManyVideoInputEnvelope
    connect?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
  }

  export type UserWatchlistUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<UserWatchlistCreateWithoutVideoInput, UserWatchlistUncheckedCreateWithoutVideoInput> | UserWatchlistCreateWithoutVideoInput[] | UserWatchlistUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: UserWatchlistCreateOrConnectWithoutVideoInput | UserWatchlistCreateOrConnectWithoutVideoInput[]
    createMany?: UserWatchlistCreateManyVideoInputEnvelope
    connect?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
  }

  export type VideoCastUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<VideoCastCreateWithoutVideoInput, VideoCastUncheckedCreateWithoutVideoInput> | VideoCastCreateWithoutVideoInput[] | VideoCastUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoCastCreateOrConnectWithoutVideoInput | VideoCastCreateOrConnectWithoutVideoInput[]
    createMany?: VideoCastCreateManyVideoInputEnvelope
    connect?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
  }

  export type VideoGenreUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<VideoGenreCreateWithoutVideoInput, VideoGenreUncheckedCreateWithoutVideoInput> | VideoGenreCreateWithoutVideoInput[] | VideoGenreUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoGenreCreateOrConnectWithoutVideoInput | VideoGenreCreateOrConnectWithoutVideoInput[]
    createMany?: VideoGenreCreateManyVideoInputEnvelope
    connect?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAgeRatingFieldUpdateOperationsInput = {
    set?: $Enums.AgeRating
  }

  export type EnumVideoTypeFieldUpdateOperationsInput = {
    set?: $Enums.VideoType
  }

  export type EnumVideoStatusFieldUpdateOperationsInput = {
    set?: $Enums.VideoStatus
  }

  export type ReviewUpdateManyWithoutVideoNestedInput = {
    create?: XOR<ReviewCreateWithoutVideoInput, ReviewUncheckedCreateWithoutVideoInput> | ReviewCreateWithoutVideoInput[] | ReviewUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVideoInput | ReviewCreateOrConnectWithoutVideoInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutVideoInput | ReviewUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: ReviewCreateManyVideoInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutVideoInput | ReviewUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutVideoInput | ReviewUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SeasonUpdateManyWithoutVideoNestedInput = {
    create?: XOR<SeasonCreateWithoutVideoInput, SeasonUncheckedCreateWithoutVideoInput> | SeasonCreateWithoutVideoInput[] | SeasonUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: SeasonCreateOrConnectWithoutVideoInput | SeasonCreateOrConnectWithoutVideoInput[]
    upsert?: SeasonUpsertWithWhereUniqueWithoutVideoInput | SeasonUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: SeasonCreateManyVideoInputEnvelope
    set?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    disconnect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    delete?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    connect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    update?: SeasonUpdateWithWhereUniqueWithoutVideoInput | SeasonUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: SeasonUpdateManyWithWhereWithoutVideoInput | SeasonUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: SeasonScalarWhereInput | SeasonScalarWhereInput[]
  }

  export type UserWatchHistoryUpdateManyWithoutVideoNestedInput = {
    create?: XOR<UserWatchHistoryCreateWithoutVideoInput, UserWatchHistoryUncheckedCreateWithoutVideoInput> | UserWatchHistoryCreateWithoutVideoInput[] | UserWatchHistoryUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: UserWatchHistoryCreateOrConnectWithoutVideoInput | UserWatchHistoryCreateOrConnectWithoutVideoInput[]
    upsert?: UserWatchHistoryUpsertWithWhereUniqueWithoutVideoInput | UserWatchHistoryUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: UserWatchHistoryCreateManyVideoInputEnvelope
    set?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    disconnect?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    delete?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    connect?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    update?: UserWatchHistoryUpdateWithWhereUniqueWithoutVideoInput | UserWatchHistoryUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: UserWatchHistoryUpdateManyWithWhereWithoutVideoInput | UserWatchHistoryUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: UserWatchHistoryScalarWhereInput | UserWatchHistoryScalarWhereInput[]
  }

  export type UserWatchlistUpdateManyWithoutVideoNestedInput = {
    create?: XOR<UserWatchlistCreateWithoutVideoInput, UserWatchlistUncheckedCreateWithoutVideoInput> | UserWatchlistCreateWithoutVideoInput[] | UserWatchlistUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: UserWatchlistCreateOrConnectWithoutVideoInput | UserWatchlistCreateOrConnectWithoutVideoInput[]
    upsert?: UserWatchlistUpsertWithWhereUniqueWithoutVideoInput | UserWatchlistUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: UserWatchlistCreateManyVideoInputEnvelope
    set?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    disconnect?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    delete?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    connect?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    update?: UserWatchlistUpdateWithWhereUniqueWithoutVideoInput | UserWatchlistUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: UserWatchlistUpdateManyWithWhereWithoutVideoInput | UserWatchlistUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: UserWatchlistScalarWhereInput | UserWatchlistScalarWhereInput[]
  }

  export type VideoCastUpdateManyWithoutVideoNestedInput = {
    create?: XOR<VideoCastCreateWithoutVideoInput, VideoCastUncheckedCreateWithoutVideoInput> | VideoCastCreateWithoutVideoInput[] | VideoCastUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoCastCreateOrConnectWithoutVideoInput | VideoCastCreateOrConnectWithoutVideoInput[]
    upsert?: VideoCastUpsertWithWhereUniqueWithoutVideoInput | VideoCastUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: VideoCastCreateManyVideoInputEnvelope
    set?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    disconnect?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    delete?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    connect?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    update?: VideoCastUpdateWithWhereUniqueWithoutVideoInput | VideoCastUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: VideoCastUpdateManyWithWhereWithoutVideoInput | VideoCastUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: VideoCastScalarWhereInput | VideoCastScalarWhereInput[]
  }

  export type VideoGenreUpdateManyWithoutVideoNestedInput = {
    create?: XOR<VideoGenreCreateWithoutVideoInput, VideoGenreUncheckedCreateWithoutVideoInput> | VideoGenreCreateWithoutVideoInput[] | VideoGenreUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoGenreCreateOrConnectWithoutVideoInput | VideoGenreCreateOrConnectWithoutVideoInput[]
    upsert?: VideoGenreUpsertWithWhereUniqueWithoutVideoInput | VideoGenreUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: VideoGenreCreateManyVideoInputEnvelope
    set?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    disconnect?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    delete?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    connect?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    update?: VideoGenreUpdateWithWhereUniqueWithoutVideoInput | VideoGenreUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: VideoGenreUpdateManyWithWhereWithoutVideoInput | VideoGenreUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: VideoGenreScalarWhereInput | VideoGenreScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<ReviewCreateWithoutVideoInput, ReviewUncheckedCreateWithoutVideoInput> | ReviewCreateWithoutVideoInput[] | ReviewUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVideoInput | ReviewCreateOrConnectWithoutVideoInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutVideoInput | ReviewUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: ReviewCreateManyVideoInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutVideoInput | ReviewUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutVideoInput | ReviewUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SeasonUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<SeasonCreateWithoutVideoInput, SeasonUncheckedCreateWithoutVideoInput> | SeasonCreateWithoutVideoInput[] | SeasonUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: SeasonCreateOrConnectWithoutVideoInput | SeasonCreateOrConnectWithoutVideoInput[]
    upsert?: SeasonUpsertWithWhereUniqueWithoutVideoInput | SeasonUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: SeasonCreateManyVideoInputEnvelope
    set?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    disconnect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    delete?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    connect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    update?: SeasonUpdateWithWhereUniqueWithoutVideoInput | SeasonUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: SeasonUpdateManyWithWhereWithoutVideoInput | SeasonUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: SeasonScalarWhereInput | SeasonScalarWhereInput[]
  }

  export type UserWatchHistoryUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<UserWatchHistoryCreateWithoutVideoInput, UserWatchHistoryUncheckedCreateWithoutVideoInput> | UserWatchHistoryCreateWithoutVideoInput[] | UserWatchHistoryUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: UserWatchHistoryCreateOrConnectWithoutVideoInput | UserWatchHistoryCreateOrConnectWithoutVideoInput[]
    upsert?: UserWatchHistoryUpsertWithWhereUniqueWithoutVideoInput | UserWatchHistoryUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: UserWatchHistoryCreateManyVideoInputEnvelope
    set?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    disconnect?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    delete?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    connect?: UserWatchHistoryWhereUniqueInput | UserWatchHistoryWhereUniqueInput[]
    update?: UserWatchHistoryUpdateWithWhereUniqueWithoutVideoInput | UserWatchHistoryUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: UserWatchHistoryUpdateManyWithWhereWithoutVideoInput | UserWatchHistoryUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: UserWatchHistoryScalarWhereInput | UserWatchHistoryScalarWhereInput[]
  }

  export type UserWatchlistUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<UserWatchlistCreateWithoutVideoInput, UserWatchlistUncheckedCreateWithoutVideoInput> | UserWatchlistCreateWithoutVideoInput[] | UserWatchlistUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: UserWatchlistCreateOrConnectWithoutVideoInput | UserWatchlistCreateOrConnectWithoutVideoInput[]
    upsert?: UserWatchlistUpsertWithWhereUniqueWithoutVideoInput | UserWatchlistUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: UserWatchlistCreateManyVideoInputEnvelope
    set?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    disconnect?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    delete?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    connect?: UserWatchlistWhereUniqueInput | UserWatchlistWhereUniqueInput[]
    update?: UserWatchlistUpdateWithWhereUniqueWithoutVideoInput | UserWatchlistUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: UserWatchlistUpdateManyWithWhereWithoutVideoInput | UserWatchlistUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: UserWatchlistScalarWhereInput | UserWatchlistScalarWhereInput[]
  }

  export type VideoCastUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<VideoCastCreateWithoutVideoInput, VideoCastUncheckedCreateWithoutVideoInput> | VideoCastCreateWithoutVideoInput[] | VideoCastUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoCastCreateOrConnectWithoutVideoInput | VideoCastCreateOrConnectWithoutVideoInput[]
    upsert?: VideoCastUpsertWithWhereUniqueWithoutVideoInput | VideoCastUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: VideoCastCreateManyVideoInputEnvelope
    set?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    disconnect?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    delete?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    connect?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    update?: VideoCastUpdateWithWhereUniqueWithoutVideoInput | VideoCastUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: VideoCastUpdateManyWithWhereWithoutVideoInput | VideoCastUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: VideoCastScalarWhereInput | VideoCastScalarWhereInput[]
  }

  export type VideoGenreUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<VideoGenreCreateWithoutVideoInput, VideoGenreUncheckedCreateWithoutVideoInput> | VideoGenreCreateWithoutVideoInput[] | VideoGenreUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoGenreCreateOrConnectWithoutVideoInput | VideoGenreCreateOrConnectWithoutVideoInput[]
    upsert?: VideoGenreUpsertWithWhereUniqueWithoutVideoInput | VideoGenreUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: VideoGenreCreateManyVideoInputEnvelope
    set?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    disconnect?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    delete?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    connect?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    update?: VideoGenreUpdateWithWhereUniqueWithoutVideoInput | VideoGenreUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: VideoGenreUpdateManyWithWhereWithoutVideoInput | VideoGenreUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: VideoGenreScalarWhereInput | VideoGenreScalarWhereInput[]
  }

  export type VideoGenreCreateNestedManyWithoutGenreInput = {
    create?: XOR<VideoGenreCreateWithoutGenreInput, VideoGenreUncheckedCreateWithoutGenreInput> | VideoGenreCreateWithoutGenreInput[] | VideoGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: VideoGenreCreateOrConnectWithoutGenreInput | VideoGenreCreateOrConnectWithoutGenreInput[]
    createMany?: VideoGenreCreateManyGenreInputEnvelope
    connect?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
  }

  export type VideoGenreUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<VideoGenreCreateWithoutGenreInput, VideoGenreUncheckedCreateWithoutGenreInput> | VideoGenreCreateWithoutGenreInput[] | VideoGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: VideoGenreCreateOrConnectWithoutGenreInput | VideoGenreCreateOrConnectWithoutGenreInput[]
    createMany?: VideoGenreCreateManyGenreInputEnvelope
    connect?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
  }

  export type VideoGenreUpdateManyWithoutGenreNestedInput = {
    create?: XOR<VideoGenreCreateWithoutGenreInput, VideoGenreUncheckedCreateWithoutGenreInput> | VideoGenreCreateWithoutGenreInput[] | VideoGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: VideoGenreCreateOrConnectWithoutGenreInput | VideoGenreCreateOrConnectWithoutGenreInput[]
    upsert?: VideoGenreUpsertWithWhereUniqueWithoutGenreInput | VideoGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: VideoGenreCreateManyGenreInputEnvelope
    set?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    disconnect?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    delete?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    connect?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    update?: VideoGenreUpdateWithWhereUniqueWithoutGenreInput | VideoGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: VideoGenreUpdateManyWithWhereWithoutGenreInput | VideoGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: VideoGenreScalarWhereInput | VideoGenreScalarWhereInput[]
  }

  export type VideoGenreUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<VideoGenreCreateWithoutGenreInput, VideoGenreUncheckedCreateWithoutGenreInput> | VideoGenreCreateWithoutGenreInput[] | VideoGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: VideoGenreCreateOrConnectWithoutGenreInput | VideoGenreCreateOrConnectWithoutGenreInput[]
    upsert?: VideoGenreUpsertWithWhereUniqueWithoutGenreInput | VideoGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: VideoGenreCreateManyGenreInputEnvelope
    set?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    disconnect?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    delete?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    connect?: VideoGenreWhereUniqueInput | VideoGenreWhereUniqueInput[]
    update?: VideoGenreUpdateWithWhereUniqueWithoutGenreInput | VideoGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: VideoGenreUpdateManyWithWhereWithoutGenreInput | VideoGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: VideoGenreScalarWhereInput | VideoGenreScalarWhereInput[]
  }

  export type GenreCreateNestedOneWithoutVideosInput = {
    create?: XOR<GenreCreateWithoutVideosInput, GenreUncheckedCreateWithoutVideosInput>
    connectOrCreate?: GenreCreateOrConnectWithoutVideosInput
    connect?: GenreWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutGenresInput = {
    create?: XOR<VideoCreateWithoutGenresInput, VideoUncheckedCreateWithoutGenresInput>
    connectOrCreate?: VideoCreateOrConnectWithoutGenresInput
    connect?: VideoWhereUniqueInput
  }

  export type GenreUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<GenreCreateWithoutVideosInput, GenreUncheckedCreateWithoutVideosInput>
    connectOrCreate?: GenreCreateOrConnectWithoutVideosInput
    upsert?: GenreUpsertWithoutVideosInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutVideosInput, GenreUpdateWithoutVideosInput>, GenreUncheckedUpdateWithoutVideosInput>
  }

  export type VideoUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<VideoCreateWithoutGenresInput, VideoUncheckedCreateWithoutGenresInput>
    connectOrCreate?: VideoCreateOrConnectWithoutGenresInput
    upsert?: VideoUpsertWithoutGenresInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutGenresInput, VideoUpdateWithoutGenresInput>, VideoUncheckedUpdateWithoutGenresInput>
  }

  export type VideoCastCreateNestedManyWithoutPersonInput = {
    create?: XOR<VideoCastCreateWithoutPersonInput, VideoCastUncheckedCreateWithoutPersonInput> | VideoCastCreateWithoutPersonInput[] | VideoCastUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: VideoCastCreateOrConnectWithoutPersonInput | VideoCastCreateOrConnectWithoutPersonInput[]
    createMany?: VideoCastCreateManyPersonInputEnvelope
    connect?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
  }

  export type VideoCastUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<VideoCastCreateWithoutPersonInput, VideoCastUncheckedCreateWithoutPersonInput> | VideoCastCreateWithoutPersonInput[] | VideoCastUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: VideoCastCreateOrConnectWithoutPersonInput | VideoCastCreateOrConnectWithoutPersonInput[]
    createMany?: VideoCastCreateManyPersonInputEnvelope
    connect?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VideoCastUpdateManyWithoutPersonNestedInput = {
    create?: XOR<VideoCastCreateWithoutPersonInput, VideoCastUncheckedCreateWithoutPersonInput> | VideoCastCreateWithoutPersonInput[] | VideoCastUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: VideoCastCreateOrConnectWithoutPersonInput | VideoCastCreateOrConnectWithoutPersonInput[]
    upsert?: VideoCastUpsertWithWhereUniqueWithoutPersonInput | VideoCastUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: VideoCastCreateManyPersonInputEnvelope
    set?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    disconnect?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    delete?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    connect?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    update?: VideoCastUpdateWithWhereUniqueWithoutPersonInput | VideoCastUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: VideoCastUpdateManyWithWhereWithoutPersonInput | VideoCastUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: VideoCastScalarWhereInput | VideoCastScalarWhereInput[]
  }

  export type VideoCastUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<VideoCastCreateWithoutPersonInput, VideoCastUncheckedCreateWithoutPersonInput> | VideoCastCreateWithoutPersonInput[] | VideoCastUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: VideoCastCreateOrConnectWithoutPersonInput | VideoCastCreateOrConnectWithoutPersonInput[]
    upsert?: VideoCastUpsertWithWhereUniqueWithoutPersonInput | VideoCastUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: VideoCastCreateManyPersonInputEnvelope
    set?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    disconnect?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    delete?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    connect?: VideoCastWhereUniqueInput | VideoCastWhereUniqueInput[]
    update?: VideoCastUpdateWithWhereUniqueWithoutPersonInput | VideoCastUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: VideoCastUpdateManyWithWhereWithoutPersonInput | VideoCastUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: VideoCastScalarWhereInput | VideoCastScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutVideoCastInput = {
    create?: XOR<PersonCreateWithoutVideoCastInput, PersonUncheckedCreateWithoutVideoCastInput>
    connectOrCreate?: PersonCreateOrConnectWithoutVideoCastInput
    connect?: PersonWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutCastInput = {
    create?: XOR<VideoCreateWithoutCastInput, VideoUncheckedCreateWithoutCastInput>
    connectOrCreate?: VideoCreateOrConnectWithoutCastInput
    connect?: VideoWhereUniqueInput
  }

  export type EnumCastRoleFieldUpdateOperationsInput = {
    set?: $Enums.CastRole
  }

  export type PersonUpdateOneRequiredWithoutVideoCastNestedInput = {
    create?: XOR<PersonCreateWithoutVideoCastInput, PersonUncheckedCreateWithoutVideoCastInput>
    connectOrCreate?: PersonCreateOrConnectWithoutVideoCastInput
    upsert?: PersonUpsertWithoutVideoCastInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutVideoCastInput, PersonUpdateWithoutVideoCastInput>, PersonUncheckedUpdateWithoutVideoCastInput>
  }

  export type VideoUpdateOneRequiredWithoutCastNestedInput = {
    create?: XOR<VideoCreateWithoutCastInput, VideoUncheckedCreateWithoutCastInput>
    connectOrCreate?: VideoCreateOrConnectWithoutCastInput
    upsert?: VideoUpsertWithoutCastInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutCastInput, VideoUpdateWithoutCastInput>, VideoUncheckedUpdateWithoutCastInput>
  }

  export type EpisodeCreateNestedManyWithoutSeasonInput = {
    create?: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput> | EpisodeCreateWithoutSeasonInput[] | EpisodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput | EpisodeCreateOrConnectWithoutSeasonInput[]
    createMany?: EpisodeCreateManySeasonInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type VideoCreateNestedOneWithoutSeasonsInput = {
    create?: XOR<VideoCreateWithoutSeasonsInput, VideoUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutSeasonsInput
    connect?: VideoWhereUniqueInput
  }

  export type EpisodeUncheckedCreateNestedManyWithoutSeasonInput = {
    create?: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput> | EpisodeCreateWithoutSeasonInput[] | EpisodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput | EpisodeCreateOrConnectWithoutSeasonInput[]
    createMany?: EpisodeCreateManySeasonInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type EpisodeUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput> | EpisodeCreateWithoutSeasonInput[] | EpisodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput | EpisodeCreateOrConnectWithoutSeasonInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutSeasonInput | EpisodeUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: EpisodeCreateManySeasonInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutSeasonInput | EpisodeUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutSeasonInput | EpisodeUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type VideoUpdateOneRequiredWithoutSeasonsNestedInput = {
    create?: XOR<VideoCreateWithoutSeasonsInput, VideoUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutSeasonsInput
    upsert?: VideoUpsertWithoutSeasonsInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutSeasonsInput, VideoUpdateWithoutSeasonsInput>, VideoUncheckedUpdateWithoutSeasonsInput>
  }

  export type EpisodeUncheckedUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput> | EpisodeCreateWithoutSeasonInput[] | EpisodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput | EpisodeCreateOrConnectWithoutSeasonInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutSeasonInput | EpisodeUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: EpisodeCreateManySeasonInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutSeasonInput | EpisodeUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutSeasonInput | EpisodeUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type SeasonCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<SeasonCreateWithoutEpisodesInput, SeasonUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutEpisodesInput
    connect?: SeasonWhereUniqueInput
  }

  export type SeasonUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<SeasonCreateWithoutEpisodesInput, SeasonUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutEpisodesInput
    upsert?: SeasonUpsertWithoutEpisodesInput
    connect?: SeasonWhereUniqueInput
    update?: XOR<XOR<SeasonUpdateToOneWithWhereWithoutEpisodesInput, SeasonUpdateWithoutEpisodesInput>, SeasonUncheckedUpdateWithoutEpisodesInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutReviewsInput = {
    create?: XOR<VideoCreateWithoutReviewsInput, VideoUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutReviewsInput
    connect?: VideoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type VideoUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<VideoCreateWithoutReviewsInput, VideoUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutReviewsInput
    upsert?: VideoUpsertWithoutReviewsInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutReviewsInput, VideoUpdateWithoutReviewsInput>, VideoUncheckedUpdateWithoutReviewsInput>
  }

  export type VideoCreateNestedOneWithoutWatchlistInput = {
    create?: XOR<VideoCreateWithoutWatchlistInput, VideoUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: VideoCreateOrConnectWithoutWatchlistInput
    connect?: VideoWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutWatchListInput = {
    create?: XOR<ProfileCreateWithoutWatchListInput, ProfileUncheckedCreateWithoutWatchListInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWatchListInput
    connect?: ProfileWhereUniqueInput
  }

  export type VideoUpdateOneRequiredWithoutWatchlistNestedInput = {
    create?: XOR<VideoCreateWithoutWatchlistInput, VideoUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: VideoCreateOrConnectWithoutWatchlistInput
    upsert?: VideoUpsertWithoutWatchlistInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutWatchlistInput, VideoUpdateWithoutWatchlistInput>, VideoUncheckedUpdateWithoutWatchlistInput>
  }

  export type ProfileUpdateOneRequiredWithoutWatchListNestedInput = {
    create?: XOR<ProfileCreateWithoutWatchListInput, ProfileUncheckedCreateWithoutWatchListInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWatchListInput
    upsert?: ProfileUpsertWithoutWatchListInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutWatchListInput, ProfileUpdateWithoutWatchListInput>, ProfileUncheckedUpdateWithoutWatchListInput>
  }

  export type ProfileCreateNestedOneWithoutWatchHistoryInput = {
    create?: XOR<ProfileCreateWithoutWatchHistoryInput, ProfileUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWatchHistoryInput
    connect?: ProfileWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutWatchHistoryInput = {
    create?: XOR<VideoCreateWithoutWatchHistoryInput, VideoUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: VideoCreateOrConnectWithoutWatchHistoryInput
    connect?: VideoWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutWatchHistoryNestedInput = {
    create?: XOR<ProfileCreateWithoutWatchHistoryInput, ProfileUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWatchHistoryInput
    upsert?: ProfileUpsertWithoutWatchHistoryInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutWatchHistoryInput, ProfileUpdateWithoutWatchHistoryInput>, ProfileUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type VideoUpdateOneRequiredWithoutWatchHistoryNestedInput = {
    create?: XOR<VideoCreateWithoutWatchHistoryInput, VideoUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: VideoCreateOrConnectWithoutWatchHistoryInput
    upsert?: VideoUpsertWithoutWatchHistoryInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutWatchHistoryInput, VideoUpdateWithoutWatchHistoryInput>, VideoUncheckedUpdateWithoutWatchHistoryInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedEnumAgeRatingFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeRating | EnumAgeRatingFieldRefInput<$PrismaModel>
    in?: $Enums.AgeRating[] | ListEnumAgeRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeRating[] | ListEnumAgeRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeRatingFilter<$PrismaModel> | $Enums.AgeRating
  }

  export type NestedEnumVideoTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoType | EnumVideoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VideoType[] | ListEnumVideoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoType[] | ListEnumVideoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoTypeFilter<$PrismaModel> | $Enums.VideoType
  }

  export type NestedEnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAgeRatingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeRating | EnumAgeRatingFieldRefInput<$PrismaModel>
    in?: $Enums.AgeRating[] | ListEnumAgeRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeRating[] | ListEnumAgeRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeRatingWithAggregatesFilter<$PrismaModel> | $Enums.AgeRating
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgeRatingFilter<$PrismaModel>
    _max?: NestedEnumAgeRatingFilter<$PrismaModel>
  }

  export type NestedEnumVideoTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoType | EnumVideoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VideoType[] | ListEnumVideoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoType[] | ListEnumVideoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoTypeWithAggregatesFilter<$PrismaModel> | $Enums.VideoType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoTypeFilter<$PrismaModel>
    _max?: NestedEnumVideoTypeFilter<$PrismaModel>
  }

  export type NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
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

  export type NestedEnumCastRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CastRole | EnumCastRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CastRole[] | ListEnumCastRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CastRole[] | ListEnumCastRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCastRoleFilter<$PrismaModel> | $Enums.CastRole
  }

  export type NestedEnumCastRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CastRole | EnumCastRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CastRole[] | ListEnumCastRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CastRole[] | ListEnumCastRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCastRoleWithAggregatesFilter<$PrismaModel> | $Enums.CastRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCastRoleFilter<$PrismaModel>
    _max?: NestedEnumCastRoleFilter<$PrismaModel>
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    video: VideoCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    videoId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    watchHistory?: UserWatchHistoryCreateNestedManyWithoutProfileInput
    watchList?: UserWatchlistCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    watchHistory?: UserWatchHistoryUncheckedCreateNestedManyWithoutProfileInput
    watchList?: UserWatchlistUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileCreateManyUserInputEnvelope = {
    data: ProfileCreateManyUserInput | ProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    videoId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateManyWithWhereWithoutUserInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type ProfileScalarWhereInput = {
    AND?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    OR?: ProfileScalarWhereInput[]
    NOT?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    id?: StringFilter<"Profile"> | string
    name?: StringFilter<"Profile"> | string
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    userId?: StringFilter<"Profile"> | string
  }

  export type UserCreateWithoutProfilesInput = {
    id?: string
    name: string
    email: string
    password: string
    plan_type?: string
    payment?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfilesInput = {
    id?: string
    name: string
    email: string
    password: string
    plan_type?: string
    payment?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
  }

  export type UserWatchHistoryCreateWithoutProfileInput = {
    id?: string
    watchedAt?: Date | string
    episodeId?: string | null
    progress?: number
    completed?: boolean
    video: VideoCreateNestedOneWithoutWatchHistoryInput
  }

  export type UserWatchHistoryUncheckedCreateWithoutProfileInput = {
    id?: string
    videoId: string
    watchedAt?: Date | string
    episodeId?: string | null
    progress?: number
    completed?: boolean
  }

  export type UserWatchHistoryCreateOrConnectWithoutProfileInput = {
    where: UserWatchHistoryWhereUniqueInput
    create: XOR<UserWatchHistoryCreateWithoutProfileInput, UserWatchHistoryUncheckedCreateWithoutProfileInput>
  }

  export type UserWatchHistoryCreateManyProfileInputEnvelope = {
    data: UserWatchHistoryCreateManyProfileInput | UserWatchHistoryCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserWatchlistCreateWithoutProfileInput = {
    id?: string
    addedAt?: Date | string
    video: VideoCreateNestedOneWithoutWatchlistInput
  }

  export type UserWatchlistUncheckedCreateWithoutProfileInput = {
    id?: string
    videoId: string
    addedAt?: Date | string
  }

  export type UserWatchlistCreateOrConnectWithoutProfileInput = {
    where: UserWatchlistWhereUniqueInput
    create: XOR<UserWatchlistCreateWithoutProfileInput, UserWatchlistUncheckedCreateWithoutProfileInput>
  }

  export type UserWatchlistCreateManyProfileInputEnvelope = {
    data: UserWatchlistCreateManyProfileInput | UserWatchlistCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProfilesInput = {
    update: XOR<UserUpdateWithoutProfilesInput, UserUncheckedUpdateWithoutProfilesInput>
    create: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfilesInput, UserUncheckedUpdateWithoutProfilesInput>
  }

  export type UserUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    plan_type?: StringFieldUpdateOperationsInput | string
    payment?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    plan_type?: StringFieldUpdateOperationsInput | string
    payment?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserWatchHistoryUpsertWithWhereUniqueWithoutProfileInput = {
    where: UserWatchHistoryWhereUniqueInput
    update: XOR<UserWatchHistoryUpdateWithoutProfileInput, UserWatchHistoryUncheckedUpdateWithoutProfileInput>
    create: XOR<UserWatchHistoryCreateWithoutProfileInput, UserWatchHistoryUncheckedCreateWithoutProfileInput>
  }

  export type UserWatchHistoryUpdateWithWhereUniqueWithoutProfileInput = {
    where: UserWatchHistoryWhereUniqueInput
    data: XOR<UserWatchHistoryUpdateWithoutProfileInput, UserWatchHistoryUncheckedUpdateWithoutProfileInput>
  }

  export type UserWatchHistoryUpdateManyWithWhereWithoutProfileInput = {
    where: UserWatchHistoryScalarWhereInput
    data: XOR<UserWatchHistoryUpdateManyMutationInput, UserWatchHistoryUncheckedUpdateManyWithoutProfileInput>
  }

  export type UserWatchHistoryScalarWhereInput = {
    AND?: UserWatchHistoryScalarWhereInput | UserWatchHistoryScalarWhereInput[]
    OR?: UserWatchHistoryScalarWhereInput[]
    NOT?: UserWatchHistoryScalarWhereInput | UserWatchHistoryScalarWhereInput[]
    id?: StringFilter<"UserWatchHistory"> | string
    videoId?: StringFilter<"UserWatchHistory"> | string
    profileId?: StringFilter<"UserWatchHistory"> | string
    watchedAt?: DateTimeFilter<"UserWatchHistory"> | Date | string
    episodeId?: StringNullableFilter<"UserWatchHistory"> | string | null
    progress?: IntFilter<"UserWatchHistory"> | number
    completed?: BoolFilter<"UserWatchHistory"> | boolean
  }

  export type UserWatchlistUpsertWithWhereUniqueWithoutProfileInput = {
    where: UserWatchlistWhereUniqueInput
    update: XOR<UserWatchlistUpdateWithoutProfileInput, UserWatchlistUncheckedUpdateWithoutProfileInput>
    create: XOR<UserWatchlistCreateWithoutProfileInput, UserWatchlistUncheckedCreateWithoutProfileInput>
  }

  export type UserWatchlistUpdateWithWhereUniqueWithoutProfileInput = {
    where: UserWatchlistWhereUniqueInput
    data: XOR<UserWatchlistUpdateWithoutProfileInput, UserWatchlistUncheckedUpdateWithoutProfileInput>
  }

  export type UserWatchlistUpdateManyWithWhereWithoutProfileInput = {
    where: UserWatchlistScalarWhereInput
    data: XOR<UserWatchlistUpdateManyMutationInput, UserWatchlistUncheckedUpdateManyWithoutProfileInput>
  }

  export type UserWatchlistScalarWhereInput = {
    AND?: UserWatchlistScalarWhereInput | UserWatchlistScalarWhereInput[]
    OR?: UserWatchlistScalarWhereInput[]
    NOT?: UserWatchlistScalarWhereInput | UserWatchlistScalarWhereInput[]
    id?: StringFilter<"UserWatchlist"> | string
    videoId?: StringFilter<"UserWatchlist"> | string
    addedAt?: DateTimeFilter<"UserWatchlist"> | Date | string
    profileId?: StringFilter<"UserWatchlist"> | string
  }

  export type ReviewCreateWithoutVideoInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutVideoInput = {
    id?: string
    userId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutVideoInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutVideoInput, ReviewUncheckedCreateWithoutVideoInput>
  }

  export type ReviewCreateManyVideoInputEnvelope = {
    data: ReviewCreateManyVideoInput | ReviewCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type SeasonCreateWithoutVideoInput = {
    id?: string
    seasonNumber: number
    title?: string | null
    description?: string | null
    releaseDate?: Date | string | null
    episodes?: EpisodeCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUncheckedCreateWithoutVideoInput = {
    id?: string
    seasonNumber: number
    title?: string | null
    description?: string | null
    releaseDate?: Date | string | null
    episodes?: EpisodeUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonCreateOrConnectWithoutVideoInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutVideoInput, SeasonUncheckedCreateWithoutVideoInput>
  }

  export type SeasonCreateManyVideoInputEnvelope = {
    data: SeasonCreateManyVideoInput | SeasonCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type UserWatchHistoryCreateWithoutVideoInput = {
    id?: string
    watchedAt?: Date | string
    episodeId?: string | null
    progress?: number
    completed?: boolean
    profile: ProfileCreateNestedOneWithoutWatchHistoryInput
  }

  export type UserWatchHistoryUncheckedCreateWithoutVideoInput = {
    id?: string
    profileId: string
    watchedAt?: Date | string
    episodeId?: string | null
    progress?: number
    completed?: boolean
  }

  export type UserWatchHistoryCreateOrConnectWithoutVideoInput = {
    where: UserWatchHistoryWhereUniqueInput
    create: XOR<UserWatchHistoryCreateWithoutVideoInput, UserWatchHistoryUncheckedCreateWithoutVideoInput>
  }

  export type UserWatchHistoryCreateManyVideoInputEnvelope = {
    data: UserWatchHistoryCreateManyVideoInput | UserWatchHistoryCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type UserWatchlistCreateWithoutVideoInput = {
    id?: string
    addedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutWatchListInput
  }

  export type UserWatchlistUncheckedCreateWithoutVideoInput = {
    id?: string
    addedAt?: Date | string
    profileId: string
  }

  export type UserWatchlistCreateOrConnectWithoutVideoInput = {
    where: UserWatchlistWhereUniqueInput
    create: XOR<UserWatchlistCreateWithoutVideoInput, UserWatchlistUncheckedCreateWithoutVideoInput>
  }

  export type UserWatchlistCreateManyVideoInputEnvelope = {
    data: UserWatchlistCreateManyVideoInput | UserWatchlistCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type VideoCastCreateWithoutVideoInput = {
    id?: string
    role: $Enums.CastRole
    character?: string | null
    person: PersonCreateNestedOneWithoutVideoCastInput
  }

  export type VideoCastUncheckedCreateWithoutVideoInput = {
    id?: string
    personId: string
    role: $Enums.CastRole
    character?: string | null
  }

  export type VideoCastCreateOrConnectWithoutVideoInput = {
    where: VideoCastWhereUniqueInput
    create: XOR<VideoCastCreateWithoutVideoInput, VideoCastUncheckedCreateWithoutVideoInput>
  }

  export type VideoCastCreateManyVideoInputEnvelope = {
    data: VideoCastCreateManyVideoInput | VideoCastCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type VideoGenreCreateWithoutVideoInput = {
    id?: string
    genre: GenreCreateNestedOneWithoutVideosInput
  }

  export type VideoGenreUncheckedCreateWithoutVideoInput = {
    id?: string
    genreId: string
  }

  export type VideoGenreCreateOrConnectWithoutVideoInput = {
    where: VideoGenreWhereUniqueInput
    create: XOR<VideoGenreCreateWithoutVideoInput, VideoGenreUncheckedCreateWithoutVideoInput>
  }

  export type VideoGenreCreateManyVideoInputEnvelope = {
    data: VideoGenreCreateManyVideoInput | VideoGenreCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutVideoInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutVideoInput, ReviewUncheckedUpdateWithoutVideoInput>
    create: XOR<ReviewCreateWithoutVideoInput, ReviewUncheckedCreateWithoutVideoInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutVideoInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutVideoInput, ReviewUncheckedUpdateWithoutVideoInput>
  }

  export type ReviewUpdateManyWithWhereWithoutVideoInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutVideoInput>
  }

  export type SeasonUpsertWithWhereUniqueWithoutVideoInput = {
    where: SeasonWhereUniqueInput
    update: XOR<SeasonUpdateWithoutVideoInput, SeasonUncheckedUpdateWithoutVideoInput>
    create: XOR<SeasonCreateWithoutVideoInput, SeasonUncheckedCreateWithoutVideoInput>
  }

  export type SeasonUpdateWithWhereUniqueWithoutVideoInput = {
    where: SeasonWhereUniqueInput
    data: XOR<SeasonUpdateWithoutVideoInput, SeasonUncheckedUpdateWithoutVideoInput>
  }

  export type SeasonUpdateManyWithWhereWithoutVideoInput = {
    where: SeasonScalarWhereInput
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyWithoutVideoInput>
  }

  export type SeasonScalarWhereInput = {
    AND?: SeasonScalarWhereInput | SeasonScalarWhereInput[]
    OR?: SeasonScalarWhereInput[]
    NOT?: SeasonScalarWhereInput | SeasonScalarWhereInput[]
    id?: StringFilter<"Season"> | string
    videoId?: StringFilter<"Season"> | string
    seasonNumber?: IntFilter<"Season"> | number
    title?: StringNullableFilter<"Season"> | string | null
    description?: StringNullableFilter<"Season"> | string | null
    releaseDate?: DateTimeNullableFilter<"Season"> | Date | string | null
  }

  export type UserWatchHistoryUpsertWithWhereUniqueWithoutVideoInput = {
    where: UserWatchHistoryWhereUniqueInput
    update: XOR<UserWatchHistoryUpdateWithoutVideoInput, UserWatchHistoryUncheckedUpdateWithoutVideoInput>
    create: XOR<UserWatchHistoryCreateWithoutVideoInput, UserWatchHistoryUncheckedCreateWithoutVideoInput>
  }

  export type UserWatchHistoryUpdateWithWhereUniqueWithoutVideoInput = {
    where: UserWatchHistoryWhereUniqueInput
    data: XOR<UserWatchHistoryUpdateWithoutVideoInput, UserWatchHistoryUncheckedUpdateWithoutVideoInput>
  }

  export type UserWatchHistoryUpdateManyWithWhereWithoutVideoInput = {
    where: UserWatchHistoryScalarWhereInput
    data: XOR<UserWatchHistoryUpdateManyMutationInput, UserWatchHistoryUncheckedUpdateManyWithoutVideoInput>
  }

  export type UserWatchlistUpsertWithWhereUniqueWithoutVideoInput = {
    where: UserWatchlistWhereUniqueInput
    update: XOR<UserWatchlistUpdateWithoutVideoInput, UserWatchlistUncheckedUpdateWithoutVideoInput>
    create: XOR<UserWatchlistCreateWithoutVideoInput, UserWatchlistUncheckedCreateWithoutVideoInput>
  }

  export type UserWatchlistUpdateWithWhereUniqueWithoutVideoInput = {
    where: UserWatchlistWhereUniqueInput
    data: XOR<UserWatchlistUpdateWithoutVideoInput, UserWatchlistUncheckedUpdateWithoutVideoInput>
  }

  export type UserWatchlistUpdateManyWithWhereWithoutVideoInput = {
    where: UserWatchlistScalarWhereInput
    data: XOR<UserWatchlistUpdateManyMutationInput, UserWatchlistUncheckedUpdateManyWithoutVideoInput>
  }

  export type VideoCastUpsertWithWhereUniqueWithoutVideoInput = {
    where: VideoCastWhereUniqueInput
    update: XOR<VideoCastUpdateWithoutVideoInput, VideoCastUncheckedUpdateWithoutVideoInput>
    create: XOR<VideoCastCreateWithoutVideoInput, VideoCastUncheckedCreateWithoutVideoInput>
  }

  export type VideoCastUpdateWithWhereUniqueWithoutVideoInput = {
    where: VideoCastWhereUniqueInput
    data: XOR<VideoCastUpdateWithoutVideoInput, VideoCastUncheckedUpdateWithoutVideoInput>
  }

  export type VideoCastUpdateManyWithWhereWithoutVideoInput = {
    where: VideoCastScalarWhereInput
    data: XOR<VideoCastUpdateManyMutationInput, VideoCastUncheckedUpdateManyWithoutVideoInput>
  }

  export type VideoCastScalarWhereInput = {
    AND?: VideoCastScalarWhereInput | VideoCastScalarWhereInput[]
    OR?: VideoCastScalarWhereInput[]
    NOT?: VideoCastScalarWhereInput | VideoCastScalarWhereInput[]
    id?: StringFilter<"VideoCast"> | string
    videoId?: StringFilter<"VideoCast"> | string
    personId?: StringFilter<"VideoCast"> | string
    role?: EnumCastRoleFilter<"VideoCast"> | $Enums.CastRole
    character?: StringNullableFilter<"VideoCast"> | string | null
  }

  export type VideoGenreUpsertWithWhereUniqueWithoutVideoInput = {
    where: VideoGenreWhereUniqueInput
    update: XOR<VideoGenreUpdateWithoutVideoInput, VideoGenreUncheckedUpdateWithoutVideoInput>
    create: XOR<VideoGenreCreateWithoutVideoInput, VideoGenreUncheckedCreateWithoutVideoInput>
  }

  export type VideoGenreUpdateWithWhereUniqueWithoutVideoInput = {
    where: VideoGenreWhereUniqueInput
    data: XOR<VideoGenreUpdateWithoutVideoInput, VideoGenreUncheckedUpdateWithoutVideoInput>
  }

  export type VideoGenreUpdateManyWithWhereWithoutVideoInput = {
    where: VideoGenreScalarWhereInput
    data: XOR<VideoGenreUpdateManyMutationInput, VideoGenreUncheckedUpdateManyWithoutVideoInput>
  }

  export type VideoGenreScalarWhereInput = {
    AND?: VideoGenreScalarWhereInput | VideoGenreScalarWhereInput[]
    OR?: VideoGenreScalarWhereInput[]
    NOT?: VideoGenreScalarWhereInput | VideoGenreScalarWhereInput[]
    id?: StringFilter<"VideoGenre"> | string
    videoId?: StringFilter<"VideoGenre"> | string
    genreId?: StringFilter<"VideoGenre"> | string
  }

  export type VideoGenreCreateWithoutGenreInput = {
    id?: string
    video: VideoCreateNestedOneWithoutGenresInput
  }

  export type VideoGenreUncheckedCreateWithoutGenreInput = {
    id?: string
    videoId: string
  }

  export type VideoGenreCreateOrConnectWithoutGenreInput = {
    where: VideoGenreWhereUniqueInput
    create: XOR<VideoGenreCreateWithoutGenreInput, VideoGenreUncheckedCreateWithoutGenreInput>
  }

  export type VideoGenreCreateManyGenreInputEnvelope = {
    data: VideoGenreCreateManyGenreInput | VideoGenreCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type VideoGenreUpsertWithWhereUniqueWithoutGenreInput = {
    where: VideoGenreWhereUniqueInput
    update: XOR<VideoGenreUpdateWithoutGenreInput, VideoGenreUncheckedUpdateWithoutGenreInput>
    create: XOR<VideoGenreCreateWithoutGenreInput, VideoGenreUncheckedCreateWithoutGenreInput>
  }

  export type VideoGenreUpdateWithWhereUniqueWithoutGenreInput = {
    where: VideoGenreWhereUniqueInput
    data: XOR<VideoGenreUpdateWithoutGenreInput, VideoGenreUncheckedUpdateWithoutGenreInput>
  }

  export type VideoGenreUpdateManyWithWhereWithoutGenreInput = {
    where: VideoGenreScalarWhereInput
    data: XOR<VideoGenreUpdateManyMutationInput, VideoGenreUncheckedUpdateManyWithoutGenreInput>
  }

  export type GenreCreateWithoutVideosInput = {
    id?: string
    name: string
    slug: string
  }

  export type GenreUncheckedCreateWithoutVideosInput = {
    id?: string
    name: string
    slug: string
  }

  export type GenreCreateOrConnectWithoutVideosInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutVideosInput, GenreUncheckedCreateWithoutVideosInput>
  }

  export type VideoCreateWithoutGenresInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    reviews?: ReviewCreateNestedManyWithoutVideoInput
    seasons?: SeasonCreateNestedManyWithoutVideoInput
    watchHistory?: UserWatchHistoryCreateNestedManyWithoutVideoInput
    watchlist?: UserWatchlistCreateNestedManyWithoutVideoInput
    cast?: VideoCastCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutGenresInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutVideoInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutVideoInput
    watchHistory?: UserWatchHistoryUncheckedCreateNestedManyWithoutVideoInput
    watchlist?: UserWatchlistUncheckedCreateNestedManyWithoutVideoInput
    cast?: VideoCastUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutGenresInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutGenresInput, VideoUncheckedCreateWithoutGenresInput>
  }

  export type GenreUpsertWithoutVideosInput = {
    update: XOR<GenreUpdateWithoutVideosInput, GenreUncheckedUpdateWithoutVideosInput>
    create: XOR<GenreCreateWithoutVideosInput, GenreUncheckedCreateWithoutVideosInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutVideosInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutVideosInput, GenreUncheckedUpdateWithoutVideosInput>
  }

  export type GenreUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUpsertWithoutGenresInput = {
    update: XOR<VideoUpdateWithoutGenresInput, VideoUncheckedUpdateWithoutGenresInput>
    create: XOR<VideoCreateWithoutGenresInput, VideoUncheckedCreateWithoutGenresInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutGenresInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutGenresInput, VideoUncheckedUpdateWithoutGenresInput>
  }

  export type VideoUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUpdateManyWithoutVideoNestedInput
    seasons?: SeasonUpdateManyWithoutVideoNestedInput
    watchHistory?: UserWatchHistoryUpdateManyWithoutVideoNestedInput
    watchlist?: UserWatchlistUpdateManyWithoutVideoNestedInput
    cast?: VideoCastUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutVideoNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutVideoNestedInput
    watchHistory?: UserWatchHistoryUncheckedUpdateManyWithoutVideoNestedInput
    watchlist?: UserWatchlistUncheckedUpdateManyWithoutVideoNestedInput
    cast?: VideoCastUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCastCreateWithoutPersonInput = {
    id?: string
    role: $Enums.CastRole
    character?: string | null
    video: VideoCreateNestedOneWithoutCastInput
  }

  export type VideoCastUncheckedCreateWithoutPersonInput = {
    id?: string
    videoId: string
    role: $Enums.CastRole
    character?: string | null
  }

  export type VideoCastCreateOrConnectWithoutPersonInput = {
    where: VideoCastWhereUniqueInput
    create: XOR<VideoCastCreateWithoutPersonInput, VideoCastUncheckedCreateWithoutPersonInput>
  }

  export type VideoCastCreateManyPersonInputEnvelope = {
    data: VideoCastCreateManyPersonInput | VideoCastCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type VideoCastUpsertWithWhereUniqueWithoutPersonInput = {
    where: VideoCastWhereUniqueInput
    update: XOR<VideoCastUpdateWithoutPersonInput, VideoCastUncheckedUpdateWithoutPersonInput>
    create: XOR<VideoCastCreateWithoutPersonInput, VideoCastUncheckedCreateWithoutPersonInput>
  }

  export type VideoCastUpdateWithWhereUniqueWithoutPersonInput = {
    where: VideoCastWhereUniqueInput
    data: XOR<VideoCastUpdateWithoutPersonInput, VideoCastUncheckedUpdateWithoutPersonInput>
  }

  export type VideoCastUpdateManyWithWhereWithoutPersonInput = {
    where: VideoCastScalarWhereInput
    data: XOR<VideoCastUpdateManyMutationInput, VideoCastUncheckedUpdateManyWithoutPersonInput>
  }

  export type PersonCreateWithoutVideoCastInput = {
    id?: string
    name: string
    biography?: string | null
    birthDate?: Date | string | null
    photoUrl?: string | null
  }

  export type PersonUncheckedCreateWithoutVideoCastInput = {
    id?: string
    name: string
    biography?: string | null
    birthDate?: Date | string | null
    photoUrl?: string | null
  }

  export type PersonCreateOrConnectWithoutVideoCastInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutVideoCastInput, PersonUncheckedCreateWithoutVideoCastInput>
  }

  export type VideoCreateWithoutCastInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    reviews?: ReviewCreateNestedManyWithoutVideoInput
    seasons?: SeasonCreateNestedManyWithoutVideoInput
    watchHistory?: UserWatchHistoryCreateNestedManyWithoutVideoInput
    watchlist?: UserWatchlistCreateNestedManyWithoutVideoInput
    genres?: VideoGenreCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutCastInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutVideoInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutVideoInput
    watchHistory?: UserWatchHistoryUncheckedCreateNestedManyWithoutVideoInput
    watchlist?: UserWatchlistUncheckedCreateNestedManyWithoutVideoInput
    genres?: VideoGenreUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutCastInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutCastInput, VideoUncheckedCreateWithoutCastInput>
  }

  export type PersonUpsertWithoutVideoCastInput = {
    update: XOR<PersonUpdateWithoutVideoCastInput, PersonUncheckedUpdateWithoutVideoCastInput>
    create: XOR<PersonCreateWithoutVideoCastInput, PersonUncheckedCreateWithoutVideoCastInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutVideoCastInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutVideoCastInput, PersonUncheckedUpdateWithoutVideoCastInput>
  }

  export type PersonUpdateWithoutVideoCastInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonUncheckedUpdateWithoutVideoCastInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoUpsertWithoutCastInput = {
    update: XOR<VideoUpdateWithoutCastInput, VideoUncheckedUpdateWithoutCastInput>
    create: XOR<VideoCreateWithoutCastInput, VideoUncheckedCreateWithoutCastInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutCastInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutCastInput, VideoUncheckedUpdateWithoutCastInput>
  }

  export type VideoUpdateWithoutCastInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUpdateManyWithoutVideoNestedInput
    seasons?: SeasonUpdateManyWithoutVideoNestedInput
    watchHistory?: UserWatchHistoryUpdateManyWithoutVideoNestedInput
    watchlist?: UserWatchlistUpdateManyWithoutVideoNestedInput
    genres?: VideoGenreUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutCastInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutVideoNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutVideoNestedInput
    watchHistory?: UserWatchHistoryUncheckedUpdateManyWithoutVideoNestedInput
    watchlist?: UserWatchlistUncheckedUpdateManyWithoutVideoNestedInput
    genres?: VideoGenreUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type EpisodeCreateWithoutSeasonInput = {
    id?: string
    episodeNumber: number
    title: string
    description?: string | null
    duration: number
    videoUrl: string
    thumbnailUrl: string
    releaseDate: Date | string
    introStartTime?: number | null
    introEndTime?: number | null
  }

  export type EpisodeUncheckedCreateWithoutSeasonInput = {
    id?: string
    episodeNumber: number
    title: string
    description?: string | null
    duration: number
    videoUrl: string
    thumbnailUrl: string
    releaseDate: Date | string
    introStartTime?: number | null
    introEndTime?: number | null
  }

  export type EpisodeCreateOrConnectWithoutSeasonInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput>
  }

  export type EpisodeCreateManySeasonInputEnvelope = {
    data: EpisodeCreateManySeasonInput | EpisodeCreateManySeasonInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutSeasonsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    reviews?: ReviewCreateNestedManyWithoutVideoInput
    watchHistory?: UserWatchHistoryCreateNestedManyWithoutVideoInput
    watchlist?: UserWatchlistCreateNestedManyWithoutVideoInput
    cast?: VideoCastCreateNestedManyWithoutVideoInput
    genres?: VideoGenreCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutSeasonsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutVideoInput
    watchHistory?: UserWatchHistoryUncheckedCreateNestedManyWithoutVideoInput
    watchlist?: UserWatchlistUncheckedCreateNestedManyWithoutVideoInput
    cast?: VideoCastUncheckedCreateNestedManyWithoutVideoInput
    genres?: VideoGenreUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutSeasonsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutSeasonsInput, VideoUncheckedCreateWithoutSeasonsInput>
  }

  export type EpisodeUpsertWithWhereUniqueWithoutSeasonInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutSeasonInput, EpisodeUncheckedUpdateWithoutSeasonInput>
    create: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutSeasonInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutSeasonInput, EpisodeUncheckedUpdateWithoutSeasonInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutSeasonInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutSeasonInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    OR?: EpisodeScalarWhereInput[]
    NOT?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    id?: StringFilter<"Episode"> | string
    seasonId?: StringFilter<"Episode"> | string
    episodeNumber?: IntFilter<"Episode"> | number
    title?: StringFilter<"Episode"> | string
    description?: StringNullableFilter<"Episode"> | string | null
    duration?: IntFilter<"Episode"> | number
    videoUrl?: StringFilter<"Episode"> | string
    thumbnailUrl?: StringFilter<"Episode"> | string
    releaseDate?: DateTimeFilter<"Episode"> | Date | string
    introStartTime?: IntNullableFilter<"Episode"> | number | null
    introEndTime?: IntNullableFilter<"Episode"> | number | null
  }

  export type VideoUpsertWithoutSeasonsInput = {
    update: XOR<VideoUpdateWithoutSeasonsInput, VideoUncheckedUpdateWithoutSeasonsInput>
    create: XOR<VideoCreateWithoutSeasonsInput, VideoUncheckedCreateWithoutSeasonsInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutSeasonsInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutSeasonsInput, VideoUncheckedUpdateWithoutSeasonsInput>
  }

  export type VideoUpdateWithoutSeasonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUpdateManyWithoutVideoNestedInput
    watchHistory?: UserWatchHistoryUpdateManyWithoutVideoNestedInput
    watchlist?: UserWatchlistUpdateManyWithoutVideoNestedInput
    cast?: VideoCastUpdateManyWithoutVideoNestedInput
    genres?: VideoGenreUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutSeasonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutVideoNestedInput
    watchHistory?: UserWatchHistoryUncheckedUpdateManyWithoutVideoNestedInput
    watchlist?: UserWatchlistUncheckedUpdateManyWithoutVideoNestedInput
    cast?: VideoCastUncheckedUpdateManyWithoutVideoNestedInput
    genres?: VideoGenreUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type SeasonCreateWithoutEpisodesInput = {
    id?: string
    seasonNumber: number
    title?: string | null
    description?: string | null
    releaseDate?: Date | string | null
    video: VideoCreateNestedOneWithoutSeasonsInput
  }

  export type SeasonUncheckedCreateWithoutEpisodesInput = {
    id?: string
    videoId: string
    seasonNumber: number
    title?: string | null
    description?: string | null
    releaseDate?: Date | string | null
  }

  export type SeasonCreateOrConnectWithoutEpisodesInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutEpisodesInput, SeasonUncheckedCreateWithoutEpisodesInput>
  }

  export type SeasonUpsertWithoutEpisodesInput = {
    update: XOR<SeasonUpdateWithoutEpisodesInput, SeasonUncheckedUpdateWithoutEpisodesInput>
    create: XOR<SeasonCreateWithoutEpisodesInput, SeasonUncheckedCreateWithoutEpisodesInput>
    where?: SeasonWhereInput
  }

  export type SeasonUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: SeasonWhereInput
    data: XOR<SeasonUpdateWithoutEpisodesInput, SeasonUncheckedUpdateWithoutEpisodesInput>
  }

  export type SeasonUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    video?: VideoUpdateOneRequiredWithoutSeasonsNestedInput
  }

  export type SeasonUncheckedUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    plan_type?: string
    payment?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    profiles?: ProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    plan_type?: string
    payment?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    profiles?: ProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type VideoCreateWithoutReviewsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    seasons?: SeasonCreateNestedManyWithoutVideoInput
    watchHistory?: UserWatchHistoryCreateNestedManyWithoutVideoInput
    watchlist?: UserWatchlistCreateNestedManyWithoutVideoInput
    cast?: VideoCastCreateNestedManyWithoutVideoInput
    genres?: VideoGenreCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    seasons?: SeasonUncheckedCreateNestedManyWithoutVideoInput
    watchHistory?: UserWatchHistoryUncheckedCreateNestedManyWithoutVideoInput
    watchlist?: UserWatchlistUncheckedCreateNestedManyWithoutVideoInput
    cast?: VideoCastUncheckedCreateNestedManyWithoutVideoInput
    genres?: VideoGenreUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutReviewsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutReviewsInput, VideoUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    plan_type?: StringFieldUpdateOperationsInput | string
    payment?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    plan_type?: StringFieldUpdateOperationsInput | string
    payment?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoUpsertWithoutReviewsInput = {
    update: XOR<VideoUpdateWithoutReviewsInput, VideoUncheckedUpdateWithoutReviewsInput>
    create: XOR<VideoCreateWithoutReviewsInput, VideoUncheckedCreateWithoutReviewsInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutReviewsInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutReviewsInput, VideoUncheckedUpdateWithoutReviewsInput>
  }

  export type VideoUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    seasons?: SeasonUpdateManyWithoutVideoNestedInput
    watchHistory?: UserWatchHistoryUpdateManyWithoutVideoNestedInput
    watchlist?: UserWatchlistUpdateManyWithoutVideoNestedInput
    cast?: VideoCastUpdateManyWithoutVideoNestedInput
    genres?: VideoGenreUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    seasons?: SeasonUncheckedUpdateManyWithoutVideoNestedInput
    watchHistory?: UserWatchHistoryUncheckedUpdateManyWithoutVideoNestedInput
    watchlist?: UserWatchlistUncheckedUpdateManyWithoutVideoNestedInput
    cast?: VideoCastUncheckedUpdateManyWithoutVideoNestedInput
    genres?: VideoGenreUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateWithoutWatchlistInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    reviews?: ReviewCreateNestedManyWithoutVideoInput
    seasons?: SeasonCreateNestedManyWithoutVideoInput
    watchHistory?: UserWatchHistoryCreateNestedManyWithoutVideoInput
    cast?: VideoCastCreateNestedManyWithoutVideoInput
    genres?: VideoGenreCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutWatchlistInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutVideoInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutVideoInput
    watchHistory?: UserWatchHistoryUncheckedCreateNestedManyWithoutVideoInput
    cast?: VideoCastUncheckedCreateNestedManyWithoutVideoInput
    genres?: VideoGenreUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutWatchlistInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutWatchlistInput, VideoUncheckedCreateWithoutWatchlistInput>
  }

  export type ProfileCreateWithoutWatchListInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    user: UserCreateNestedOneWithoutProfilesInput
    watchHistory?: UserWatchHistoryCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutWatchListInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    userId: string
    watchHistory?: UserWatchHistoryUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutWatchListInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutWatchListInput, ProfileUncheckedCreateWithoutWatchListInput>
  }

  export type VideoUpsertWithoutWatchlistInput = {
    update: XOR<VideoUpdateWithoutWatchlistInput, VideoUncheckedUpdateWithoutWatchlistInput>
    create: XOR<VideoCreateWithoutWatchlistInput, VideoUncheckedCreateWithoutWatchlistInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutWatchlistInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutWatchlistInput, VideoUncheckedUpdateWithoutWatchlistInput>
  }

  export type VideoUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUpdateManyWithoutVideoNestedInput
    seasons?: SeasonUpdateManyWithoutVideoNestedInput
    watchHistory?: UserWatchHistoryUpdateManyWithoutVideoNestedInput
    cast?: VideoCastUpdateManyWithoutVideoNestedInput
    genres?: VideoGenreUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutVideoNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutVideoNestedInput
    watchHistory?: UserWatchHistoryUncheckedUpdateManyWithoutVideoNestedInput
    cast?: VideoCastUncheckedUpdateManyWithoutVideoNestedInput
    genres?: VideoGenreUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type ProfileUpsertWithoutWatchListInput = {
    update: XOR<ProfileUpdateWithoutWatchListInput, ProfileUncheckedUpdateWithoutWatchListInput>
    create: XOR<ProfileCreateWithoutWatchListInput, ProfileUncheckedCreateWithoutWatchListInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutWatchListInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutWatchListInput, ProfileUncheckedUpdateWithoutWatchListInput>
  }

  export type ProfileUpdateWithoutWatchListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfilesNestedInput
    watchHistory?: UserWatchHistoryUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutWatchListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    watchHistory?: UserWatchHistoryUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutWatchHistoryInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    user: UserCreateNestedOneWithoutProfilesInput
    watchList?: UserWatchlistCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutWatchHistoryInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    userId: string
    watchList?: UserWatchlistUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutWatchHistoryInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutWatchHistoryInput, ProfileUncheckedCreateWithoutWatchHistoryInput>
  }

  export type VideoCreateWithoutWatchHistoryInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    reviews?: ReviewCreateNestedManyWithoutVideoInput
    seasons?: SeasonCreateNestedManyWithoutVideoInput
    watchlist?: UserWatchlistCreateNestedManyWithoutVideoInput
    cast?: VideoCastCreateNestedManyWithoutVideoInput
    genres?: VideoGenreCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutWatchHistoryInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl: string
    thumbnailUrl: string
    introStartTime?: number | null
    introEndTime?: number | null
    trailerUrl?: string | null
    ageRating: $Enums.AgeRating
    type: $Enums.VideoType
    status?: $Enums.VideoStatus
    isOriginal?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutVideoInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutVideoInput
    watchlist?: UserWatchlistUncheckedCreateNestedManyWithoutVideoInput
    cast?: VideoCastUncheckedCreateNestedManyWithoutVideoInput
    genres?: VideoGenreUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutWatchHistoryInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutWatchHistoryInput, VideoUncheckedCreateWithoutWatchHistoryInput>
  }

  export type ProfileUpsertWithoutWatchHistoryInput = {
    update: XOR<ProfileUpdateWithoutWatchHistoryInput, ProfileUncheckedUpdateWithoutWatchHistoryInput>
    create: XOR<ProfileCreateWithoutWatchHistoryInput, ProfileUncheckedCreateWithoutWatchHistoryInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutWatchHistoryInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutWatchHistoryInput, ProfileUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type ProfileUpdateWithoutWatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfilesNestedInput
    watchList?: UserWatchlistUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutWatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    watchList?: UserWatchlistUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type VideoUpsertWithoutWatchHistoryInput = {
    update: XOR<VideoUpdateWithoutWatchHistoryInput, VideoUncheckedUpdateWithoutWatchHistoryInput>
    create: XOR<VideoCreateWithoutWatchHistoryInput, VideoUncheckedCreateWithoutWatchHistoryInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutWatchHistoryInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutWatchHistoryInput, VideoUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type VideoUpdateWithoutWatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUpdateManyWithoutVideoNestedInput
    seasons?: SeasonUpdateManyWithoutVideoNestedInput
    watchlist?: UserWatchlistUpdateManyWithoutVideoNestedInput
    cast?: VideoCastUpdateManyWithoutVideoNestedInput
    genres?: VideoGenreUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutWatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput | $Enums.AgeRating
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    isOriginal?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutVideoNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutVideoNestedInput
    watchlist?: UserWatchlistUncheckedUpdateManyWithoutVideoNestedInput
    cast?: VideoCastUncheckedUpdateManyWithoutVideoNestedInput
    genres?: VideoGenreUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    videoId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateManyUserInput = {
    id?: string
    name: string
    avatarUrl?: string | null
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    watchHistory?: UserWatchHistoryUpdateManyWithoutProfileNestedInput
    watchList?: UserWatchlistUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    watchHistory?: UserWatchHistoryUncheckedUpdateManyWithoutProfileNestedInput
    watchList?: UserWatchlistUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserWatchHistoryCreateManyProfileInput = {
    id?: string
    videoId: string
    watchedAt?: Date | string
    episodeId?: string | null
    progress?: number
    completed?: boolean
  }

  export type UserWatchlistCreateManyProfileInput = {
    id?: string
    videoId: string
    addedAt?: Date | string
  }

  export type UserWatchHistoryUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    video?: VideoUpdateOneRequiredWithoutWatchHistoryNestedInput
  }

  export type UserWatchHistoryUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserWatchHistoryUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserWatchlistUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutWatchlistNestedInput
  }

  export type UserWatchlistUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchlistUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyVideoInput = {
    id?: string
    userId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeasonCreateManyVideoInput = {
    id?: string
    seasonNumber: number
    title?: string | null
    description?: string | null
    releaseDate?: Date | string | null
  }

  export type UserWatchHistoryCreateManyVideoInput = {
    id?: string
    profileId: string
    watchedAt?: Date | string
    episodeId?: string | null
    progress?: number
    completed?: boolean
  }

  export type UserWatchlistCreateManyVideoInput = {
    id?: string
    addedAt?: Date | string
    profileId: string
  }

  export type VideoCastCreateManyVideoInput = {
    id?: string
    personId: string
    role: $Enums.CastRole
    character?: string | null
  }

  export type VideoGenreCreateManyVideoInput = {
    id?: string
    genreId: string
  }

  export type ReviewUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: EpisodeUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: EpisodeUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWatchHistoryUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    profile?: ProfileUpdateOneRequiredWithoutWatchHistoryNestedInput
  }

  export type UserWatchHistoryUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserWatchHistoryUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserWatchlistUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutWatchListNestedInput
  }

  export type UserWatchlistUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type UserWatchlistUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCastUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumCastRoleFieldUpdateOperationsInput | $Enums.CastRole
    character?: NullableStringFieldUpdateOperationsInput | string | null
    person?: PersonUpdateOneRequiredWithoutVideoCastNestedInput
  }

  export type VideoCastUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    role?: EnumCastRoleFieldUpdateOperationsInput | $Enums.CastRole
    character?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoCastUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    role?: EnumCastRoleFieldUpdateOperationsInput | $Enums.CastRole
    character?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoGenreUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    genre?: GenreUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoGenreUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoGenreUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoGenreCreateManyGenreInput = {
    id?: string
    videoId: string
  }

  export type VideoGenreUpdateWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    video?: VideoUpdateOneRequiredWithoutGenresNestedInput
  }

  export type VideoGenreUncheckedUpdateWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoGenreUncheckedUpdateManyWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCastCreateManyPersonInput = {
    id?: string
    videoId: string
    role: $Enums.CastRole
    character?: string | null
  }

  export type VideoCastUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumCastRoleFieldUpdateOperationsInput | $Enums.CastRole
    character?: NullableStringFieldUpdateOperationsInput | string | null
    video?: VideoUpdateOneRequiredWithoutCastNestedInput
  }

  export type VideoCastUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    role?: EnumCastRoleFieldUpdateOperationsInput | $Enums.CastRole
    character?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoCastUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    role?: EnumCastRoleFieldUpdateOperationsInput | $Enums.CastRole
    character?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpisodeCreateManySeasonInput = {
    id?: string
    episodeNumber: number
    title: string
    description?: string | null
    duration: number
    videoUrl: string
    thumbnailUrl: string
    releaseDate: Date | string
    introStartTime?: number | null
    introEndTime?: number | null
  }

  export type EpisodeUpdateWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EpisodeUncheckedUpdateWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EpisodeUncheckedUpdateManyWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    introStartTime?: NullableIntFieldUpdateOperationsInput | number | null
    introEndTime?: NullableIntFieldUpdateOperationsInput | number | null
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