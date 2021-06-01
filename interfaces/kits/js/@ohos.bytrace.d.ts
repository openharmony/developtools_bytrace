/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provides interfaces to generate {@code ByTrace} logs.
 *
 * <p>This class traces the start, end, and value changes of key processes that last for at least 3 ms.
 *
 * <p>Example:
 * To trace a name verification that is expected to complete within 5 ms:
 * <pre>{@code
 * Bytrace.startTrace("checkName", "5");
 * Bytrace.finishTrace("checkName");
 * }</pre>
 * To trace the number of layers, which is 3:
 * <pre>{@code
 * Bytrace.count("curLayer", 3);
 * }</pre>
 *
 * <p>Each {@code startTrace} matches one {@code finishTrace}, and they must have the same value.
 *
 * @since 1
 */
declare namespace bytrace {
  /**
   * Updates the trace label when your process has started.
   */
  function updateTraceLabel(): void;

  /**
   * Records a trace with the expected completion time and marks it as the start of a task.
   *
   * This method is invoked at the start of a transaction to indicate that a task whose name is specified by
   * {@code value} has started. The {@link #finishTrace(String)} method using the same {@code value} must be
   * invoked at the end of the transaction.
   *
   * @param value Indicates the operation name.
   * @param limit Indicates the expected time required for completing the operation, in milliseconds.
   */
  function startTrace(value: string, limit: number): void;

  /**
   * Track the middle of a context. Match the previous function of StartTrace before it.
   *
   * @param beforeValue Indicates the matched startTrace vlaue.
   * @param afterValue  Indicates the matched finishTrace value.
   */
  function middleTrace(beforeValue: string, afterValue: string): void;

  /**
   * Records a trace and marks it as the end of a task.
   *
   * This method is invoked at the end of a transaction to indicate that a task whose name is specified by
   * {@code value} has ended. This method must be invoked after the {@link #startTrace(String, float)} or
   * {@link #startTrace(String)} method is invoked.
   *
   * @param value Indicates the operation name. It must be the same as the {@code value} of
   * {@link #startTrace(String, float)} or {@link #startTrace(String)}.
   *
   */
  function finishTrace(value: string): void;

  /**
   * Writes a async trace message and mark as start spot. The name and cookie
   * used to begin an event must be used to end it.
   *
   * @param value Message content.
   * @param taskId Unique identifier for distinguishing simultaneous events.
   * @param limit It is expected that the operation will be completed within the specified time period.
   */
  function startAsyncTrace(value: string, taskId: number, limit: number): void;

  /**
   * Writes a async trace message and mark as start spot. The name and cookie
   * used to begin an event must be used to end it.
   *
   * @param value Message content.
   * @param taskId Unique identifier for distinguishing simultaneous events.
   */
  function finishAsyncTrace(value: string, taskId: number): void;

  /**
   * Records a trace for generating a count, such as clock pulse and the number of layers.
   *
   * @param name Indicates the operation name.
   * @param count Indicates the count of the operation.
   */
  function countTrace(name: string, count: number): void;
}
export default bytrace;
