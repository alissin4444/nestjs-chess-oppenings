export interface CreateDTO {
  name: string;
}

export interface UpdateDTO extends CreateDTO {
  id: number;
}
