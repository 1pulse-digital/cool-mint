// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: masterClass/session.manager.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";
import * as masterClassSession from "./session.pb";
import * as masterClassMasterClass from "./masterClass.pb";
import * as commerceProduct from "../commerce/product.pb";

//========================================//
//                 Types                  //
//========================================//

export interface UpcomingSessionsRequest {}

export interface UpcomingSessionResponse {
  sessions: masterClassSession.Session[];
  masterClasses: masterClassMasterClass.MasterClass[];
}

export interface GetProductRequest {
  name: string;
}

//========================================//
//     SessionManager Protobuf Client     //
//========================================//

/**
 * UpcomingSessions returns all the upcoming sessions and master classes
 */
export async function UpcomingSessions(
  upcomingSessionsRequest: UpcomingSessionsRequest,
  config?: ClientConfiguration,
): Promise<UpcomingSessionResponse> {
  const response = await PBrequest(
    "/masterClass.SessionManager/UpcomingSessions",
    UpcomingSessionsRequest.encode(upcomingSessionsRequest),
    config,
  );
  return UpcomingSessionResponse.decode(response);
}

/**
 * (WIP) GetProduct returns the product linked to the session
 * Use with caution, this is a WIP and might be removed.
 */
export async function GetProduct(
  getProductRequest: GetProductRequest,
  config?: ClientConfiguration,
): Promise<commerceProduct.Product> {
  const response = await PBrequest(
    "/masterClass.SessionManager/GetProduct",
    GetProductRequest.encode(getProductRequest),
    config,
  );
  return commerceProduct.Product.decode(response);
}

//========================================//
//       SessionManager JSON Client       //
//========================================//

/**
 * UpcomingSessions returns all the upcoming sessions and master classes
 */
export async function UpcomingSessionsJSON(
  upcomingSessionsRequest: UpcomingSessionsRequest,
  config?: ClientConfiguration,
): Promise<UpcomingSessionResponse> {
  const response = await JSONrequest(
    "/masterClass.SessionManager/UpcomingSessions",
    UpcomingSessionsRequestJSON.encode(upcomingSessionsRequest),
    config,
  );
  return UpcomingSessionResponseJSON.decode(response);
}

/**
 * (WIP) GetProduct returns the product linked to the session
 * Use with caution, this is a WIP and might be removed.
 */
export async function GetProductJSON(
  getProductRequest: GetProductRequest,
  config?: ClientConfiguration,
): Promise<commerceProduct.Product> {
  const response = await JSONrequest(
    "/masterClass.SessionManager/GetProduct",
    GetProductRequestJSON.encode(getProductRequest),
    config,
  );
  return commerceProduct.ProductJSON.decode(response);
}

//========================================//
//             SessionManager             //
//========================================//

export interface SessionManager<Context = unknown> {
  /**
   * UpcomingSessions returns all the upcoming sessions and master classes
   */
  UpcomingSessions: (
    upcomingSessionsRequest: UpcomingSessionsRequest,
    context: Context,
  ) => Promise<UpcomingSessionResponse> | UpcomingSessionResponse;
  /**
   * (WIP) GetProduct returns the product linked to the session
   * Use with caution, this is a WIP and might be removed.
   */
  GetProduct: (
    getProductRequest: GetProductRequest,
    context: Context,
  ) => Promise<commerceProduct.Product> | commerceProduct.Product;
}

