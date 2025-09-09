import bcrypt from 'bcryptjs';
import { PrismaClient } from '../generated/prisma';

// Inicializa o Prisma Client
const prisma = new PrismaClient();

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           
    .replace(/[^\w\-]+/g, '')       
    .replace(/\-\-+/g, '-');       
}

async function main() {
  console.log('Iniciando o processo de seeding...');

  // Limpar dados existentes para garantir um ambiente limpo (opcional)
  await prisma.user.deleteMany({});
  await prisma.video.deleteMany({});
  
  // --- 1. Criar um Usuário e seus Perfis ---
  const hashedPassword = bcrypt.hashSync('senha123', 10);


  const user = await prisma.user.create({
    data: {
      email: 'usuario@exemplo.com',
      name: 'Usuário de Teste',
      password: hashedPassword,
      // Usando uma "escrita aninhada" para criar os perfis junto com o usuário
      profiles: {
        create: [
          { name: 'Adulto', avatarUrl: 'https://exemplo.com/avatar1.png' },
          { name: 'Criança', avatarUrl: 'https://exemplo.com/avatar2.png' },
        ],
      },
    },
    // Incluir os perfis criados na resposta
    include: {
      profiles: true,
    },
  });


   const movieTitle = 'A Origem'
  const movie = await prisma.video.create({
    data: {
      title: movieTitle,
      description: 'Um ladrão que rouba informações ao entrar no subconsciente de seus alvos é encarregado de uma tarefa aparentemente impossível: plantar uma ideia na mente de um CEO.',
      duration: 8880, // em segundos (2h 28min)
      releaseDate: new Date('2010-07-16'),
      videoUrl: 'URL_DO_MANIFESTO/master.m3u8',
      thumbnailUrl: 'https://exemplo.com/a-origem-thumb.jpg',
      introStartTime: 120, // Intro começa em 2 minutos
      introEndTime: 240,   // Intro termina em 4 minutos
      ageRating: 'PG13',
      type: 'MOVIE',
      slug: slugify(movieTitle),
      status: 'ACTIVE',
      isOriginal: true,
    }
  });

  console.log(`Filme criado: ${movie.title}`);

  console.log('Seeding finalizado com sucesso!');
}

// Executa a função principal e lida com erros
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Garante que o Prisma Client se desconecte
    await prisma.$disconnect();
  });