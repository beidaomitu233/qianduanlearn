
#include <stdio.h>

void main()
{
    int n[4] = {5, 7, 10, 8};
    int max = 0;
    int nlenth = sizeof(n);
    for (int i = 0; i < nlenth; i++)
    {
        if (n[i] > n[i + 1])
        {
            max = n[i];
        }
        else
        {
            max = n[i + 1];
        };
    };
    printf("%d", max);
}