// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: commerce/product.repository.sky.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";
import * as commerceProduct from "./product.pb";

//========================================//
//                 Types                  //
//========================================//

export interface ListProductsRequest {
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

export interface ListProductsResponse {
  /**
   * There will be a maximum number of records returned based on the page_size field in the request.
   */
  Products: commerceProduct.Product[];
  total: bigint;
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPageToken: string;
}

export interface CreateProductRequest {
  /**
   * The name to use for the product, which will become the final component of
   * the product's resource name.
   *
   * This value should be 4-63 characters, and valid characters
   * are /[a-z][0-9]-/.
   */
  productId: string;
  /**
   * The product to create.
   */
  product: commerceProduct.Product;
}

export interface GetProductRequest {
  name: string;
}

export interface UpdateProductRequest {
  /**
   * The product to update.
   *
   * The product's 'name' field is used to identify the product to be updated.
   * Format: commerce/product}}
   */
  product: commerceProduct.Product;
  /**
   * The list of fields to be updated.
   */
  updateMask: protoscript.FieldMask;
}

export interface DeleteProductRequest {
  name: string;
}

//========================================//
//   ProductRepository Protobuf Client    //
//========================================//

export async function ListProducts(
  listProductsRequest: ListProductsRequest,
  config?: ClientConfiguration,
): Promise<ListProductsResponse> {
  const response = await PBrequest(
    "/commerce.ProductRepository/ListProducts",
    ListProductsRequest.encode(listProductsRequest),
    config,
  );
  return ListProductsResponse.decode(response);
}

export async function CreateProduct(
  createProductRequest: CreateProductRequest,
  config?: ClientConfiguration,
): Promise<commerceProduct.Product> {
  const response = await PBrequest(
    "/commerce.ProductRepository/CreateProduct",
    CreateProductRequest.encode(createProductRequest),
    config,
  );
  return commerceProduct.Product.decode(response);
}

export async function GetProduct(
  getProductRequest: GetProductRequest,
  config?: ClientConfiguration,
): Promise<commerceProduct.Product> {
  const response = await PBrequest(
    "/commerce.ProductRepository/GetProduct",
    GetProductRequest.encode(getProductRequest),
    config,
  );
  return commerceProduct.Product.decode(response);
}

export async function UpdateProduct(
  updateProductRequest: UpdateProductRequest,
  config?: ClientConfiguration,
): Promise<commerceProduct.Product> {
  const response = await PBrequest(
    "/commerce.ProductRepository/UpdateProduct",
    UpdateProductRequest.encode(updateProductRequest),
    config,
  );
  return commerceProduct.Product.decode(response);
}

export async function DeleteProduct(
  deleteProductRequest: DeleteProductRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await PBrequest(
    "/commerce.ProductRepository/DeleteProduct",
    DeleteProductRequest.encode(deleteProductRequest),
    config,
  );
  return protoscript.Empty.decode(response);
}

//========================================//
//     ProductRepository JSON Client      //
//========================================//

export async function ListProductsJSON(
  listProductsRequest: ListProductsRequest,
  config?: ClientConfiguration,
): Promise<ListProductsResponse> {
  const response = await JSONrequest(
    "/commerce.ProductRepository/ListProducts",
    ListProductsRequestJSON.encode(listProductsRequest),
    config,
  );
  return ListProductsResponseJSON.decode(response);
}

export async function CreateProductJSON(
  createProductRequest: CreateProductRequest,
  config?: ClientConfiguration,
): Promise<commerceProduct.Product> {
  const response = await JSONrequest(
    "/commerce.ProductRepository/CreateProduct",
    CreateProductRequestJSON.encode(createProductRequest),
    config,
  );
  return commerceProduct.ProductJSON.decode(response);
}

export async function GetProductJSON(
  getProductRequest: GetProductRequest,
  config?: ClientConfiguration,
): Promise<commerceProduct.Product> {
  const response = await JSONrequest(
    "/commerce.ProductRepository/GetProduct",
    GetProductRequestJSON.encode(getProductRequest),
    config,
  );
  return commerceProduct.ProductJSON.decode(response);
}

export async function UpdateProductJSON(
  updateProductRequest: UpdateProductRequest,
  config?: ClientConfiguration,
): Promise<commerceProduct.Product> {
  const response = await JSONrequest(
    "/commerce.ProductRepository/UpdateProduct",
    UpdateProductRequestJSON.encode(updateProductRequest),
    config,
  );
  return commerceProduct.ProductJSON.decode(response);
}

export async function DeleteProductJSON(
  deleteProductRequest: DeleteProductRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await JSONrequest(
    "/commerce.ProductRepository/DeleteProduct",
    DeleteProductRequestJSON.encode(deleteProductRequest),
    config,
  );
  return protoscript.EmptyJSON.decode(response);
}

//========================================//
//           ProductRepository            //
//========================================//

/**
 *
 * ProductRepository allows you to manage Products.
 */
export interface ProductRepository<Context = unknown> {
  ListProducts: (
    listProductsRequest: ListProductsRequest,
    context: Context,
  ) => Promise<ListProductsResponse> | ListProductsResponse;
  CreateProduct: (
    createProductRequest: CreateProductRequest,
    context: Context,
  ) => Promise<commerceProduct.Product> | commerceProduct.Product;
  GetProduct: (
    getProductRequest: GetProductRequest,
    context: Context,
  ) => Promise<commerceProduct.Product> | commerceProduct.Product;
  UpdateProduct: (
    updateProductRequest: UpdateProductRequest,
    context: Context,
  ) => Promise<commerceProduct.Product> | commerceProduct.Product;
  DeleteProduct: (
    deleteProductRequest: DeleteProductRequest,
    context: Context,
  ) => Promise<protoscript.Empty> | protoscript.Empty;
}

export function createProductRepository<Context>(
  service: ProductRepository<Context>,
) {
  return {
    name: "commerce.ProductRepository",
    methods: {
      ListProducts: {
        name: "ListProducts",
        handler: service.ListProducts,
        input: { protobuf: ListProductsRequest, json: ListProductsRequestJSON },
        output: {
          protobuf: ListProductsResponse,
          json: ListProductsResponseJSON,
        },
      },
      CreateProduct: {
        name: "CreateProduct",
        handler: service.CreateProduct,
        input: {
          protobuf: CreateProductRequest,
          json: CreateProductRequestJSON,
        },
        output: {
          protobuf: commerceProduct.Product,
          json: commerceProduct.ProductJSON,
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
      UpdateProduct: {
        name: "UpdateProduct",
        handler: service.UpdateProduct,
        input: {
          protobuf: UpdateProductRequest,
          json: UpdateProductRequestJSON,
        },
        output: {
          protobuf: commerceProduct.Product,
          json: commerceProduct.ProductJSON,
        },
      },
      DeleteProduct: {
        name: "DeleteProduct",
        handler: service.DeleteProduct,
        input: {
          protobuf: DeleteProductRequest,
          json: DeleteProductRequestJSON,
        },
        output: { protobuf: protoscript.Empty, json: protoscript.EmptyJSON },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const ListProductsRequest = {
  /**
   * Serializes ListProductsRequest to protobuf.
   */
  encode: function (msg: PartialDeep<ListProductsRequest>): Uint8Array {
    return ListProductsRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListProductsRequest from protobuf.
   */
  decode: function (bytes: ByteSource): ListProductsRequest {
    return ListProductsRequest._readMessage(
      ListProductsRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListProductsRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListProductsRequest>,
  ): ListProductsRequest {
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
    msg: PartialDeep<ListProductsRequest>,
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
    msg: ListProductsRequest,
    reader: protoscript.BinaryReader,
  ): ListProductsRequest {
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

export const ListProductsResponse = {
  /**
   * Serializes ListProductsResponse to protobuf.
   */
  encode: function (msg: PartialDeep<ListProductsResponse>): Uint8Array {
    return ListProductsResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListProductsResponse from protobuf.
   */
  decode: function (bytes: ByteSource): ListProductsResponse {
    return ListProductsResponse._readMessage(
      ListProductsResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListProductsResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListProductsResponse>,
  ): ListProductsResponse {
    return {
      Products: [],
      total: 0n,
      nextPageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListProductsResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.Products?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.Products as any,
        commerceProduct.Product._writeMessage,
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
    msg: ListProductsResponse,
    reader: protoscript.BinaryReader,
  ): ListProductsResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = commerceProduct.Product.initialize();
          reader.readMessage(m, commerceProduct.Product._readMessage);
          msg.Products.push(m);
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

export const CreateProductRequest = {
  /**
   * Serializes CreateProductRequest to protobuf.
   */
  encode: function (msg: PartialDeep<CreateProductRequest>): Uint8Array {
    return CreateProductRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CreateProductRequest from protobuf.
   */
  decode: function (bytes: ByteSource): CreateProductRequest {
    return CreateProductRequest._readMessage(
      CreateProductRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CreateProductRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateProductRequest>,
  ): CreateProductRequest {
    return {
      productId: "",
      product: commerceProduct.Product.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateProductRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.productId) {
      writer.writeString(1, msg.productId);
    }
    if (msg.product) {
      writer.writeMessage(
        2,
        msg.product,
        commerceProduct.Product._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateProductRequest,
    reader: protoscript.BinaryReader,
  ): CreateProductRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.productId = reader.readString();
          break;
        }
        case 2: {
          reader.readMessage(msg.product, commerceProduct.Product._readMessage);
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

export const UpdateProductRequest = {
  /**
   * Serializes UpdateProductRequest to protobuf.
   */
  encode: function (msg: PartialDeep<UpdateProductRequest>): Uint8Array {
    return UpdateProductRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes UpdateProductRequest from protobuf.
   */
  decode: function (bytes: ByteSource): UpdateProductRequest {
    return UpdateProductRequest._readMessage(
      UpdateProductRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes UpdateProductRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpdateProductRequest>,
  ): UpdateProductRequest {
    return {
      product: commerceProduct.Product.initialize(),
      updateMask: protoscript.FieldMask.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateProductRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.product) {
      writer.writeMessage(
        1,
        msg.product,
        commerceProduct.Product._writeMessage,
      );
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
    msg: UpdateProductRequest,
    reader: protoscript.BinaryReader,
  ): UpdateProductRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          reader.readMessage(msg.product, commerceProduct.Product._readMessage);
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

export const DeleteProductRequest = {
  /**
   * Serializes DeleteProductRequest to protobuf.
   */
  encode: function (msg: PartialDeep<DeleteProductRequest>): Uint8Array {
    return DeleteProductRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeleteProductRequest from protobuf.
   */
  decode: function (bytes: ByteSource): DeleteProductRequest {
    return DeleteProductRequest._readMessage(
      DeleteProductRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeleteProductRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteProductRequest>,
  ): DeleteProductRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteProductRequest>,
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
    msg: DeleteProductRequest,
    reader: protoscript.BinaryReader,
  ): DeleteProductRequest {
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

export const ListProductsRequestJSON = {
  /**
   * Serializes ListProductsRequest to JSON.
   */
  encode: function (msg: PartialDeep<ListProductsRequest>): string {
    return JSON.stringify(ListProductsRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListProductsRequest from JSON.
   */
  decode: function (json: string): ListProductsRequest {
    return ListProductsRequestJSON._readMessage(
      ListProductsRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListProductsRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListProductsRequest>,
  ): ListProductsRequest {
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
    msg: PartialDeep<ListProductsRequest>,
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
    msg: ListProductsRequest,
    json: any,
  ): ListProductsRequest {
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

export const ListProductsResponseJSON = {
  /**
   * Serializes ListProductsResponse to JSON.
   */
  encode: function (msg: PartialDeep<ListProductsResponse>): string {
    return JSON.stringify(ListProductsResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListProductsResponse from JSON.
   */
  decode: function (json: string): ListProductsResponse {
    return ListProductsResponseJSON._readMessage(
      ListProductsResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListProductsResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListProductsResponse>,
  ): ListProductsResponse {
    return {
      Products: [],
      total: 0n,
      nextPageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListProductsResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.Products?.length) {
      json["Products"] = msg.Products.map(
        commerceProduct.ProductJSON._writeMessage,
      );
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
    msg: ListProductsResponse,
    json: any,
  ): ListProductsResponse {
    const _Products_ = json["Products"];
    if (_Products_) {
      for (const item of _Products_) {
        const m = commerceProduct.ProductJSON.initialize();
        commerceProduct.ProductJSON._readMessage(m, item);
        msg.Products.push(m);
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

export const CreateProductRequestJSON = {
  /**
   * Serializes CreateProductRequest to JSON.
   */
  encode: function (msg: PartialDeep<CreateProductRequest>): string {
    return JSON.stringify(CreateProductRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes CreateProductRequest from JSON.
   */
  decode: function (json: string): CreateProductRequest {
    return CreateProductRequestJSON._readMessage(
      CreateProductRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CreateProductRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateProductRequest>,
  ): CreateProductRequest {
    return {
      productId: "",
      product: commerceProduct.ProductJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateProductRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.productId) {
      json["productId"] = msg.productId;
    }
    if (msg.product) {
      const _product_ = commerceProduct.ProductJSON._writeMessage(msg.product);
      if (Object.keys(_product_).length > 0) {
        json["product"] = _product_;
      }
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateProductRequest,
    json: any,
  ): CreateProductRequest {
    const _productId_ = json["productId"] ?? json["product_id"];
    if (_productId_) {
      msg.productId = _productId_;
    }
    const _product_ = json["product"];
    if (_product_) {
      commerceProduct.ProductJSON._readMessage(msg.product, _product_);
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

export const UpdateProductRequestJSON = {
  /**
   * Serializes UpdateProductRequest to JSON.
   */
  encode: function (msg: PartialDeep<UpdateProductRequest>): string {
    return JSON.stringify(UpdateProductRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes UpdateProductRequest from JSON.
   */
  decode: function (json: string): UpdateProductRequest {
    return UpdateProductRequestJSON._readMessage(
      UpdateProductRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes UpdateProductRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpdateProductRequest>,
  ): UpdateProductRequest {
    return {
      product: commerceProduct.ProductJSON.initialize(),
      updateMask: protoscript.FieldMaskJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateProductRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.product) {
      const _product_ = commerceProduct.ProductJSON._writeMessage(msg.product);
      if (Object.keys(_product_).length > 0) {
        json["product"] = _product_;
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
    msg: UpdateProductRequest,
    json: any,
  ): UpdateProductRequest {
    const _product_ = json["product"];
    if (_product_) {
      commerceProduct.ProductJSON._readMessage(msg.product, _product_);
    }
    const _updateMask_ = json["updateMask"] ?? json["update_mask"];
    if (_updateMask_) {
      protoscript.FieldMaskJSON._readMessage(msg.updateMask, _updateMask_);
    }
    return msg;
  },
};

export const DeleteProductRequestJSON = {
  /**
   * Serializes DeleteProductRequest to JSON.
   */
  encode: function (msg: PartialDeep<DeleteProductRequest>): string {
    return JSON.stringify(DeleteProductRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes DeleteProductRequest from JSON.
   */
  decode: function (json: string): DeleteProductRequest {
    return DeleteProductRequestJSON._readMessage(
      DeleteProductRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeleteProductRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteProductRequest>,
  ): DeleteProductRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteProductRequest>,
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
    msg: DeleteProductRequest,
    json: any,
  ): DeleteProductRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};
