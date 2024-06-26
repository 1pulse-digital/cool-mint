// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: commerce/order.repository.sky.proto
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

export interface ListOrdersRequest {
  /**
   * Filter allows you to search by fields set as searchable.
   * TODO Generate the list of searchable fields for this comment
   */
  filter: string;
  /**
   * The maximum number of items to return.
   */
  pageSize: number;
  /**
   * The next_page_token value returned from a previous List request, if any.
   */
  pageToken: string;
}

export interface ListOrdersResponse {
  /**
   * There will be a maximum number of records returned based on the page_size field in the request.
   */
  Orders: commerceOrder.Order[];
  total: bigint;
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPageToken: string;
}

export interface CreateOrderRequest {
  /**
   * The name to use for the order, which will become the final component of
   * the order's resource name.
   *
   * This value should be 4-63 characters, and valid characters
   * are /[a-z][0-9]-/.
   */
  orderId: string;
  /**
   * The order to create.
   */
  order: commerceOrder.Order;
}

export interface GetOrderRequest {
  name: string;
}

export interface UpdateOrderRequest {
  /**
   * The order to update.
   *
   * The order's 'name' field is used to identify the order to be updated.
   * Format: commerce/order}}
   */
  order: commerceOrder.Order;
  /**
   * The list of fields to be updated.
   */
  updateMask: protoscript.FieldMask;
}

export interface DeleteOrderRequest {
  name: string;
}

//========================================//
//    OrderRepository Protobuf Client     //
//========================================//

export async function ListOrders(
  listOrdersRequest: ListOrdersRequest,
  config?: ClientConfiguration,
): Promise<ListOrdersResponse> {
  const response = await PBrequest(
    "/commerce.OrderRepository/ListOrders",
    ListOrdersRequest.encode(listOrdersRequest),
    config,
  );
  return ListOrdersResponse.decode(response);
}

export async function CreateOrder(
  createOrderRequest: CreateOrderRequest,
  config?: ClientConfiguration,
): Promise<commerceOrder.Order> {
  const response = await PBrequest(
    "/commerce.OrderRepository/CreateOrder",
    CreateOrderRequest.encode(createOrderRequest),
    config,
  );
  return commerceOrder.Order.decode(response);
}

export async function GetOrder(
  getOrderRequest: GetOrderRequest,
  config?: ClientConfiguration,
): Promise<commerceOrder.Order> {
  const response = await PBrequest(
    "/commerce.OrderRepository/GetOrder",
    GetOrderRequest.encode(getOrderRequest),
    config,
  );
  return commerceOrder.Order.decode(response);
}

export async function UpdateOrder(
  updateOrderRequest: UpdateOrderRequest,
  config?: ClientConfiguration,
): Promise<commerceOrder.Order> {
  const response = await PBrequest(
    "/commerce.OrderRepository/UpdateOrder",
    UpdateOrderRequest.encode(updateOrderRequest),
    config,
  );
  return commerceOrder.Order.decode(response);
}

export async function DeleteOrder(
  deleteOrderRequest: DeleteOrderRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await PBrequest(
    "/commerce.OrderRepository/DeleteOrder",
    DeleteOrderRequest.encode(deleteOrderRequest),
    config,
  );
  return protoscript.Empty.decode(response);
}

//========================================//
//      OrderRepository JSON Client       //
//========================================//

export async function ListOrdersJSON(
  listOrdersRequest: ListOrdersRequest,
  config?: ClientConfiguration,
): Promise<ListOrdersResponse> {
  const response = await JSONrequest(
    "/commerce.OrderRepository/ListOrders",
    ListOrdersRequestJSON.encode(listOrdersRequest),
    config,
  );
  return ListOrdersResponseJSON.decode(response);
}

export async function CreateOrderJSON(
  createOrderRequest: CreateOrderRequest,
  config?: ClientConfiguration,
): Promise<commerceOrder.Order> {
  const response = await JSONrequest(
    "/commerce.OrderRepository/CreateOrder",
    CreateOrderRequestJSON.encode(createOrderRequest),
    config,
  );
  return commerceOrder.OrderJSON.decode(response);
}

