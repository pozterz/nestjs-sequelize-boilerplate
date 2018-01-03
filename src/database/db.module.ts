import { Module } from '@nestjs/common';
import { db } from '../providers/db.providers';

@Module({
  components: [...db],
  exports: [...db],
})
export class DatabaseModule {}