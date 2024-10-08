// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: yoco/payment.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

//========================================//
//                 Types                  //
//========================================//

export interface Payment {
  id: string;
  status: string;
  createdDate: string;
  amount: bigint;
  currency: string;
  paymentMethodDetails: Payment.PaymentMethodDetails;
  paymentMethod: string;
  customer: string;
  error: Payment.Error;
  mode: string;
  metadata: Record<string, Payment.Metadata["value"] | undefined>;
}

export declare namespace Payment {
  export interface PaymentMethodDetails {
    type: string;
    card: Card;
  }

  export interface Error {
    type: string;
    code: string;
    description: string;
  }

  interface Metadata {
    key: string;
    value: string;
  }
}

export interface Card {
  cardHolder: string;
  maskedCard: string;
  expiryMonth: number;
  expiryYear: number;
  scheme: string;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Payment = {
  /**
   * Serializes Payment to protobuf.
   */
  encode: function (msg: PartialDeep<Payment>): Uint8Array {
    return Payment._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Payment from protobuf.
   */
  decode: function (bytes: ByteSource): Payment {
    return Payment._readMessage(
      Payment.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Payment with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Payment>): Payment {
    return {
      id: "",
      status: "",
      createdDate: "",
      amount: 0n,
      currency: "",
      paymentMethodDetails: Payment.PaymentMethodDetails.initialize(),
      paymentMethod: "",
      customer: "",
      error: Payment.Error.initialize(),
      mode: "",
      metadata: {},
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Payment>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    if (msg.status) {
      writer.writeString(2, msg.status);
    }
    if (msg.createdDate) {
      writer.writeString(3, msg.createdDate);
    }
    if (msg.amount) {
      writer.writeInt64String(4, msg.amount.toString() as any);
    }
    if (msg.currency) {
      writer.writeString(5, msg.currency);
    }
    if (msg.paymentMethodDetails) {
      writer.writeMessage(
        6,
        msg.paymentMethodDetails,
        Payment.PaymentMethodDetails._writeMessage,
      );
    }
    if (msg.paymentMethod) {
      writer.writeString(7, msg.paymentMethod);
    }
    if (msg.customer) {
      writer.writeString(8, msg.customer);
    }
    if (msg.error) {
      writer.writeMessage(9, msg.error, Payment.Error._writeMessage);
    }
    if (msg.mode) {
      writer.writeString(10, msg.mode);
    }
    if (msg.metadata) {
      writer.writeRepeatedMessage(
        11,
        Object.entries(msg.metadata).map(([key, value]) => ({
          key: key as any,
          value: value as any,
        })) as any,
        Payment.Metadata._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: Payment,
    reader: protoscript.BinaryReader,
  ): Payment {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
          break;
        }
        case 2: {
          msg.status = reader.readString();
          break;
        }
        case 3: {
          msg.createdDate = reader.readString();
          break;
        }
        case 4: {
          msg.amount = BigInt(reader.readInt64String());
          break;
        }
        case 5: {
          msg.currency = reader.readString();
          break;
        }
        case 6: {
          reader.readMessage(
            msg.paymentMethodDetails,
            Payment.PaymentMethodDetails._readMessage,
          );
          break;
        }
        case 7: {
          msg.paymentMethod = reader.readString();
          break;
        }
        case 8: {
          msg.customer = reader.readString();
          break;
        }
        case 9: {
          reader.readMessage(msg.error, Payment.Error._readMessage);
          break;
        }
        case 10: {
          msg.mode = reader.readString();
          break;
        }
        case 11: {
          const map = {} as Payment.Metadata;
          reader.readMessage(map, Payment.Metadata._readMessage);
          msg.metadata[map.key.toString()] = map.value;
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

  PaymentMethodDetails: {
    /**
     * Serializes Payment.PaymentMethodDetails to protobuf.
     */
    encode: function (
      msg: PartialDeep<Payment.PaymentMethodDetails>,
    ): Uint8Array {
      return Payment.PaymentMethodDetails._writeMessage(
        msg,
        new protoscript.BinaryWriter(),
      ).getResultBuffer();
    },

    /**
     * Deserializes Payment.PaymentMethodDetails from protobuf.
     */
    decode: function (bytes: ByteSource): Payment.PaymentMethodDetails {
      return Payment.PaymentMethodDetails._readMessage(
        Payment.PaymentMethodDetails.initialize(),
        new protoscript.BinaryReader(bytes),
      );
    },

    /**
     * Initializes Payment.PaymentMethodDetails with all fields set to their default value.
     */
    initialize: function (
      msg?: Partial<Payment.PaymentMethodDetails>,
    ): Payment.PaymentMethodDetails {
      return {
        type: "",
        card: Card.initialize(),
        ...msg,
      };
    },

    /**
     * @private
     */
    _writeMessage: function (
      msg: PartialDeep<Payment.PaymentMethodDetails>,
      writer: protoscript.BinaryWriter,
    ): protoscript.BinaryWriter {
      if (msg.type) {
        writer.writeString(1, msg.type);
      }
      if (msg.card) {
        writer.writeMessage(2, msg.card, Card._writeMessage);
      }
      return writer;
    },

    /**
     * @private
     */
    _readMessage: function (
      msg: Payment.PaymentMethodDetails,
      reader: protoscript.BinaryReader,
    ): Payment.PaymentMethodDetails {
      while (reader.nextField()) {
        const field = reader.getFieldNumber();
        switch (field) {
          case 1: {
            msg.type = reader.readString();
            break;
          }
          case 2: {
            reader.readMessage(msg.card, Card._readMessage);
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
  },

  Error: {
    /**
     * Serializes Payment.Error to protobuf.
     */
    encode: function (msg: PartialDeep<Payment.Error>): Uint8Array {
      return Payment.Error._writeMessage(
        msg,
        new protoscript.BinaryWriter(),
      ).getResultBuffer();
    },

    /**
     * Deserializes Payment.Error from protobuf.
     */
    decode: function (bytes: ByteSource): Payment.Error {
      return Payment.Error._readMessage(
        Payment.Error.initialize(),
        new protoscript.BinaryReader(bytes),
      );
    },

    /**
     * Initializes Payment.Error with all fields set to their default value.
     */
    initialize: function (msg?: Partial<Payment.Error>): Payment.Error {
      return {
        type: "",
        code: "",
        description: "",
        ...msg,
      };
    },

    /**
     * @private
     */
    _writeMessage: function (
      msg: PartialDeep<Payment.Error>,
      writer: protoscript.BinaryWriter,
    ): protoscript.BinaryWriter {
      if (msg.type) {
        writer.writeString(1, msg.type);
      }
      if (msg.code) {
        writer.writeString(2, msg.code);
      }
      if (msg.description) {
        writer.writeString(3, msg.description);
      }
      return writer;
    },

    /**
     * @private
     */
    _readMessage: function (
      msg: Payment.Error,
      reader: protoscript.BinaryReader,
    ): Payment.Error {
      while (reader.nextField()) {
        const field = reader.getFieldNumber();
        switch (field) {
          case 1: {
            msg.type = reader.readString();
            break;
          }
          case 2: {
            msg.code = reader.readString();
            break;
          }
          case 3: {
            msg.description = reader.readString();
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
  },

  Metadata: {
    /**
     * @private
     */
    _writeMessage: function (
      msg: PartialDeep<Payment.Metadata>,
      writer: protoscript.BinaryWriter,
    ): protoscript.BinaryWriter {
      if (msg.key) {
        writer.writeString(1, msg.key);
      }
      if (msg.value) {
        writer.writeString(2, msg.value);
      }
      return writer;
    },

    /**
     * @private
     */
    _readMessage: function (
      msg: Payment.Metadata,
      reader: protoscript.BinaryReader,
    ): Payment.Metadata {
      while (reader.nextField()) {
        const field = reader.getFieldNumber();
        switch (field) {
          case 1: {
            msg.key = reader.readString();
            break;
          }
          case 2: {
            msg.value = reader.readString();
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
  },
};

export const Card = {
  /**
   * Serializes Card to protobuf.
   */
  encode: function (msg: PartialDeep<Card>): Uint8Array {
    return Card._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Card from protobuf.
   */
  decode: function (bytes: ByteSource): Card {
    return Card._readMessage(
      Card.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Card with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Card>): Card {
    return {
      cardHolder: "",
      maskedCard: "",
      expiryMonth: 0,
      expiryYear: 0,
      scheme: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Card>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.cardHolder) {
      writer.writeString(1, msg.cardHolder);
    }
    if (msg.maskedCard) {
      writer.writeString(2, msg.maskedCard);
    }
    if (msg.expiryMonth) {
      writer.writeInt32(3, msg.expiryMonth);
    }
    if (msg.expiryYear) {
      writer.writeInt32(4, msg.expiryYear);
    }
    if (msg.scheme) {
      writer.writeString(5, msg.scheme);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Card, reader: protoscript.BinaryReader): Card {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.cardHolder = reader.readString();
          break;
        }
        case 2: {
          msg.maskedCard = reader.readString();
          break;
        }
        case 3: {
          msg.expiryMonth = reader.readInt32();
          break;
        }
        case 4: {
          msg.expiryYear = reader.readInt32();
          break;
        }
        case 5: {
          msg.scheme = reader.readString();
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

export const PaymentJSON = {
  /**
   * Serializes Payment to JSON.
   */
  encode: function (msg: PartialDeep<Payment>): string {
    return JSON.stringify(PaymentJSON._writeMessage(msg));
  },

  /**
   * Deserializes Payment from JSON.
   */
  decode: function (json: string): Payment {
    return PaymentJSON._readMessage(PaymentJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Payment with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Payment>): Payment {
    return {
      id: "",
      status: "",
      createdDate: "",
      amount: 0n,
      currency: "",
      paymentMethodDetails: PaymentJSON.PaymentMethodDetails.initialize(),
      paymentMethod: "",
      customer: "",
      error: PaymentJSON.Error.initialize(),
      mode: "",
      metadata: {},
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Payment>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    if (msg.status) {
      json["status"] = msg.status;
    }
    if (msg.createdDate) {
      json["createdDate"] = msg.createdDate;
    }
    if (msg.amount) {
      json["amount"] = String(msg.amount);
    }
    if (msg.currency) {
      json["currency"] = msg.currency;
    }
    if (msg.paymentMethodDetails) {
      const _paymentMethodDetails_ =
        PaymentJSON.PaymentMethodDetails._writeMessage(
          msg.paymentMethodDetails,
        );
      if (Object.keys(_paymentMethodDetails_).length > 0) {
        json["paymentMethodDetails"] = _paymentMethodDetails_;
      }
    }
    if (msg.paymentMethod) {
      json["paymentMethod"] = msg.paymentMethod;
    }
    if (msg.customer) {
      json["customer"] = msg.customer;
    }
    if (msg.error) {
      const _error_ = PaymentJSON.Error._writeMessage(msg.error);
      if (Object.keys(_error_).length > 0) {
        json["error"] = _error_;
      }
    }
    if (msg.mode) {
      json["mode"] = msg.mode;
    }
    if (msg.metadata) {
      const _metadata_ = Object.fromEntries(
        Object.entries(msg.metadata)
          .map(([key, value]) => ({ key: key as any, value: value as any }))
          .map(PaymentJSON.Metadata._writeMessage)
          .map(({ key, value }) => [key, value]),
      );
      if (Object.keys(_metadata_).length > 0) {
        json["metadata"] = _metadata_;
      }
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Payment, json: any): Payment {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    const _status_ = json["status"];
    if (_status_) {
      msg.status = _status_;
    }
    const _createdDate_ = json["createdDate"];
    if (_createdDate_) {
      msg.createdDate = _createdDate_;
    }
    const _amount_ = json["amount"];
    if (_amount_) {
      msg.amount = BigInt(_amount_);
    }
    const _currency_ = json["currency"];
    if (_currency_) {
      msg.currency = _currency_;
    }
    const _paymentMethodDetails_ = json["paymentMethodDetails"];
    if (_paymentMethodDetails_) {
      PaymentJSON.PaymentMethodDetails._readMessage(
        msg.paymentMethodDetails,
        _paymentMethodDetails_,
      );
    }
    const _paymentMethod_ = json["paymentMethod"];
    if (_paymentMethod_) {
      msg.paymentMethod = _paymentMethod_;
    }
    const _customer_ = json["customer"];
    if (_customer_) {
      msg.customer = _customer_;
    }
    const _error_ = json["error"];
    if (_error_) {
      PaymentJSON.Error._readMessage(msg.error, _error_);
    }
    const _mode_ = json["mode"];
    if (_mode_) {
      msg.mode = _mode_;
    }
    const _metadata_ = json["metadata"];
    if (_metadata_) {
      msg.metadata = Object.fromEntries(
        Object.entries(_metadata_)
          .map(([key, value]) => ({ key: key as any, value: value as any }))
          .map(PaymentJSON.Metadata._readMessage)
          .map(({ key, value }) => [key, value]),
      );
    }
    return msg;
  },

  PaymentMethodDetails: {
    /**
     * Serializes Payment.PaymentMethodDetails to JSON.
     */
    encode: function (msg: PartialDeep<Payment.PaymentMethodDetails>): string {
      return JSON.stringify(
        PaymentJSON.PaymentMethodDetails._writeMessage(msg),
      );
    },

    /**
     * Deserializes Payment.PaymentMethodDetails from JSON.
     */
    decode: function (json: string): Payment.PaymentMethodDetails {
      return PaymentJSON.PaymentMethodDetails._readMessage(
        PaymentJSON.PaymentMethodDetails.initialize(),
        JSON.parse(json),
      );
    },

    /**
     * Initializes Payment.PaymentMethodDetails with all fields set to their default value.
     */
    initialize: function (
      msg?: Partial<Payment.PaymentMethodDetails>,
    ): Payment.PaymentMethodDetails {
      return {
        type: "",
        card: CardJSON.initialize(),
        ...msg,
      };
    },

    /**
     * @private
     */
    _writeMessage: function (
      msg: PartialDeep<Payment.PaymentMethodDetails>,
    ): Record<string, unknown> {
      const json: Record<string, unknown> = {};
      if (msg.type) {
        json["type"] = msg.type;
      }
      if (msg.card) {
        const _card_ = CardJSON._writeMessage(msg.card);
        if (Object.keys(_card_).length > 0) {
          json["card"] = _card_;
        }
      }
      return json;
    },

    /**
     * @private
     */
    _readMessage: function (
      msg: Payment.PaymentMethodDetails,
      json: any,
    ): Payment.PaymentMethodDetails {
      const _type_ = json["type"];
      if (_type_) {
        msg.type = _type_;
      }
      const _card_ = json["card"];
      if (_card_) {
        CardJSON._readMessage(msg.card, _card_);
      }
      return msg;
    },
  },

  Error: {
    /**
     * Serializes Payment.Error to JSON.
     */
    encode: function (msg: PartialDeep<Payment.Error>): string {
      return JSON.stringify(PaymentJSON.Error._writeMessage(msg));
    },

    /**
     * Deserializes Payment.Error from JSON.
     */
    decode: function (json: string): Payment.Error {
      return PaymentJSON.Error._readMessage(
        PaymentJSON.Error.initialize(),
        JSON.parse(json),
      );
    },

    /**
     * Initializes Payment.Error with all fields set to their default value.
     */
    initialize: function (msg?: Partial<Payment.Error>): Payment.Error {
      return {
        type: "",
        code: "",
        description: "",
        ...msg,
      };
    },

    /**
     * @private
     */
    _writeMessage: function (
      msg: PartialDeep<Payment.Error>,
    ): Record<string, unknown> {
      const json: Record<string, unknown> = {};
      if (msg.type) {
        json["type"] = msg.type;
      }
      if (msg.code) {
        json["code"] = msg.code;
      }
      if (msg.description) {
        json["description"] = msg.description;
      }
      return json;
    },

    /**
     * @private
     */
    _readMessage: function (msg: Payment.Error, json: any): Payment.Error {
      const _type_ = json["type"];
      if (_type_) {
        msg.type = _type_;
      }
      const _code_ = json["code"];
      if (_code_) {
        msg.code = _code_;
      }
      const _description_ = json["description"];
      if (_description_) {
        msg.description = _description_;
      }
      return msg;
    },
  },

  Metadata: {
    /**
     * @private
     */
    _writeMessage: function (
      msg: PartialDeep<Payment.Metadata>,
    ): Record<string, unknown> {
      const json: Record<string, unknown> = {};
      if (msg.key) {
        json["key"] = msg.key;
      }
      if (msg.value) {
        json["value"] = msg.value;
      }
      return json;
    },

    /**
     * @private
     */
    _readMessage: function (
      msg: Payment.Metadata,
      json: any,
    ): Payment.Metadata {
      const _key_ = json["key"];
      if (_key_) {
        msg.key = _key_;
      }
      const _value_ = json["value"];
      if (_value_) {
        msg.value = _value_;
      }
      return msg;
    },
  },
};

export const CardJSON = {
  /**
   * Serializes Card to JSON.
   */
  encode: function (msg: PartialDeep<Card>): string {
    return JSON.stringify(CardJSON._writeMessage(msg));
  },

  /**
   * Deserializes Card from JSON.
   */
  decode: function (json: string): Card {
    return CardJSON._readMessage(CardJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Card with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Card>): Card {
    return {
      cardHolder: "",
      maskedCard: "",
      expiryMonth: 0,
      expiryYear: 0,
      scheme: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Card>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.cardHolder) {
      json["cardHolder"] = msg.cardHolder;
    }
    if (msg.maskedCard) {
      json["maskedCard"] = msg.maskedCard;
    }
    if (msg.expiryMonth) {
      json["expiryMonth"] = msg.expiryMonth;
    }
    if (msg.expiryYear) {
      json["expiryYear"] = msg.expiryYear;
    }
    if (msg.scheme) {
      json["scheme"] = msg.scheme;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Card, json: any): Card {
    const _cardHolder_ = json["cardHolder"];
    if (_cardHolder_) {
      msg.cardHolder = _cardHolder_;
    }
    const _maskedCard_ = json["maskedCard"];
    if (_maskedCard_) {
      msg.maskedCard = _maskedCard_;
    }
    const _expiryMonth_ = json["expiryMonth"];
    if (_expiryMonth_) {
      msg.expiryMonth = protoscript.parseNumber(_expiryMonth_);
    }
    const _expiryYear_ = json["expiryYear"];
    if (_expiryYear_) {
      msg.expiryYear = protoscript.parseNumber(_expiryYear_);
    }
    const _scheme_ = json["scheme"];
    if (_scheme_) {
      msg.scheme = _scheme_;
    }
    return msg;
  },
};