export async function GetOrderJSON(
  getOrderRequest: GetOrderRequest,
  config?: ClientConfiguration,
): Promise<commerceOrder.Order> {
  const response = await JSONrequest(
    "/commerce.OrderRepository/GetOrder",
    GetOrderRequestJSON.encode(getOrderRequest),
    config,
  );
  return commerceOrder.OrderJSON.decode(response);
}

export async function UpdateOrderJSON(
  updateOrderRequest: UpdateOrderRequest,
  config?: ClientConfiguration,
): Promise<commerceOrder.Order> {
  const response = await JSONrequest(
    "/commerce.OrderRepository/UpdateOrder",
    UpdateOrderRequestJSON.encode(updateOrderRequest),
    config,
  );
  return commerceOrder.OrderJSON.decode(response);
}

export async function DeleteOrderJSON(
  deleteOrderRequest: DeleteOrderRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await JSONrequest(
    "/commerce.OrderRepository/DeleteOrder",
    DeleteOrderRequestJSON.encode(deleteOrderRequest),
    config,
  );
  return protoscript.EmptyJSON.decode(response);
}

//========================================//
//            OrderRepository             //
//========================================//

/**
 *
 * OrderRepository allows you to manage Orders.
 */
export interface OrderRepository<Context = unknown> {
  ListOrders: (
    listOrdersRequest: ListOrdersRequest,
    context: Context,
  ) => Promise<ListOrdersResponse> | ListOrdersResponse;
  CreateOrder: (
    createOrderRequest: CreateOrderRequest,
    context: Context,
  ) => Promise<commerceOrder.Order> | commerceOrder.Order;
  GetOrder: (
    getOrderRequest: GetOrderRequest,
    context: Context,
  ) => Promise<commerceOrder.Order> | commerceOrder.Order;
  UpdateOrder: (
    updateOrderRequest: UpdateOrderRequest,
    context: Context,
  ) => Promise<commerceOrder.Order> | commerceOrder.Order;
  DeleteOrder: (
    deleteOrderRequest: DeleteOrderRequest,
    context: Context,
  ) => Promise<protoscript.Empty> | protoscript.Empty;
}

