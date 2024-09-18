import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchDto } from './dto/search.dto';

@ApiTags('Search API')
@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SearchService) {}

    @Get()
    @ApiOperation({ summary: 'Search for buses and trains' })
    @ApiQuery({ name: 'from', required: true, description: 'Departure location' })
    @ApiQuery({ name: 'to', required: true, description: 'Arrival location' })
    @ApiQuery({ name: 'date', required: true, description: 'Travel date (YYYY-MM-DD)' })
    @ApiResponse({ status: 200, description: 'Buses and trains retrieved successfully.' })
    @ApiResponse({ status: 404, description: 'No buses or trains found for the given criteria.' })
    async findByFilter(
      @Query('from') from: number,
      @Query('to') to: number,
      @Query('date') date: string,
    ): Promise<any> {
      const searchParams: SearchDto = { from, to, date };
      return this.searchService.search(searchParams);
    }

}
