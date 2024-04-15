// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: legal/person.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

import * as legalContact from "./contact.pb";

//========================================//
//                 Types                  //
//========================================//

export interface Person {
  name: string;
  uid: string;
  firstName: string;
  lastName: string;
  contactInfo: legalContact.Contact;
  dateOfBirth: string;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Person = {
  /**
   * Serializes Person to protobuf.
   */
  encode: function (msg: PartialDeep<Person>): Uint8Array {
    return Person._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Person from protobuf.
   */
  decode: function (bytes: ByteSource): Person {
    return Person._readMessage(
      Person.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Person with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Person>): Person {
    return {
      name: "",
      uid: "",
      firstName: "",
      lastName: "",
      contactInfo: legalContact.Contact.initialize(),
      dateOfBirth: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Person>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    if (msg.uid) {
      writer.writeString(2, msg.uid);
    }
    if (msg.firstName) {
      writer.writeString(3, msg.firstName);
    }
    if (msg.lastName) {
      writer.writeString(4, msg.lastName);
    }
    if (msg.contactInfo) {
      writer.writeMessage(
        5,
        msg.contactInfo,
        legalContact.Contact._writeMessage,
      );
    }
    if (msg.dateOfBirth) {
      writer.writeString(8, msg.dateOfBirth);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: Person,
    reader: protoscript.BinaryReader,
  ): Person {
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
          msg.firstName = reader.readString();
          break;
        }
        case 4: {
          msg.lastName = reader.readString();
          break;
        }
        case 5: {
          reader.readMessage(
            msg.contactInfo,
            legalContact.Contact._readMessage,
          );
          break;
        }
        case 8: {
          msg.dateOfBirth = reader.readString();
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

export const PersonJSON = {
  /**
   * Serializes Person to JSON.
   */
  encode: function (msg: PartialDeep<Person>): string {
    return JSON.stringify(PersonJSON._writeMessage(msg));
  },

  /**
   * Deserializes Person from JSON.
   */
  decode: function (json: string): Person {
    return PersonJSON._readMessage(PersonJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Person with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Person>): Person {
    return {
      name: "",
      uid: "",
      firstName: "",
      lastName: "",
      contactInfo: legalContact.ContactJSON.initialize(),
      dateOfBirth: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Person>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    if (msg.uid) {
      json["uid"] = msg.uid;
    }
    if (msg.firstName) {
      json["firstName"] = msg.firstName;
    }
    if (msg.lastName) {
      json["lastName"] = msg.lastName;
    }
    if (msg.contactInfo) {
      const _contactInfo_ = legalContact.ContactJSON._writeMessage(
        msg.contactInfo,
      );
      if (Object.keys(_contactInfo_).length > 0) {
        json["contactInfo"] = _contactInfo_;
      }
    }
    if (msg.dateOfBirth) {
      json["dateOfBirth"] = msg.dateOfBirth;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Person, json: any): Person {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    const _uid_ = json["uid"];
    if (_uid_) {
      msg.uid = _uid_;
    }
    const _firstName_ = json["firstName"];
    if (_firstName_) {
      msg.firstName = _firstName_;
    }
    const _lastName_ = json["lastName"];
    if (_lastName_) {
      msg.lastName = _lastName_;
    }
    const _contactInfo_ = json["contactInfo"];
    if (_contactInfo_) {
      legalContact.ContactJSON._readMessage(msg.contactInfo, _contactInfo_);
    }
    const _dateOfBirth_ = json["dateOfBirth"];
    if (_dateOfBirth_) {
      msg.dateOfBirth = _dateOfBirth_;
    }
    return msg;
  },
};