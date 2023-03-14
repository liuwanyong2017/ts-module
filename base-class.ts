const str = 'str'
const num = 3
const bool = true
const und = undefined
const nu = null
const obj = {}
const bigInt = 23423423423423n
const bigInt1 = BigInt(2234243112444)
const symbol = Symbol('iid')

// null 是有值为空值，占内存。undefined 是没值没赋值。

// void 是无返回值的函数，无返回值的表达式

const arr: Array<string> = ['s']
const arr1: string[] = ['s']

// 数组的注释类方法

const tuple:[string,number?,boolean?]=['s']

type TupleLength = typeof tuple.length  // 1|2|3

// 元组是可枚举的不同类型的数组单元的时候，用的。


