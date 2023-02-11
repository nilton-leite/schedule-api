import { DataSource } from 'typeorm';
import configTypeORM from './src/config/typeorm.config';

export default new DataSource(configTypeORM);
