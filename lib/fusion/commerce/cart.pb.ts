// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: commerce/cart.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

import * as auditEntry from "../audit/entry.pb";

//========================================//
//                 Types                  //
//========================================//

export interface Cart {
  /**
   * Resouce name of the cart, e.g., "carts/{cart_id}"
   * {cart_id} = "m"+sha256(userID)[:62]
   */
  name: string;
  uid: string;
  auditEntry: auditEntry.Entry;
  userId: string;
  items: CartItem[];
}

export interface CartItem {
  /**
   * product is the product.name identifier
   */
  product: string;
  /**
   * display_name is the product.display_name
   */
  displayName: string;
  price: bigint;
  quantity: bigint;
  sku: string;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Cart = {
  /**
   * Serializes Cart to protobuf.
   */
  encode: function (msg: PartialDeep<Cart>): Uint8Array {
    return Cart._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Cart from protobuf.
   */
  decode: function (bytes: ByteSource): Cart {
    return Cart._readMessage(
      Cart.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Cart with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Cart>): Cart {
    return {
      name: "",
      uid: "",
      auditEntry: auditEntry.Entry.initialize(),
      userId: "",
      items: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Cart>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    if (msg.uid) {
      writer.writeString(2, msg.uid);
    }
    if (msg.auditEntry) {
      writer.writeMessage(3, msg.auditEntry, auditEntry.Entry._writeMessage);
    }
    if (msg.userId) {
      writer.writeString(4, msg.userId);
    }
    if (msg.items?.length) {
      writer.writeRepeatedMessage(5, msg.items as any, CartItem._writeMessage);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Cart, reader: protoscript.BinaryReader): Cart {
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
          reader.readMessage(msg.auditEntry, auditEntry.Entry._readMessage);
          break;
        }
        case 4: {
          msg.userId = reader.readString();
          break;
        }
        case 5: {
          const m = CartItem.initialize();
          reader.readMessage(m, CartItem._readMessage);
          msg.items.push(m);
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

export const CartItem = {
  /**
   * Serializes CartItem to protobuf.
   */
  encode: function (msg: PartialDeep<CartItem>): Uint8Array {
    return CartItem._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CartItem from protobuf.
   */
  decode: function (bytes: ByteSource): CartItem {
    return CartItem._readMessage(
      CartItem.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CartItem with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CartItem>): CartItem {
    return {
      product: "",
      displayName: "",
      price: 0n,
      quantity: 0n,
      sku: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CartItem>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.product) {
      writer.writeString(1, msg.product);
    }
    if (msg.displayName) {
      writer.writeString(2, msg.displayName);
    }
    if (msg.price) {
      writer.writeInt64String(3, msg.price.toString() as any);
    }
    if (msg.quantity) {
      writer.writeInt64String(4, msg.quantity.toString() as any);
    }
    if (msg.sku) {
      writer.writeString(5, msg.sku);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CartItem,
    reader: protoscript.BinaryReader,
  ): CartItem {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.product = reader.readString();
          break;
        }
        case 2: {
          msg.displayName = reader.readString();
          break;
        }
        case 3: {
          msg.price = BigInt(reader.readInt64String());
          break;
        }
        case 4: {
          msg.quantity = BigInt(reader.readInt64String());
          break;
        }
        case 5: {
          msg.sku = reader.readString();
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

export const CartJSON = {
  /**
   * Serializes Cart to JSON.
   */
  encode: function (msg: PartialDeep<Cart>): string {
    return JSON.stringify(CartJSON._writeMessage(msg));
  },

  /**
   * Deserializes Cart from JSON.
   */
  decode: function (json: string): Cart {
    return CartJSON._readMessage(CartJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Cart with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Cart>): Cart {
    return {
      name: "",
      uid: "",
      auditEntry: auditEntry.EntryJSON.initialize(),
      userId: "",
      items: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Cart>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    if (msg.uid) {
      json["uid"] = msg.uid;
    }
    if (msg.auditEntry) {
      const _auditEntry_ = auditEntry.EntryJSON._writeMessage(msg.auditEntry);
      if (Object.keys(_auditEntry_).length > 0) {
        json["auditEntry"] = _auditEntry_;
      }
    }
    if (msg.userId) {
      json["userId"] = msg.userId;
    }
    if (msg.items?.length) {
      json["items"] = msg.items.map(CartItemJSON._writeMessage);
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Cart, json: any): Cart {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    const _uid_ = json["uid"];
    if (_uid_) {
      msg.uid = _uid_;
    }
    const _auditEntry_ = json["auditEntry"] ?? json["audit_entry"];
    if (_auditEntry_) {
      auditEntry.EntryJSON._readMessage(msg.auditEntry, _auditEntry_);
    }
    const _userId_ = json["userId"] ?? json["user_id"];
    if (_userId_) {
      msg.userId = _userId_;
    }
    const _items_ = json["items"];
    if (_items_) {
      for (const item of _items_) {
        const m = CartItemJSON.initialize();
        CartItemJSON._readMessage(m, item);
        msg.items.push(m);
      }
    }
    return msg;
  },
};

export const CartItemJSON = {
  /**
   * Serializes CartItem to JSON.
   */
  encode: function (msg: PartialDeep<CartItem>): string {
    return JSON.stringify(CartItemJSON._writeMessage(msg));
  },

  /**
   * Deserializes CartItem from JSON.
   */
  decode: function (json: string): CartItem {
    return CartItemJSON._readMessage(
      CartItemJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CartItem with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CartItem>): CartItem {
    return {
      product: "",
      displayName: "",
      price: 0n,
      quantity: 0n,
      sku: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CartItem>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.product) {
      json["product"] = msg.product;
    }
    if (msg.displayName) {
      json["displayName"] = msg.displayName;
    }
    if (msg.price) {
      json["price"] = String(msg.price);
    }
    if (msg.quantity) {
      json["quantity"] = String(msg.quantity);
    }
    if (msg.sku) {
      json["sku"] = msg.sku;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: CartItem, json: any): CartItem {
    const _product_ = json["product"];
    if (_product_) {
      msg.product = _product_;
    }
    const _displayName_ = json["displayName"] ?? json["display_name"];
    if (_displayName_) {
      msg.displayName = _displayName_;
    }
    const _price_ = json["price"];
    if (_price_) {
      msg.price = BigInt(_price_);
    }
    const _quantity_ = json["quantity"];
    if (_quantity_) {
      msg.quantity = BigInt(_quantity_);
    }
    const _sku_ = json["sku"];
    if (_sku_) {
      msg.sku = _sku_;
    }
    return msg;
  },
};
