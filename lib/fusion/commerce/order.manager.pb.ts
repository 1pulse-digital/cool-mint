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
import * as commerceOrder from "./order.pb";

//========================================//
//                 Types                  //
//========================================//

export interface PlaceOrderRequest {
  /**
   * eTag is the auditEntry.Etag value, used to ensure the cart is not modified, (in another session for example)
   */
  eTag: string;
  billingAddress: commerceOrder.BillingAddress;
  shippingAddress: commerceOrder.Address;
}

export interface PlaceOrderResponse {
  paymentID: string;
  order: commerceOrder.Order;
}

export interface ConfirmOrderRequest {
  /**
   * order is the order.name to confirm
   */
  order: string;
}

export interface CancelOrderRequest {
  /**
   * order is the order.name to cancel
   */
  order: string;
}

export interface RefundOrderRequest {
  /**
   * order is the order.name to refund
   */
  order: string;
}

//========================================//
//      OrderManager Protobuf Client      //
//========================================//

/**
 * PlaceoOrder will create a new order in a pending state
 * The ctx.userid cart will be cleared and the product stock will be reserved
 * A Payfast payment id and the order is returned
 */
export async function PlaceOrder(
  placeOrderRequest: PlaceOrderRequest,
  config?: ClientConfiguration,
): Promise<PlaceOrderResponse> {
  const response = await PBrequest(
    "/commerce.OrderManager/PlaceOrder",
    PlaceOrderRequest.encode(placeOrderRequest),
    config,
  );
  return PlaceOrderResponse.decode(response);
}

/**
 * ConfirmOrder confirms a pending order, and sets the order status to paid
 * The reserved stock will be used to update the product stock (reduce stock)
 */
export async function ConfirmOrder(
  confirmOrderRequest: ConfirmOrderRequest,
  config?: ClientConfiguration,
): Promise<commerceOrder.Order> {
  const response = await PBrequest(
    "/commerce.OrderManager/ConfirmOrder",
    ConfirmOrderRequest.encode(confirmOrderRequest),
    config,
  );
  return commerceOrder.Order.decode(response);
}

/**
 * CancelOrder will cancel a pending order, and set the order status to cancelled
 * The reserved stock will be released and the cart will be restored
 */
export async function CancelOrder(
  cancelOrderRequest: CancelOrderRequest,
  config?: ClientConfiguration,
): Promise<commerceOrder.Order> {
  const response = await PBrequest(
    "/commerce.OrderManager/CancelOrder",
    CancelOrderRequest.encode(cancelOrderRequest),
    config,
  );
  return commerceOrder.Order.decode(response);
}

/**
 * RefundOrder will only mark the order as refunded, the payment will be handled by the payment gateway
 */
export async function RefundOrder(
  refundOrderRequest: RefundOrderRequest,
  config?: ClientConfiguration,
): Promise<commerceOrder.Order> {
  const response = await PBrequest(
    "/commerce.OrderManager/RefundOrder",
    RefundOrderRequest.encode(refundOrderRequest),
    config,
  );
  return commerceOrder.Order.decode(response);
}

//========================================//
//        OrderManager JSON Client        //
//========================================//

/**
 * PlaceoOrder will create a new order in a pending state
 * The ctx.userid cart will be cleared and the product stock will be reserved
 * A Payfast payment id and the order is returned
 */
export async function PlaceOrderJSON(
  placeOrderRequest: PlaceOrderRequest,
  config?: ClientConfiguration,
): Promise<PlaceOrderResponse> {
  const response = await JSONrequest(
    "/commerce.OrderManager/PlaceOrder",
    PlaceOrderRequestJSON.encode(placeOrderRequest),
    config,
  );
  return PlaceOrderResponseJSON.decode(response);
}

/**
 * ConfirmOrder confirms a pending order, and sets the order status to paid
 * The reserved stock will be used to update the product stock (reduce stock)
 */
export async function ConfirmOrderJSON(
  confirmOrderRequest: ConfirmOrderRequest,
  config?: ClientConfiguration,
): Promise<commerceOrder.Order> {
  const response = await JSONrequest(
    "/commerce.OrderManager/ConfirmOrder",
    ConfirmOrderRequestJSON.encode(confirmOrderRequest),
    config,
  );
  return commerceOrder.OrderJSON.decode(response);
}

