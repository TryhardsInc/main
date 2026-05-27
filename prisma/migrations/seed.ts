import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed users
  const user = await prisma.user.upsert({
    where: { email: 'milosz@tryhards.space' },
    update: {},
    create: {
      email: 'milosz@tryhards.space',
      name: 'Miłosz Jankiewicz',
      clerkId: 'user_123',
      role: 'DEVELOPER',
    },
  });

  // Seed prompt library
  await prisma.promptLibrary.createMany({
    data: [
      { name: "Landing Hero", category: "marketing", prompt: "..." },
      { name: "MVP Roadmap", category: "planning", prompt: "..." },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Database seeded successfully');
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
