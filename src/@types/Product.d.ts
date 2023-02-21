type UUID = string;

interface Product {
  id: UUID;
  name: string;
  price: number;
  description: string;
  images: string | string[];
  category: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}