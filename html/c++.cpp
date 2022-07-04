#include <iostream>
#include<conio.h>
using namespace std;
int main()
{
    int a[]={1,2,3,4,5};
    int n=0,*p=a;
    while(n<(sizeof(a)/sizeof(int))){
        cout<<*p;
        n++;
    }
}