export function createSessionManager<Context>(
  service: SessionManager<Context>,
) {
  return {
    name: "masterClass.SessionManager",
    methods: {
      UpcomingSessions: {
        name: "UpcomingSessions",
        handler: service.UpcomingSessions,
        input: {
          protobuf: UpcomingSessionsRequest,
          json: UpcomingSessionsRequestJSON,
        },
        output: {
          protobuf: UpcomingSessionResponse,
          json: UpcomingSessionResponseJSON,
        },
      },
      GetProduct: {
        name: "GetProduct",
        handler: service.GetProduct,
        input: { protobuf: GetProductRequest, json: GetProductRequestJSON },
        output: {
          protobuf: commerceProduct.Product,
          json: commerceProduct.ProductJSON,
        },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const UpcomingSessionsRequest = {
  /**
   * Serializes UpcomingSessionsRequest to protobuf.
   */
  encode: function (_msg?: PartialDeep<UpcomingSessionsRequest>): Uint8Array {
    return new Uint8Array();
  },

  /**
   * Deserializes UpcomingSessionsRequest from protobuf.
   */
  decode: function (_bytes?: ByteSource): UpcomingSessionsRequest {
    return {};
  },

  /**
   * Initializes UpcomingSessionsRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpcomingSessionsRequest>,
  ): UpcomingSessionsRequest {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<UpcomingSessionsRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    _msg: UpcomingSessionsRequest,
    _reader: protoscript.BinaryReader,
  ): UpcomingSessionsRequest {
    return _msg;
  },
};

export const UpcomingSessionResponse = {
  /**
   * Serializes UpcomingSessionResponse to protobuf.
   */
  encode: function (msg: PartialDeep<UpcomingSessionResponse>): Uint8Array {
    return UpcomingSessionResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes UpcomingSessionResponse from protobuf.
   */
  decode: function (bytes: ByteSource): UpcomingSessionResponse {
    return UpcomingSessionResponse._readMessage(
      UpcomingSessionResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes UpcomingSessionResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpcomingSessionResponse>,
  ): UpcomingSessionResponse {
    return {
      sessions: [],
      masterClasses: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpcomingSessionResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.sessions?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.sessions as any,
        masterClassSession.Session._writeMessage,
      );
    }
    if (msg.masterClasses?.length) {
      writer.writeRepeatedMessage(
        2,
        msg.masterClasses as any,
        masterClassMasterClass.MasterClass._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UpcomingSessionResponse,
    reader: protoscript.BinaryReader,
  ): UpcomingSessionResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = masterClassSession.Session.initialize();
          reader.readMessage(m, masterClassSession.Session._readMessage);
          msg.sessions.push(m);
          break;
        }
        case 2: {
          const m = masterClassMasterClass.MasterClass.initialize();
          reader.readMessage(
            m,
            masterClassMasterClass.MasterClass._readMessage,
          );
          msg.masterClasses.push(m);
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const GetProductRequest = {
  /**
   * Serializes GetProductRequest to protobuf.
   */
  encode: function (msg: PartialDeep<GetProductRequest>): Uint8Array {
    return GetProductRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetProductRequest from protobuf.
   */
  decode: function (bytes: ByteSource): GetProductRequest {
    return GetProductRequest._readMessage(
      GetProductRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetProductRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<GetProductRequest>): GetProductRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetProductRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetProductRequest,
    reader: protoscript.BinaryReader,
  ): GetProductRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.name = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const UpcomingSessionsRequestJSON = {
  /**
   * Serializes UpcomingSessionsRequest to JSON.
   */
  encode: function (_msg?: PartialDeep<UpcomingSessionsRequest>): string {
    return "{}";
  },

  /**
   * Deserializes UpcomingSessionsRequest from JSON.
   */
  decode: function (_json?: string): UpcomingSessionsRequest {
    return {};
  },

  /**
   * Initializes UpcomingSessionsRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpcomingSessionsRequest>,
  ): UpcomingSessionsRequest {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<UpcomingSessionsRequest>,
  ): Record<string, unknown> {
    return {};
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UpcomingSessionsRequest,
    _json: any,
  ): UpcomingSessionsRequest {
    return msg;
  },
};

export const UpcomingSessionResponseJSON = {
  /**
   * Serializes UpcomingSessionResponse to JSON.
   */
  encode: function (msg: PartialDeep<UpcomingSessionResponse>): string {
    return JSON.stringify(UpcomingSessionResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes UpcomingSessionResponse from JSON.
   */
  decode: function (json: string): UpcomingSessionResponse {
    return UpcomingSessionResponseJSON._readMessage(
      UpcomingSessionResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes UpcomingSessionResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpcomingSessionResponse>,
  ): UpcomingSessionResponse {
    return {
      sessions: [],
      masterClasses: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpcomingSessionResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.sessions?.length) {
      json["sessions"] = msg.sessions.map(
        masterClassSession.SessionJSON._writeMessage,
      );
    }
    if (msg.masterClasses?.length) {
      json["masterClasses"] = msg.masterClasses.map(
        masterClassMasterClass.MasterClassJSON._writeMessage,
      );
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UpcomingSessionResponse,
    json: any,
  ): UpcomingSessionResponse {
    const _sessions_ = json["sessions"];
    if (_sessions_) {
      for (const item of _sessions_) {
        const m = masterClassSession.SessionJSON.initialize();
        masterClassSession.SessionJSON._readMessage(m, item);
        msg.sessions.push(m);
      }
    }
    const _masterClasses_ = json["masterClasses"];
    if (_masterClasses_) {
      for (const item of _masterClasses_) {
        const m = masterClassMasterClass.MasterClassJSON.initialize();
        masterClassMasterClass.MasterClassJSON._readMessage(m, item);
        msg.masterClasses.push(m);
      }
    }
    return msg;
  },
};

export const GetProductRequestJSON = {
  /**
   * Serializes GetProductRequest to JSON.
   */
  encode: function (msg: PartialDeep<GetProductRequest>): string {
    return JSON.stringify(GetProductRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetProductRequest from JSON.
   */
  decode: function (json: string): GetProductRequest {
    return GetProductRequestJSON._readMessage(
      GetProductRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetProductRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<GetProductRequest>): GetProductRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetProductRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetProductRequest,
    json: any,
  ): GetProductRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};
