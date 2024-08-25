import { Test, TestingModule } from '@nestjs/testing';
import { VideoService } from './video.service';
import { Supabase } from '../../common/supabase/supabase';
import { BadRequestException } from '@nestjs/common';
import { CreateVideoDto, VideoSource } from '../dto/create-video.dto';

describe('VideoService', () => {
  let service: VideoService;
  let mockSupabase: jest.Mocked<Supabase>;

  beforeEach(async () => {
    mockSupabase = {
      getClient: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VideoService,
        {
          provide: Supabase,
          useValue: mockSupabase,
        },
      ],
    }).compile();

    service = module.get<VideoService>(VideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createVideo', () => {
    it('should handle valid YouTube full video URL', async () => {
      const dto: CreateVideoDto = {
        title: 'Test Video',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        source: VideoSource.YOUTUBE,
      };

      await expect(service.createVideo(dto)).resolves.not.toThrow();
    });

    it('should handle valid YouTube Shorts URL', async () => {
      const dto: CreateVideoDto = {
        title: 'Test Shorts',
        url: 'https://www.youtube.com/shorts/abcdefghijk',
        source: VideoSource.YOUTUBE,
      };

      await expect(service.createVideo(dto)).resolves.not.toThrow();
    });

    it('should throw BadRequestException for unknown source URL', async () => {
      const dto: CreateVideoDto = {
        title: 'Invalid URL',
        url: 'https://example.com/video',
        source: VideoSource.DEFAULT,
      };

      await expect(service.createVideo(dto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });
});
