// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.2.2 with parameter "import_extension=js"
// @generated from file google/rpc/code.proto (package google.rpc, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file google/rpc/code.proto.
 */
export const file_google_rpc_code = /*@__PURE__*/
  fileDesc("ChVnb29nbGUvcnBjL2NvZGUucHJvdG8SCmdvb2dsZS5ycGMqtwIKBENvZGUSBgoCT0sQABINCglDQU5DRUxMRUQQARILCgdVTktOT1dOEAISFAoQSU5WQUxJRF9BUkdVTUVOVBADEhUKEURFQURMSU5FX0VYQ0VFREVEEAQSDQoJTk9UX0ZPVU5EEAUSEgoOQUxSRUFEWV9FWElTVFMQBhIVChFQRVJNSVNTSU9OX0RFTklFRBAHEhMKD1VOQVVUSEVOVElDQVRFRBAQEhYKElJFU09VUkNFX0VYSEFVU1RFRBAIEhcKE0ZBSUxFRF9QUkVDT05ESVRJT04QCRILCgdBQk9SVEVEEAoSEAoMT1VUX09GX1JBTkdFEAsSEQoNVU5JTVBMRU1FTlRFRBAMEgwKCElOVEVSTkFMEA0SDwoLVU5BVkFJTEFCTEUQDhINCglEQVRBX0xPU1MQD0JYCg5jb20uZ29vZ2xlLnJwY0IJQ29kZVByb3RvUAFaM2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvcnBjL2NvZGU7Y29kZaICA1JQQ2IGcHJvdG8z");

/**
 * Describes the enum google.rpc.Code.
 */
export const CodeSchema = /*@__PURE__*/
  enumDesc(file_google_rpc_code, 0);

/**
 * The canonical error codes for gRPC APIs.
 *
 *
 * Sometimes multiple error codes may apply.  Services should return
 * the most specific error code that applies.  For example, prefer
 * `OUT_OF_RANGE` over `FAILED_PRECONDITION` if both codes apply.
 * Similarly prefer `NOT_FOUND` or `ALREADY_EXISTS` over `FAILED_PRECONDITION`.
 *
 * @generated from enum google.rpc.Code
 */
export const Code = /*@__PURE__*/
  tsEnum(CodeSchema);
