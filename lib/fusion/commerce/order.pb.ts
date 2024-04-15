// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: commerce/order.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

//========================================//
//                 Types                  //
//========================================//

export interface Order {
  name: string;
  uid: string;
  number: bigint;
  items: string[];
  total: bigint;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Order = {
  /**
   * Serializes Order to protobuf.
   */
  encode: function (msg: PartialDeep<Order>): Uint8Array {
    return Order._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Order from protobuf.
   */
  decode: function (bytes: ByteSource): Order {
    return Order._readMessage(
      Order.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Order with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Order>): Order {
    return {
      name: "",
      uid: "",
      number: 0n,
      items: [],
      total: 0n,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Order>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    if (msg.uid) {
      writer.writeString(2, msg.uid);
    }
    if (msg.number) {
      writer.writeInt64String(3, msg.number.toString() as any);
    }
    if (msg.items?.length) {
      writer.writeRepeatedString(4, msg.items);
    }
    if (msg.total) {
      writer.writeInt64String(5, msg.total.toString() as any);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Order, reader: protoscript.BinaryReader): Order {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.name = reader.readString();
          break;
        }
        case 2: {
          msg.uid = reader.readString();
          break;
        }
        case 3: {
          msg.number = BigInt(reader.readInt64String());
          break;
        }
        case 4: {
          msg.items.push(reader.readString());
          break;
        }
        case 5: {
          msg.total = BigInt(reader.readInt64String());
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

export const OrderJSON = {
  /**
   * Serializes Order to JSON.
   */
  encode: function (msg: PartialDeep<Order>): string {
    return JSON.stringify(OrderJSON._writeMessage(msg));
  },

  /**
   * Deserializes Order from JSON.
   */
  decode: function (json: string): Order {
    return OrderJSON._readMessage(OrderJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Order with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Order>): Order {
    return {
      name: "",
      uid: "",
      number: 0n,
      items: [],
      total: 0n,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Order>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    if (msg.uid) {
      json["uid"] = msg.uid;
    }
    if (msg.number) {
      json["number"] = String(msg.number);
    }
    if (msg.items?.length) {
      json["items"] = msg.items;
    }
    if (msg.total) {
      json["total"] = String(msg.total);
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Order, json: any): Order {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    const _uid_ = json["uid"];
    if (_uid_) {
      msg.uid = _uid_;
    }
    const _number_ = json["number"];
    if (_number_) {
      msg.number = BigInt(_number_);
    }
    const _items_ = json["items"];
    if (_items_) {
      msg.items = _items_;
    }
    const _total_ = json["total"];
    if (_total_) {
      msg.total = BigInt(_total_);
    }
    return msg;
  },
};
