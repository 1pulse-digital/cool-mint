// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: payfast/payment.service.proto
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

export interface GeneratePaymentIdentifierRequest {
  nameFirst: string;
  nameLast: string;
  emailAddress: string;
  cellNumber: string;
  mPaymentId: string;
  amount: number;
  itemName: string;
  itemDescription: string;
}

export interface GeneratePaymentIdentifierResponse {
  id: string;
}

export interface NotifyRequest {
  mPaymentId: string;
  pfPaymentId: string;
  paymentStatus: string;
  itemName: string;
  itemDescription: string;
  amountGross: number;
  amountFee: number;
  amountNet: number;
  nameFirst: string;
  nameLast: string;
  emailAddress: string;
  cellNumber: string;
  merchantId: string;
  token: string;
  billingDate: string;
  signature: string;
}

export interface NotifyResponse {}

//========================================//
//     PaymentService Protobuf Client     //
//========================================//

/**
 * GeneratePaymentIdentifier will get payment identifier to use for checkout
 */
export async function GeneratePaymentIdentifier(
  generatePaymentIdentifierRequest: GeneratePaymentIdentifierRequest,
  config?: ClientConfiguration,
): Promise<GeneratePaymentIdentifierResponse> {
  const response = await PBrequest(
    "/commerce.PaymentService/GeneratePaymentIdentifier",
    GeneratePaymentIdentifierRequest.encode(generatePaymentIdentifierRequest),
    config,
  );
  return GeneratePaymentIdentifierResponse.decode(response);
}

export async function HandleNotify(
  notifyRequest: NotifyRequest,
  config?: ClientConfiguration,
): Promise<NotifyResponse> {
  const response = await PBrequest(
    "/commerce.PaymentService/HandleNotify",
    NotifyRequest.encode(notifyRequest),
    config,
  );
  return NotifyResponse.decode(response);
}

//========================================//
//       PaymentService JSON Client       //
//========================================//

/**
 * GeneratePaymentIdentifier will get payment identifier to use for checkout
 */
export async function GeneratePaymentIdentifierJSON(
  generatePaymentIdentifierRequest: GeneratePaymentIdentifierRequest,
  config?: ClientConfiguration,
): Promise<GeneratePaymentIdentifierResponse> {
  const response = await JSONrequest(
    "/commerce.PaymentService/GeneratePaymentIdentifier",
    GeneratePaymentIdentifierRequestJSON.encode(
      generatePaymentIdentifierRequest,
    ),
    config,
  );
  return GeneratePaymentIdentifierResponseJSON.decode(response);
}

export async function HandleNotifyJSON(
  notifyRequest: NotifyRequest,
  config?: ClientConfiguration,
): Promise<NotifyResponse> {
  const response = await JSONrequest(
    "/commerce.PaymentService/HandleNotify",
    NotifyRequestJSON.encode(notifyRequest),
    config,
  );
  return NotifyResponseJSON.decode(response);
}

//========================================//
//             PaymentService             //
//========================================//

export interface PaymentService<Context = unknown> {
  /**
   * GeneratePaymentIdentifier will get payment identifier to use for checkout
   */
  GeneratePaymentIdentifier: (
    generatePaymentIdentifierRequest: GeneratePaymentIdentifierRequest,
    context: Context,
  ) =>
    | Promise<GeneratePaymentIdentifierResponse>
    | GeneratePaymentIdentifierResponse;
  HandleNotify: (
    notifyRequest: NotifyRequest,
    context: Context,
  ) => Promise<NotifyResponse> | NotifyResponse;
}

