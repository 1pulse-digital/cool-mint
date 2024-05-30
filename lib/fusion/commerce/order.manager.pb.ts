// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: commerce/order.manager.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";

//========================================//
//                 Types                  //
//========================================//

export interface ConfirmOrderRequest {
  orderId: string;
}

export interface ConfirmOrderResponse {
  orderId: string;
  status: string;
}

//========================================//
//      OrderManager Protobuf Client      //
//========================================//

export async function ConfirmOrder(
  confirmOrderRequest: ConfirmOrderRequest,
  config?: ClientConfiguration,
): Promise<ConfirmOrderResponse> {
  const response = await PBrequest(
    "/commerce.OrderManager/ConfirmOrder",
    ConfirmOrderRequest.encode(confirmOrderRequest),
    config,
  );
  return ConfirmOrderResponse.decode(response);
}

//========================================//
//        OrderManager JSON Client        //
//========================================//

export async function ConfirmOrderJSON(
  confirmOrderRequest: ConfirmOrderRequest,
  config?: ClientConfiguration,
): Promise<ConfirmOrderResponse> {
  const response = await JSONrequest(
    "/commerce.OrderManager/ConfirmOrder",
    ConfirmOrderRequestJSON.encode(confirmOrderRequest),
    config,
  );
  return ConfirmOrderResponseJSON.decode(response);
}

//========================================//
//              OrderManager              //
//========================================//

export interface OrderManager<Context = unknown> {
  ConfirmOrder: (
    confirmOrderRequest: ConfirmOrderRequest,
    context: Context,
  ) => Promise<ConfirmOrderResponse> | ConfirmOrderResponse;
}

export function createOrderManager<Context>(service: OrderManager<Context>) {
  return {
    name: "commerce.OrderManager",
    methods: {
      ConfirmOrder: {
        name: "ConfirmOrder",
        handler: service.ConfirmOrder,
        input: { protobuf: ConfirmOrderRequest, json: ConfirmOrderRequestJSON },
        output: {
          protobuf: ConfirmOrderResponse,
          json: ConfirmOrderResponseJSON,
        },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const ConfirmOrderRequest = {
  /**
   * Serializes ConfirmOrderRequest to protobuf.
   */
  encode: function (msg: PartialDeep<ConfirmOrderRequest>): Uint8Array {
    return ConfirmOrderRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ConfirmOrderRequest from protobuf.
   */
  decode: function (bytes: ByteSource): ConfirmOrderRequest {
    return ConfirmOrderRequest._readMessage(
      ConfirmOrderRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ConfirmOrderRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ConfirmOrderRequest>,
  ): ConfirmOrderRequest {
    return {
      orderId: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ConfirmOrderRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.orderId) {
      writer.writeString(1, msg.orderId);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ConfirmOrderRequest,
    reader: protoscript.BinaryReader,
  ): ConfirmOrderRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.orderId = reader.readString();
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

export const ConfirmOrderResponse = {
  /**
   * Serializes ConfirmOrderResponse to protobuf.
   */
  encode: function (msg: PartialDeep<ConfirmOrderResponse>): Uint8Array {
    return ConfirmOrderResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ConfirmOrderResponse from protobuf.
   */
  decode: function (bytes: ByteSource): ConfirmOrderResponse {
    return ConfirmOrderResponse._readMessage(
      ConfirmOrderResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ConfirmOrderResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ConfirmOrderResponse>,
  ): ConfirmOrderResponse {
    return {
      orderId: "",
      status: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ConfirmOrderResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.orderId) {
      writer.writeString(1, msg.orderId);
    }
    if (msg.status) {
      writer.writeString(2, msg.status);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ConfirmOrderResponse,
    reader: protoscript.BinaryReader,
  ): ConfirmOrderResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.orderId = reader.readString();
          break;
        }
        case 2: {
          msg.status = reader.readString();
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

export const ConfirmOrderRequestJSON = {
  /**
   * Serializes ConfirmOrderRequest to JSON.
   */
  encode: function (msg: PartialDeep<ConfirmOrderRequest>): string {
    return JSON.stringify(ConfirmOrderRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes ConfirmOrderRequest from JSON.
   */
  decode: function (json: string): ConfirmOrderRequest {
    return ConfirmOrderRequestJSON._readMessage(
      ConfirmOrderRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ConfirmOrderRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ConfirmOrderRequest>,
  ): ConfirmOrderRequest {
    return {
      orderId: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ConfirmOrderRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.orderId) {
      json["orderId"] = msg.orderId;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ConfirmOrderRequest,
    json: any,
  ): ConfirmOrderRequest {
    const _orderId_ = json["orderId"] ?? json["order_id"];
    if (_orderId_) {
      msg.orderId = _orderId_;
    }
    return msg;
  },
};

export const ConfirmOrderResponseJSON = {
  /**
   * Serializes ConfirmOrderResponse to JSON.
   */
  encode: function (msg: PartialDeep<ConfirmOrderResponse>): string {
    return JSON.stringify(ConfirmOrderResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes ConfirmOrderResponse from JSON.
   */
  decode: function (json: string): ConfirmOrderResponse {
    return ConfirmOrderResponseJSON._readMessage(
      ConfirmOrderResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ConfirmOrderResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ConfirmOrderResponse>,
  ): ConfirmOrderResponse {
    return {
      orderId: "",
      status: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ConfirmOrderResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.orderId) {
      json["orderId"] = msg.orderId;
    }
    if (msg.status) {
      json["status"] = msg.status;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ConfirmOrderResponse,
    json: any,
  ): ConfirmOrderResponse {
    const _orderId_ = json["orderId"] ?? json["order_id"];
    if (_orderId_) {
      msg.orderId = _orderId_;
    }
    const _status_ = json["status"];
    if (_status_) {
      msg.status = _status_;
    }
    return msg;
  },
};