export function createOrderRepository<Context>(
  service: OrderRepository<Context>,
) {
  return {
    name: "commerce.OrderRepository",
    methods: {
      ListOrders: {
        name: "ListOrders",
        handler: service.ListOrders,
        input: { protobuf: ListOrdersRequest, json: ListOrdersRequestJSON },
        output: { protobuf: ListOrdersResponse, json: ListOrdersResponseJSON },
      },
      CreateOrder: {
        name: "CreateOrder",
        handler: service.CreateOrder,
        input: { protobuf: CreateOrderRequest, json: CreateOrderRequestJSON },
        output: {
          protobuf: commerceOrder.Order,
          json: commerceOrder.OrderJSON,
        },
      },
      GetOrder: {
        name: "GetOrder",
        handler: service.GetOrder,
        input: { protobuf: GetOrderRequest, json: GetOrderRequestJSON },
        output: {
          protobuf: commerceOrder.Order,
          json: commerceOrder.OrderJSON,
        },
      },
      UpdateOrder: {
        name: "UpdateOrder",
        handler: service.UpdateOrder,
        input: { protobuf: UpdateOrderRequest, json: UpdateOrderRequestJSON },
        output: {
          protobuf: commerceOrder.Order,
          json: commerceOrder.OrderJSON,
        },
      },
      DeleteOrder: {
        name: "DeleteOrder",
        handler: service.DeleteOrder,
        input: { protobuf: DeleteOrderRequest, json: DeleteOrderRequestJSON },
        output: { protobuf: protoscript.Empty, json: protoscript.EmptyJSON },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const ListOrdersRequest = {
  /**
   * Serializes ListOrdersRequest to protobuf.
   */
  encode: function (msg: PartialDeep<ListOrdersRequest>): Uint8Array {
    return ListOrdersRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListOrdersRequest from protobuf.
   */
  decode: function (bytes: ByteSource): ListOrdersRequest {
    return ListOrdersRequest._readMessage(
      ListOrdersRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListOrdersRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<ListOrdersRequest>): ListOrdersRequest {
    return {
      filter: "",
      pageSize: 0,
      pageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListOrdersRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.filter) {
      writer.writeString(1, msg.filter);
    }
    if (msg.pageSize) {
      writer.writeInt32(2, msg.pageSize);
    }
    if (msg.pageToken) {
      writer.writeString(3, msg.pageToken);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListOrdersRequest,
    reader: protoscript.BinaryReader,
  ): ListOrdersRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.filter = reader.readString();
          break;
        }
        case 2: {
          msg.pageSize = reader.readInt32();
          break;
        }
        case 3: {
          msg.pageToken = reader.readString();
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

export const ListOrdersResponse = {
  /**
   * Serializes ListOrdersResponse to protobuf.
   */
  encode: function (msg: PartialDeep<ListOrdersResponse>): Uint8Array {
    return ListOrdersResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListOrdersResponse from protobuf.
   */
  decode: function (bytes: ByteSource): ListOrdersResponse {
    return ListOrdersResponse._readMessage(
      ListOrdersResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListOrdersResponse with all fields set to their default value.
   */
  initialize: function (msg?: Partial<ListOrdersResponse>): ListOrdersResponse {
    return {
      Orders: [],
      total: 0n,
      nextPageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListOrdersResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.Orders?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.Orders as any,
        commerceOrder.Order._writeMessage,
      );
    }
    if (msg.total) {
      writer.writeInt64String(2, msg.total.toString() as any);
    }
    if (msg.nextPageToken) {
      writer.writeString(3, msg.nextPageToken);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListOrdersResponse,
    reader: protoscript.BinaryReader,
  ): ListOrdersResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = commerceOrder.Order.initialize();
          reader.readMessage(m, commerceOrder.Order._readMessage);
          msg.Orders.push(m);
          break;
        }
        case 2: {
          msg.total = BigInt(reader.readInt64String());
          break;
        }
        case 3: {
          msg.nextPageToken = reader.readString();
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

export const CreateOrderRequest = {
  /**
   * Serializes CreateOrderRequest to protobuf.
   */
  encode: function (msg: PartialDeep<CreateOrderRequest>): Uint8Array {
    return CreateOrderRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CreateOrderRequest from protobuf.
   */
  decode: function (bytes: ByteSource): CreateOrderRequest {
    return CreateOrderRequest._readMessage(
      CreateOrderRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CreateOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CreateOrderRequest>): CreateOrderRequest {
    return {
      orderId: "",
      order: commerceOrder.Order.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateOrderRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.orderId) {
      writer.writeString(1, msg.orderId);
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
    msg: CreateOrderRequest,
    reader: protoscript.BinaryReader,
  ): CreateOrderRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.orderId = reader.readString();
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

export const GetOrderRequest = {
  /**
   * Serializes GetOrderRequest to protobuf.
   */
  encode: function (msg: PartialDeep<GetOrderRequest>): Uint8Array {
    return GetOrderRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetOrderRequest from protobuf.
   */
  decode: function (bytes: ByteSource): GetOrderRequest {
    return GetOrderRequest._readMessage(
      GetOrderRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<GetOrderRequest>): GetOrderRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetOrderRequest>,
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
    msg: GetOrderRequest,
    reader: protoscript.BinaryReader,
  ): GetOrderRequest {
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

export const UpdateOrderRequest = {
  /**
   * Serializes UpdateOrderRequest to protobuf.
   */
  encode: function (msg: PartialDeep<UpdateOrderRequest>): Uint8Array {
    return UpdateOrderRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes UpdateOrderRequest from protobuf.
   */
  decode: function (bytes: ByteSource): UpdateOrderRequest {
    return UpdateOrderRequest._readMessage(
      UpdateOrderRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes UpdateOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UpdateOrderRequest>): UpdateOrderRequest {
    return {
      order: commerceOrder.Order.initialize(),
      updateMask: protoscript.FieldMask.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateOrderRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.order) {
      writer.writeMessage(1, msg.order, commerceOrder.Order._writeMessage);
    }
    if (msg.updateMask) {
      writer.writeMessage(
        2,
        msg.updateMask,
        protoscript.FieldMask._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UpdateOrderRequest,
    reader: protoscript.BinaryReader,
  ): UpdateOrderRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          reader.readMessage(msg.order, commerceOrder.Order._readMessage);
          break;
        }
        case 2: {
          reader.readMessage(
            msg.updateMask,
            protoscript.FieldMask._readMessage,
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

export const DeleteOrderRequest = {
  /**
   * Serializes DeleteOrderRequest to protobuf.
   */
  encode: function (msg: PartialDeep<DeleteOrderRequest>): Uint8Array {
    return DeleteOrderRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeleteOrderRequest from protobuf.
   */
  decode: function (bytes: ByteSource): DeleteOrderRequest {
    return DeleteOrderRequest._readMessage(
      DeleteOrderRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeleteOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<DeleteOrderRequest>): DeleteOrderRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteOrderRequest>,
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
    msg: DeleteOrderRequest,
    reader: protoscript.BinaryReader,
  ): DeleteOrderRequest {
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

export const ListOrdersRequestJSON = {
  /**
   * Serializes ListOrdersRequest to JSON.
   */
  encode: function (msg: PartialDeep<ListOrdersRequest>): string {
    return JSON.stringify(ListOrdersRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListOrdersRequest from JSON.
   */
  decode: function (json: string): ListOrdersRequest {
    return ListOrdersRequestJSON._readMessage(
      ListOrdersRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListOrdersRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<ListOrdersRequest>): ListOrdersRequest {
    return {
      filter: "",
      pageSize: 0,
      pageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListOrdersRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.filter) {
      json["filter"] = msg.filter;
    }
    if (msg.pageSize) {
      json["pageSize"] = msg.pageSize;
    }
    if (msg.pageToken) {
      json["pageToken"] = msg.pageToken;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListOrdersRequest,
    json: any,
  ): ListOrdersRequest {
    const _filter_ = json["filter"];
    if (_filter_) {
      msg.filter = _filter_;
    }
    const _pageSize_ = json["pageSize"] ?? json["page_size"];
    if (_pageSize_) {
      msg.pageSize = protoscript.parseNumber(_pageSize_);
    }
    const _pageToken_ = json["pageToken"] ?? json["page_token"];
    if (_pageToken_) {
      msg.pageToken = _pageToken_;
    }
    return msg;
  },
};

export const ListOrdersResponseJSON = {
  /**
   * Serializes ListOrdersResponse to JSON.
   */
  encode: function (msg: PartialDeep<ListOrdersResponse>): string {
    return JSON.stringify(ListOrdersResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListOrdersResponse from JSON.
   */
  decode: function (json: string): ListOrdersResponse {
    return ListOrdersResponseJSON._readMessage(
      ListOrdersResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListOrdersResponse with all fields set to their default value.
   */
  initialize: function (msg?: Partial<ListOrdersResponse>): ListOrdersResponse {
    return {
      Orders: [],
      total: 0n,
      nextPageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListOrdersResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.Orders?.length) {
      json["Orders"] = msg.Orders.map(commerceOrder.OrderJSON._writeMessage);
    }
    if (msg.total) {
      json["total"] = String(msg.total);
    }
    if (msg.nextPageToken) {
      json["nextPageToken"] = msg.nextPageToken;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListOrdersResponse,
    json: any,
  ): ListOrdersResponse {
    const _Orders_ = json["Orders"];
    if (_Orders_) {
      for (const item of _Orders_) {
        const m = commerceOrder.OrderJSON.initialize();
        commerceOrder.OrderJSON._readMessage(m, item);
        msg.Orders.push(m);
      }
    }
    const _total_ = json["total"];
    if (_total_) {
      msg.total = BigInt(_total_);
    }
    const _nextPageToken_ = json["nextPageToken"] ?? json["next_page_token"];
    if (_nextPageToken_) {
      msg.nextPageToken = _nextPageToken_;
    }
    return msg;
  },
};

export const CreateOrderRequestJSON = {
  /**
   * Serializes CreateOrderRequest to JSON.
   */
  encode: function (msg: PartialDeep<CreateOrderRequest>): string {
    return JSON.stringify(CreateOrderRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes CreateOrderRequest from JSON.
   */
  decode: function (json: string): CreateOrderRequest {
    return CreateOrderRequestJSON._readMessage(
      CreateOrderRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CreateOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CreateOrderRequest>): CreateOrderRequest {
    return {
      orderId: "",
      order: commerceOrder.OrderJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateOrderRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.orderId) {
      json["orderId"] = msg.orderId;
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
    msg: CreateOrderRequest,
    json: any,
  ): CreateOrderRequest {
    const _orderId_ = json["orderId"] ?? json["order_id"];
    if (_orderId_) {
      msg.orderId = _orderId_;
    }
    const _order_ = json["order"];
    if (_order_) {
      commerceOrder.OrderJSON._readMessage(msg.order, _order_);
    }
    return msg;
  },
};

export const GetOrderRequestJSON = {
  /**
   * Serializes GetOrderRequest to JSON.
   */
  encode: function (msg: PartialDeep<GetOrderRequest>): string {
    return JSON.stringify(GetOrderRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetOrderRequest from JSON.
   */
  decode: function (json: string): GetOrderRequest {
    return GetOrderRequestJSON._readMessage(
      GetOrderRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<GetOrderRequest>): GetOrderRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetOrderRequest>,
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
  _readMessage: function (msg: GetOrderRequest, json: any): GetOrderRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};

export const UpdateOrderRequestJSON = {
  /**
   * Serializes UpdateOrderRequest to JSON.
   */
  encode: function (msg: PartialDeep<UpdateOrderRequest>): string {
    return JSON.stringify(UpdateOrderRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes UpdateOrderRequest from JSON.
   */
  decode: function (json: string): UpdateOrderRequest {
    return UpdateOrderRequestJSON._readMessage(
      UpdateOrderRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes UpdateOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UpdateOrderRequest>): UpdateOrderRequest {
    return {
      order: commerceOrder.OrderJSON.initialize(),
      updateMask: protoscript.FieldMaskJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateOrderRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.order) {
      const _order_ = commerceOrder.OrderJSON._writeMessage(msg.order);
      if (Object.keys(_order_).length > 0) {
        json["order"] = _order_;
      }
    }
    if (msg.updateMask) {
      const _updateMask_ = protoscript.FieldMaskJSON._writeMessage(
        msg.updateMask,
      );
      if (Object.keys(_updateMask_).length > 0) {
        json["updateMask"] = _updateMask_;
      }
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UpdateOrderRequest,
    json: any,
  ): UpdateOrderRequest {
    const _order_ = json["order"];
    if (_order_) {
      commerceOrder.OrderJSON._readMessage(msg.order, _order_);
    }
    const _updateMask_ = json["updateMask"] ?? json["update_mask"];
    if (_updateMask_) {
      protoscript.FieldMaskJSON._readMessage(msg.updateMask, _updateMask_);
    }
    return msg;
  },
};

export const DeleteOrderRequestJSON = {
  /**
   * Serializes DeleteOrderRequest to JSON.
   */
  encode: function (msg: PartialDeep<DeleteOrderRequest>): string {
    return JSON.stringify(DeleteOrderRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes DeleteOrderRequest from JSON.
   */
  decode: function (json: string): DeleteOrderRequest {
    return DeleteOrderRequestJSON._readMessage(
      DeleteOrderRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeleteOrderRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<DeleteOrderRequest>): DeleteOrderRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteOrderRequest>,
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
    msg: DeleteOrderRequest,
    json: any,
  ): DeleteOrderRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};
