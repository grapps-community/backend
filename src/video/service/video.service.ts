import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from '../dto/create-video.dto';
import { Supabase } from '../../common/superbase/superbase';

@Injectable()
export class VideoService {
  constructor(private readonly supabase: Supabase) {}

  public async createVideo(createVideoDto: CreateVideoDto) {
    const { data, error } = await this.supabase
      .getClient()
      .from('videos')
      .insert(createVideoDto);

    if (error) throw error;
    return data;
  }
}