/**
 * CancelOrder will cancel a pending order, and set the order status to cancelled
 * The reserved stock will be released and the cart will be restored
 */
export async function CancelOrderJSON(
  cancelOrderRequest: CancelOrderRequest,
  config?: ClientConfiguration,
): Promise<commerceOrder.Order> {
  const response = await JSONrequest(
    "/commerce.OrderManager/CancelOrder",
    CancelOrderRequestJSON.encode(cancelOrderRequest),
    config,
  );
  return commerceOrder.OrderJSON.decode(response);
}

/**
 * RefundOrder will only mark the order as refunded, the payment will be handled by the payment gateway
 */
export async function RefundOrderJSON(
  refundOrderRequest: RefundOrderRequest,
  config?: ClientConfiguration,
): Promise<commerceOrder.Order> {
  const response = await JSONrequest(
    "/commerce.OrderManager/RefundOrder",
    RefundOrderRequestJSON.encode(refundOrderRequest),
    config,
  );
  return commerceOrder.OrderJSON.decode(response);
}

//========================================//
//              OrderManager              //
//========================================//

export interface OrderManager<Context = unknown> {
  /**
   * PlaceoOrder will create a new order in a pending state
   * The ctx.userid cart will be cleared and the product stock will be reserved
   * A Payfast payment id and the order is returned
   */
  PlaceOrder: (
    placeOrderRequest: PlaceOrderRequest,
    context: Context,
  ) => Promise<PlaceOrderResponse> | PlaceOrderResponse;
  /**
   * ConfirmOrder confirms a pending order, and sets the order status to paid
   * The reserved stock will be used to update the product stock (reduce stock)
   */
  ConfirmOrder: (
    confirmOrderRequest: ConfirmOrderRequest,
    context: Context,
  ) => Promise<commerceOrder.Order> | commerceOrder.Order;
  /**
   * CancelOrder will cancel a pending order, and set the order status to cancelled
   * The reserved stock will be released and the cart will be restored
   */
  CancelOrder: (
    cancelOrderRequest: CancelOrderRequest,
    context: Context,
  ) => Promise<commerceOrder.Order> | commerceOrder.Order;
  /**
   * RefundOrder will only mark the order as refunded, the payment will be handled by the payment gateway
   */
  RefundOrder: (
    refundOrderRequest: RefundOrderRequest,
    context: Context,
  ) => Promise<commerceOrder.Order> | commerceOrder.Order;
}

