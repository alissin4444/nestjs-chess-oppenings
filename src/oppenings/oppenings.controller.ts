import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateDTO, UpdateDTO } from './dto/oppenings.dto';
import { OppeningsService } from './oppenings.service';
import { Oppening } from './interfaces/oppening.interface';

@Controller('oppenings')
export class OppeningsController {
  constructor(private oppeningService: OppeningsService) {}

  @Get()
  all(): Oppening[] {
    return this.oppeningService.all();
  }

  @Post()
  create(@Body() oppening: CreateDTO): Oppening {
    return this.oppeningService.create(oppening);
  }

  @Get(':id')
  find(@Param('id') id: number): Oppening {
    return this.oppeningService.find(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() oppening: UpdateDTO): Oppening {
    return this.oppeningService.update({ ...oppening, id });
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.oppeningService.delete(id);
  }
}
