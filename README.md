# ByTrace<a name="EN-US_TOPIC_0000001102209942"></a>

-   [Introduction](#section152771918494)
-   [Architecture](#section6808195518497)
-   [Directory Structure](#section1610792125019)
-   [Usage](#section18684185975017)
-   [Repositories Involved](#section1849151125618)

## Introduction<a name="section152771918494"></a>

ByTrace is a tool for you to trace processes and monitor performance. It encapsulates and extends the ftrace in the kernel and supports tracing in the user space. This tool provides APIs and commands:

1.  APIs: When developing an application, you can call ByTrace APIs in the application key code to perform tracing.
2.  Commands: You can enable the desired label to obtain the tracing information. With ByTrace, you can enable a user-space or kernel-space label you want to view (run the **bytrace -l** command to query all the supported labels) and run the corresponding commands to capture traces and dump them to a specified file.

## Architecture<a name="section6808195518497"></a>

![](figures/architecture.png)

## Directory Structure<a name="section1610792125019"></a>

```
/developtools/bytrace
├── bin           # ByTrace code
│   └── include   # Header files
│   └── src       # Source files
│   └── test      # Test cases
├── interfaces    # APIs
│   └── innerkits # Header files of internal subsystems
│   └── kits      # Header files exposed externally
├── script        # Scripts
```

## Usage<a name="section18684185975017"></a>

The following table lists the commands supported by ByTrace.

** Table 1** Commands supported by ByTrace

<a name="table16802195914247"></a>
<table><thead align="left"><tr id="row14804759142412"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p1280465972411"><a name="p1280465972411"></a><a name="p1280465972411"></a>Option</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p380414595249"><a name="p380414595249"></a><a name="p380414595249"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1714512123414"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1915412133419"><a name="p1915412133419"></a><a name="p1915412133419"></a>-h, --help</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p6156126341"><a name="p6156126341"></a><a name="p6156126341"></a>Views the help Information.</p>
</td>
</tr>
<tr id="row13804135982416"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p18051959152410"><a name="p18051959152410"></a><a name="p18051959152410"></a>-b <em id="i35979186184"><a name="i35979186184"></a><a name="i35979186184"></a>n</em>, --buffer_size <em id="i144491624181811"><a name="i144491624181811"></a><a name="i144491624181811"></a>n</em></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p0805165932419"><a name="p0805165932419"></a><a name="p0805165932419"></a>Sets the size of the buffer (KB) for storing and reading traces. The default buffer size is 2048 KB.</p>
</td>
</tr>
<tr id="row580519592245"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p880510591241"><a name="p880510591241"></a><a name="p880510591241"></a>-t <em id="i8668143912203"><a name="i8668143912203"></a><a name="i8668143912203"></a>n</em>, --time <em id="i841433614202"><a name="i841433614202"></a><a name="i841433614202"></a>n</em></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1480517591245"><a name="p1480517591245"></a><a name="p1480517591245"></a>Sets the ByTrace uptime in seconds, which depends on the time required for analysis.</p>
</td>
</tr>
<tr id="row4806175913247"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p980655912242"><a name="p980655912242"></a><a name="p980655912242"></a>--trace_clock <em id="i19464452217"><a name="i19464452217"></a><a name="i19464452217"></a>clock</em></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p11806959142416"><a name="p11806959142416"></a><a name="p11806959142416"></a>Sets the type of the clock for adding a timestamp to a trace, which can be <strong>boot</strong> (default), <strong>global</strong>, <strong>mono</strong>, <strong>uptime</strong>, or <strong>perf</strong>.</p>
</td>
</tr>
<tr id="row1280635917242"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p180715591244"><a name="p180715591244"></a><a name="p180715591244"></a>--trace_begin</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p480795916243"><a name="p480795916243"></a><a name="p480795916243"></a>Starts trace.</p>
</td>
</tr>
<tr id="row1580717599245"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p38073598242"><a name="p38073598242"></a><a name="p38073598242"></a>--trace_dump</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p148077595245"><a name="p148077595245"></a><a name="p148077595245"></a>Dumps traced data to a specified position (the default position is the console).</p>
</td>
</tr>
<tr id="row180811592242"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p11808165922419"><a name="p11808165922419"></a><a name="p11808165922419"></a>--trace_finish</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p18809559182420"><a name="p18809559182420"></a><a name="p18809559182420"></a>Stops capturing traces and dumps traced data to a specified position (the default position is the console).</p>
</td>
</tr>
<tr id="row2809185972420"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p2080925922418"><a name="p2080925922418"></a><a name="p2080925922418"></a>-l, --list_categories</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p38091159142414"><a name="p38091159142414"></a><a name="p38091159142414"></a>Lists the ByTrace categories supported by the device.</p>
</td>
</tr>
<tr id="row1880912598248"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1681014595244"><a name="p1681014595244"></a><a name="p1681014595244"></a>--overwrite</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p12810165914248"><a name="p12810165914248"></a><a name="p12810165914248"></a>Sets the action to take when the buffer is full. If this option is used, the latest traced data is discarded.</p>
</td>
</tr>
<tr id="row1181015992414"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p168101859152415"><a name="p168101859152415"></a><a name="p168101859152415"></a>-o <em id="i1367232742113"><a name="i1367232742113"></a><a name="i1367232742113"></a>filename</em>, --output <em id="i4305133012219"><a name="i4305133012219"></a><a name="i4305133012219"></a>filename</em></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p9810559132410"><a name="p9810559132410"></a><a name="p9810559132410"></a>Outputs traced data to a specified file.</p>
</td>
</tr>
<tr id="row8810155982415"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p381145912410"><a name="p381145912410"></a><a name="p381145912410"></a>-z</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1281117592249"><a name="p1281117592249"></a><a name="p1281117592249"></a>Compresses traced data.</p>
</td>
</tr>
</tbody>
</table>

The following are some example ByTrace commands:

-   Run the following command to query supported labels:

    ```
    bytrace -l
    ```

    or

    ```
    bytrace --list_categories
    ```


-   Run the following command to capture traces whose label is <strong>ability</strong>, with the buffer size set to 4096 KB and ByTrace uptime set to 10s:

    ```
    bytrace -b 4096 -t 10 --overwrite ability > /data/mytrace.ftrace
    ```


-   Run the following command to set the clock type for traces to <strong>mono</strong>:

    ```
    bytrace --trace_clock mono  -b 4096 -t 10 --overwrite ability > /data/mytrace.ftrace
    ```


-   Run the following command to compress the traced data:

    ```
    bytrace -z  -b 4096 -t 10 --overwrite ability > /data/mytrace.ftrace
    ```


## Repositories Involved<a name="section1849151125618"></a>

Development Tools Subsystem

**developtools\_bytrace\_standard**
