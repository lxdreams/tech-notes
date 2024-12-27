# explain优化工具


::: tip Explain
使用explain 可以分析出表的读取顺序，数据读取操作的类型，哪些索引可以使用、和实际被使用，表之间的引用，每张表有多少行被优化器查询
:::

## 字段解释

### id
  id表示查询执行select子句或操作表的顺序， id相同，执行顺序由上至下，不同则id值越大优先级越高，越先被执行

### select type

| 类型            |  描述                                                         |
| :-------------- | :----------------------------------------------------------- |
| SIMPLE          | 简单的select查询，查询中不包含子查询或者UNION                      |
| PRIMARY         | 查询中若包含任何复杂的子部分， 最外层查询则被标记为PRIMARY            |
| SUBQUERY        | 在select或where列表中包含了子查询                                |
| DERIVED         | 在FROM列表中包含的子查询被标记为DERIVED， MYSQL会递归执行这些子查询   |
| UNION           | 若在第二个select出现UNION之后，则被标记为UNION                     |
| UNION RESULT    | 从UNION表获取结果的SELECT                                       |

### table
  从哪一个表查询的

### type
  查询类型， 从最好到最差的顺序依次为: system > const > eq_ref > ref > range > index > all

  | 类型         |  描述                                                                |
| :------------ | :-----------------------------------------------------------         |
| system        | 表只有一行记录，这是const的特例，一般不会出行可以忽略                        |
| const         | 表示通过索引一次就找到了，const用户比较primary key或者unique索引            |
| eq_ref        | 唯一性索引扫描，对于每个索引键，表中只有一条记录与之匹配，常见于主键或唯一索引扫描 |
| ref           | 非唯一性索引扫描， 返回匹配某个单独值的所有行，可能会找到多个符合条件的行，属于查找和扫描的混合体   |
| range         | 只检索给定范围的行，使用一个所有来选择行，key列显示使用了哪个索引，常出现为where后面的between，<、> 、 in等  |
| index         | index 与all区别为index类型只遍历索引树，通常比all快                        |
| all           | 遍历全表                                                               |

### possible_keys 
  显示可能应用在表中的索引，一个或多个，但不一定被查询实际使用

### key 
  实际使用的索引，为null则没有使用索引

### key_len 
  表示索引中使用的字节数，可通过该列计算查询中使用的索引长度，长度越短越好

### ref
  显示索引的哪一列被使用了

### rows
  根据表统计信息，以及索引选用情况，估算所需查询读取的记录数

### Extra
  包含其他重要的额外信息

