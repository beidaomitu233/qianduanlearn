#include <stdio.h>

void main()

{

    int i = 50, sum = 0; //初始化循环控制变量i和累加和sum

    for (i = 50; i <= 200; i = i + 1) //循环继续条件

    {

        sum = sum + i; //实现累加
    }

    printf("sum=%d\n", sum);
}