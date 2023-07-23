
#include <stdio.h>

main()

{

    int x, bb, b0, b1, b2, sum;

    printf("请输入一个三位整数：");

    scanf("%d", &x);

    bb = x / 1000;

    b0 = x % 10; /*计算个位数字*/

    sum = bb + b0;

    printf("bb=%d , b0=%d, sum=%d\n", bb, b0, sum);
}
