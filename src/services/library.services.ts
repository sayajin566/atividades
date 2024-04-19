import { LibraryRepository } from "../repository/library.repository";
import {
    libraryInputFilterType,
    libraryInputType,
    libraryType,
} from "../schemas/library.schema";

export default class LibraryService {
  private libraryRepository: LibraryRepository;

  constructor() {
    this.libraryRepository = new LibraryRepository();
  }

  async create(data: libraryInputType): Promise<libraryType> {
    return await this.libraryRepository.create(data);
  }

  async findById(id: string): Promise<libraryType | null> {
    return await this.libraryRepository.findById(id);
  }

  async findAll(filters: libraryInputFilterType): Promise<libraryType[]> {
    return await this.libraryRepository.findAll(filters);
  }

  async update(id: string, data: libraryInputType): Promise<libraryType> {
    return await this.libraryRepository.update(id, data);
  }

  async delete(id: string): Promise<libraryType> {
    return await this.libraryRepository.delete(id);
  }
}