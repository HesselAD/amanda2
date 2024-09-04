import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://ads_3cqw_user:UnwvDBCi1KX9Z4k7mtBYpanlFoJGIFZk@dpg-cr769krqf0us73fc2qhg-a.oregon-postgres.render.com/ads_3cqw';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;