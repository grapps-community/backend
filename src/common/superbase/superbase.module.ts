import { Module } from '@nestjs/common';
import { Supabase } from './superbase';

@Module({
  providers: [Supabase],
  exports: [Supabase],
})
export class SupabaseModule {}
