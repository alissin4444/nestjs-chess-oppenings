import { Injectable } from '@nestjs/common';

import { CreateDTO, UpdateDTO } from './dto/oppenings.dto';
import { Oppening } from './interfaces/oppening.interface';

@Injectable()
export class OppeningsService {
  private oppenings: Oppening[] = [];

  all(): Oppening[] {
    return this.oppenings;
  }

  create(oppening: CreateDTO): Oppening {
    this.oppenings.push(oppening);
    return oppening;
  }

  find(id: number): Oppening {
    return this.oppenings[id - 1];
  }

  update(oppening: UpdateDTO): Oppening {
    this.oppenings[oppening.id - 1].name = oppening.name;
    return this.oppenings[oppening.id - 1];
  }

  delete(id: number): void {
    this.oppenings.splice(id - 1, 1);
  }
}
