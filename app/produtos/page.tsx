import { Metadata } from 'next';
import Image from 'next/image';

async function getProducts() {
  // Fetch data from the API. Adjust the URL to your production environment if needed.
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export const metadata: Metadata = {
  title: 'Produtos | LCS Resistências Elétricas',
  description: 'Conheça nossa linha completa de resistências elétricas industriais e soluções de aquecimento.',
};

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

export default async function ProdutosPage() {
  const products: Product[] = await getProducts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nossos Produtos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#"> {/* Link para a página de detalhes do produto pode ser adicionado aqui */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}