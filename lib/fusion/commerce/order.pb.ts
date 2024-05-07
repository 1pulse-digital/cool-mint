// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: commerce/order.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

import * as auditEntry from "../audit/entry.pb";

//========================================//
//                 Types                  //
//========================================//

export type OrderStatus =
  | "Pending"
  | "Processing"
  | "OnHold"
  | "Completed"
  | "Cancelled"
  | "Refunded"
  | "Failed";

export interface Order {
  /**
   * Name is {userID}/{orderNumber}
   */
  name: string;
  uid: string;
  auditEntry: auditEntry.Entry;
  number: bigint;
  total: bigint;
  discountTotal: bigint;
  shippingTotal: bigint;
  userID: string;
  billingAddress: BillingAddress;
  shippingAddress: Address;
  transactionID: string;
  datePaid: string;
  dateCompleted: string;
  cartHash: string;
  lineItems: LineItem[];
}

export interface LineItem {
  uid: string;
  productName: string;
  productID: string;
  variationID: string;
  quantity: bigint;
  subtotal: bigint;
  subtotalTax: bigint;
  total: bigint;
  totalTax: bigint;
  sku: string;
  price: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface BillingAddress {
  address: Address;
  phone: string;
  email: string;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const OrderStatus = {
  Pending: "Pending",
  Processing: "Processing",
  OnHold: "OnHold",
  Completed: "Completed",
  Cancelled: "Cancelled",
  Refunded: "Refunded",
  Failed: "Failed",
  /**
   * @private
   */
  _fromInt: function (i: number): OrderStatus {
    switch (i) {
      case 0: {
        return "Pending";
      }
      case 1: {
        return "Processing";
      }
      case 2: {
        return "OnHold";
      }
      case 3: {
        return "Completed";
      }
      case 4: {
        return "Cancelled";
      }
      case 5: {
        return "Refunded";
      }
      case 6: {
        return "Failed";
      }
      // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
      default: {
        return i as unknown as OrderStatus;
      }
    }
  },
  /**
   * @private
   */
  _toInt: function (i: OrderStatus): number {
    switch (i) {
      case "Pending": {
        return 0;
      }
      case "Processing": {
        return 1;
      }
      case "OnHold": {
        return 2;
      }
      case "Completed": {
        return 3;
      }
      case "Cancelled": {
        return 4;
      }
      case "Refunded": {
        return 5;
      }
      case "Failed": {
        return 6;
      }
      // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
      default: {
        return i as unknown as number;
      }
    }
  },
} as const;

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
      auditEntry: auditEntry.Entry.initialize(),
      number: 0n,
      total: 0n,
      discountTotal: 0n,
      shippingTotal: 0n,
      userID: "",
      billingAddress: BillingAddress.initialize(),
      shippingAddress: Address.initialize(),
      transactionID: "",
      datePaid: "",
      dateCompleted: "",
      cartHash: "",
      lineItems: [],
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
    if (msg.auditEntry) {
      writer.writeMessage(3, msg.auditEntry, auditEntry.Entry._writeMessage);
    }
    if (msg.number) {
      writer.writeInt64String(5, msg.number.toString() as any);
    }
    if (msg.total) {
      writer.writeInt64String(7, msg.total.toString() as any);
    }
    if (msg.discountTotal) {
      writer.writeInt64String(8, msg.discountTotal.toString() as any);
    }
    if (msg.shippingTotal) {
      writer.writeInt64String(9, msg.shippingTotal.toString() as any);
    }
    if (msg.userID) {
      writer.writeString(10, msg.userID);
    }
    if (msg.billingAddress) {
      writer.writeMessage(12, msg.billingAddress, BillingAddress._writeMessage);
    }
    if (msg.shippingAddress) {
      writer.writeMessage(11, msg.shippingAddress, Address._writeMessage);
    }
    if (msg.transactionID) {
      writer.writeString(13, msg.transactionID);
    }
    if (msg.datePaid) {
      writer.writeString(14, msg.datePaid);
    }
    if (msg.dateCompleted) {
      writer.writeString(15, msg.dateCompleted);
    }
    if (msg.cartHash) {
      writer.writeString(16, msg.cartHash);
    }
    if (msg.lineItems?.length) {
      writer.writeRepeatedMessage(
        6,
        msg.lineItems as any,
        LineItem._writeMessage,
      );
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
          reader.readMessage(msg.auditEntry, auditEntry.Entry._readMessage);
          break;
        }
        case 5: {
          msg.number = BigInt(reader.readInt64String());
          break;
        }
        case 7: {
          msg.total = BigInt(reader.readInt64String());
          break;
        }
        case 8: {
          msg.discountTotal = BigInt(reader.readInt64String());
          break;
        }
        case 9: {
          msg.shippingTotal = BigInt(reader.readInt64String());
          break;
        }
        case 10: {
          msg.userID = reader.readString();
          break;
        }
        case 12: {
          reader.readMessage(msg.billingAddress, BillingAddress._readMessage);
          break;
        }
        case 11: {
          reader.readMessage(msg.shippingAddress, Address._readMessage);
          break;
        }
        case 13: {
          msg.transactionID = reader.readString();
          break;
        }
        case 14: {
          msg.datePaid = reader.readString();
          break;
        }
        case 15: {
          msg.dateCompleted = reader.readString();
          break;
        }
        case 16: {
          msg.cartHash = reader.readString();
          break;
        }
        case 6: {
          const m = LineItem.initialize();
          reader.readMessage(m, LineItem._readMessage);
          msg.lineItems.push(m);
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

export const LineItem = {
  /**
   * Serializes LineItem to protobuf.
   */
  encode: function (msg: PartialDeep<LineItem>): Uint8Array {
    return LineItem._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes LineItem from protobuf.
   */
  decode: function (bytes: ByteSource): LineItem {
    return LineItem._readMessage(
      LineItem.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes LineItem with all fields set to their default value.
   */
  initialize: function (msg?: Partial<LineItem>): LineItem {
    return {
      uid: "",
      productName: "",
      productID: "",
      variationID: "",
      quantity: 0n,
      subtotal: 0n,
      subtotalTax: 0n,
      total: 0n,
      totalTax: 0n,
      sku: "",
      price: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<LineItem>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.uid) {
      writer.writeString(1, msg.uid);
    }
    if (msg.productName) {
      writer.writeString(2, msg.productName);
    }
    if (msg.productID) {
      writer.writeString(3, msg.productID);
    }
    if (msg.variationID) {
      writer.writeString(4, msg.variationID);
    }
    if (msg.quantity) {
      writer.writeInt64String(5, msg.quantity.toString() as any);
    }
    if (msg.subtotal) {
      writer.writeInt64String(6, msg.subtotal.toString() as any);
    }
    if (msg.subtotalTax) {
      writer.writeInt64String(7, msg.subtotalTax.toString() as any);
    }
    if (msg.total) {
      writer.writeInt64String(8, msg.total.toString() as any);
    }
    if (msg.totalTax) {
      writer.writeInt64String(9, msg.totalTax.toString() as any);
    }
    if (msg.sku) {
      writer.writeString(10, msg.sku);
    }
    if (msg.price) {
      writer.writeString(11, msg.price);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: LineItem,
    reader: protoscript.BinaryReader,
  ): LineItem {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.uid = reader.readString();
          break;
        }
        case 2: {
          msg.productName = reader.readString();
          break;
        }
        case 3: {
          msg.productID = reader.readString();
          break;
        }
        case 4: {
          msg.variationID = reader.readString();
          break;
        }
        case 5: {
          msg.quantity = BigInt(reader.readInt64String());
          break;
        }
        case 6: {
          msg.subtotal = BigInt(reader.readInt64String());
          break;
        }
        case 7: {
          msg.subtotalTax = BigInt(reader.readInt64String());
          break;
        }
        case 8: {
          msg.total = BigInt(reader.readInt64String());
          break;
        }
        case 9: {
          msg.totalTax = BigInt(reader.readInt64String());
          break;
        }
        case 10: {
          msg.sku = reader.readString();
          break;
        }
        case 11: {
          msg.price = reader.readString();
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

export const Address = {
  /**
   * Serializes Address to protobuf.
   */
  encode: function (msg: PartialDeep<Address>): Uint8Array {
    return Address._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Address from protobuf.
   */
  decode: function (bytes: ByteSource): Address {
    return Address._readMessage(
      Address.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Address with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Address>): Address {
    return {
      firstName: "",
      lastName: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Address>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.firstName) {
      writer.writeString(1, msg.firstName);
    }
    if (msg.lastName) {
      writer.writeString(2, msg.lastName);
    }
    if (msg.company) {
      writer.writeString(3, msg.company);
    }
    if (msg.address1) {
      writer.writeString(4, msg.address1);
    }
    if (msg.address2) {
      writer.writeString(5, msg.address2);
    }
    if (msg.city) {
      writer.writeString(6, msg.city);
    }
    if (msg.state) {
      writer.writeString(7, msg.state);
    }
    if (msg.postalCode) {
      writer.writeString(8, msg.postalCode);
    }
    if (msg.country) {
      writer.writeString(9, msg.country);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: Address,
    reader: protoscript.BinaryReader,
  ): Address {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.firstName = reader.readString();
          break;
        }
        case 2: {
          msg.lastName = reader.readString();
          break;
        }
        case 3: {
          msg.company = reader.readString();
          break;
        }
        case 4: {
          msg.address1 = reader.readString();
          break;
        }
        case 5: {
          msg.address2 = reader.readString();
          break;
        }
        case 6: {
          msg.city = reader.readString();
          break;
        }
        case 7: {
          msg.state = reader.readString();
          break;
        }
        case 8: {
          msg.postalCode = reader.readString();
          break;
        }
        case 9: {
          msg.country = reader.readString();
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

export const BillingAddress = {
  /**
   * Serializes BillingAddress to protobuf.
   */
  encode: function (msg: PartialDeep<BillingAddress>): Uint8Array {
    return BillingAddress._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes BillingAddress from protobuf.
   */
  decode: function (bytes: ByteSource): BillingAddress {
    return BillingAddress._readMessage(
      BillingAddress.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes BillingAddress with all fields set to their default value.
   */
  initialize: function (msg?: Partial<BillingAddress>): BillingAddress {
    return {
      address: Address.initialize(),
      phone: "",
      email: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<BillingAddress>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.address) {
      writer.writeMessage(1, msg.address, Address._writeMessage);
    }
    if (msg.phone) {
      writer.writeString(2, msg.phone);
    }
    if (msg.email) {
      writer.writeString(3, msg.email);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: BillingAddress,
    reader: protoscript.BinaryReader,
  ): BillingAddress {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          reader.readMessage(msg.address, Address._readMessage);
          break;
        }
        case 2: {
          msg.phone = reader.readString();
          break;
        }
        case 3: {
          msg.email = reader.readString();
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

export const OrderStatusJSON = {
  Pending: "Pending",
  Processing: "Processing",
  OnHold: "OnHold",
  Completed: "Completed",
  Cancelled: "Cancelled",
  Refunded: "Refunded",
  Failed: "Failed",
  /**
   * @private
   */
  _fromInt: function (i: number): OrderStatus {
    switch (i) {
      case 0: {
        return "Pending";
      }
      case 1: {
        return "Processing";
      }
      case 2: {
        return "OnHold";
      }
      case 3: {
        return "Completed";
      }
      case 4: {
        return "Cancelled";
      }
      case 5: {
        return "Refunded";
      }
      case 6: {
        return "Failed";
      }
      // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
      default: {
        return i as unknown as OrderStatus;
      }
    }
  },
  /**
   * @private
   */
  _toInt: function (i: OrderStatus): number {
    switch (i) {
      case "Pending": {
        return 0;
      }
      case "Processing": {
        return 1;
      }
      case "OnHold": {
        return 2;
      }
      case "Completed": {
        return 3;
      }
      case "Cancelled": {
        return 4;
      }
      case "Refunded": {
        return 5;
      }
      case "Failed": {
        return 6;
      }
      // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
      default: {
        return i as unknown as number;
      }
    }
  },
} as const;

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
      auditEntry: auditEntry.EntryJSON.initialize(),
      number: 0n,
      total: 0n,
      discountTotal: 0n,
      shippingTotal: 0n,
      userID: "",
      billingAddress: BillingAddressJSON.initialize(),
      shippingAddress: AddressJSON.initialize(),
      transactionID: "",
      datePaid: "",
      dateCompleted: "",
      cartHash: "",
      lineItems: [],
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
    if (msg.auditEntry) {
      const _auditEntry_ = auditEntry.EntryJSON._writeMessage(msg.auditEntry);
      if (Object.keys(_auditEntry_).length > 0) {
        json["auditEntry"] = _auditEntry_;
      }
    }
    if (msg.number) {
      json["number"] = String(msg.number);
    }
    if (msg.total) {
      json["total"] = String(msg.total);
    }
    if (msg.discountTotal) {
      json["discountTotal"] = String(msg.discountTotal);
    }
    if (msg.shippingTotal) {
      json["shippingTotal"] = String(msg.shippingTotal);
    }
    if (msg.userID) {
      json["userID"] = msg.userID;
    }
    if (msg.billingAddress) {
      const _billingAddress_ = BillingAddressJSON._writeMessage(
        msg.billingAddress,
      );
      if (Object.keys(_billingAddress_).length > 0) {
        json["billingAddress"] = _billingAddress_;
      }
    }
    if (msg.shippingAddress) {
      const _shippingAddress_ = AddressJSON._writeMessage(msg.shippingAddress);
      if (Object.keys(_shippingAddress_).length > 0) {
        json["shippingAddress"] = _shippingAddress_;
      }
    }
    if (msg.transactionID) {
      json["transactionID"] = msg.transactionID;
    }
    if (msg.datePaid) {
      json["datePaid"] = msg.datePaid;
    }
    if (msg.dateCompleted) {
      json["dateCompleted"] = msg.dateCompleted;
    }
    if (msg.cartHash) {
      json["cartHash"] = msg.cartHash;
    }
    if (msg.lineItems?.length) {
      json["lineItems"] = msg.lineItems.map(LineItemJSON._writeMessage);
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
    const _auditEntry_ = json["auditEntry"];
    if (_auditEntry_) {
      auditEntry.EntryJSON._readMessage(msg.auditEntry, _auditEntry_);
    }
    const _number_ = json["number"];
    if (_number_) {
      msg.number = BigInt(_number_);
    }
    const _total_ = json["total"];
    if (_total_) {
      msg.total = BigInt(_total_);
    }
    const _discountTotal_ = json["discountTotal"];
    if (_discountTotal_) {
      msg.discountTotal = BigInt(_discountTotal_);
    }
    const _shippingTotal_ = json["shippingTotal"];
    if (_shippingTotal_) {
      msg.shippingTotal = BigInt(_shippingTotal_);
    }
    const _userID_ = json["userID"];
    if (_userID_) {
      msg.userID = _userID_;
    }
    const _billingAddress_ = json["billingAddress"];
    if (_billingAddress_) {
      BillingAddressJSON._readMessage(msg.billingAddress, _billingAddress_);
    }
    const _shippingAddress_ = json["shippingAddress"];
    if (_shippingAddress_) {
      AddressJSON._readMessage(msg.shippingAddress, _shippingAddress_);
    }
    const _transactionID_ = json["transactionID"];
    if (_transactionID_) {
      msg.transactionID = _transactionID_;
    }
    const _datePaid_ = json["datePaid"];
    if (_datePaid_) {
      msg.datePaid = _datePaid_;
    }
    const _dateCompleted_ = json["dateCompleted"];
    if (_dateCompleted_) {
      msg.dateCompleted = _dateCompleted_;
    }
    const _cartHash_ = json["cartHash"];
    if (_cartHash_) {
      msg.cartHash = _cartHash_;
    }
    const _lineItems_ = json["lineItems"];
    if (_lineItems_) {
      for (const item of _lineItems_) {
        const m = LineItemJSON.initialize();
        LineItemJSON._readMessage(m, item);
        msg.lineItems.push(m);
      }
    }
    return msg;
  },
};

export const LineItemJSON = {
  /**
   * Serializes LineItem to JSON.
   */
  encode: function (msg: PartialDeep<LineItem>): string {
    return JSON.stringify(LineItemJSON._writeMessage(msg));
  },

  /**
   * Deserializes LineItem from JSON.
   */
  decode: function (json: string): LineItem {
    return LineItemJSON._readMessage(
      LineItemJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes LineItem with all fields set to their default value.
   */
  initialize: function (msg?: Partial<LineItem>): LineItem {
    return {
      uid: "",
      productName: "",
      productID: "",
      variationID: "",
      quantity: 0n,
      subtotal: 0n,
      subtotalTax: 0n,
      total: 0n,
      totalTax: 0n,
      sku: "",
      price: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<LineItem>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.uid) {
      json["uid"] = msg.uid;
    }
    if (msg.productName) {
      json["productName"] = msg.productName;
    }
    if (msg.productID) {
      json["productID"] = msg.productID;
    }
    if (msg.variationID) {
      json["variationID"] = msg.variationID;
    }
    if (msg.quantity) {
      json["quantity"] = String(msg.quantity);
    }
    if (msg.subtotal) {
      json["subtotal"] = String(msg.subtotal);
    }
    if (msg.subtotalTax) {
      json["subtotalTax"] = String(msg.subtotalTax);
    }
    if (msg.total) {
      json["total"] = String(msg.total);
    }
    if (msg.totalTax) {
      json["totalTax"] = String(msg.totalTax);
    }
    if (msg.sku) {
      json["sku"] = msg.sku;
    }
    if (msg.price) {
      json["price"] = msg.price;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: LineItem, json: any): LineItem {
    const _uid_ = json["uid"];
    if (_uid_) {
      msg.uid = _uid_;
    }
    const _productName_ = json["productName"];
    if (_productName_) {
      msg.productName = _productName_;
    }
    const _productID_ = json["productID"];
    if (_productID_) {
      msg.productID = _productID_;
    }
    const _variationID_ = json["variationID"];
    if (_variationID_) {
      msg.variationID = _variationID_;
    }
    const _quantity_ = json["quantity"];
    if (_quantity_) {
      msg.quantity = BigInt(_quantity_);
    }
    const _subtotal_ = json["subtotal"];
    if (_subtotal_) {
      msg.subtotal = BigInt(_subtotal_);
    }
    const _subtotalTax_ = json["subtotalTax"];
    if (_subtotalTax_) {
      msg.subtotalTax = BigInt(_subtotalTax_);
    }
    const _total_ = json["total"];
    if (_total_) {
      msg.total = BigInt(_total_);
    }
    const _totalTax_ = json["totalTax"];
    if (_totalTax_) {
      msg.totalTax = BigInt(_totalTax_);
    }
    const _sku_ = json["sku"];
    if (_sku_) {
      msg.sku = _sku_;
    }
    const _price_ = json["price"];
    if (_price_) {
      msg.price = _price_;
    }
    return msg;
  },
};

export const AddressJSON = {
  /**
   * Serializes Address to JSON.
   */
  encode: function (msg: PartialDeep<Address>): string {
    return JSON.stringify(AddressJSON._writeMessage(msg));
  },

  /**
   * Deserializes Address from JSON.
   */
  decode: function (json: string): Address {
    return AddressJSON._readMessage(AddressJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Address with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Address>): Address {
    return {
      firstName: "",
      lastName: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Address>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.firstName) {
      json["firstName"] = msg.firstName;
    }
    if (msg.lastName) {
      json["lastName"] = msg.lastName;
    }
    if (msg.company) {
      json["company"] = msg.company;
    }
    if (msg.address1) {
      json["address1"] = msg.address1;
    }
    if (msg.address2) {
      json["address2"] = msg.address2;
    }
    if (msg.city) {
      json["city"] = msg.city;
    }
    if (msg.state) {
      json["state"] = msg.state;
    }
    if (msg.postalCode) {
      json["postalCode"] = msg.postalCode;
    }
    if (msg.country) {
      json["country"] = msg.country;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Address, json: any): Address {
    const _firstName_ = json["firstName"];
    if (_firstName_) {
      msg.firstName = _firstName_;
    }
    const _lastName_ = json["lastName"];
    if (_lastName_) {
      msg.lastName = _lastName_;
    }
    const _company_ = json["company"];
    if (_company_) {
      msg.company = _company_;
    }
    const _address1_ = json["address1"];
    if (_address1_) {
      msg.address1 = _address1_;
    }
    const _address2_ = json["address2"];
    if (_address2_) {
      msg.address2 = _address2_;
    }
    const _city_ = json["city"];
    if (_city_) {
      msg.city = _city_;
    }
    const _state_ = json["state"];
    if (_state_) {
      msg.state = _state_;
    }
    const _postalCode_ = json["postalCode"];
    if (_postalCode_) {
      msg.postalCode = _postalCode_;
    }
    const _country_ = json["country"];
    if (_country_) {
      msg.country = _country_;
    }
    return msg;
  },
};

export const BillingAddressJSON = {
  /**
   * Serializes BillingAddress to JSON.
   */
  encode: function (msg: PartialDeep<BillingAddress>): string {
    return JSON.stringify(BillingAddressJSON._writeMessage(msg));
  },

  /**
   * Deserializes BillingAddress from JSON.
   */
  decode: function (json: string): BillingAddress {
    return BillingAddressJSON._readMessage(
      BillingAddressJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes BillingAddress with all fields set to their default value.
   */
  initialize: function (msg?: Partial<BillingAddress>): BillingAddress {
    return {
      address: AddressJSON.initialize(),
      phone: "",
      email: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<BillingAddress>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.address) {
      const _address_ = AddressJSON._writeMessage(msg.address);
      if (Object.keys(_address_).length > 0) {
        json["address"] = _address_;
      }
    }
    if (msg.phone) {
      json["phone"] = msg.phone;
    }
    if (msg.email) {
      json["email"] = msg.email;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: BillingAddress, json: any): BillingAddress {
    const _address_ = json["address"];
    if (_address_) {
      AddressJSON._readMessage(msg.address, _address_);
    }
    const _phone_ = json["phone"];
    if (_phone_) {
      msg.phone = _phone_;
    }
    const _email_ = json["email"];
    if (_email_) {
      msg.email = _email_;
    }
    return msg;
  },
};
