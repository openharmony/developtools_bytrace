#include <cstring>
#include <unistd.h>
#include <iostream>
#include <thread>
#include "bytrace.h"

using namespace std;
constexpr uint64_t label = BYTRACE_TAG_OHOS;

void func1()
{
    cout << "func 1" << endl;
    sleep(1);
}

void func2()
{
    cout << "func 2" << endl;
    sleep(2);
}

void func3()
{
    cout << "func 3" << endl;
    int num = 0;
    for(int i=0; i < 5; i++) {
        CountTrace(BYTRACE_TAG_OHOS, "count number", ++num);
        sleep(1);
    }
}

void threadFunc1()
{
    StartAsyncTrace(label, "testAsync", 1111);
    for (int i = 0; i < 5; ++i) {
        cout << "t1" << endl;
        sleep(1);
    }
}

void threadFunc2()
{
    for (int i = 0; i < 5; ++i) {
        cout << "t2" << endl;
        sleep(1);
    }
    FinishAsyncTrace(label, "testAsync", 1111);
}

int main()
{
    thread t1(threadFunc1);
    t1.join();

    StartTrace(label, "testStart");
    sleep(1);

    StartTrace(label, "func1Start", 1); // 打印起始点
    func1();
    FinishTrace(label);
    sleep(2);

    thread t2(threadFunc2);
    t2.join();

    StartTrace(label, "func2Start", 2);
    func2();
    FinishTrace(label);
    sleep(2);

    sleep(1);
    FinishTrace(label);
    func3();

    return 0;
}
