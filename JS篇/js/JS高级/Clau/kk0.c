#include <stdio.h>
int add(int a, int b) //被调函数
{
    return a * b;
}
int main()
{
    int x, y;

    printf("请输入两个数求积，数字之间用空格隔开，结束输入请按下回车键\n");

    scanf("%d%d", &x, &y);

    printf("%d和%d的积是%d\n", x, y, add(x, y));
    return 0;
}
