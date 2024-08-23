import {
  IsNotEmpty,
  IsString,
  IsUrl,
  IsEnum,
  IsArray,
  IsOptional,
} from 'class-validator';

export enum VideoSource {
  INSTAGRAM = 'instagram',
  YOUTUBE = 'youtube',
  DEFAULT = 'default',
}

export class CreateVideoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsEnum(VideoSource)
  @IsNotEmpty()
  source: VideoSource;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tag?: string[];
}
