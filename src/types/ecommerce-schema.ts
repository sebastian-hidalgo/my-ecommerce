// User related types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  addresses: Address[];
  paymentMethods: PaymentMethod[];
}

export type UserRole = 'customer' | 'admin' | 'seller';

export interface Address {
  id: string;
  userId: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  isDefault: boolean;
  type: 'shipping' | 'billing';
}

// Product related types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  cost: number;
  sku: string;
  barcode?: string;
  quantity: number;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  images: ProductImage[];
  categoryId: string;
  brandId?: string;
  sellerId: string;
  status: ProductStatus;
  attributes: ProductAttribute[];
  variants?: ProductVariant[];
  reviews: ProductReview[];
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductImage {
  id: string;
  url: string;
  altText: string;
  isPrimary: boolean;
}

export interface ProductAttribute {
  name: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  productId: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  attributes: ProductAttribute[];
}

export type ProductStatus = 'draft' | 'active' | 'archived' | 'out_of_stock';

export interface ProductReview {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

// Category related types
export interface Category {
  id: string;
  name: string;
  description?: string;
  slug: string;
  parentId?: string;
  image?: string;
  isActive: boolean;
  order: number;
}

// Brand related types
export interface Brand {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  website?: string;
  isActive: boolean;
}

// Order related types
export interface Order {
  id: string;
  userId: string;
  status: OrderStatus;
  total: number;
  subtotal: number;
  tax: number;
  shippingCost: number;
  discount: number;
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: PaymentMethod;
  trackingNumber?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
  total: number;
}

export type OrderStatus = 
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded';

// Payment related types
export interface PaymentMethod {
  id: string;
  userId: string;
  type: PaymentType;
  details: PaymentDetails;
  isDefault: boolean;
}

export type PaymentType = 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer';

export interface PaymentDetails {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
  paypalEmail?: string;
  bankAccount?: {
    accountNumber: string;
    routingNumber: string;
    accountType: string;
  };
}

// Cart related types
export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  id: string;
  cartId: string;
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
}

// Wishlist related types
export interface Wishlist {
  id: string;
  userId: string;
  items: WishlistItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface WishlistItem {
  id: string;
  wishlistId: string;
  productId: string;
  createdAt: Date;
}

// Search and Filter types
export interface ProductFilter {
  categoryId?: string;
  brandId?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStock?: boolean;
  attributes?: Record<string, string[]>;
}

export interface SearchOptions {
  query: string;
  filters?: ProductFilter;
  sortBy?: 'price' | 'rating' | 'newest' | 'popular';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
} 