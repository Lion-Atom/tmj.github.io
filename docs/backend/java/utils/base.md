'## BooleanUtil
 
 > 布尔工具类（BooleanUtil）
 
 ### 主要功能：
 - 从String(true/false, yes/no)，转换为Boolean或boolean
 - 逻辑运算：取反，多个boolean的and,or计算
 
 ### API介绍：
 
 *使用标准JDK，只分析是否忽略大小写的"true", str为空时返回false*
 - boolean toBoolean(String str)
 
 ***例子：***
 ```java
 BooleanUtil.toBoolean("True"); //true
 BooleanUtil.toBoolean("trUe"); //true
 BooleanUtil.toBoolean("yes");  //false
 ```
 
 -------------
 *使用标准JDK，只分析是否忽略大小写的"true", str为空时返回null*
 - Boolean toBooleanObject(String str)
 
 ***例子：***
 ```java
 BooleanUtil.toBooleanObject("True"); //Boolean.TRUE
 BooleanUtil.toBooleanObject("trUe"); //Boolean.TRUE
 BooleanUtil.toBooleanObject("yes");  //Boolean.FALSE
 ```
 
 -------------
 *使用标准JDK，只分析是否忽略大小写的"true", str为空时返回defaultValue*
 - Boolean toBooleanObject(String str, Boolean defaultValue)
 
 ***例子：***
 ```java
 BooleanUtil.toBooleanObject("True", Boolean.FALSE); //Boolean.TRUE
 BooleanUtil.toBooleanObject("trUe", Boolean.FALSE); //Boolean.TRUE
 BooleanUtil.toBooleanObject(null, Boolean.TRUE);  //Boolean.TRUE
 BooleanUtil.toBooleanObject(null, Boolean.FALSE);  //Boolean.FALSE
 ```
 
 -------------
 *支持true/false, on/off, y/n, yes/no的转换, str为空或无法分析时返回null*
 - Boolean parseGeneralString(String str)
 
 ***例子：***
 ```java
 BooleanUtil.parseGeneralString(null);   //null
 BooleanUtil.parseGeneralString("true"); //Boolean.TRUE
 BooleanUtil.parseGeneralString("T");    //Boolean.TRUE
 BooleanUtil.parseGeneralString("false");//Boolean.FALSE
 BooleanUtil.parseGeneralString("f");    //Boolean.FALSE 
 BooleanUtil.parseGeneralString("No");   //Boolean.FALSE
 BooleanUtil.parseGeneralString("n");    //Boolean.FALSE 
 BooleanUtil.parseGeneralString("on");   //Boolean.TRUE
 BooleanUtil.parseGeneralString("ON");   //Boolean.TRUE
 BooleanUtil.parseGeneralString("off");  //Boolean.FALSE
 BooleanUtil.parseGeneralString("oFf");  //Boolean.FALSE
 BooleanUtil.parseGeneralString("yes");  //Boolean.TRUE
 BooleanUtil.parseGeneralString("Y");    //Boolean.TRUE 
 BooleanUtil.parseGeneralString("blue"); //null
 BooleanUtil.parseGeneralString("true ");//null // trailing space (too long)
 BooleanUtil.parseGeneralString("ono");  //null // does not match on or no
 ```
 
 -------------
 *支持true/false,on/off, y/n, yes/no的转换, str为空或无法分析时返回defaultValue*
 - Boolean parseGeneralString(String str, Boolean defaultValue)
 
 ***例子：***
 ```java
 BooleanUtil.parseGeneralString(Boolean.TRUE, Boolean.FALSE); //true
 BooleanUtil.parseGeneralString(Boolean.FALSE, Boolean.TRUE); //false
 BooleanUtil.parseGeneralString(null, Boolean.TRUE);          //true
 ```
 
 -------------
 *取反*
 - boolean negate(final boolean bool)
 
 ***例子：***
 ```java
 BooleanUtil.negate(true);  //false;
 BooleanUtil.negate(false); //true;
 ```
 
 -------------
 *取反*
 - Boolean negate(final Boolean bool)
 
 ***例子：***
 ```java
 BooleanUtil.negate(Boolean.TRUE);  //Boolean.FALSE;
 BooleanUtil.negate(Boolean.FALSE); //Boolean.TRUE;
 BooleanUtil.negate(null);          //null;
 ```
 
 -------------
 *多个值的and*
 - boolean and(final boolean... array)
 
 ***例子：***
 ```java
 BooleanUtil.and(true, true);         //true
 BooleanUtil.and(false, false);       //false
 BooleanUtil.and(true, false);        //false
 BooleanUtil.and(true, true, false);  //false
 BooleanUtil.and(true, true, true);   //true
 ```
 
 -------------
 *多个值的or*
 - boolean or(final boolean... array)
 
 ***例子：***
 ```java
 BooleanUtil.or(true, true);          //true
 BooleanUtil.or(false, false);        //false
 BooleanUtil.or(true, false);         //true
 BooleanUtil.or(true, true, false);   //true
 BooleanUtil.or(true, true, true);    //true
 BooleanUtil.or(false, false, false); //false
 ```
 
 -------------
 
 
 ## EnumUtil
 
 > 枚举工具类（EnumUtil）
 
 ### 主要功能：
 - 将多个枚举值按bit保存到long中
 
 ### API介绍：
 
 *将若干个枚举值转换为long(按bits 1,2,4,8...的方式叠加)，用于使用long保存多个选项的情况.*
 - \<E extends Enum\<E\>\> long generateBits(final Class\<E\> enumClass, final Iterable\<? extends E\> values)
 
 ***例子：***
 ```java
 public enum Options {
 		A, B, C, D
 	}
 
 EnumUtil.generateBits(Options.class, Options.A); //1l
 EnumUtil.generateBits(Options.class, Options.A, Options.B); //3l
 ```
 
 -------------
 
 *将若干个枚举值转换为long(按bits 1,2,4,8...的方式叠加)，用于使用long保存多个选项的情况.*
 - \<E extends Enum\<E\>\> long generateBits(final Class\<E\> enumClass, final E... values)
 
 ***例子：***
 ```java
 EnumUtil.generateBits(Options.class, ListUtil.newArrayList(Options.A))); //1l
 EnumUtil.generateBits(Options.class, ListUtil.newArrayList(Options.A, Options.B))); //3l
 ```
 
 -------------
 
 *long重新解析为若干个枚举值，用于使用long保存多个选项的情况.*
 - \<E extends Enum\<E\>\> EnumSet\<E\> processBits(final Class\<E\> enumClass, final long value)
 
 ***例子：***
 ```java
 EnumUtil.processBits(Options.class, 3); //Options.A, Options.B
 ```
 
 -------------
 
 ## ObjectUtil
 
 ## Platforms
 
 ## PropertiesUtil
 
 ## RuntimeUtil
 
 ## SystemPropertiesUtil
