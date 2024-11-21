import dotenv from 'dotenv';

dotenv.config();

export default {
    HOST: process.env.HOST || 'No fue encontrada la variable de entorno HOST',
    PORT: process.env.PORT || 3000,
    API_URL: process.env.API_URL || '/api/v1',
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb+srv://jatorrey:admin@cluster0.4pfnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    DATABASE: process.env.DATABASE || 'db_default',
    DB_USER: process.env.DB_USER || 'admin',
    DB_PASSWORD: process.env.DB_PASSWORD || 'admin',    
}