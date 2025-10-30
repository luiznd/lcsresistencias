import { MongoClient } from 'mongodb';

// URL de conexão para o MongoDB local na porta 27018 com autenticação
const uri = 'mongodb://root:admin@localhost:27018/lcs-resistencias?authSource=admin';
const client = new MongoClient(uri);

async function testConnection() {
  try {
    // Conectar ao servidor MongoDB
    await client.connect();
    console.log('Conectado com sucesso ao MongoDB local!');
    
    // Criar uma coleção de teste para produtos
    const db = client.db('lcs-resistencias');
    const productsCollection = db.collection('products');
    
    // Inserir um produto de teste
    const testProduct = {
      title: 'Resistência Teste',
      category: 'Resistências Tubulares',
      description: 'Produto de teste para verificar a conexão com MongoDB',
      imageUrl: '/images/galeria/resistencia-tubular-aletada.jpg',
      createdAt: new Date()
    };
    
    const result = await productsCollection.insertOne(testProduct);
    console.log(`Produto de teste inserido com ID: ${result.insertedId}`);
    
    // Buscar produtos
    const products = await productsCollection.find({}).toArray();
    console.log('Produtos na coleção:');
    products.forEach(product => {
      console.log(` - ${product.title} (${product.category})`);
    });
    
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  } finally {
    // Fechar a conexão
    await client.close();
    console.log('Conexão fechada');
  }
}

testConnection();