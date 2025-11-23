import { IsBoolean, IsIn, IsNumber, IsOptional, IsString, Max, Min } from "class-validator"

export class CreateSingleVideoDto{

    @IsString()
    title: string;

    @IsString()
    slug: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsIn(['movie', 'documentary', 'series', 'meeting'])
    type: 'movie' | 'documentary' | 'series' | 'meeting';

    @IsNumber()
    @Min(1900)
    @Max(2100)
    release_year: number;

    @IsNumber()
    @Min(1)
    duration_minutes: number;

    @IsString()
    @IsIn(['L', '10', '12', '14', '16', '18'])
    age_rating: string;

    @IsString()
    thumbnail_url: string;

    @IsString()
    banner_url: string;

    @IsString()
    trailer_url: string;        

    @IsBoolean()
    @IsOptional()
    is_featured?: boolean;

}