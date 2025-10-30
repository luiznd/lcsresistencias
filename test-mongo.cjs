const { MongoClient } = require('mongodb');

// Conexão com MongoDB local com credenciais corretas
const uri = 'mongodb://root:admin@localhost:27018/lcs-resistencias?authSource=admin';
const client = new MongoClient(uri);

async function testMongoDB() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB com sucesso!');
    
    const db = client.db('lcs-resistencias');
    const collection = db.collection('products');
    
    // Inserir um produto de teste
    const testProduct = {
      title: 'Resistência Teste',
      category: 'Resistências Tubulares',
      description: 'Produto de teste para verificar a conexão',
      imageUrl: '/images/galeria/resistencia-tubular-aletada.jpg',
      createdAt: new Date()
    };
    
    const result = await collection.insertOne(testProduct);
    console.log(`Produto inserido com ID: ${result.insertedId}`);
    
    // Listar produtos
    const products = await collection.find({}).toArray();
    console.log('Produtos na coleção:');
    products.forEach(p => console.log(` - ${p.title}`));
    
  } catch (error) {
    console.error('Erro:', error);
  } finally {
    await client.close();
    console.log('Conexão fechada');
  }
}

testMongoDB();