export function createOrderManager<Context>(service: OrderManager<Context>) {
  return {
    name: "commerce.OrderManager",
    methods: {
      PlaceOrder: {
        name: "PlaceOrder",
        handler: service.PlaceOrder,
        input: { protobuf: PlaceOrderRequest, json: PlaceOrderRequestJSON },
        output: { protobuf: PlaceOrderResponse, json: PlaceOrderResponseJSON },
      },
      ConfirmOrder: {
        name: "ConfirmOrder",
        handler: service.ConfirmOrder,
        input: { protobuf: ConfirmOrderRequest, json: ConfirmOrderRequestJSON },
        output: {
          protobuf: commerceOrder.Order,
          json: commerceOrder.OrderJSON,
        },
      },
      CancelOrder: {
        name: "CancelOrder",
        handler: service.CancelOrder,
        input: { protobuf: CancelOrderRequest, json: CancelOrderRequestJSON },
        output: {
          protobuf: commerceOrder.Order,
          json: commerceOrder.OrderJSON,
        },
      },
      RefundOrder: {
        name: "RefundOrder",
        handler: service.RefundOrder,
        input: { protobuf: RefundOrderRequest, json: RefundOrderRequestJSON },
        output: {
          protobuf: commerceOrder.Order,
          json: commerceOrder.OrderJSON,
        },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const PlaceOrderRequest = {
  /**
   * Serializes PlaceOrderRequest to protobuf.
   */
  encode: function (msg: PartialDeep<PlaceOrderRequest>): Uint8Array {
    return PlaceOrderRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes PlaceOrderRequest from protobuf.
   */
  decode: function (bytes: ByteSource): PlaceOrderRequest {
    return PlaceOrderRequest._readMessage(
      PlaceOrderRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes PlaceOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PlaceOrderRequest>): PlaceOrderRequest {
    return {
      eTag: "",
      billingAddress: commerceOrder.BillingAddress.initialize(),
      shippingAddress: commerceOrder.Address.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PlaceOrderRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.eTag) {
      writer.writeString(1, msg.eTag);
    }
    if (msg.billingAddress) {
      writer.writeMessage(
        2,
        msg.billingAddress,
        commerceOrder.BillingAddress._writeMessage,
      );
    }
    if (msg.shippingAddress) {
      writer.writeMessage(
        3,
        msg.shippingAddress,
        commerceOrder.Address._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: PlaceOrderRequest,
    reader: protoscript.BinaryReader,
  ): PlaceOrderRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.eTag = reader.readString();
          break;
        }
        case 2: {
          reader.readMessage(
            msg.billingAddress,
            commerceOrder.BillingAddress._readMessage,
          );
          break;
        }
        case 3: {
          reader.readMessage(
            msg.shippingAddress,
            commerceOrder.Address._readMessage,
          );
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

export const PlaceOrderResponse = {
  /**
   * Serializes PlaceOrderResponse to protobuf.
   */
  encode: function (msg: PartialDeep<PlaceOrderResponse>): Uint8Array {
    return PlaceOrderResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes PlaceOrderResponse from protobuf.
   */
  decode: function (bytes: ByteSource): PlaceOrderResponse {
    return PlaceOrderResponse._readMessage(
      PlaceOrderResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes PlaceOrderResponse with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PlaceOrderResponse>): PlaceOrderResponse {
    return {
      paymentID: "",
      order: commerceOrder.Order.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PlaceOrderResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.paymentID) {
      writer.writeString(1, msg.paymentID);
    }
    if (msg.order) {
      writer.writeMessage(2, msg.order, commerceOrder.Order._writeMessage);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: PlaceOrderResponse,
    reader: protoscript.BinaryReader,
  ): PlaceOrderResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.paymentID = reader.readString();
          break;
        }
        case 2: {
          reader.readMessage(msg.order, commerceOrder.Order._readMessage);
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
      order: "",
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
    if (msg.order) {
      writer.writeString(1, msg.order);
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
          msg.order = reader.readString();
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

export const CancelOrderRequest = {
  /**
   * Serializes CancelOrderRequest to protobuf.
   */
  encode: function (msg: PartialDeep<CancelOrderRequest>): Uint8Array {
    return CancelOrderRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CancelOrderRequest from protobuf.
   */
  decode: function (bytes: ByteSource): CancelOrderRequest {
    return CancelOrderRequest._readMessage(
      CancelOrderRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CancelOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CancelOrderRequest>): CancelOrderRequest {
    return {
      order: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CancelOrderRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.order) {
      writer.writeString(1, msg.order);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CancelOrderRequest,
    reader: protoscript.BinaryReader,
  ): CancelOrderRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.order = reader.readString();
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

export const RefundOrderRequest = {
  /**
   * Serializes RefundOrderRequest to protobuf.
   */
  encode: function (msg: PartialDeep<RefundOrderRequest>): Uint8Array {
    return RefundOrderRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes RefundOrderRequest from protobuf.
   */
  decode: function (bytes: ByteSource): RefundOrderRequest {
    return RefundOrderRequest._readMessage(
      RefundOrderRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes RefundOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<RefundOrderRequest>): RefundOrderRequest {
    return {
      order: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<RefundOrderRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.order) {
      writer.writeString(1, msg.order);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: RefundOrderRequest,
    reader: protoscript.BinaryReader,
  ): RefundOrderRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.order = reader.readString();
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

export const PlaceOrderRequestJSON = {
  /**
   * Serializes PlaceOrderRequest to JSON.
   */
  encode: function (msg: PartialDeep<PlaceOrderRequest>): string {
    return JSON.stringify(PlaceOrderRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes PlaceOrderRequest from JSON.
   */
  decode: function (json: string): PlaceOrderRequest {
    return PlaceOrderRequestJSON._readMessage(
      PlaceOrderRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes PlaceOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PlaceOrderRequest>): PlaceOrderRequest {
    return {
      eTag: "",
      billingAddress: commerceOrder.BillingAddressJSON.initialize(),
      shippingAddress: commerceOrder.AddressJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PlaceOrderRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.eTag) {
      json["eTag"] = msg.eTag;
    }
    if (msg.billingAddress) {
      const _billingAddress_ = commerceOrder.BillingAddressJSON._writeMessage(
        msg.billingAddress,
      );
      if (Object.keys(_billingAddress_).length > 0) {
        json["billingAddress"] = _billingAddress_;
      }
    }
    if (msg.shippingAddress) {
      const _shippingAddress_ = commerceOrder.AddressJSON._writeMessage(
        msg.shippingAddress,
      );
      if (Object.keys(_shippingAddress_).length > 0) {
        json["shippingAddress"] = _shippingAddress_;
      }
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: PlaceOrderRequest,
    json: any,
  ): PlaceOrderRequest {
    const _eTag_ = json["eTag"];
    if (_eTag_) {
      msg.eTag = _eTag_;
    }
    const _billingAddress_ = json["billingAddress"];
    if (_billingAddress_) {
      commerceOrder.BillingAddressJSON._readMessage(
        msg.billingAddress,
        _billingAddress_,
      );
    }
    const _shippingAddress_ = json["shippingAddress"];
    if (_shippingAddress_) {
      commerceOrder.AddressJSON._readMessage(
        msg.shippingAddress,
        _shippingAddress_,
      );
    }
    return msg;
  },
};

export const PlaceOrderResponseJSON = {
  /**
   * Serializes PlaceOrderResponse to JSON.
   */
  encode: function (msg: PartialDeep<PlaceOrderResponse>): string {
    return JSON.stringify(PlaceOrderResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes PlaceOrderResponse from JSON.
   */
  decode: function (json: string): PlaceOrderResponse {
    return PlaceOrderResponseJSON._readMessage(
      PlaceOrderResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes PlaceOrderResponse with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PlaceOrderResponse>): PlaceOrderResponse {
    return {
      paymentID: "",
      order: commerceOrder.OrderJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PlaceOrderResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.paymentID) {
      json["paymentID"] = msg.paymentID;
    }
    if (msg.order) {
      const _order_ = commerceOrder.OrderJSON._writeMessage(msg.order);
      if (Object.keys(_order_).length > 0) {
        json["order"] = _order_;
      }
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: PlaceOrderResponse,
    json: any,
  ): PlaceOrderResponse {
    const _paymentID_ = json["paymentID"];
    if (_paymentID_) {
      msg.paymentID = _paymentID_;
    }
    const _order_ = json["order"];
    if (_order_) {
      commerceOrder.OrderJSON._readMessage(msg.order, _order_);
    }
    return msg;
  },
};

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
      order: "",
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
    if (msg.order) {
      json["order"] = msg.order;
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
    const _order_ = json["order"];
    if (_order_) {
      msg.order = _order_;
    }
    return msg;
  },
};

export const CancelOrderRequestJSON = {
  /**
   * Serializes CancelOrderRequest to JSON.
   */
  encode: function (msg: PartialDeep<CancelOrderRequest>): string {
    return JSON.stringify(CancelOrderRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes CancelOrderRequest from JSON.
   */
  decode: function (json: string): CancelOrderRequest {
    return CancelOrderRequestJSON._readMessage(
      CancelOrderRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CancelOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CancelOrderRequest>): CancelOrderRequest {
    return {
      order: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CancelOrderRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.order) {
      json["order"] = msg.order;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CancelOrderRequest,
    json: any,
  ): CancelOrderRequest {
    const _order_ = json["order"];
    if (_order_) {
      msg.order = _order_;
    }
    return msg;
  },
};

export const RefundOrderRequestJSON = {
  /**
   * Serializes RefundOrderRequest to JSON.
   */
  encode: function (msg: PartialDeep<RefundOrderRequest>): string {
    return JSON.stringify(RefundOrderRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes RefundOrderRequest from JSON.
   */
  decode: function (json: string): RefundOrderRequest {
    return RefundOrderRequestJSON._readMessage(
      RefundOrderRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes RefundOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<RefundOrderRequest>): RefundOrderRequest {
    return {
      order: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<RefundOrderRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.order) {
      json["order"] = msg.order;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: RefundOrderRequest,
    json: any,
  ): RefundOrderRequest {
    const _order_ = json["order"];
    if (_order_) {
      msg.order = _order_;
    }
    return msg;
  },
};
