import prisma from "../database";
import {
    libraryInputFilterType,
    libraryInputType,
    libraryType,
} from "../schemas/library.schema";

export class LibraryRepository {
  async create({ name, cnpj   }: libraryInputType): Promise<libraryType> {
    return await prisma.library.create({
      data: {
        name,
        cnpj,
      },
    });
  }

  async findById(id: string): Promise<libraryType | null> {
    return await prisma.library.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll(filters: libraryInputFilterType): Promise<libraryType[]> {
    return await prisma.library.findMany({
      where: {
        AND: [
          { name: { contains: filters.name } },
          { cnpj: { contains: filters.cnpj } },
        ],
      },
    });
  }

  async update(id: string, { name, cnpj }: libraryInputType): Promise<libraryType> {
    return await prisma.library.update({
      where: {
        id,
      },
      data: {
        name,
        cnpj,
      },
    });
  }

  async delete(id: string): Promise<libraryType> {
    return await prisma.library.delete({
      where: {
        id,
      },
    });
  }
}