export function createPaymentService<Context>(
  service: PaymentService<Context>,
) {
  return {
    name: "commerce.PaymentService",
    methods: {
      GeneratePaymentIdentifier: {
        name: "GeneratePaymentIdentifier",
        handler: service.GeneratePaymentIdentifier,
        input: {
          protobuf: GeneratePaymentIdentifierRequest,
          json: GeneratePaymentIdentifierRequestJSON,
        },
        output: {
          protobuf: GeneratePaymentIdentifierResponse,
          json: GeneratePaymentIdentifierResponseJSON,
        },
      },
      HandleNotify: {
        name: "HandleNotify",
        handler: service.HandleNotify,
        input: { protobuf: NotifyRequest, json: NotifyRequestJSON },
        output: { protobuf: NotifyResponse, json: NotifyResponseJSON },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const GeneratePaymentIdentifierRequest = {
  /**
   * Serializes GeneratePaymentIdentifierRequest to protobuf.
   */
  encode: function (
    msg: PartialDeep<GeneratePaymentIdentifierRequest>,
  ): Uint8Array {
    return GeneratePaymentIdentifierRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GeneratePaymentIdentifierRequest from protobuf.
   */
  decode: function (bytes: ByteSource): GeneratePaymentIdentifierRequest {
    return GeneratePaymentIdentifierRequest._readMessage(
      GeneratePaymentIdentifierRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GeneratePaymentIdentifierRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GeneratePaymentIdentifierRequest>,
  ): GeneratePaymentIdentifierRequest {
    return {
      nameFirst: "",
      nameLast: "",
      emailAddress: "",
      cellNumber: "",
      mPaymentId: "",
      amount: 0,
      itemName: "",
      itemDescription: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GeneratePaymentIdentifierRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.nameFirst) {
      writer.writeString(4, msg.nameFirst);
    }
    if (msg.nameLast) {
      writer.writeString(5, msg.nameLast);
    }
    if (msg.emailAddress) {
      writer.writeString(6, msg.emailAddress);
    }
    if (msg.cellNumber) {
      writer.writeString(7, msg.cellNumber);
    }
    if (msg.mPaymentId) {
      writer.writeString(8, msg.mPaymentId);
    }
    if (msg.amount) {
      writer.writeDouble(9, msg.amount);
    }
    if (msg.itemName) {
      writer.writeString(10, msg.itemName);
    }
    if (msg.itemDescription) {
      writer.writeString(11, msg.itemDescription);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GeneratePaymentIdentifierRequest,
    reader: protoscript.BinaryReader,
  ): GeneratePaymentIdentifierRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 4: {
          msg.nameFirst = reader.readString();
          break;
        }
        case 5: {
          msg.nameLast = reader.readString();
          break;
        }
        case 6: {
          msg.emailAddress = reader.readString();
          break;
        }
        case 7: {
          msg.cellNumber = reader.readString();
          break;
        }
        case 8: {
          msg.mPaymentId = reader.readString();
          break;
        }
        case 9: {
          msg.amount = reader.readDouble();
          break;
        }
        case 10: {
          msg.itemName = reader.readString();
          break;
        }
        case 11: {
          msg.itemDescription = reader.readString();
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

export const GeneratePaymentIdentifierResponse = {
  /**
   * Serializes GeneratePaymentIdentifierResponse to protobuf.
   */
  encode: function (
    msg: PartialDeep<GeneratePaymentIdentifierResponse>,
  ): Uint8Array {
    return GeneratePaymentIdentifierResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GeneratePaymentIdentifierResponse from protobuf.
   */
  decode: function (bytes: ByteSource): GeneratePaymentIdentifierResponse {
    return GeneratePaymentIdentifierResponse._readMessage(
      GeneratePaymentIdentifierResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GeneratePaymentIdentifierResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GeneratePaymentIdentifierResponse>,
  ): GeneratePaymentIdentifierResponse {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GeneratePaymentIdentifierResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GeneratePaymentIdentifierResponse,
    reader: protoscript.BinaryReader,
  ): GeneratePaymentIdentifierResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
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

export const NotifyRequest = {
  /**
   * Serializes NotifyRequest to protobuf.
   */
  encode: function (msg: PartialDeep<NotifyRequest>): Uint8Array {
    return NotifyRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes NotifyRequest from protobuf.
   */
  decode: function (bytes: ByteSource): NotifyRequest {
    return NotifyRequest._readMessage(
      NotifyRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes NotifyRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<NotifyRequest>): NotifyRequest {
    return {
      mPaymentId: "",
      pfPaymentId: "",
      paymentStatus: "",
      itemName: "",
      itemDescription: "",
      amountGross: 0,
      amountFee: 0,
      amountNet: 0,
      nameFirst: "",
      nameLast: "",
      emailAddress: "",
      cellNumber: "",
      merchantId: "",
      token: "",
      billingDate: "",
      signature: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<NotifyRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.mPaymentId) {
      writer.writeString(1, msg.mPaymentId);
    }
    if (msg.pfPaymentId) {
      writer.writeString(2, msg.pfPaymentId);
    }
    if (msg.paymentStatus) {
      writer.writeString(3, msg.paymentStatus);
    }
    if (msg.itemName) {
      writer.writeString(4, msg.itemName);
    }
    if (msg.itemDescription) {
      writer.writeString(5, msg.itemDescription);
    }
    if (msg.amountGross) {
      writer.writeDouble(6, msg.amountGross);
    }
    if (msg.amountFee) {
      writer.writeDouble(7, msg.amountFee);
    }
    if (msg.amountNet) {
      writer.writeDouble(8, msg.amountNet);
    }
    if (msg.nameFirst) {
      writer.writeString(9, msg.nameFirst);
    }
    if (msg.nameLast) {
      writer.writeString(10, msg.nameLast);
    }
    if (msg.emailAddress) {
      writer.writeString(11, msg.emailAddress);
    }
    if (msg.cellNumber) {
      writer.writeString(12, msg.cellNumber);
    }
    if (msg.merchantId) {
      writer.writeString(13, msg.merchantId);
    }
    if (msg.token) {
      writer.writeString(14, msg.token);
    }
    if (msg.billingDate) {
      writer.writeString(15, msg.billingDate);
    }
    if (msg.signature) {
      writer.writeString(16, msg.signature);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: NotifyRequest,
    reader: protoscript.BinaryReader,
  ): NotifyRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.mPaymentId = reader.readString();
          break;
        }
        case 2: {
          msg.pfPaymentId = reader.readString();
          break;
        }
        case 3: {
          msg.paymentStatus = reader.readString();
          break;
        }
        case 4: {
          msg.itemName = reader.readString();
          break;
        }
        case 5: {
          msg.itemDescription = reader.readString();
          break;
        }
        case 6: {
          msg.amountGross = reader.readDouble();
          break;
        }
        case 7: {
          msg.amountFee = reader.readDouble();
          break;
        }
        case 8: {
          msg.amountNet = reader.readDouble();
          break;
        }
        case 9: {
          msg.nameFirst = reader.readString();
          break;
        }
        case 10: {
          msg.nameLast = reader.readString();
          break;
        }
        case 11: {
          msg.emailAddress = reader.readString();
          break;
        }
        case 12: {
          msg.cellNumber = reader.readString();
          break;
        }
        case 13: {
          msg.merchantId = reader.readString();
          break;
        }
        case 14: {
          msg.token = reader.readString();
          break;
        }
        case 15: {
          msg.billingDate = reader.readString();
          break;
        }
        case 16: {
          msg.signature = reader.readString();
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

export const NotifyResponse = {
  /**
   * Serializes NotifyResponse to protobuf.
   */
  encode: function (_msg?: PartialDeep<NotifyResponse>): Uint8Array {
    return new Uint8Array();
  },

  /**
   * Deserializes NotifyResponse from protobuf.
   */
  decode: function (_bytes?: ByteSource): NotifyResponse {
    return {};
  },

  /**
   * Initializes NotifyResponse with all fields set to their default value.
   */
  initialize: function (msg?: Partial<NotifyResponse>): NotifyResponse {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<NotifyResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    _msg: NotifyResponse,
    _reader: protoscript.BinaryReader,
  ): NotifyResponse {
    return _msg;
  },
};

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const GeneratePaymentIdentifierRequestJSON = {
  /**
   * Serializes GeneratePaymentIdentifierRequest to JSON.
   */
  encode: function (
    msg: PartialDeep<GeneratePaymentIdentifierRequest>,
  ): string {
    return JSON.stringify(
      GeneratePaymentIdentifierRequestJSON._writeMessage(msg),
    );
  },

  /**
   * Deserializes GeneratePaymentIdentifierRequest from JSON.
   */
  decode: function (json: string): GeneratePaymentIdentifierRequest {
    return GeneratePaymentIdentifierRequestJSON._readMessage(
      GeneratePaymentIdentifierRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GeneratePaymentIdentifierRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GeneratePaymentIdentifierRequest>,
  ): GeneratePaymentIdentifierRequest {
    return {
      nameFirst: "",
      nameLast: "",
      emailAddress: "",
      cellNumber: "",
      mPaymentId: "",
      amount: 0,
      itemName: "",
      itemDescription: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GeneratePaymentIdentifierRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.nameFirst) {
      json["nameFirst"] = msg.nameFirst;
    }
    if (msg.nameLast) {
      json["nameLast"] = msg.nameLast;
    }
    if (msg.emailAddress) {
      json["emailAddress"] = msg.emailAddress;
    }
    if (msg.cellNumber) {
      json["cellNumber"] = msg.cellNumber;
    }
    if (msg.mPaymentId) {
      json["mPaymentId"] = msg.mPaymentId;
    }
    if (msg.amount) {
      json["amount"] = msg.amount;
    }
    if (msg.itemName) {
      json["itemName"] = msg.itemName;
    }
    if (msg.itemDescription) {
      json["itemDescription"] = msg.itemDescription;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GeneratePaymentIdentifierRequest,
    json: any,
  ): GeneratePaymentIdentifierRequest {
    const _nameFirst_ = json["nameFirst"] ?? json["name_first"];
    if (_nameFirst_) {
      msg.nameFirst = _nameFirst_;
    }
    const _nameLast_ = json["nameLast"] ?? json["name_last"];
    if (_nameLast_) {
      msg.nameLast = _nameLast_;
    }
    const _emailAddress_ = json["emailAddress"] ?? json["email_address"];
    if (_emailAddress_) {
      msg.emailAddress = _emailAddress_;
    }
    const _cellNumber_ = json["cellNumber"] ?? json["cell_number"];
    if (_cellNumber_) {
      msg.cellNumber = _cellNumber_;
    }
    const _mPaymentId_ = json["mPaymentId"] ?? json["m_payment_id"];
    if (_mPaymentId_) {
      msg.mPaymentId = _mPaymentId_;
    }
    const _amount_ = json["amount"];
    if (_amount_) {
      msg.amount = protoscript.parseDouble(_amount_);
    }
    const _itemName_ = json["itemName"] ?? json["item_name"];
    if (_itemName_) {
      msg.itemName = _itemName_;
    }
    const _itemDescription_ =
      json["itemDescription"] ?? json["item_description"];
    if (_itemDescription_) {
      msg.itemDescription = _itemDescription_;
    }
    return msg;
  },
};

export const GeneratePaymentIdentifierResponseJSON = {
  /**
   * Serializes GeneratePaymentIdentifierResponse to JSON.
   */
  encode: function (
    msg: PartialDeep<GeneratePaymentIdentifierResponse>,
  ): string {
    return JSON.stringify(
      GeneratePaymentIdentifierResponseJSON._writeMessage(msg),
    );
  },

  /**
   * Deserializes GeneratePaymentIdentifierResponse from JSON.
   */
  decode: function (json: string): GeneratePaymentIdentifierResponse {
    return GeneratePaymentIdentifierResponseJSON._readMessage(
      GeneratePaymentIdentifierResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GeneratePaymentIdentifierResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GeneratePaymentIdentifierResponse>,
  ): GeneratePaymentIdentifierResponse {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GeneratePaymentIdentifierResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GeneratePaymentIdentifierResponse,
    json: any,
  ): GeneratePaymentIdentifierResponse {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    return msg;
  },
};

export const NotifyRequestJSON = {
  /**
   * Serializes NotifyRequest to JSON.
   */
  encode: function (msg: PartialDeep<NotifyRequest>): string {
    return JSON.stringify(NotifyRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes NotifyRequest from JSON.
   */
  decode: function (json: string): NotifyRequest {
    return NotifyRequestJSON._readMessage(
      NotifyRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes NotifyRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<NotifyRequest>): NotifyRequest {
    return {
      mPaymentId: "",
      pfPaymentId: "",
      paymentStatus: "",
      itemName: "",
      itemDescription: "",
      amountGross: 0,
      amountFee: 0,
      amountNet: 0,
      nameFirst: "",
      nameLast: "",
      emailAddress: "",
      cellNumber: "",
      merchantId: "",
      token: "",
      billingDate: "",
      signature: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<NotifyRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.mPaymentId) {
      json["mPaymentId"] = msg.mPaymentId;
    }
    if (msg.pfPaymentId) {
      json["pfPaymentId"] = msg.pfPaymentId;
    }
    if (msg.paymentStatus) {
      json["paymentStatus"] = msg.paymentStatus;
    }
    if (msg.itemName) {
      json["itemName"] = msg.itemName;
    }
    if (msg.itemDescription) {
      json["itemDescription"] = msg.itemDescription;
    }
    if (msg.amountGross) {
      json["amountGross"] = msg.amountGross;
    }
    if (msg.amountFee) {
      json["amountFee"] = msg.amountFee;
    }
    if (msg.amountNet) {
      json["amountNet"] = msg.amountNet;
    }
    if (msg.nameFirst) {
      json["nameFirst"] = msg.nameFirst;
    }
    if (msg.nameLast) {
      json["nameLast"] = msg.nameLast;
    }
    if (msg.emailAddress) {
      json["emailAddress"] = msg.emailAddress;
    }
    if (msg.cellNumber) {
      json["cellNumber"] = msg.cellNumber;
    }
    if (msg.merchantId) {
      json["merchantId"] = msg.merchantId;
    }
    if (msg.token) {
      json["token"] = msg.token;
    }
    if (msg.billingDate) {
      json["billingDate"] = msg.billingDate;
    }
    if (msg.signature) {
      json["signature"] = msg.signature;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: NotifyRequest, json: any): NotifyRequest {
    const _mPaymentId_ = json["mPaymentId"] ?? json["m_payment_id"];
    if (_mPaymentId_) {
      msg.mPaymentId = _mPaymentId_;
    }
    const _pfPaymentId_ = json["pfPaymentId"] ?? json["pf_payment_id"];
    if (_pfPaymentId_) {
      msg.pfPaymentId = _pfPaymentId_;
    }
    const _paymentStatus_ = json["paymentStatus"] ?? json["payment_status"];
    if (_paymentStatus_) {
      msg.paymentStatus = _paymentStatus_;
    }
    const _itemName_ = json["itemName"] ?? json["item_name"];
    if (_itemName_) {
      msg.itemName = _itemName_;
    }
    const _itemDescription_ =
      json["itemDescription"] ?? json["item_description"];
    if (_itemDescription_) {
      msg.itemDescription = _itemDescription_;
    }
    const _amountGross_ = json["amountGross"] ?? json["amount_gross"];
    if (_amountGross_) {
      msg.amountGross = protoscript.parseDouble(_amountGross_);
    }
    const _amountFee_ = json["amountFee"] ?? json["amount_fee"];
    if (_amountFee_) {
      msg.amountFee = protoscript.parseDouble(_amountFee_);
    }
    const _amountNet_ = json["amountNet"] ?? json["amount_net"];
    if (_amountNet_) {
      msg.amountNet = protoscript.parseDouble(_amountNet_);
    }
    const _nameFirst_ = json["nameFirst"] ?? json["name_first"];
    if (_nameFirst_) {
      msg.nameFirst = _nameFirst_;
    }
    const _nameLast_ = json["nameLast"] ?? json["name_last"];
    if (_nameLast_) {
      msg.nameLast = _nameLast_;
    }
    const _emailAddress_ = json["emailAddress"] ?? json["email_address"];
    if (_emailAddress_) {
      msg.emailAddress = _emailAddress_;
    }
    const _cellNumber_ = json["cellNumber"] ?? json["cell_number"];
    if (_cellNumber_) {
      msg.cellNumber = _cellNumber_;
    }
    const _merchantId_ = json["merchantId"] ?? json["merchant_id"];
    if (_merchantId_) {
      msg.merchantId = _merchantId_;
    }
    const _token_ = json["token"];
    if (_token_) {
      msg.token = _token_;
    }
    const _billingDate_ = json["billingDate"] ?? json["billing_date"];
    if (_billingDate_) {
      msg.billingDate = _billingDate_;
    }
    const _signature_ = json["signature"];
    if (_signature_) {
      msg.signature = _signature_;
    }
    return msg;
  },
};

export const NotifyResponseJSON = {
  /**
   * Serializes NotifyResponse to JSON.
   */
  encode: function (_msg?: PartialDeep<NotifyResponse>): string {
    return "{}";
  },

  /**
   * Deserializes NotifyResponse from JSON.
   */
  decode: function (_json?: string): NotifyResponse {
    return {};
  },

  /**
   * Initializes NotifyResponse with all fields set to their default value.
   */
  initialize: function (msg?: Partial<NotifyResponse>): NotifyResponse {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<NotifyResponse>,
  ): Record<string, unknown> {
    return {};
  },

  /**
   * @private
   */
  _readMessage: function (msg: NotifyResponse, _json: any): NotifyResponse {
    return msg;
  },
};
